import { Post, Tag } from "types";
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

  latestResponses<R = Post[]>() {
    return super.get<R>({ path: "posts/latest_responses" });
  }

  myLatestResponses<R = Post[]>() {
    return super.get<R>({ path: "posts/my_latest_responses" });
  }

  favoritePosts<R = Post[]>() {
    return super.get<R>({ path: "posts/favorites" });
  }

  favorite<R = Post>(id: number) {
    return super.post<R>({ path: `posts/${id}/favorite` });
  }

  getById<R = Post>(id: string | number) {
    return super.get<R>({ path: `posts/${id}` });
  }

  create<R = Post>(params: CreatePost) {
    return super.post<R>({ path: `posts`, params: { post: params } });
  }
}

export const postsFetcher = new PostsFetcher();
