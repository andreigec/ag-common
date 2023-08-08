// eslint-disable-next-line import/no-unresolved
import OpenAPIRequestValidator from 'openapi-request-validator';

import type { TLang } from '../../common/helpers/i18n';
import { getValidatedLang } from '../../common/helpers/i18n';
import { debug, error as errorF, info, warn } from '../../common/helpers/log';
import {
  objectKeysToLowerCase,
  tryJsonParse,
} from '../../common/helpers/object';
import type { User } from '../../ui/helpers/jwt';
import type { APIGatewayEvent, APIGatewayProxyResult } from '../types';
import { returnCode } from './api';
import type { TGetAndValidateToken } from './validations';
import { getAndValidateToken } from './validations';
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
  lang,
}: {
  params: Record<string, string>;
  event: APIGatewayEvent;
  body: T;
  userProfile?: User;
  lang: TLang;
}) => Promise<APIGatewayProxyResult>;

export async function validateOpenApi<T>({
  event,
  next,
  authorized,
  schema,
  COGNITO_USER_POOL_ID,
  jwksRegion = 'ap-southeast-2',
  getAndValidateTokenOverride,
}: {
  getAndValidateTokenOverride?: TGetAndValidateToken;
  COGNITO_USER_POOL_ID: string;
  /** pass in openapi schema. eg require('common/openapi.generated').default; */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  event: APIGatewayEvent;
  next: NextType<T>;
  /** default false */
  authorized?: true | false | 'optional';
  /**
   * default ap-southeast-2
   */
  jwksRegion?: string;
}) {
  if (!schema) {
    throw new Error('schema undefined!');
  }

  if (!COGNITO_USER_POOL_ID) {
    throw new Error('COGNITO_USER_POOL_ID undefined');
  }

  const request = {
    method: event.httpMethod,
    path: event.path,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: undefined as any,
    query: event.queryStringParameters,
    body: tryJsonParse(event.body, event.body),
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
      info(
        'req=',
        JSON.stringify(
          {
            ...request,
            body:
              (request.body?.length ?? 0) > 2000
                ? '(truncating long body)'
                : request.body,
          },
          null,
          2,
        ),
      );
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
    const vf = getAndValidateTokenOverride ?? getAndValidateToken;
    ({ error, userProfile } = await vf({
      tokenRaw: authHeader,
      COGNITO_USER_POOL_ID,
      jwksRegion,
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
    body: tryJsonParse(event.body, event.body) as unknown as T,
    userProfile,
    lang: getValidatedLang(event.headers['x-lang'] ?? ''),
  });

  return res;
}
