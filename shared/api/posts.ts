import { Post } from "@shared/types";
import { API } from "./base";
class PostsFetcher extends API {
  getAll<R = Post[]>() {
    return super.get<R>({ path: "posts" });
  }

  getById<R = Post>(id: string | number) {
    return super.get<R>({ path: `posts/${id}` });
  }
}

export const postsFetcher = new PostsFetcher();
