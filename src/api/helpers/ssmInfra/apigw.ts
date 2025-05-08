import type { Stack } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import type {
  IWebSocketApi,
  WebSocketStage,
} from 'aws-cdk-lib/aws-apigatewayv2';
import { WebSocketApi } from 'aws-cdk-lib/aws-apigatewayv2';
import type { IUser } from 'aws-cdk-lib/aws-iam';

import { loadSsmString, saveToSsm } from '../ssm';

export const generateApigwRef = ({
  stack,
  baseKey,
}: {
  stack: Stack;
  baseKey: string;
}) => {
  const webSocketId = loadSsmString({ stack, path: `${baseKey}/id` });
  const apiEndpoint = loadSsmString({ stack, path: `${baseKey}/endpoint` });
  const stageName = loadSsmString({ stack, path: `${baseKey}/stage` });
  const api = WebSocketApi.fromWebSocketApiAttributes(stack, baseKey, {
    webSocketId,
    apiEndpoint,
  });

  return { api, stageName };
};

export const generateApigwSSMParams = ({
  stack,
  api,
  baseKey,
  stage,
}: {
  stack: Stack;
  api: WebSocketApi;
  baseKey: string;
  stage: WebSocketStage;
}) => {
  saveToSsm({ stack, path: `${baseKey}/id`, value: api.apiId });
  saveToSsm({ stack, path: `${baseKey}/endpoint`, value: api.apiEndpoint });
  saveToSsm({ stack, path: `${baseKey}/stage`, value: stage.stageName });
};

export function grantWebSocketManageConnectionsToUser(
  stack: Stack,
  apiGw: IWebSocketApi,
  stage: string,
  user: IUser,
) {
  const statement = new iam.PolicyStatement({
    actions: ['execute-api:ManageConnections'],
    resources: [
      `arn:aws:execute-api:${stack.region}:${stack.account}:${apiGw.apiId}/${stage}/*`,
    ],
  });
  const policy = new iam.ManagedPolicy(stack, 'WebSocketConnectionPolicy', {
    statements: [statement],
  });
  user.addManagedPolicy(policy);
}

export function grantWebSocketManageConnectionsToRole(
  stack: Stack,
  apiGw: IWebSocketApi,
  stage: string,
  ref: { addToRolePolicy: (statement: iam.PolicyStatement) => void },
) {
  const statement = new iam.PolicyStatement({
    actions: ['execute-api:ManageConnections'],
    resources: [
      `arn:aws:execute-api:${stack.region}:${stack.account}:${apiGw.apiId}/${stage}/*`,
    ],
  });
  ref.addToRolePolicy(statement);
}
