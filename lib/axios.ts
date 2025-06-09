import { logoutFn } from "@/features/auth/api/logout";
import storage from "@/utils/storage";
import Axios from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const authRequestInterceptor = () => {
  const token = storage.getToken();

  if (token) {
    const { exp } = jwtDecode<JwtPayload>(token);
    const now = new Date().getTime() / 1000;

    if (exp && exp < now) {
      logoutFn();
    } else {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }
};

axios.interceptors.request.use(
  (config) => {
    authRequestInterceptor();
    return config;
  },
  null,
  { synchronous: true }
);

authRequestInterceptor();
