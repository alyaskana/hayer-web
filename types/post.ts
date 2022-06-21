import { Response } from "./response";
import { Tag } from "./tag";
import { AdType } from "./ad_type";
import { UserShort } from "./user";

export type Post = {
  id: number;
  user: UserShort;
  title: string;
  description: string;
  ad_types: AdType[];
  format: string;
  deadline: string;
  tags: Tag[];
  responses: Response[];
  link: string;
  created_at: string;
  updated_at: string;
  is_favorited: boolean;
  unread_responses_count: number;
};
