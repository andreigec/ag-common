import type { AxiosResponse } from 'axios';

import type { User } from '../jwt';

export interface OverrideAuth {
  id_token?: string;
}

export interface ICallOpenApi<T, TDefaultApi> {
  func: (f: TDefaultApi) => Promise<AxiosResponse<T>>;
  apiUrl: string;
  overrideAuth?: OverrideAuth;
  logout: () => void;
  refreshToken: () => Promise<User | undefined>;

  newDefaultApi: (config: any) => TDefaultApi;
  disabled?: boolean;
  headers?: Record<string, string | number>;
}

export interface ApiResponse<T> {
  raw: Response;
  value(): Promise<T>;
}
