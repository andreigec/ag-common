import {
  ApiGatewayManagementApiClient,
  DeleteConnectionCommand,
  GetConnectionCommand,
  PostToConnectionCommand,
} from '@aws-sdk/client-apigatewaymanagementapi';

import { warn } from '../../common';

/**
 * Sends a message to a specific WebSocket connection
 */
export async function sendWebSocketMessage<T>({
  connectionId,
  message,
  endpoint,
}: {
  connectionId: string;
  message: T;
  endpoint: string;
}) {
  const wsClient = new ApiGatewayManagementApiClient({
    endpoint,
  });

  try {
    const s = await wsClient.send(
      new PostToConnectionCommand({
        ConnectionId: connectionId,
        Data: JSON.stringify(message),
      }),
    );
    if (s.$metadata.httpStatusCode === 200) {
      return true;
    }
    return false;
  } catch (e) {
    warn('Failed to send WebSocket message:', (e as Error).message);
    return false;
  }
}

/**
 * Deletes a WebSocket connection
 */
export async function deleteConnection({
  connectionId,
  endpoint,
}: {
  connectionId: string;
  endpoint: string;
}) {
  const wsClient = new ApiGatewayManagementApiClient({
    endpoint,
  });

  try {
    const s = await wsClient.send(
      new DeleteConnectionCommand({
        ConnectionId: connectionId,
      }),
    );
    if (s.$metadata.httpStatusCode === 200) {
      return true;
    }
    return false;
  } catch (e) {
    warn('Failed to delete WebSocket connection:', (e as Error).message);
    return false;
  }
}

/**
 * Checks if a WebSocket connection is still active
 */
export async function isConnectionActive({
  connectionId,
  endpoint,
}: {
  connectionId: string;
  endpoint: string;
}): Promise<boolean> {
  const wsClient = new ApiGatewayManagementApiClient({
    endpoint,
  });

  try {
    const s = await wsClient.send(
      new GetConnectionCommand({
        ConnectionId: connectionId,
      }),
    );
    if (s.$metadata.httpStatusCode === 200) {
      return true;
    }
    return false;
  } catch (e) {
    warn(
      'Failed to check if WebSocket connection is active:',
      (e as Error).message,
    );
    return false;
  }
}

/**
 * Broadcasts a message to multiple WebSocket connections
 */
export async function broadcastMessage<T>({
  connectionIds,
  message,
  endpoint,
}: {
  connectionIds: string[];
  message: T;
  endpoint: string;
}) {
  const results = await Promise.all(
    connectionIds.map((connectionId) =>
      sendWebSocketMessage({
        connectionId,
        message,
        endpoint,
      }),
    ),
  );

  return results.every((r) => r);
}
