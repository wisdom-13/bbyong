import { getAddress } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { address: string };
};

// 링크 중복 검사
export async function GET(_: NextRequest, context: Context) {
  const address = context.params.address;

  return (
    address ? getAddress(address).then((data) => NextResponse.json(data)) : ''
  );
}
