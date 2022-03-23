/* eslint-disable no-new */
import { distinctBy, notEmpty } from '../../common/helpers/array';
import { warn } from '../../common/helpers/log';
import { ILambdaConfigs } from '../types';
import { Construct } from 'constructs';
import {
  aws_apigateway as apigw,
  aws_logs as logs,
  aws_lambda as lambda,
  aws_certificatemanager as certmgr,
  aws_route53 as route53,
  aws_route53_targets as targets,
  aws_lambda_nodejs as nodejs,
  Duration,
} from 'aws-cdk-lib';
import { TokenAuthorizer } from 'aws-cdk-lib/aws-apigateway/lib/authorizers/lambda';
// eslint-disable-next-line
const getPaths = (schema: any) =>
  Object.entries(
    schema.paths as {
      [path: string]: { [verb: string]: unknown };
    },
  ).map(([fullPath, verbs]) => ({
    fullPath,
    pathList: fullPath.split('/').filter((s) => s),
    verbs: Object.keys(verbs),
  }));

const setUpApiGw = ({
  stack,
  NODE_ENV,
  baseUrl,
  certificate,
  hostedZone,
  shortStackName,
  cors = {
    allowOrigins: apigw.Cors.ALL_ORIGINS,
    allowHeaders: apigw.Cors.DEFAULT_HEADERS,
  },
}: {
  stack: Construct;
  NODE_ENV: string;
  baseUrl: string;
  certificate: certmgr.ICertificate;
  hostedZone: route53.IHostedZone;
  shortStackName: string;

  cors?: { allowOrigins: string[]; allowHeaders: string[] };
}) => {
  const api = new apigw.RestApi(stack, `${shortStackName}-api-${NODE_ENV}`, {
    defaultCorsPreflightOptions: {
      ...(cors || {}),
    },
  });

  const dn = new apigw.DomainName(stack, 'domain', {
    domainName: `api.${baseUrl}`,
    certificate,
    endpointType: apigw.EndpointType.EDGE,
    securityPolicy: apigw.SecurityPolicy.TLS_1_2,
    mapping: api,
  });

  new route53.ARecord(stack, 'ARecord', {
    comment: '(cdk)',
    recordName: 'api',
    zone: hostedZone,
    target: route53.RecordTarget.fromAlias(new targets.ApiGatewayDomain(dn)),
  });
  return api;
};

const setupLambda = ({
  lambdaConfig,
  pathV,
  verb,
  seenPermissions,
  authorizers,
}: {
  pathV: string;
  verb: string;
  lambdaConfig: ILambdaConfigs;
  seenPermissions: { [a: string]: boolean };
  authorizers?: Record<string, TokenAuthorizer>;
}) => {
  const pathCompute = pathV + '/' + verb;
  const lp = lambdaConfig?.[pathCompute];
  if (lp) {
    seenPermissions[pathCompute] = true;
  } else {
    seenPermissions[pathCompute] = false;
  }

  const def = lambdaConfig?.default;
  if (def) {
    seenPermissions.default = true;
  }

  //
  const readTables = distinctBy(
    [...(def?.dynamo?.reads || []), ...(lp?.dynamo?.reads || [])],
    (s) => s.shortName,
  );

  const writeTables = distinctBy(
    [...(def?.dynamo?.writes || []), ...(lp?.dynamo?.writes || [])],
    (s) => s.shortName,
  );

  const policies = [...(def.policies || []), ...(lp?.policies || [])].filter(
    notEmpty,
  );

  const layers = [...(def.layers || []), ...(lp?.layers || [])].filter(
    notEmpty,
  );

  const memory = lp?.memory || def?.memory || 128;
  // null forces undefined, undefined forces 5
  let reservedConcurrentExecutions = lp?.reservedConcurrentExecutions;
  if (reservedConcurrentExecutions === undefined) {
    reservedConcurrentExecutions = def?.reservedConcurrentExecutions;
  }

  if (reservedConcurrentExecutions === undefined) {
    reservedConcurrentExecutions = 5;
  }

  reservedConcurrentExecutions = reservedConcurrentExecutions ?? undefined;
  //
  const timeout = Duration.seconds(lp?.timeoutS || def?.timeoutS || 30);
  let authorizerName = lp?.authorizerName;
  if (authorizerName === undefined) {
    authorizerName = def.authorizerName;
  }

  if (authorizerName && (!authorizers || !authorizers[authorizerName])) {
    throw new Error('unseen auth name:' + authorizerName);
  }

  const authorizer = !authorizerName
    ? undefined
    : authorizers?.[authorizerName];

  const env = { ...(def.env || {}), ...(lp?.env || {}) };
  const tables = [...readTables, ...writeTables];
  const environment: Record<string, string> = env;
  Object.values(tables).forEach((v) => {
    environment[v.shortName] = v.table.tableName;
  });
  return {
    environment,
    readTables,
    writeTables,
    policies,
    layers,
    authorizer,
    memory,
    timeout,
    reservedConcurrentExecutions,
  };
};

const addApiPaths = (
  api: apigw.RestApi,
  pathList: string[],
  apiRoots: { [root: string]: apigw.Resource },
) => {
  let pathBuild = '';
  let apiPath = api.root;
  pathList.forEach((path) => {
    pathBuild += '/' + path;

    if (apiRoots[pathBuild]) {
      apiPath = apiRoots[pathBuild];
    } else {
      apiRoots[pathBuild] = apiPath.addResource(path);
      apiPath = apiRoots[pathBuild];
    }
  });
  if (!apiPath) {
    throw new Error('no apipath');
  }
  return apiPath;
};

const lambdaNameSafe = (raw: string) =>
  raw.replace(/[^a-zA-Z0-9-.]/gim, '-').replace(/(-){2,}/gim, '-');

export const openApiImpl = (p: {
  schema: unknown;
  stack: Construct;
  NODE_ENV: string;
  baseUrl: string;
  endpointsBase: string;

  /**
   * 'default' will be applied to all functions
   */
  lambdaConfig: ILambdaConfigs;
  certificate: certmgr.ICertificate;
  hostedZone: route53.IHostedZone;
  shortStackName: string;
  /**
   * defaults:
   * allowOrigins: apigw.Cors.ALL_ORIGINS,
    allowHeaders: apigw.Cors.DEFAULT_HEADERS,
   */
  cors?: { allowOrigins: string[]; allowHeaders: string[] };
  /**
   * dictionary of named authorizer functions. these names are to be used in the lambdaConfig param
   */
  authorizers?: Record<string, TokenAuthorizer>;
}) => {
  if (!p.schema) {
    throw new Error('no openapi schema found');
  }

  const { stack, NODE_ENV, endpointsBase, lambdaConfig } = p;
  const paths = getPaths(p.schema);
  const api = setUpApiGw(p);
  const apiRoots: { [name: string]: apigw.Resource } = {};
  const seenPermissions: { [a: string]: boolean } = {};
  paths.forEach(({ fullPath, verbs, pathList }) => {
    const apiPath = addApiPaths(api, pathList, apiRoots);
    verbs.forEach((verb) => {
      const lc = setupLambda({
        lambdaConfig,
        pathV: fullPath,
        verb,
        seenPermissions,
        authorizers: p.authorizers,
      });

      const lambdaName = lambdaNameSafe(
        `${p.shortStackName}-${fullPath}-${verb}-${NODE_ENV}`,
      );

      const entry = `${endpointsBase}${fullPath}/${verb.toUpperCase()}.ts`;
      const lambdaV = new nodejs.NodejsFunction(stack, lambdaName, {
        functionName: lambdaName,
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: 'handler',
        environment: lc.environment,
        memorySize: lc.memory,
        timeout: lc.timeout,
        description: '(cdk)',
        entry: entry,
        bundling: {
          externalModules: ['aws-sdk', 'aws-lambda'],
        },
        reservedConcurrentExecutions: lc.reservedConcurrentExecutions,
        logRetention: logs.RetentionDays.FIVE_DAYS,
        layers: lc.layers,
      });

      lc.readTables.forEach((t) => t.table.grantReadData(lambdaV));
      lc.writeTables.forEach((t) => t.table.grantReadWriteData(lambdaV));
      lc.policies.forEach((p1) => lambdaV.addToRolePolicy(p1));
      //
      apiPath.addMethod(
        verb.toUpperCase(),
        new apigw.LambdaIntegration(lambdaV, {}),
        { authorizer: lc.authorizer },
      );
    });
  });

  Object.keys(lambdaConfig).forEach((k) => {
    if (!seenPermissions[k] || seenPermissions[k] === false) {
      warn(
        `unused permissions for '${k}', did you mean one of these paths?=`,
        Object.entries(seenPermissions)
          .filter(([, b]) => !b)
          .map(([f]) => f)
          .join('\n'),
      );
      throw new Error('unused permissions!:' + k);
    }
  });
};
