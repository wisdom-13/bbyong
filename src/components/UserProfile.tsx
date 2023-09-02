'use client';

import { UserDetail } from '@/model/user';
import Dudge from './Dudge';
import Title from './ui/Title';
import useSWR from 'swr';
import MoreIcon from './ui/icons/MoreIcon';
import { useSession } from 'next-auth/react';
import LinkList from './LinkList';

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
      <Title text={`${user.name}의 페이지`} icon={me?.email == user.email ? <MoreIcon /> : ''} />
      <div className='px-6'>
        {user.bio && <p>자기소개 : {user.bio}</p>}
      </div>
      <Dudge userId={user.id} dudge={user.dudge} />
      <LinkList links={user.links} />
    </div>
  );
}

