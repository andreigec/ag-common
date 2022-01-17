/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line
import { notEmpty } from '../../common/helpers/array';
import { APIGatewayProxyResult, DYNAMOKEYS } from '../types';
export const returnCode = <T>(
  statusCode: number,
  body?: T,
  extraHeaders?: { [a: string]: string },
  fullSiteUrl?: string,
): APIGatewayProxyResult => {
  let headers = {
    'Access-Control-Allow-Headers':
      'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent,User-Agent,Origin',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': fullSiteUrl || '*',
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
  };

  if (extraHeaders && Object.keys(extraHeaders).length > 0) {
    headers = {
      ...headers,
      ...extraHeaders,
    };
  }

  return {
    headers,
    statusCode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: (!body ? undefined : JSON.stringify(body, null, 2)) as any,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stripPKs = <T>(
  r: T,
  /**
   * default true
   * if true, will keep PK
   */
  excludePK = true,
): T => {
  if (!r) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return null as any;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { PK, PK1, PK2, PK3, PK4, PK5, L1, L2, L3, L4, L5, L6, TYPE, ...rest } =
    r;

  if (!excludePK) {
    //@ts-ignore
    rest.PK = PK;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return rest;
};

export const generateDynamoPKS = ({
  type,
  L1,
  L2,
  L3,
  L4,
  L5,
  L6,
  additionalPKValues,
}: {
  type: string;
  L1: string;
  L2?: string;
  L3?: string;
  L4?: string;
  L5?: string;
  L6?: string;
  additionalPKValues?: string[];
}): DYNAMOKEYS => {
  const c = '#';
  const keys = [L1, L2, L3, L4, L5, L6].filter(notEmpty);
  const additionalPK =
    additionalPKValues && additionalPKValues?.length > 0
      ? `#${additionalPKValues.join(c)}`
      : '';

  return {
    PK: keys.join(c) + additionalPK,
    type,
    L1,
    ...(L2 && { L2 }),
    ...(L3 && { L3 }),
    ...(L4 && { L4 }),
    ...(L5 && { L5 }),
    ...(L6 && { L6 }),
    PK1: L1,
    PK2: [keys[0], keys[1]].join(c),
    ...(keys.length >= 3 && {
      PK3: [keys[0], keys[1], keys[2]].join(c),
    }),
    ...(keys.length >= 4 && {
      PK4: [keys[0], keys[1], keys[2], keys[3]].join(c),
    }),
    ...(keys.length >= 5 && {
      PK5: [keys[0], keys[1], keys[2], keys[3], keys[4]].join(c),
    }),
  };
};
