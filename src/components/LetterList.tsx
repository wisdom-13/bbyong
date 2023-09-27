'use client';

import React from 'react';
import Title from './ui/Title';
import useSWR from 'swr';
import { Letter } from '@/model/letter';
import { useRouter } from 'next/router';

type Props = {
  address: string;
}
export default function LetterList({ address }: Props) {

  const { data: letter } = useSWR<Letter[]>(`/api/letter/${address}`);

  console.log(letter)

  return (
    <div>
      <Title text='우편함' />
      <div className='p-6'>

      </div>
    </div>
  );
}

