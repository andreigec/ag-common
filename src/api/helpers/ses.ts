import AWS from 'aws-sdk';

export let ses = new AWS.SES();
export const setSes = (region: string) => {
  ses = new AWS.SES({ region });
};
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
}: ISendEmail) => {
  // Create sendEmail params
  const params: AWS.SES.SendEmailRequest = {
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
  };

  await ses.sendEmail(params).promise();
};

export const sendEmails = async (emails: ISendEmail[]) =>
  Promise.all(emails.map(sendEmail));
