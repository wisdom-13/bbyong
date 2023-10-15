import { sendLetter } from '@/service/letter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId, name, title, contents, isPublic } = await req.json();

  if (!userId || !name || !title || !contents) {
    return new Response('Bad Request', { status: 400 });
  }

  return sendLetter(userId, name, title, contents, !isPublic)
    .then((data) => NextResponse.json(data));
}