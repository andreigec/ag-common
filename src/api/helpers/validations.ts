/* eslint-disable import/no-unresolved */
import { returnCode } from './api';
import { debug, error, info } from '../../common/helpers/log';
import { IdJwt, User } from '../../ui/helpers/jwt';
import { APIGatewayProxyResult } from '../types';
import { verify, decode } from 'jsonwebtoken';
import JwksClient from 'jwks-rsa';

let jwksClient: JwksClient.JwksClient | undefined;
const jwtVerify = async ({
  token,
  jwksUri,
  issuer,
}: {
  issuer: string;
  jwksUri: string;
  token: string;
}) => {
  return new Promise((resolve, reject) => {
    verify(
      token,
      (header, callback) => {
        if (!jwksClient) {
          const jc = {
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 10,
            jwksUri,
          };

          info(`jwksClient config=`, jc);
          jwksClient = JwksClient(jc);
        }

        jwksClient.getSigningKey(
          header.kid,
          (errorV, key?: { rsaPublicKey?: string; publicKey?: string }) => {
            if (errorV) {
              error(`signing key error. jwks=${jwksUri} iss=${issuer}`);
              reject(errorV);
              return;
            }

            const signingKey = key?.publicKey || key?.rsaPublicKey || undefined;
            if (!signingKey) {
              callback('no key');
            } else {
              callback(null, signingKey);
            }
          },
        );
      },
      {
        issuer,
        algorithms: ['RS256'],
      },
      (errorV, decoded) => {
        if (errorV) {
          reject(errorV);
          return;
        }

        resolve(decoded);
      },
    );
  });
};

export interface IGetAndValidateToken {
  /**
   * default ap-southeast-2
   */
  jwksRegion?: string;
  tokenRaw?: string;
  COGNITO_USER_POOL_ID: string;
}
export type TGetAndValidateToken = (p: IGetAndValidateToken) => Promise<{
  error?: APIGatewayProxyResult;
  token?: string;
  userProfile?: User;
}>;
/** extracts user details from oauth token */
export const getAndValidateToken: TGetAndValidateToken = async ({
  tokenRaw,
  jwksRegion = 'ap-southeast-2',
  COGNITO_USER_POOL_ID,
}) => {
  const jwksUri = `https://cognito-idp.${jwksRegion}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/jwks.json`;
  const issuer = `https://cognito-idp.${jwksRegion}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
  let token = '';
  try {
    if (!tokenRaw) {
      const m = 'auth error: no auth headers';
      error(m);
      return {
        error: returnCode(403, m),
      };
    }

    token = tokenRaw.substring(tokenRaw.indexOf(' ') + 1);
    if (!token) {
      const m = 'auth error: no token';
      error(m);
      return {
        error: returnCode(403, m),
      };
    }

    let subject: string | undefined;
    try {
      await jwtVerify({ token, jwksUri, issuer });

      const decoded = decode(token) as IdJwt;
      debug(`decoded=${JSON.stringify(decoded, null, 2)}`);
      if (!decoded.email) {
        const m = 'auth error, no email';
        error(m);
        return {
          error: returnCode(403, m),
        };
      }

      subject = decoded?.sub;
      if (!subject) {
        const mess = 'user should have responded with subject (sub) field';
        error(mess);
        throw new Error(mess);
      }

      let { picture } = decoded;
      if (decoded?.identities?.[0]?.providerName === 'Facebook') {
        picture = JSON.parse(decoded.picture).data.url;
      }

      const userId = decoded.email.toLowerCase();
      const userProfile: User = {
        isAdmin: ['andreigec@hotmail.com', 'andreigec@gmail.com'].includes(
          userId,
        ),
        idJwt: decoded,
        userId,
        nickname: decoded.nickname || decoded['cognito:username'],
        fullname: decoded.name || decoded['cognito:username'],
        picture,
        updatedAt: parseInt(`${decoded.auth_time}000`, 10),
      };

      return { token, userProfile };
    } catch (e) {
      const ex = e as object;
      // expiry is too common to log
      if (ex.toString().indexOf('jwt expired') !== -1) {
        info(`jwt fail:${e}`);
      }
      throw e;
    }
  } catch (e) {
    const m = 'auth error:' + JSON.stringify(e, null, 2);
    error(m);
    return {
      error: returnCode(403, m),
    };
  }
};
