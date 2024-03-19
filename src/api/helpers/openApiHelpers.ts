/* eslint-disable no-new */
import type { aws_certificatemanager as certmgr } from 'aws-cdk-lib';
import {
  aws_apigateway as apigw,
  aws_lambda as lambda,
  aws_lambda_nodejs as nodejs,
  aws_logs as logs,
  aws_route53 as route53,
  aws_route53_targets as targets,
  Duration,
} from 'aws-cdk-lib';
import type { Construct } from 'constructs';

import { distinctBy, notEmpty } from '../../common/helpers/array';
import { warn } from '../../common/helpers/log';
import type { ILambdaConfigs } from '../types';
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
  shortStackName,
  r53,
  cors = {
    allowOrigins: apigw.Cors.ALL_ORIGINS,
    allowHeaders: apigw.Cors.DEFAULT_HEADERS,
  },
}: {
  stack: Construct;
  NODE_ENV: string;

  shortStackName: string;
  cors?: { allowOrigins: string[]; allowHeaders: string[] };
  r53?: {
    hostedZone?: route53.IHostedZone;
    apiUrl: string;
    certificate: certmgr.ICertificate;
  };
}) => {
  const api = new apigw.RestApi(stack, `${shortStackName}-api-${NODE_ENV}`, {
    defaultCorsPreflightOptions: {
      ...(cors || {}),
    },
  });

  if (r53) {
    const dn = new apigw.DomainName(stack, 'domain', {
      domainName: r53.apiUrl,
      certificate: r53.certificate,
      endpointType: apigw.EndpointType.EDGE,
      securityPolicy: apigw.SecurityPolicy.TLS_1_2,
      mapping: api,
    });

    if (r53.hostedZone) {
      new route53.ARecord(stack, 'ARecord', {
        comment: '(cdk)',
        recordName: r53.apiUrl.substring(0, r53.apiUrl.indexOf('.')),
        zone: r53.hostedZone,
        target: route53.RecordTarget.fromAlias(
          new targets.ApiGatewayDomain(dn),
        ),
      });
    }
  }

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
  authorizers?: Record<string, apigw.TokenAuthorizer>;
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
    [...(def?.dynamo?.reads ?? []), ...(lp?.dynamo?.reads ?? [])],
    (s) => s.tableName,
  );

  const writeTables = distinctBy(
    [...(def?.dynamo?.writes ?? []), ...(lp?.dynamo?.writes ?? [])],
    (s) => s.tableName,
  );

  const policies = [...(def.policies ?? []), ...(lp?.policies ?? [])].filter(
    notEmpty,
  );

  const layers = [...(def.layers ?? []), ...(lp?.layers ?? [])].filter(
    notEmpty,
  );

  const memory = lp?.memory ?? def?.memory ?? 128;
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
  const timeout = Duration.seconds(lp?.timeoutS ?? def?.timeoutS ?? 30);
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

  const env = { ...(def.env ?? {}), ...(lp?.env ?? {}) };
  const environment: Record<string, string> = env;
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
  stack: Construct;
  /**
   * pass in generated openapi file
   * eg schema: require('common/openapi.generated').default;
   */
  schema: unknown;
  NODE_ENV: string;
  endpointsBase: string;

  /**
   * 'default' will be applied to all functions
   */
  lambdaConfig: ILambdaConfigs;

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
  authorizers?: Record<string, apigw.TokenAuthorizer>;

  /**
   * A record will be created in hosted zone for the apigw on this path. if undefined, record wont be created
   */
  r53?: {
    /** will create apigw domainname
     * eg api.mydomain.com */
    apiUrl: string;
    /** if provided will add r53 record to apigw domainame  */
    hostedZone?: route53.IHostedZone;
    certificate: certmgr.ICertificate;
  };
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
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: 'handler',
        environment: lc.environment,
        memorySize: lc.memory,
        timeout: lc.timeout,
        description: '(cdk)',
        entry: entry,
        reservedConcurrentExecutions: lc.reservedConcurrentExecutions,
        logRetention: logs.RetentionDays.FIVE_DAYS,
        layers: lc.layers,
      });

      lc.readTables.forEach((t) => t.grantReadData(lambdaV));
      lc.writeTables.forEach((t) => t.grantReadWriteData(lambdaV));
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
