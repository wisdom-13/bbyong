'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './ui/Button';
import useSWR from 'swr';
import { UserDetail } from '@/model/user';
import { signIn, signOut } from 'next-auth/react';
import Title from './ui/Title';


export default function Main() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);

  return (
    <>
      {user && <Title text='Home' />}
      {!user && <Title text='뿅' />}
      <div className='flex flex-col gap-3 p-6'>
        {
          user ? (
            <>
              <Image src='/mole.png' width={300} height={300} alt='mole' />
              <Link href={user.address ? `/${user.address}` : '/setting/address'}>내 두더지집</Link>
              <Button text='로그아웃' onClick={() => signOut()} />
            </>
          ) : (
            <Button text='시작하기' onClick={() => signIn()} />
          )
        }
      </div>
    </>
  );
}

