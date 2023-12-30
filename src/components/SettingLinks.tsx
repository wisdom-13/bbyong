'use client';

import { UserAll } from '@/model/user';
import useSWR from 'swr'
import SettingLinkTitle from './SettingLinkTitle';
import SettingLinkUrl from './SettingLinkUrl';
import SettingLinkUse from './SettingLinkUse';
import SettingLinkAdd from './SettingLinkAdd';
import SettingLinkDelete from './SettingLinkDelete';

export default function SettingLinks() {

  const { data: user, mutate } = useSWR<UserAll>(`/api/me`);
  const links = user?.links;

  if (!links) {
    return false;
  }

  return (
    <div>
      <div className='mb-3'>
        <SettingLinkAdd mutate={mutate} />
      </div>
      <div>
        {
          links.map((link) => (
            <div key={link.id} className='mb-5 bg-white rounded-lg p-4'>
              <div className='w-full flex items-center justify-between '>
                <div className='w-full pr-3'>
                  <SettingLinkTitle id={link.id} title={link.title} />
                  <SettingLinkUrl id={link.id} url={link.url} />
                </div>
                <div>
                  <SettingLinkUse id={link.id} isUse={link.isUse} />
                </div>
              </div>
              <SettingLinkDelete id={link.id} mutate={mutate} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

