import { getUserByUserAddress } from '@/service/user';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { address: string };
};

export async function GET(_: NextRequest, context: Context) {
  const address = context.params.address;

  return getUserByUserAddress(address)
    .then((data) => NextResponse.json(data))

}
