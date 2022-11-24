import { Blob } from 'aws-sdk/lib/dynamodb/document_client';
import S3 from 'aws-sdk/clients/s3';
import { PromiseResult } from 'aws-sdk/lib/request';
import { AWSError } from 'aws-sdk/lib/core';
import { debug, error, info } from '../../common/helpers/log';
import { distinct, take } from '../../common/helpers/array';

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
}) => s3.getObject(fileurl).promise();

export interface IS3Object {
  bucket: string;
  key: string;
  content: S3.Body | undefined;
}
/** function generator to get s3 files */
export async function* getS3Objects({
  bucket,
  keys,
}: {
  bucket: string;
  keys: string[];
}) {
  let toProcess = keys.map((Key) => ({
    Bucket: bucket,
    Key,
  }));

  while (toProcess.length > 0) {
    const { part, rest } = take(toProcess, 1);
    toProcess = rest;
    const fileurl = part[0];
    const content = await getS3Object({ fileurl });
    const ret1: IS3Object = {
      bucket: fileurl.Bucket,
      key: fileurl.Key,
      content: content.Body,
    };

    yield ret1;
  }
}

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

export const deleteFiles = async ({
  Bucket,
  Keys,
}: {
  Bucket: string;
  Keys: string[];
}): Promise<{ error?: string }> => {
  let toDelete = Keys.map((Key) => ({ Key }));
  let deleted = 0;

  while (toDelete.length > 0) {
    const { part, rest } = take(toDelete, 900);
    toDelete = rest;
    const res = await s3
      .deleteObjects({
        Bucket,
        Delete: { Objects: part },
      })
      .promise();

    if (!res.Deleted?.length) {
      throw new Error('no deleted files');
    }

    deleted += res.Deleted.length;

    if (res.$response.error) {
      return { error: res.$response.error.message };
    }

    info(`deleted ${deleted} files`);
  }

  return {};
};

export const copyFile = async ({
  Bucket,
  fromKey,
  toKey,
  deleteSource = false,
}: {
  Bucket: string;
  fromKey: string;
  toKey: string;
  /** if true, will delete original after copy. default false */
  deleteSource?: boolean;
}): Promise<{ error?: string }> => {
  debug(`copying s3 file from ${Bucket}- ${fromKey} to ${toKey}`);
  const res = await s3
    .copyObject({
      //incl bucket
      CopySource: Bucket + '/' + fromKey,
      //dest
      Bucket,
      Key: toKey,
    })
    .promise();

  if (res.$response.error) {
    return { error: res.$response.error.message };
  }

  if (deleteSource) {
    const df = await deleteFile({ Bucket, Key: fromKey });
    if (df.error) {
      return { error: df.error };
    }
  }

  return {};
};

export async function listFiles(bucketName: string, opt?: { prefix?: string }) {
  try {
    const ret: string[] = [];
    let response: PromiseResult<S3.ListObjectsV2Output, AWSError> = {
      IsTruncated: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    while (response.IsTruncated) {
      response = await s3
        .listObjectsV2({
          Bucket: bucketName,
          ContinuationToken: response.NextContinuationToken,
          Prefix: opt?.prefix,
        })
        .promise();

      response.Contents?.filter((r) => r.Key)?.map((c) => {
        ret.push(c.Key as string);
      });
    }
    return distinct(ret.filter((r) => r));
  } catch (err) {
    error('Error', err);
    return [];
  }
}

/**
 * allow uploading of file directly to s3
 * @param param0 
 * 
 * @returns url to POST to, and fields to send, eg
 * formData.append('Content-Type', file.type);
      Object.entries(fields).forEach(([k, v]) => {
        formData.append(k, v);
      });

      formData.append('file', file);
      fetch.POST(url,formData)
 */
export async function getPresignedPostURL({
  bucket,
  key,
  maxMb = 5,
}: {
  bucket: string;
  key: string;
  /** max filesize. default 5 */
  maxMb?: number;
}): Promise<{ url: string; fields: Record<string, string> }> {
  const ps = await s3.createPresignedPost({
    Bucket: bucket,
    Fields: {
      Key: key,
    },

    Expires: 600,
    Conditions: [
      ['content-length-range', 0, maxMb * 1049000], // content length restrictions: 0-5MB
      ['starts-with', '$Content-Type', 'image/'],
    ],
  });

  const fields = JSON.parse(JSON.stringify(ps.fields)) as Record<
    string,
    string
  >;

  return { fields, url: ps.url };
}
