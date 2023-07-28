import { aws_sqs as sqs, Stack } from 'aws-cdk-lib';

import { loadSsmString, saveToSsm } from '../ssm';

export const generateSqsSSMParams = ({
  stack,
  queue,
  baseKey,
}: {
  stack: Stack;
  queue: sqs.IQueue;
  baseKey: string;
}) => {
  saveToSsm({ stack, path: `${baseKey}/arn`, value: queue.queueArn });
  saveToSsm({ stack, path: `${baseKey}/name`, value: queue.queueName });
  saveToSsm({ stack, path: `${baseKey}/url`, value: queue.queueUrl });
};

export const generateQueueRef = ({
  stack,
  baseKey,
}: {
  stack: Stack;
  baseKey: string;
}) => {
  const queueArn = loadSsmString({ stack, path: `${baseKey}/arn` });
  return sqs.Queue.fromQueueAttributes(stack, baseKey, {
    queueArn,
    queueName: loadSsmString({ stack, path: `${baseKey}/name` }),
    queueUrl: loadSsmString({ stack, path: `${baseKey}/url` }),
  });
};
