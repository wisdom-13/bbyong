'use client';

import React from 'react';
import useSWR from 'swr';
import { Letter } from '@/model/letter';
import LetterItem from './LetterItem';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { UserDetail } from '@/model/user';
import { Title } from '@/stories/Title';
import { Button } from '@/stories/Button';

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
    <div className='w-full h-screen relative '>
      <Title text='우편함' homeLink={true} />
      <div className=' h-[calc(100vh-82px-80px)] px-6 overflow-scroll scrollbar-hide'>
        {letterList?.length == 0 && <p>받은 편지가 없습니다.</p>}
        {
          letterList?.map((letter) =>
            <LetterItem key={letter.createdAt} letter={letter} />
          )
        }
      </div>
      <div className='w-full absolute bottom-0 p-3 pb-5'>
        <Link href={`/letter/write/${address}`}>
          <Button primary={true} label='편지보내기' />
        </Link>
      </div>
    </div>
  );
}

