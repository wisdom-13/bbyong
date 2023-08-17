import { getLink } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { link: string };
};

// 링크 중복 검사
export async function GET(_: NextRequest, context: Context) {
  const link = context.params.link;

  return (
    link ? getLink(link).then((data) => NextResponse.json(data)) : ''
  );
}
