'use client';

import { UserAll } from '@/model/user';
import useSWR from 'swr'
import SettingLinkTitle from './SettingLinkTitle';
import SettingLinkUrl from './SettingLinkUrl';
import Toggle from './ui/Toggle';
import SettingLinkUse from './SettingLinkUse';

export default function SettingLinks() {
  const { data: user } = useSWR<UserAll>(`/api/me`);
  const links = user?.links;

  if (!links) {
    return false;
  }

  return (
    <div>
      {
        <div className='flex flex-col'>
          {
            links.map((link) => (
              <div key={link.id} className='w-full mb-3'>
                <div className='flex'>
                  <SettingLinkTitle id={link.id} title={link.title} />
                  <SettingLinkUse id={link.id} isUse={link.isUse} />
                </div>
                <div>
                  <SettingLinkUrl id={link.id} url={link.url} />
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

