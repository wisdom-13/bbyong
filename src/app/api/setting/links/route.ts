import { updateLink } from '@/service/link';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  return withSessionUser(async () => {
    const { id, type, value } = await req.json();

    if (id == null || type == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return updateLink(id, type, value)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}