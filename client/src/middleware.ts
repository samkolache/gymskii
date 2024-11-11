import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  
  // Redirect if there is no token
  if (!token) {
    const loginUrl = new URL('/sign-in', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Continue to the requested route
  return NextResponse.next();
}


export const config = {
  matcher: ['/profile'],
};
