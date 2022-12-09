import SQS, {
  SendMessageBatchRequest,
  SendMessageBatchRequestEntryList,
} from 'aws-sdk/clients/sqs';

import { hashCode } from '../../common';
// eslint-disable-next-line import/no-mutable-exports
export let sqs = new SQS();
export const setSqs = (region: string) => {
  sqs = new SQS({ region });
};

export const sendMessages = async <T>(
  items: T[],
  queueUrl: string,
): Promise<{ error?: string }> => {
  const req: SendMessageBatchRequest = {
    QueueUrl: queueUrl,
    Entries: items.map((i) => ({
      MessageBody: JSON.stringify(i),
      Id: hashCode(JSON.stringify(i)),
    })) as SendMessageBatchRequestEntryList,
  };

  const put = await sqs.sendMessageBatch(req).promise();
  if (put.$response.error && put.$response.error.statusCode) {
    return { error: put.$response.error.message };
  }
  return {};
};
