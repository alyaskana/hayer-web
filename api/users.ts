import { API } from "./base";
import { User } from "./types";

class UsersFetcher extends API {
  profile<R = User>() {
    return super.get<R>({
      path: "users/profile",
    });
  }
}

export const usersFetcher = new UsersFetcher();
