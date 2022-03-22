import axios from "axios";

import { stringify } from "./utils/stringify";

const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
});

type TGetParams = {
  path: string;
  params?: Record<string, string | number | undefined | boolean>;
  headers?: Record<string, string>;
};

type TPostParams = {
  path: string;
  params?: Record<string, string | number | unknown> | FormData;
  headers?: Record<string, string | true>;
};

export class API {
  fetcher = fetcher;

  get<R>({ path, params = {}, headers = {} }: TGetParams) {
    return this.fetcher.get<R>(`${path}?${stringify(params)}`, {
      headers: {
        ...headers,
      },
    });
  }

  post<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.post<R>(path, params, {
      ...headers,
    });
  }

  patch<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.patch<R>(path, params, {
      ...headers,
    });
  }

  put<R>({ path, params = {}, headers = {} }: TPostParams) {
    return this.fetcher.put<R>(path, params, {
      ...headers,
    });
  }

  delete<R>({ path, params = {} }: TPostParams) {
    return this.fetcher.delete<R>(path, { data: params });
  }
}
