'use client';

import { UserAll } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import Input from './ui/Input';
import ErrorMsg from './ui/ErrorMsg';

interface HookFormTypes {
  name: string;
  bio: string;
}

export default function SettingProfile() {
  const { data: user } = useSWR<UserAll>(`/api/me`);
  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>({ mode: 'onBlur' });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        bio: user.bio
      });
    }
  }, [reset, user]);

  if (!user) {
    return false;
  }

  const onSubmit = (data: HookFormTypes) => {
    setIsLoading(true);

    fetch('/api/setting/profile', {
      method: 'PUT',
      body: JSON.stringify({ name: data.name, bio: data.bio }),
    }).then(() => {
      setIsLoading(false);
    });
  }

  const nameChk = register('name', {
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

  const bioChk = register('bio', {
    required: true,
    maxLength: {
      value: 80,
      message: "80자 이하로 작성해주세요."
    }
  })

  return (
    <>
      <form className='w-full flex flex-col text-sm' onSubmit={handleSubmit(onSubmit)}>
        <label className='mb-3'>
          <b className='pl-1'>이름</b><br />
          <Input type='text'
            placeholder='이름을 입력하세요.'
            readOnly={isLoading}
            register={nameChk}
            style='bgInput'
          />
          <ErrorMsg msg={errors.name?.message} />
        </label>
        <label className='mb-3'>
          <b className='pl-1'>자기소개</b><br />
          <Input type='text'
            textarea={true}
            placeholder='자기소개를 입력하세요.'
            readOnly={isLoading}
            register={bioChk}
            style='bgInput'
          />
          <ErrorMsg msg={errors.bio?.message} />
        </label>
        <Button text='저장하기' color='blue' isLoading={isLoading} />
      </form>
    </>
  );
}

