'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <div>Main</div>
      {
        session ? (
          <div>
            <p>{session.user?.name} 님 안녕</p>
            <button onClick={() => signOut()}>로그아웃</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>카카오 로그인</button>
        )
      }
    </>
  )
}
