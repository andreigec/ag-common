import STS from 'aws-sdk/clients/sts';
import { info } from '../../common/helpers/log';

export let sts = new STS();
export const setSts = (region: string) => {
  sts = new STS({ region });
};

/**
 * @param {assumeRoleArn} assume this role arn
 * @returns {string} assumed accountId
 */
export async function assumeRole({ assumeRoleArn }: { assumeRoleArn: string }) {
  info(`assuming:${assumeRoleArn}`);
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
