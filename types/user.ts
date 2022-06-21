import { Post } from "./post";
import { Response } from "./response";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  about: string | null;
  avatar: string | null;
  link: string | null;
  email: string;
  created_at: string;
  updated_at: string;
  followers: User[];
  followings: User[];
  responses: Response[];
  url: string | null;
  instagram: string | null;
  edu_program: string | null;
  course: string | null;
  telegram: string;
  posts: Post[];
};

export type UserShort = Pick<
  User,
  "id" | "first_name" | "last_name" | "avatar"
>;
