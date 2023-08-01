import { AssumeRoleCommand } from '@aws-sdk/client-sts';
import { STSClient } from '@aws-sdk/client-sts/dist-types/STSClient';

import { info } from '../../common/helpers/log';

export const setSts = (region: string) => {
  const raw = new STSClient({ region });
  return raw;
};

export const sts = setSts('ap-southeast-2');

/**
 * @param {assumeRoleArn} assume this role arn. remember to use the credentials returned in subsequent calls
 * @returns {string} assumed accountId
 */
export async function assumeRole({
  assumeRoleArn,
  region,
}: {
  assumeRoleArn: string;
  region: string;
}) {
  try {
    info(`assuming:${assumeRoleArn} in region:${region}`);
    const data = await sts.send(
      new AssumeRoleCommand({
        RoleArn: assumeRoleArn,
        RoleSessionName: 'stssession',
      }),
    );

    if (!data.Credentials) {
      return { error: 'aws assume role error' };
    }

    return {
      data: {
        accessKeyId: data.Credentials.AccessKeyId,
        secretAccessKey: data.Credentials.SecretAccessKey,
        sessionToken: data.Credentials.SessionToken,
        expiration: data.Credentials.Expiration,
      },
    };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
}
