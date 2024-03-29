import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';

export const setSes = (region: string) => {
  const raw = new SESClient({ region });
  return raw;
};

export const ses = setSes('ap-southeast-2');

export interface ISendEmail {
  to: string;
  message: string;
  subject: string;
  sourceArn: string;
  from: string;
}

export const sendEmail = async ({
  to,
  message,
  subject,
  sourceArn,
  from,
}: ISendEmail): Promise<{ error?: string }> => {
  try {
    await ses.send(
      new SendEmailCommand({
        Destination: {
          CcAddresses: [],
          ToAddresses: [to],
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: message,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: subject,
          },
        },
        Source: from,
        ReplyToAddresses: [from],
        SourceArn: sourceArn,
      }),
    );

    return {};
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export const sendEmails = async (emails: ISendEmail[]) =>
  Promise.all(emails.map(sendEmail));
