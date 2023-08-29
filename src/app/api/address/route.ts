import { settingAddress } from '@/service/user';
import { withSessionUser } from '@/util/session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json('');
}

// 주소 생성
export async function PUT(req: NextRequest) {
  return withSessionUser(async (user) => {
    const { address } = await req.json();

    if (address == null) {
      return new Response('Bad Request', { status: 400 });
    }

    return settingAddress(user.id, address)
      .then(res => NextResponse.json(res))
      .catch(error => new Response(JSON.stringify(error), { status: 500 }))
  })
}