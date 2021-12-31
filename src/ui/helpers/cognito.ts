export type TOnMessage = (
  m: string,
  options?: { appearance: 'error' | 'success' },
) => void;

export interface ICognitoAuth {
  AWSRegion: string;
  poolUrl: string;
  identityPool?: string;
  UserPoolId: string;
  ClientId: string;
  cognitoEndpoint: string;
  cognitoRefresh: string;
  vendToken: string;
}

export interface ICognitoAuthProviderProps {
  redirectUrl?: string;
  location: {
    pathname: string;
    hash: string;
    search: string;
    origin: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goToPageUrl: ({
    url,
    state,
    login,
  }: {
    url: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    state?: any;
    login: boolean;
  }) => Promise<void>;
  children: JSX.Element | JSX.Element[];
  config: ICognitoAuth;
  onMessage?: TOnMessage;
}
