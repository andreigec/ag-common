import { User } from '../jwt';
import { AxiosResponse } from 'axios';

export interface OverrideAuth {
  id_token?: string;
}

export interface ICallOpenApi<T, TDefaultApi> {
  func: (f: TDefaultApi) => Promise<AxiosResponse<T>>;
  apiUrl: string;
  overrideAuth?: OverrideAuth;
  logout: () => void;
  refreshToken: () => Promise<User | undefined>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newDefaultApi: (config: any) => TDefaultApi;
  disabled?: boolean;
  headers?: Record<string, string | number>;
}
