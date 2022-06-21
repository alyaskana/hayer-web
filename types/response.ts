import { UserShort } from "./user";

export type Response = {
  id: number;
  user: UserShort;
  description: string;
  link: string;
  is_read: boolean;
  created_at: string;
};
