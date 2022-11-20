import { error, info } from '../../common/helpers/log';
import { distinct, take } from '../../common/helpers/array';
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
  ListObjectsV2CommandOutput,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { Readable } from 'stream';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
let s3 = new S3Client({});
export const setS3 = (region: string) => {
  s3 = new S3Client({ region });
};

export const getS3Object = async ({
  fileurl,
}: {
  fileurl: {
    Bucket: string;
    Key: string;
  };
}) => s3.send(new GetObjectCommand(fileurl));

export interface IS3Object {
  bucket: string;
  key: string;
  content: Readable | ReadableStream | Blob;
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
    if (!content.Body) {
      throw new Error('no body for object:' + fileurl.Key);
    }

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
  try {
    await s3.send(
      new PutObjectCommand({
        Body,
        Bucket,
        Key,
        ContentType,
      }),
    );

    return {};
  } catch (e) {
    return { error: (e as any).toString() };
  }
};

export const uploadFile = async (p: {
  Bucket: string;
  Key: string;
  Body: Buffer | Uint8Array | Blob | string;
}) => {
  const res = new Upload({ client: s3, params: p });
  await res.done();
  const location = `https://s3.${s3.config.region}.amazonaws.com/${p.Bucket}/${p.Key}`;

  return location;
};

export const deleteFile = async ({
  Bucket,
  Key,
}: {
  Bucket: string;
  Key: string;
}): Promise<{ error?: string }> => {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket, Key }));
    return {};
  } catch (e) {
    return { error: (e as any).toString() };
  }
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
  try {
    while (toDelete.length > 0) {
      const { part, rest } = take(toDelete, 900);
      toDelete = rest;
      const res = await s3.send(
        new DeleteObjectsCommand({
          Bucket,
          Delete: { Objects: part },
        }),
      );

      if (!res.Deleted?.length) {
        throw new Error('no deleted files');
      }

      deleted += res.Deleted.length;
      info(`deleted ${deleted} files`);
    }
  } catch (e) {
    return { error: (e as any).toString() };
  }

  return {};
};

export async function listFiles(bucketName: string) {
  try {
    const ret: string[] = [];
    let response: ListObjectsV2CommandOutput = {
      IsTruncated: true,
      $metadata: undefined as any,
    };

    while (response.IsTruncated) {
      response = await s3.send(
        new ListObjectsV2Command({
          Bucket: bucketName,
          ContinuationToken: response.NextContinuationToken,
        }),
      );

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

export const generatePresignedUrl = async (p: {
  bucket: string;
  key: string;
}) => {
  const command = new GetObjectCommand({ Bucket: p.bucket, Key: p.key });
  const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return url;
};
