import { AxiosResponse } from 'axios';
import { User } from './jwt';

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
}
