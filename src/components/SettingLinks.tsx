'use client';

import { UserAll } from '@/model/user';
import useSWR from 'swr'
import SettingLinkTitle from './SettingLinkTitle';
import SettingLinkUrl from './SettingLinkUrl';
import SettingLinkUse from './SettingLinkUse';
import Button from './ui/Button';
import { useState } from 'react';
import SettingLinkAdd from './SettingLinkAdd';
import DeleteIcon from './ui/icons/DeleteIcon';

export default function SettingLinks() {

  const { data: user } = useSWR<UserAll>(`/api/me`);
  const links = user?.links;

  if (!links) {
    return false;
  }

  const handleDelete = (id: string) => {

  }


  return (
    <div>
      <div className='mb-3'>
        <SettingLinkAdd />
      </div>
      <div>
        {
          links.map((link) => (
            <div key={link.id} className='w-full mb-5 flex items-center justify-between'>
              <div className='flex flex-col'>
                <SettingLinkTitle id={link.id} title={link.title} />
                <SettingLinkUrl id={link.id} url={link.url} />
              </div>
              <div className='flex flex-col items-end'>
                <SettingLinkUse id={link.id} isUse={link.isUse} />
                <button className='mt-2' onClick={() => handleDelete(link.id)}>
                  <DeleteIcon className='text-gray-500' />
                </button>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

