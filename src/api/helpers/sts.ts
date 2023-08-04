import { AssumeRoleCommand, STSClient } from '@aws-sdk/client-sts';

import { info } from '../../common/helpers/log';

export const setSts = (region: string) => {
  const raw = new STSClient({ region });
  return raw;
};

export const sts = setSts('ap-southeast-2');

/**
 * assume sts role
 * @returns {string} assumed accountId
 */
export async function assumeRole({
  assumeRoleArn,
  region,
}: {
  assumeRoleArn: string;
  /** assume this role arn. */
  region: string;
}): Promise<
  | { error: string }
  | {
      data: {
        accessKeyId: string;
        secretAccessKey: string;
        sessionToken: string;
        expiration: Date;
      };
    }
> {
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
    if (
      !data.Credentials.AccessKeyId ||
      !data.Credentials.SecretAccessKey ||
      !data.Credentials.SessionToken ||
      !data.Credentials.Expiration
    ) {
      return { error: 'missing cred values error' };
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
