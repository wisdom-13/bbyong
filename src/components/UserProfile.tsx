'use client';

import { UserDetail } from '@/model/user';
import Dudge from './Dudge';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import LinkList from './LinkList';
import Link from 'next/link';
import { Title } from '@/stories/Title';
import SettingIcon from './ui/icons/SettingIcon';
import Image from 'next/image';
import { Button } from '@/stories/Button';

type Props = {
  address: string;
}

export default function UserProfile({ address }: Props) {
  const { data: user } = useSWR<UserDetail>(`/api/profile/${address}`);

  const { data: session } = useSession();
  const me = session?.user;

  if (!user) return;

  return (
    <div>
      <Title text={`${user.name}의 집`} homeLink={true} rightItem={me?.email == user.email ? <Link href='/setting/profile'><SettingIcon /></Link> : ''} />
      <div className='p-6 pt-0 relative'>
        {user.bio &&
          <div className='ballon bg-white rounded-lg p-3 text-center mb-3 whitespace-pre-wrap'>
            {user.bio}
          </div>
        }
        <Dudge userId={user.id} dudge={user.dudge} />
        <Link href={`/letter/${address}`} className='absolute bottom-[55px] right-[5px] z-10 hover:scale-105'>
          <Image src='/mailbox.png' width={120} height={120} alt='hammer' className='mr-2' />
        </Link>
        <div className='shape'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path className='fill-mainColor' d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'></path>
          </svg>
        </div>
      </div>
      <div className='bg-mainColor p-6 mt-[-50px]'>
        <div className='text-white text-xl mt-5 mb-3'>두더지 굴</div>
        <LinkList links={user.links} />
        {
          me && <Button type='link' label='로그아웃' className='text-subColor text-sm w-full mt-5' onClick={() => signOut()} />
        }
      </div>
    </div>
  );
}

