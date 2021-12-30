// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import OpenAPIRequestValidator from 'openapi-request-validator';
import { User } from 'analytica.click';
import { getAndValidateToken } from './validations';
import { warn, error as errorF, info, debug } from '../../common/helpers/log';
import { objectKeysToLowerCase } from '../../common/helpers/object';
import { returnCode } from './api';
//
const getOperation = ({
  path,
  method,
  resource,
  schema,
}: {
  method: string;
  path: string;
  resource: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
}) => {
  const resourcePath = Object.keys(schema.paths).find((rp) => rp === resource);
  if (!resourcePath) {
    throw new Error('incorrect path');
  }

  const operation = schema.paths[resourcePath]?.[method];

  if (!operation) {
    const msg = `no operation found for ${method}/${path}`;
    warn(`${msg} ${Object.keys(schema.paths)}`);
    throw new Error(msg);
  }

  /*
   var path=  '/events/12345/topics/2216026039415263/like'
   var resourcePath ='/events/{eventCode}/topics/{topicId}/like'
   */
  const re = new RegExp(
    resourcePath
      .replace(/\//gim, `\\/`)
      .replace(/\{(.+?)\}/gim, '(?<$1>[^\\\\]+)'),
    'i',
  ).exec(path);

  const pathParams = re?.groups && JSON.parse(JSON.stringify(re?.groups));

  return { operation, pathParams };
};

export type NextType<T> = ({
  event,
  body,
  params,
  userProfile,
}: {
  params: Record<string, string>;
  event: APIGatewayEvent;
  body: T;
  userProfile?: User;
}) => Promise<APIGatewayProxyResult>;

export async function validateOpenApi<T>({
  event,
  next,
  authorized,
  schema,
  COGNITO_USER_POOL_ID,
}: {
  COGNITO_USER_POOL_ID: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  event: APIGatewayEvent;
  next: NextType<T>;
  authorized?: true | false | 'optional';
}) {
  const request = {
    method: event.httpMethod,
    path: event.path,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: undefined as any,
    query: event.queryStringParameters,
    body: event.body && JSON.parse(event.body),
    headers: objectKeysToLowerCase(event?.headers),
  };

  const method = event.requestContext.httpMethod.toLowerCase();
  const pathParameters = event.pathParameters || ({} as Record<string, string>);
  const queryStringParameters =
    event.queryStringParameters || ({} as Record<string, string>);

  //
  const opm = getOperation({
    path: event.path,
    method,
    resource: event.resource,
    schema,
  });

  if (!opm?.operation) {
    const msg = `no request handler found! for ${method} ${event.path} - cant validate`;
    errorF(msg);
    return returnCode(400, msg);
  }

  if (!opm.operation.requestBody && !opm.operation.parameters) {
    if (!!event.body || Object.keys(pathParameters).length > 0) {
      warn(`bad req, unexpected params`);
      return returnCode(400, 'bad data');
    }
    // no validation necessary
  } else {
    try {
      request.params = opm.pathParams;
      info('req=', JSON.stringify(request, null, 2));
      const resp = new OpenAPIRequestValidator({
        ...opm.operation,
        schemas: schema.components.schemas,
      }).validateRequest(request);

      if (resp) {
        warn('bad request');
        warn('opm=', JSON.stringify(opm, null, 2));
        warn('resp=', JSON.stringify(resp, null, 2));
        return returnCode(400, `error:${resp?.errors?.[0]?.message}`);
      }

      debug(`validated request:`, event.path);
    } catch (e) {
      errorF('e=', e, JSON.stringify(opm));
    }
  }

  let userProfile: User | undefined;
  let error: APIGatewayProxyResult | undefined;
  const authHeader =
    event.headers?.Authorization || event.headers?.authorization;

  if (authorized === true || (authorized === 'optional' && authHeader)) {
    ({ error, userProfile } = await getAndValidateToken({
      tokenRaw: authHeader,
      COGNITO_USER_POOL_ID,
    }));

    if (error) {
      return error;
    }
  }

  const params: Record<string, string> = {
    ...(pathParameters || {}),
    ...(queryStringParameters || {}),
  } as Record<string, string>;

  const res = await next({
    params,
    event,
    body: (event.body && JSON.parse(event.body)) as T,
    userProfile,
  });

  return res;
}
