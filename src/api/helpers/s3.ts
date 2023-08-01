import {
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  ListObjectsV2CommandOutput,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import type { StreamingBlobPayloadOutputTypes } from '@smithy/types';

import { distinct, take } from '../../common/helpers/array';
import { debug, error } from '../../common/helpers/log';

export const setS3 = (region: string) => {
  const raw = new S3Client({ region });
  return raw;
};

export const s3 = setS3('ap-southeast-2');

export const getS3Object = async ({
  fileurl: { Bucket, Key },
}: {
  fileurl: {
    Bucket: string;
    Key: string;
  };
}): Promise<{ error: string } | { data: IS3Object }> => {
  try {
    const r = await s3.send(new GetObjectCommand({ Bucket, Key }));
    if (!r.Body) {
      throw new Error('no body returned');
    }

    const data: IS3Object = {
      bucket: Bucket,
      key: Key,
      content: r.Body,
    };

    return { data };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export interface IS3Object {
  bucket: string;
  key: string;
  content: StreamingBlobPayloadOutputTypes;
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
    const g = await getS3Object({ fileurl });
    if ('error' in g) {
      yield { error: g.error };
    } else {
      yield { data: g.data };
    }
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
    await s3.send(new PutObjectCommand({ Body, Bucket, Key, ContentType }));

    return {};
  } catch (e) {
    return { error: (e as Error).toString() };
  }
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
    return { error: (e as Error).toString() };
  }
};

export const deleteFiles = async ({
  Bucket,
  Keys,
}: {
  Bucket: string;
  Keys: string[];
}): Promise<{ error?: string }> => {
  try {
    let toDelete = Keys.map((Key) => ({ Key }));
    let deleted = 0;

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

      debug(`deleted ${deleted} files`);
    }

    return {};
  } catch (e) {
    return { error: (e as Error).toString() };
  }
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
  try {
    debug(`copying s3 file from ${Bucket}- ${fromKey} to ${toKey}`);
    await s3.send(
      new CopyObjectCommand({
        //incl bucket
        CopySource: Bucket + '/' + fromKey,
        //dest
        Bucket,
        Key: toKey,
      }),
    );

    if (deleteSource) {
      const df = await deleteFile({ Bucket, Key: fromKey });
      if (df.error) {
        return { error: df.error };
      }
    }

    return {};
  } catch (e) {
    return { error: (e as Error).toString() };
  }
};

export async function listFiles(
  bucketName: string,
  opt?: { prefix?: string },
): Promise<{ error: string } | { data: string[] }> {
  try {
    const ret: string[] = [];
    let response: ListObjectsV2CommandOutput | undefined;

    do {
      response = await s3.send(
        new ListObjectsV2Command({
          Bucket: bucketName,
          ContinuationToken: response?.NextContinuationToken,
          Prefix: opt?.prefix,
        }),
      );

      response.Contents?.filter((r) => r.Key)?.map((c) => {
        ret.push(c.Key as string);
      });
    } while (response.IsTruncated);
    return { data: distinct(ret.filter((r) => r)) };
  } catch (err) {
    error('Error', err);
    return { error: (err as Error).toString() };
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
}): Promise<
  { error: string } | { data: { url: string; fields: Record<string, string> } }
> {
  try {
    const ps = await createPresignedPost(s3, {
      Bucket: bucket,
      Key: key,
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

    return { data: { fields, url: ps.url } };
  } catch (e) {
    return { error: (e as Error).toString() };
  }
}
