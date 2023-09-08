'use client';

import { UserDetail } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';
import { useForm } from "react-hook-form";
import { FormEvent, useEffect } from 'react';

interface HookFormTypes {
  name: string;
  bio: string;
}

export default function SettingProfile() {
  const { data: user } = useSWR<UserDetail>(`/api/me`);
  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        bio: user.bio
      });
    }
  }, [user]);

  if (!user) {
    return false;
  }

  // const onSubmit = (data: HookFormTypes) => (
  //   console.log(data)

  // )

  const onSubmit = (data: HookFormTypes) => {

    fetch('/api/setting/profile', {
      method: 'PUT',
      body: JSON.stringify({ name: data.name, bio: data.bio }),
    }).then(() => {
      alert('변경되었습니다.')
    });
  }

  return (
    <>
      <form className='w-full flex flex-col text-sm' onSubmit={handleSubmit(onSubmit)}>
        <label className='mb-3'>
          <b className='pl-1'>이름</b><br />
          <input
            className='bg-gray-50 rounded-md p-3 outline-none w-full'
            type='text'
            placeholder='이름을 입력하세요.'
            {
            ...register('name', {
              required: true,
              maxLength: {
                value: 10,
                message: "10자 이하의 이름을 입력해주세요."
              },
              minLength: {
                value: 2,
                message: "2자 이상의 이름을 입력해주세요."
              }
            })
            }
          />
          <p className='text-xs text-red-500'>{errors.name?.message}</p>

        </label>
        <label className='mb-3'>
          <b className='pl-1'>자기소개</b><br />
          <textarea
            className='bg-gray-50 rounded-md p-3 outline-none w-full resize-none'
            rows={5}
            placeholder='자기소개를 입력하세요.'
            {
            ...register('bio', {
              required: true,
              maxLength: {
                value: 80,
                message: "80자 이하로 작성해주세요."
              }
            })
            }
          />
          <p className='text-sm text-red-500'>{errors.bio?.message}</p>
        </label>
        <Button text='저장하기' color='blue' />
      </form>
    </>
  );
}

