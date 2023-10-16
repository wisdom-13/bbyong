'use client';

import React from 'react';
import Title from './ui/Title';
import useSWR from 'swr';
import { Letter } from '@/model/letter';
import LetterItem from './LetterItem';
import Button from './ui/Button';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { UserDetail } from '@/model/user';

type Props = {
  address: string;
}
export default function LetterList({ address }: Props) {
  const { data: session } = useSession();
  const me = session?.user;

  const { data: letters } = useSWR<Letter[]>(`/api/letter/${address}`);
  const { data: user } = useSWR<UserDetail>(`/api/profile/${address}`);

  let letterList = letters;

  if (me?.id !== user?.id) {
    letterList = letters?.filter((letter) => letter.isPublic)
  }

  return (
    <div className='w-full h-screen relative'>
      <Title text='우편함' />
      <div className=' h-[calc(100vh-116px)] px-6 overflow-scroll scrollbar-hide'>
        {letterList?.length == 0 && <p>받은 편지가 없습니다.</p>}
        {
          letterList?.map((letter) =>
            <LetterItem key={letter.createdAt} letter={letter} />
          )
        }


      </div>
      <div className='w-full absolute bottom-0'>
        <Link href={`/letter/write/${address}`}>
          <Button className='rounded-none' color='blue' text='작성하기' />
        </Link>
      </div>
    </div>
  );
}

