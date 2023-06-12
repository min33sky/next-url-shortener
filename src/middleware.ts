import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('request.nextUrl.pathname : ', request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  } else {
    //! 지우고 DB에서 직접 불러오기
    fetch('http://localhost:3000/api/get-url')
      .then((res) => res.json())
      .then((data) => console.log(data));

    // TODO: DB에서 해당 URL을 찾아서 redirect. 없으면 404
    const url = new URL('https://www.google.com');
    return NextResponse.redirect(url.href);
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
