import { info, SetLogLevel, warn } from '../../common';
import {
  getItemDynamo,
  putDynamo,
  queryDynamo,
  scan,
  wipeTable,
} from './dynamo';

const tableName = 'ag-common-tests';
SetLogLevel('INFO');
async function run() {
  const PK = new Date().getTime().toString();
  info('put ', PK);
  await putDynamo({ PK }, tableName, { pkName: 'PK' });
  info('put fail', PK);
  const r = await putDynamo({ PK }, tableName, { pkName: 'PK' });
  if (!r.error) {
    throw new Error('expected fail');
  }

  let scanr = await scan<{ PK: string }>(tableName);
  let sd = scanr.data ?? [];
  if (sd.length === 0) {
    throw new Error('no scan');
  }

  if (!sd.find((s) => s.PK === PK)) {
    throw new Error('put not found');
  }

  console.log('get item');
  const ge = await getItemDynamo<{ PK: string }>({
    tableName,
    pkName: 'PK',
    pkValue: PK,
  });
  if (ge.error) {
    throw ge.error;
  }

  if (ge?.data?.PK !== PK) {
    throw new Error('ge not found:' + PK);
  }

  //
  console.log('query');
  const q = await queryDynamo<{ PK: string }>({
    tableName,
    pkName: 'PK',
    pkValue: PK,
    count: 1,
    sortAscending: true,
  });
  if (q.error) {
    throw q.error;
  }

  if (q?.Items?.[0]?.PK !== PK) {
    throw new Error('query not found:' + PK);
  }

  //
  console.log('wipe');

  await wipeTable(tableName);

  scanr = await scan<{ PK: string }>(tableName);
  sd = scanr.data ?? [];
  if (sd.length !== 0) {
    throw new Error('bad wipe');
  }

  warn('test OK');
}
void run();
