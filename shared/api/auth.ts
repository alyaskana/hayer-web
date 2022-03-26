import { API } from "./base";
import { User } from "./types";

class AuthFetcher extends API {
  login<R = User>(email: string, password: string) {
    return super.post<R>({
      path: "api/login",
      params: {
        user: {
          email,
          password,
        },
      },
    });
  }
  signup<R = User>(email: string, password: string, link: string) {
    return super.post<R>({
      path: "api/signup",
      params: {
        user: {
          email,
          password,
          link,
        },
      },
    });
  }

  logout() {
    return super.delete<void>({
      path: "api/logout",
    });
  }
}

export const authFetcher = new AuthFetcher();
