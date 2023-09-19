import { addLink, deleteLink, updateLink } from '@/service/link';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return withSessionUser(async (user) => {
    const { title, url } = await req.json();

    if (!title || !url) {
      return new Response('Bad Request', { status: 400 });
    }

    return addLink(user.id, title, url)
      .then((data) => NextResponse.json(data));
  })
}

export async function PUT(req: NextRequest) {
  return withSessionUser(async () => {
    const { id, type, value } = await req.json();

    if (id == null || type == null) {
      return new Response('Bad Request', { status: 400 });
    }

    const request = type == 'delete' ? deleteLink(id) : updateLink(id, type, value);

    return request
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}