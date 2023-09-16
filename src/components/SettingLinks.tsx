'use client';

import { UserAll } from '@/model/user';
import useSWR from 'swr'
import LinkEditList from './LinkEditList';

export default function SettingLinks() {
  const { data: user } = useSWR<UserAll>(`/api/me`);

  return (
    <div>
      {
        user?.links && <LinkEditList links={user.links} />
      }
    </div>
  );
}

