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
      <form className='w-full flex flex-col'>
        <label>
          <b>이름</b><br />
          <input type='text' value={user.name} placeholder='이름을 입력하세요.' />
        </label>
        <label>
          <b>자기소개</b><br />
          <textarea value={user.bio} placeholder='자기소개를 입력하세요.'></textarea>
        </label>
        <Button text='저장하기' />
      </form>
    </>
  );
}

