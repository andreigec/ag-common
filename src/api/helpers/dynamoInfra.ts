import { IGeneratedDynamoData } from '../types';
import { Stack, aws_ssm as ssm, aws_dynamodb as dynamodb } from 'aws-cdk-lib';
import { loadSsmString, saveToSsm, loadSsmStringList } from './ssm';
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
}): IGeneratedDynamoData => {
  const tableStreamArn = !hasStream
    ? undefined
    : loadSsmString({ stack, path: `${baseKey}/streamArn` });

  const globalIndexes = !hasGSI
    ? undefined
    : loadSsmStringList({ stack, path: `${baseKey}/gsi` });

  const shortName = ssm.StringParameter.valueFromLookup(
    stack,
    `${baseKey}/shortName`,
  );

  const table = dynamodb.Table.fromTableAttributes(stack, baseKey, {
    tableArn: loadSsmString({ stack, path: `${baseKey}/arn` }),
    tableStreamArn,
    globalIndexes,
  });

  return {
    shortName,
    table,
  };
};

export const generateSSMParams = ({
  stack,
  table,
  baseKey,
  gsi,
  shortName,
}: {
  stack: Stack;
  table: dynamodb.ITable;
  baseKey: string;
  gsi?: string[];
  shortName: string;
}) => {
  saveToSsm({ stack, path: `${baseKey}/arn`, value: table.tableArn });

  if (table.tableStreamArn) {
    saveToSsm({
      stack,
      path: `${baseKey}/streamArn`,
      value: table.tableStreamArn,
    });
  }

  if (gsi && gsi?.length > 0) {
    saveToSsm({
      stack,
      path: `${baseKey}/gsi`,
      value: gsi.join(','),
    });
  }

  saveToSsm({
    stack,
    path: `${baseKey}/shortName`,
    value: shortName,
  });
};
