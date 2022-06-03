import { API } from "./base";
import { User } from "shared/types";

class AuthFetcher extends API {
  login<R = User>(email: string, password: string) {
    return super.post<R>({
      path: "login",
      params: {
        user: {
          email,
          password,
        },
      },
    });
  }

  signup<R = User>(email: string) {
    return super.post<R>({
      path: "signup",
      params: {
        user: {
          email,
        },
      },
    });
  }

  verifyEmail(id: number | string, code: string) {
    return super.post<void>({
      path: `users/${id}/verify_email`,
      params: {
        code,
      },
    });
  }

  completeSignUp(id: number | string, data: Record<string, string>) {
    return super.post<User>({
      path: `users/${id}/complete_signup`,
      params: { user: data },
    });
  }

  update(id: number | string, data: Record<string, string>) {
    return super.patch<void>({
      path: `users/${id}`,
      params: { user: data },
    });
  }

  logout() {
    return super.delete<void>({
      path: "logout",
    });
  }
}

export const authFetcher = new AuthFetcher();
