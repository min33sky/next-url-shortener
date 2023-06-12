import { existsBySlug } from '@/libs/appwrite';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const slug = new URL(request.url).searchParams.get('slug');

    if (!slug)
      return NextResponse.json({ message: 'no slug' }, { status: 404 });

    const exists = await existsBySlug(slug);

    if (!exists) {
      return NextResponse.json({ message: 'no url data' }, { status: 404 });
    }

    return NextResponse.json({ url: exists.url }, { status: 200 });
  } catch (error) {
    console.log('### get-url route error: ', error);
    return NextResponse.json({ error: 'get-url route error' }, { status: 500 });
  }
}
