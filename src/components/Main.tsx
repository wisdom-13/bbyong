'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import { UserDetail } from '@/model/user';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@/stories/Button';
import { Title } from '@/stories/Title';


export default function Main() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);

  return (
    <>
      <Title text='뿅' />
      <div className='flex flex-col gap-1 p-6'>
        {
          user ? (
            <>
              <Image src='/main_mole.png' width={300} height={300} alt='mole' className='w-[300px] m-auto' />
              <br></br>
              <Link href={user.address ? `/${user.address}` : '/setting/address'}>
                <Button label='내 두더지집' primary={true} />
              </Link>
              <Button type='link' label='로그아웃' onClick={() => signOut()} />
            </>
          ) : (
            <>
              <Image src='/main_mole.png' width={300} height={300} alt='mole' className='w-[300px] m-auto' />
              <br></br>
              <Button label='시작하기' onClick={() => signIn()} />
            </>
          )
        }
      </div>
    </>
  );
}

