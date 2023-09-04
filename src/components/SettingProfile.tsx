'use client';

import { UserDetail } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';


export default function SettingProfile() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);

  if (!user) {
    return false;
  }

  return (
    <>
      <form className='w-full flex flex-col text-sm'>
        <label className='mb-3'>
          <b className='pl-1'>이름</b><br />
          <input className='bg-gray-50 rounded-md p-3 outline-none w-full' type='text' value={user.name} placeholder='이름을 입력하세요.' />
        </label>
        <label className='mb-3'>
          <b className='pl-1'>자기소개</b><br />
          <textarea className='bg-gray-50 rounded-md p-3 outline-none w-full resize-none' value={user.bio} rows={5} placeholder='자기소개를 입력하세요.'></textarea>
        </label>
        <Button text='저장하기' color='blue' />
      </form>
    </>
  );
}

