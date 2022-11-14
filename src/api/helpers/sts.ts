import STS from 'aws-sdk/clients/sts';
import { info } from '../../common/helpers/log';

/**
 * @param {assumeRoleArn} assume this role arn
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

  if (data.$response.error) {
    throw new Error(JSON.stringify(data.$response.error, null, 2));
  }

  info(`resp:${data}`);
  return data.Credentials;
}
