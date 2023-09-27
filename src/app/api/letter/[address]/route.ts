import { getLetterList } from '@/service/letter';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { address: string };
};

export async function GET(_: NextRequest, context: Context) {
  const address = context.params.address;

  return getLetterList(address)
    .then((data) => NextResponse.json(data))
}
