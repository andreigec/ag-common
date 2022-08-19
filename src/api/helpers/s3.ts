import { Blob } from 'aws-sdk/lib/dynamodb/document_client';
import S3 from 'aws-sdk/clients/s3';

let s3 = new S3();
export const setS3 = (region: string) => {
  s3 = new S3({ region });
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
}): Promise<{ error?: string }> => {
  const r = await s3
    .putObject({
      Body,
      Bucket,
      Key,
      ContentType,
    } as S3.Types.PutObjectRequest)
    .promise();

  if (r.$response.error) {
    return { error: r.$response.error.message };
  }
  return {};
};

export const uploadFile = async ({
  Bucket,
  Key,
  Body,
}: {
  Bucket: string;
  Key: string;
  Body: Buffer | Uint8Array | Blob | string;
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
}): Promise<{ error?: string }> => {
  const res = await s3.deleteObject({ Bucket, Key }).promise();
  if (res.$response.error) {
    return { error: res.$response.error.message };
  }
  return {};
};
