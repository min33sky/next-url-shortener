import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

/**
 * TODO: 삭제할 코드
 */

export async function POST(request: Request) {
  try {
    let { originalUrl, shortUrl } = await request.json();

    if (!originalUrl) {
      return NextResponse.json(
        { error: 'originalUrl is empty' },
        { status: 400 },
      );
    }

    // shortUrl이 없으면 새로 생성
    if (!shortUrl) {
      shortUrl = nanoid(8);
    }

    return NextResponse.json({ originalUrl, shortUrl }, { status: 200 });
  } catch (error) {
    console.log('### set-url route error: ', error);
    return NextResponse.json({ error: 'set-url route error' }, { status: 500 });
  }
}
