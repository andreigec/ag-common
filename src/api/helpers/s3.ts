import { Blob } from 'aws-sdk/lib/dynamodb/document_client';
import AWS from 'aws-sdk';

let s3 = new AWS.S3();
export const setS3 = (region: string) => {
  s3 = new AWS.S3({ region });
};

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

export const uploadFile = async ({
  Bucket,
  Key,
  Body,
}: {
  Bucket: string;
  Key: string;
  Body: string;
}) => {
  const res = await s3.upload({ Bucket, Key, Body }).promise();

  return res.Location;
};

export const deleteFile = async ({
  Bucket,
  Key,
}: {
  Bucket: string;
  Key: string;
}) => {
  const res = await s3.deleteObject({ Bucket, Key }).promise();
  if (res.$response.error) {
    throw res.$response.error;
  }
};
