import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const path = req.nextUrl.pathname;
  const token = await getToken({
    req: req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(token + "middleware token", path);
  if (path.startsWith("/_next") || path.startsWith("/static")) {
    return null;
  }
  if (token && (path === "/register" || path === "/login" || path === "/"))
    return NextResponse.redirect(new URL("/feed", req.url));
  if (
    !token &&
    !(
      path === "/register" ||
      path === "/login" ||
      path.startsWith("/api/auth/")
    )
  ) {
    return NextResponse.redirect(new URL("/register", req.url));
  }
}
