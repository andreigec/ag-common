/* eslint-disable no-console */
import { SetLogLevel } from '../../common';
import { deleteFiles, getS3Objects, putS3Object } from './s3';

const Bucket = 'ag-common-tests';
SetLogLevel('INFO');
async function run() {
  const d = new Date().getTime().toString();
  const Body = 'apples for short';
  const p = await putS3Object({ Bucket, Key: d, Body });
  if ('error' in p) {
    throw p.error;
  }

  for await (const v of getS3Objects({
    bucket: Bucket,
    keys: [d],
  })) {
    if ('error' in v) {
      throw v.error;
    }
    const str = await v.data.content.transformToString();
    if (str !== Body) {
      throw new Error('bad body');
    }
  }

  const df = await deleteFiles({ Bucket, Keys: [d] });
  if ('error' in df) {
    throw df.error;
  }
  console.log('ok');
}
void run();
