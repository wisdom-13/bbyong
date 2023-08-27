'use client';

import { User } from '@/model/user';
import Dudge from './Dudge';
import Title from './ui/Title';
import useSWR from 'swr';

type Props = {
  link: string;
}


export default function UserProfile({ link }: Props) {
  const { data: user } = useSWR<User>(`/api/profile/${link}`);

  if (!user) return;

  return (
    <div>
      <Title text={`${user.name}의 페이지`} />
      <Dudge userId={user.id} dudge={user.dudge} />
    </div>
  );
}

