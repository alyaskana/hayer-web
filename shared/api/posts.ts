import { API } from "./base";

type UserShort = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Response = {
  id: number;
  user: UserShort;
  description: string;
  link: string;
  created_at: string;
};

type Post = {
  id: number;
  title: string;
  description: string;
  type: string[];
  format: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  tags: string[];
  responses: Response[];
};

class PostsFetcher extends API {
  getAll<R = Post[]>() {
    return super.get<R>({ path: "posts" });
  }

  getById<R = Post>(id: string | number) {
    return super.get<R>({ path: `posts/${id}` });
  }
}

export const postsFetcher = new PostsFetcher();
