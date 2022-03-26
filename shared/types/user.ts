import { Response } from "./response";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  about: string;
  interests: string[];
  avatar: string | null;
  link: string;
  email: string;
  personal_email: string;
  created_at: string;
  updated_at: string;
  followers: User[];
  followings: User[];
  responses: Response[];
  url: string;
};

export type UserShort = Pick<
  User,
  "id" | "first_name" | "last_name" | "avatar"
>;
