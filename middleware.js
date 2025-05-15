import { NextResponse } from 'next/server'

export function middleware(req) {
  const password = req.cookies.get('site_password')?.value;

  if (password === process.env.SITE_PASSWORD) {
    return NextResponse.next(); // Allow access
  }

  // Redirect to password page
  return NextResponse.redirect(new URL('/password', req.url));
}
