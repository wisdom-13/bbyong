import SettingMenu from '@/components/SettingMenu';
import SettingMoleMenu from '@/components/SettingMoleMenu';
import React from 'react';

export default function page() {
  return (
    <div className='px-6'>
      <SettingMenu />
      <SettingMoleMenu />
    </div>
  );
}

