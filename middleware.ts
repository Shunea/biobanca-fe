import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import { createSessionOptions } from "lib/session";

const allowedPaths = [
  "/activate-account",
  "/forgot-password",
  "/reset-password",
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const isSecure = req.headers.get("x-forwarded-proto") === "https";
  const sessionOptions = createSessionOptions(isSecure);
  const session = await getIronSession(req, res, sessionOptions);

  const { user } = session;

  const nextUrl = req.nextUrl;
  const pathname = nextUrl.pathname;
  const homeUrl = new URL(`${nextUrl.basePath}/`, nextUrl.origin).toString();

  if (allowedPaths.includes(pathname)) {
    return res;
  }

  if (user && pathname === "/login") {
    return NextResponse.redirect(homeUrl);
  }

  if (!user && pathname !== "/login") {
    return NextResponse.redirect(homeUrl + "login");
  }

  return res;
}

export const config = {
  matcher: ["/((?!.*\\.|api\\/|public|static|_next).*)"],
};
