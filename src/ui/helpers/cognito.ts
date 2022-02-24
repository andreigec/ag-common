export type TOnMessage = (
  m: string,
  options?: { appearance: 'error' | 'success' },
) => void;

export interface ICognitoAuth {
  AWSRegion: string;
  identityPool?: string;
  UserPoolId: string;
  ClientId: string;
  cognitoEndpoint: string;
  cognitoRefresh: string;
  vendToken: string;
}
