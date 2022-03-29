import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
} from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import { authFetcher, usersFetcher, User } from "@shared/api";

type AuthContext = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, link: string) => void;
  logout: () => void;
};

const authContext = createContext<AuthContext>(null!);

export const AuthProvider: FC = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useAuthProvider = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    authFetcher.login(email, password).then((response) => {
      const token = response.headers.authorization;
      Cookies.set("token", token);
      setToken(token);
      setUser(response.data);
      router.push("/");
    });
  };

  const signup = (email: string, password: string, link: string) => {
    authFetcher.signup(email, password, link).then((response) => {
      const token = response.headers.authorization;
      Cookies.set("token", token);
      setToken(token);
      setUser(response.data);
      router.push("/");
    });
  };

  const logout = () => {
    authFetcher.logout().then(() => {
      setUser(null);
      setToken(null);
      Cookies.remove("token");
    });
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      usersFetcher.profile().then((response) => {
        setUser(response.data);
      });
    }
  }, [token]);

  return {
    user,
    token,
    login,
    signup,
    logout,
  };
};