import { getUserByUseremail } from '@/service/user';
import { NextResponse } from 'next/server';
import { withSessionUser } from '@/util/session';

export async function GET() {
  return withSessionUser(async (user) =>
    getUserByUseremail(user.email)
      .then((data) => NextResponse.json(data))
  )
}
