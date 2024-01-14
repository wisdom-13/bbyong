'use client';

import { Button } from '@/stories/Button';
import { Title } from '@/stories/Title';
import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      <div>
        <Title text='시작하기' homeLink={true} />
        <div className='flex flex-col gap-1 p-6'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <Button label={`Sign in with ${provider.name}`} onClick={() => signIn(provider.id, { callbackUrl })} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
