import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import getBaseUrl from './utils/getBaseUrl';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('request.nextUrl.pathname : ', request.nextUrl.pathname);

  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname === '/success'
  ) {
    return NextResponse.next();
  } else {
    const slug = request.nextUrl.pathname.slice(1);

    try {
      const response = await fetch(
        `http://localhost:3000/api/get-url?slug=${slug}`,
      ).then((res) => res.json());

      if (response.url) {
        return NextResponse.redirect(response.url);
      } else {
        throw new Error('no url data');
      }
    } catch (error) {
      return NextResponse.redirect(getBaseUrl());
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
