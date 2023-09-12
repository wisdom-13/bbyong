'use client';

import { UserDetail } from '@/model/user';
import useSWR from 'swr'
import LinkList from './LinkList';

export default function SettingLinks() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);

  return (
    <div>
      {
        user?.links && <LinkList links={user.links} edit={true} />
      }
    </div>
  );
}

