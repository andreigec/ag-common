import { setDynamo } from './dynamo';
import { setS3 } from './s3';
import { setSes } from './ses';
import { setSqs } from './sqs';

export const setAwsRegion = (region: string) => {
  setDynamo(region);
  setS3(region);
  setSes(region);
  setSqs(region);
};
