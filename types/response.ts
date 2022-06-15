import { UserShort } from "./user";

export type Response = {
  id: number;
  user: UserShort;
  description: string;
  link: string;
  created_at: string;
};
