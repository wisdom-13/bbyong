import { getUserByUserLink } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { link: string };
};

export async function GET(_: NextRequest, context: Context) {
  const link = context.params.link;

  return getUserByUserLink(link)
    .then((data) => NextResponse.json(data))

}
