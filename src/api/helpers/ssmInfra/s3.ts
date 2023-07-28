import { aws_s3 as s3, Stack } from 'aws-cdk-lib';

import { loadSsmString, saveToSsm } from '../ssm';

export const generateS3SSMParams = ({
  stack,
  bucket,
  baseKey,
}: {
  stack: Stack;
  bucket: s3.IBucket;
  baseKey: string;
}) => {
  saveToSsm({ stack, path: `${baseKey}/arn`, value: bucket.bucketArn });
  saveToSsm({ stack, path: `${baseKey}/name`, value: bucket.bucketName });
};

export const generateBucketRef = ({
  stack,
  baseKey,
}: {
  stack: Stack;
  baseKey: string;
}) => {
  const bucketName = loadSsmString({ stack, path: `${baseKey}/name` });
  return s3.Bucket.fromBucketAttributes(stack, baseKey, {
    bucketArn: loadSsmString({ stack, path: `${baseKey}/arn` }),
    bucketName,
  });
};
