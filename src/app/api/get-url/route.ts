import { NextResponse } from 'next/server';

/**
 * TODO: 삭제할 코드
 */

export async function GET(request: Request) {
  try {
    return NextResponse.json(
      { message: '****** get-url route' },
      { status: 200 },
    );
  } catch (error) {
    console.log('### get-url route error: ', error);
    return NextResponse.json({ error: 'get-url route error' }, { status: 500 });
  }
}
