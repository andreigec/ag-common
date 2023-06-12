import STS from 'aws-sdk/clients/sts';

import { error, info } from '../../common/helpers/log';

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
  const sts = new STS({ region });
  info(`assuming:${assumeRoleArn} in region:${region}`);
  const data = await sts
    .assumeRole({
      RoleArn: assumeRoleArn,
      RoleSessionName: 'stssession',
    })
    .promise();

  if (data.$response.error || !data.Credentials) {
    error('aws assume role error');
    throw new Error(JSON.stringify(data.$response.error, null, 2));
  }

  return {
    accessKeyId: data.Credentials.AccessKeyId,
    secretAccessKey: data.Credentials.SecretAccessKey,
    sessionToken: data.Credentials.SessionToken,
    expiration: data.Credentials.Expiration,
  };
}
