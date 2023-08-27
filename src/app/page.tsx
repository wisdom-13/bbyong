'use client'

import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';


export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      {user && <Title text='Home' />}
      {!user && <Title text='뿅' />}
      <div className='flex flex-col gap-3 p-6'>
        {
          user ? (
            <>
              <Image src='/mole.png' width={300} height={300} alt='mole' />
              <Link href={user.link ? `/${user.link}` : '/setting/link'}>내 두더지집</Link>
              <Button text='로그아웃' onClick={() => signOut()} />
            </>
          ) : (
            <Button text='시작하기' onClick={() => signIn()} />
          )
        }
      </div>
    </>
  )
}
