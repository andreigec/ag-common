import { SendMessageBatchCommand } from '@aws-sdk/client-sqs';
import { SQSClient } from '@aws-sdk/client-sqs/dist-types/SQSClient';

import { hashCode } from '../../common/helpers/hashCode';

export const setSqs = (region: string) => {
  const raw = new SQSClient({ region });
  return raw;
};

export const sqs = setSqs('ap-southeast-2');

export const sendMessages = async <T>(
  items: T[],
  queueUrl: string,
): Promise<{ error?: string }> => {
  const p = await sqs.send(
    new SendMessageBatchCommand({
      QueueUrl: queueUrl,
      Entries: items.map((i) => ({
        MessageBody: JSON.stringify(i),
        Id: hashCode(JSON.stringify(i)),
      })),
    }),
  );

  if ((p.Failed ?? []).length > 0) {
    return { error: `failed: ${JSON.stringify(p.Failed || [], null, 2)}` };
  }

  return {};
};
