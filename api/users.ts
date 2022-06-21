import { API } from "./base";
import { User } from "types";

class UsersFetcher extends API {
  profile<R = User>() {
    return super.get<R>({
      path: "users/profile",
    });
  }

  getById<R = User>(id: string | number) {
    return super.get<R>({ path: `users/${id}` });
  }
}

export const usersFetcher = new UsersFetcher();
