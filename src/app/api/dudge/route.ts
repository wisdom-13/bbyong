import { addDudge } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const { id } = await req.json();

  if (id == null) {
    return new Response('Bad Request', { status: 400 });
  }

  return addDudge(id)
    .then(res => NextResponse.json(res))
    .catch(error => new Response(JSON.stringify(error), { status: 500 }))
};

