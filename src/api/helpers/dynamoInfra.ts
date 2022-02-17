import { IGeneratedDynamoData } from '../types';
import {
  Fn,
  Stack,
  aws_ssm as ssm,
  aws_dynamodb as dynamodb,
} from 'aws-cdk-lib';
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
    : ssm.StringParameter.valueForStringParameter(
        stack,
        `${baseKey}/streamArn`,
      );

  const globalIndexes = !hasGSI
    ? undefined
    : Fn.split(
        ',',
        ssm.StringParameter.valueForStringParameter(stack, `${baseKey}/gsi`),
      );

  const shortName = ssm.StringParameter.valueFromLookup(
    stack,
    `${baseKey}/shortName`,
  );

  const table = dynamodb.Table.fromTableAttributes(stack, baseKey, {
    tableArn: ssm.StringParameter.valueForStringParameter(
      stack,
      `${baseKey}/arn`,
    ),
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
  const name1 = `${baseKey}TableArn`;
  new ssm.StringParameter(stack, name1, {
    allowedPattern: '.*',
    description: `${name1} (cdk)`,
    parameterName: `${baseKey}/arn`,
    stringValue: table.tableArn,
    tier: ssm.ParameterTier.STANDARD,
  });

  if (table.tableStreamArn) {
    const name2 = `${baseKey}TableStreamArn`;
    new ssm.StringParameter(stack, name2, {
      allowedPattern: '.*',
      description: `${name2} (cdk)`,
      parameterName: `${baseKey}/streamArn`,
      stringValue: table.tableStreamArn,
      tier: ssm.ParameterTier.STANDARD,
    });
  }

  if (gsi && gsi?.length > 0) {
    const name3 = `${baseKey}TableGSI`;
    new ssm.StringParameter(stack, name3, {
      allowedPattern: '.*',
      description: `${name3} (cdk)`,
      parameterName: `${baseKey}/gsi`,
      stringValue: gsi.join(','),
      tier: ssm.ParameterTier.STANDARD,
      type: ssm.ParameterType.STRING,
    });
  }

  const name4 = `${baseKey}TableShortName`;
  new ssm.StringParameter(stack, name4, {
    allowedPattern: '.*',
    description: `${name4} (cdk)`,
    parameterName: `${baseKey}/shortName`,
    stringValue: shortName,
    tier: ssm.ParameterTier.STANDARD,
    type: ssm.ParameterType.STRING,
  });
};
