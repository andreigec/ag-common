import { Blob } from 'aws-sdk/lib/dynamodb/document_client';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const getS3Object = async ({
  fileurl,
}: {
  fileurl: {
    Bucket: string;
    Key: string;
  };
}) => {
  const content = await s3.getObject(fileurl).promise();

  return content;
};

export const putS3Object = async ({
  Body,
  Bucket,
  Key,
  ContentType,
}: {
  ContentType?: string;
  Body: string | Blob;
  Bucket: string;
  Key: string;
}) => {
  await s3
    .putObject({
      Body,
      Bucket,
      Key,
      ContentType,
    } as AWS.S3.Types.PutObjectRequest)
    .promise();
};
