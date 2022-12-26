import { aws_ssm as ssm, Fn, Stack } from 'aws-cdk-lib';

import { toBase64 } from '../../common/helpers/string/base64';

/**
 * save a value to ssm
 * @param param0
 */
export const saveToSsm = ({
  stack,
  path,
  value,
}: {
  /** eg `/${NODE_ENV}/${shortStackName}/service/key` */
  path: string;
  stack: Stack;
  value: string;
}) => {
  const name = toBase64(path);
  new ssm.StringParameter(stack, name, {
    allowedPattern: '.*',
    description: `${name} (cdk)`,
    parameterName: path,
    stringValue: value,
    tier: ssm.ParameterTier.STANDARD,
  });
};

/** load a string from ssm */
export const loadSsmString = ({
  stack,
  path,
}: {
  stack: Stack;
  /** eg `/${NODE_ENV}/${shortStackName}/service/key` */
  path: string;
}) => ssm.StringParameter.valueForStringParameter(stack, path);

/** load a csv from ssm */
export const loadSsmStringList = ({
  stack,
  path,
}: {
  stack: Stack;
  /** eg `/${NODE_ENV}/${shortStackName}/service/key` */
  path: string;
}) => Fn.split(',', loadSsmString({ stack, path }));
