'use client'

import Button from '@/components/ui/Button';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';


export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {
        session ? (
          <div>
            <p>{session.user?.name}의 두더지</p>
            <Image src='/mole.png' width={300} height={300} alt='mole' />
            <Button text='마이페이지' />
            <Button text='로그아웃' onClick={() => signOut()} />
          </div>
        ) : (
          <Button text='시작하기' onClick={() => signIn()} />
        )
      }
    </>
  )
}
