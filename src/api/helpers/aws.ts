import { setDynamo } from './dynamo';
import { setS3 } from './s3';
import { setSqs } from '../..';

export const setAwsRegion = (region: string) => {
  setDynamo(region);
  setS3(region);
  setSqs(region);
};
