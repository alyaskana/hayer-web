import { Response } from "types";
import { API } from "./base";

type CreateResponse = {
  post_id: number;
  description: string;
  link: string;
};

class ResponsesFetcher extends API {
  create<R = Response>(params: CreateResponse) {
    return super.post<R>({ path: `responses`, params: { response: params } });
  }

  update<R = Response>(id: number, params: CreateResponse) {
    return super.patch<R>({
      path: `responses/${id}`,
      params: { response: params },
    });
  }

  destroy<R = void>(id: number) {
    return super.delete<R>({
      path: `responses/${id}`,
    });
  }
}

export const responsesFetcher = new ResponsesFetcher();
