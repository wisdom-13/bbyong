import { settingProfile } from '@/service/user';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  return withSessionUser(async (user) => {
    const { name, bio } = await req.json();

    if (name == null || bio == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return settingProfile(user.id, name, bio)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}