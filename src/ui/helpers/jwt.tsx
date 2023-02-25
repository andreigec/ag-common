import { AxiosError } from 'axios';

export interface Jwt {
  access_token: string;
  expires_at: number;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  token_type: string;
}

export interface Identity {
  dateCreated: string;
  issuer?: string | Array<string>;
  primary: string;
  providerName: string;
  providerType: string;
  userId: string;
}

export interface IdJwt {
  at_hash: string;
  aud: string;
  auth_time: number;
  'cognito:groups': Array<string>;
  'cognito:preferred_role': string;
  'cognito:username': string;
  email: string;
  exp: number;
  iat: number;
  identities: Array<Identity>;
  iss: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  token_use: string;
}
export interface AwsCreds {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}
export interface User {
  userId: string;
  picture: string;
  updatedAt: number;
  nickname: string;
  fullname: string;
  credentials?: AwsCreds;
  idJwt: IdJwt;
  isAdmin: boolean;
  jwt?: Jwt;
}

export interface AxiosWrapper<T> {
  data: T | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: AxiosError<unknown, any>;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reFetch: () => Promise<any>;
  datetime: number;
}

export interface AxiosWrapperLite<T> {
  data: T | undefined;
  error?: AxiosError;
}
