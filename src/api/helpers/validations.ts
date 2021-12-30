/* eslint-disable import/no-unresolved */
import { APIGatewayProxyResult } from 'aws-lambda';
import JwksClient from 'jwks-rsa';
import { verify, decode } from 'jsonwebtoken';
import { IdJwt, User } from 'analytica.click';
import { debug, error, info } from '../../common/helpers/log';
import { returnCode } from './api';

const jwksUri = `https://cognito-idp.ap-southeast-2.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}/.well-known/jwks.json`;
const issuer = `https://cognito-idp.ap-southeast-2.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`;
const jwksClient = JwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 10,
  jwksUri,
});

const jwtVerify = async (token: string) => {
  return new Promise((resolve, reject) => {
    verify(
      token,
      (header, callback) => {
        jwksClient.getSigningKey(
          header.kid,
          (errorV, key?: { rsaPublicKey?: string; publicKey?: string }) => {
            if (errorV) {
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

export const getAndValidateToken = async (
  tokenRaw?: string,
): Promise<{
  error?: APIGatewayProxyResult;
  token?: string;
  userProfile?: User;
}> => {
  let token = '';
  try {
    if (!tokenRaw) {
      error('no auth headers');
      return {
        error: returnCode(403, 'auth failed'),
      };
    }

    token = tokenRaw.substr(tokenRaw.indexOf(' ') + 1);

    let subject: string | undefined;
    try {
      await jwtVerify(token);
      const decoded = decode(token) as unknown as IdJwt;
      debug(`decoded=${JSON.stringify(decoded)}`);
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

      if (!userProfile || !token || !userProfile.userId) {
        error('auth fail');
        return {
          error: returnCode(403, 'auth fail'),
        };
      }

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
    error('auth error', e);
    return {
      error: returnCode(403, 'auth fail'),
    };
  }
};
