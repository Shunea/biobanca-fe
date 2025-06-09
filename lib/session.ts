import { AuthUser } from "@/features/auth/types";
import type { IronSessionOptions } from "iron-session";

export const createSessionOptions = (
  isSecure: boolean
): IronSessionOptions => ({
  password: process.env.SESSION_SECRET as string,
  cookieName: "covid19_usmf_cookie",
  cookieOptions: {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production" && isSecure,
  },
});

export const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "covid19_usmf_cookie",
  cookieOptions: {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: AuthUser;
  }
}
