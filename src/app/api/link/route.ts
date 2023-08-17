import { settingLink } from '@/service/user';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json('');
}

// 링크 생성
export async function PUT(req: NextRequest) {
  return withSessionUser(async (user) => {
    const { link } = await req.json();

    if (link == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return settingLink(user.id, link)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}