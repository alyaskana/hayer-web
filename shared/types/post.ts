import { Response } from "./response";
import { Tag } from "./tag";
import { AdType } from "./ad_type";
import { UserShort } from "./user";

export type Post = {
  id: number;
  user: UserShort;
  title: string;
  description: string;
  ad_types: {
    name: string;
    id: number;
    created_at: string;
    updated_at: string;
  }[];
  format: string;
  deadline: string;
  tags: Tag[];
  responses: Response[];
  created_at: string;
  updated_at: string;
};
