import { NextResponse } from 'next/server';

/**
 * TODO: 삭제할 코드
 */

export async function POST(request: Request) {
  try {
    const { originalUrl, shortUrl } = await request.json();

    return NextResponse.json({ originalUrl, shortUrl }, { status: 200 });
  } catch (error) {
    console.log('### set-url route error: ', error);
    return NextResponse.json({ error: 'set-url route error' }, { status: 500 });
  }
}
