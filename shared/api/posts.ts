import { Post, Tag } from "@shared/types";
import { API } from "./base";

type CreatePost = {
  title: string;
  description: string;
  ad_types: string[];
  format: string;
  deadline: string;
  tags: Tag[];
};

class PostsFetcher extends API {
  getAll<R = Post[]>() {
    return super.get<R>({ path: "posts" });
  }

  getById<R = Post>(id: string | number) {
    return super.get<R>({ path: `posts/${id}` });
  }

  create<R = Post>(params: CreatePost) {
    return super.post<R>({ path: `posts`, params });
  }
}

export const postsFetcher = new PostsFetcher();
