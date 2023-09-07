'use client';

import { UserDetail } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';
import { useForm } from "react-hook-form";
import { FormEvent } from 'react';


export default function SettingProfile() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);
  const { } = useForm();

  if (!user) {
    return false;
  }

  const name = 'new name';
  const bio = 'new bio'

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('/api/setting/profile', {
      method: 'PUT',
      body: JSON.stringify({ name, bio }),
    }).then(() => {

    });
  }

  return (
    <>
      <form className='w-full flex flex-col text-sm' onSubmit={handleSubmit}>
        <label className='mb-3'>
          <b className='pl-1'>이름</b><br />
          <input
            className='bg-gray-50 rounded-md p-3 outline-none w-full'
            type='text'
            value={user.name}
            placeholder='이름을 입력하세요.'
          />
        </label>
        <label className='mb-3'>
          <b className='pl-1'>자기소개</b><br />
          <textarea
            className='bg-gray-50 rounded-md p-3 outline-none w-full resize-none'
            value={user.bio}
            rows={5}
            placeholder='자기소개를 입력하세요.'
          />
        </label>
        <Button text='저장하기' color='blue' />
      </form>
    </>
  );
}

