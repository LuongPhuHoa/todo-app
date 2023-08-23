import { NextResponse } from "next/server";
import { urlToHttpOptions } from "url";
import type { NextRequest } from 'next/server'
import { verify } from "@/services/jwt";


export default async function middleware(req: NextRequest) {
  const jwt = req.cookies.get("token");
  const url = req.url;
  const {pathname} = req.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/signin";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt.value, String(process.env.JWT_SECRET));
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/signin";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}