import type { Stack } from 'aws-cdk-lib';
import { aws_dynamodb as dynamodb } from 'aws-cdk-lib';

import { loadSsmString, loadSsmStringList, saveToSsm } from '../ssm';

export const generateTableRef = ({
  stack,
  baseKey,
  hasStream,
  hasGSI,
}: {
  hasStream: boolean;
  hasGSI: boolean;
  stack: Stack;
  baseKey: string;
}) => {
  const tableArn = loadSsmString({ stack, path: `${baseKey}/arn` });
  const ret = dynamodb.Table.fromTableAttributes(stack, baseKey, {
    tableArn,
    ...(hasStream && {
      tableStreamArn: loadSsmString({ stack, path: `${baseKey}/streamArn` }),
    }),
    ...(hasGSI && {
      globalIndexes: loadSsmStringList({ stack, path: `${baseKey}/gsi` }),
    }),
  });

  return ret;
};

export const generateDynamoSSMParams = ({
  stack,
  table,
  baseKey,
  gsi,
}: {
  stack: Stack;
  table: dynamodb.ITable;
  baseKey: string;
  gsi?: string[];
}) => {
  saveToSsm({ stack, path: `${baseKey}/arn`, value: table.tableArn });
  saveToSsm({ stack, path: `${baseKey}/name`, value: table.tableName });

  if (table.tableStreamArn) {
    saveToSsm({
      stack,
      path: `${baseKey}/streamArn`,
      value: table.tableStreamArn,
    });
  }

  if (gsi && gsi.length > 0) {
    saveToSsm({
      stack,
      path: `${baseKey}/gsi`,
      value: gsi.join(','),
    });
  }
};
