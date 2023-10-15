'use client';

import React from 'react';
import Title from './ui/Title';
import useSWR from 'swr';
import { Letter } from '@/model/letter';
import LetterItem from './LetterItem';
import Button from './ui/Button';
import Link from 'next/link';

type Props = {
  address: string;
}
export default function LetterList({ address }: Props) {

  const { data: letters } = useSWR<Letter[]>(`/api/letter/${address}`);

  return (
    <div className='w-full h-screen relative'>
      <Title text='우편함' />
      <div className=' h-[calc(100vh-116px)] px-6 overflow-scroll scrollbar-hide'>

        {
          letters?.map((letter) =>
            <LetterItem letter={letter} />
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

