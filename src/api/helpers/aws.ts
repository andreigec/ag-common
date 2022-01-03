import { setDynamo } from './dynamo';
import { setS3 } from './s3';

export const setAwsRegion = (region: string) => {
  setDynamo(region);
  setS3(region);
};
