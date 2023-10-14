'use client'

import { useForm } from 'react-hook-form';
import Button from './ui/Button';
import Input from './ui/Input';
import Title from './ui/Title';
import { useState } from 'react';
import ErrorMsg from './ui/ErrorMsg';
import { UserDetail } from '@/model/user';
import useSWR from 'swr'

type Props = {
  address: string;
}

interface HookFormTypes {
  title: string;
  name: string;
  content: string;
  isHidden: boolean;
}

export default function LetterWrite({ address }: Props) {
  const { data: user } = useSWR<UserDetail>(`/api/profile/${address}`);

  const [isLoading, setIsLoading] = useState(false);

  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>({
    mode: 'onBlur',
    shouldFocusError: false,
  });

  if (!user) {
    return false;
  }

  const onSubmit = (data: HookFormTypes) => {
    setIsLoading(true);
    console.log(data)
  }

  const nameChk = register('name', {
    required: true,
    minLength: {
      value: 2,
      message: "2자 이상의 이름을 입력해주세요."
    },
  });

  const titleChk = register('title', {
    required: true,
    minLength: {
      value: 2,
      message: "2자 이상의 제목을 입력해주세요."
    },
  });

  const contentChk = register('content', {
    required: true,
    minLength: {
      value: 10,
      message: "10자 이상의 내용을 입력해주세요."
    },
  });


  return (
    <div className=' text-sm'>
      <Title text='편지 작성' />
      <div className='px-6'>
        <h3 className='font-bold text-2xl mb-5'>To. {user?.name}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='block mb-3'>
            <Input placeholder='이름' register={nameChk} />
            <ErrorMsg msg={errors.name?.message} />
          </label>
          <label className='block mb-3'>
            <Input placeholder='제목' register={titleChk} />
            <ErrorMsg msg={errors.title?.message} />
          </label>
          <label className='block mb-3'>
            <Input textarea={true} placeholder='내용' register={contentChk} />
            <ErrorMsg msg={errors.content?.message} />
          </label>
          <label className='flex items-center mb-5'>
            <input type='checkbox' {...register('isHidden')} />
            <span className='font-semibold pl-2'>비공개</span>
          </label>

          <Button color='blue' text='작성하기' isLoading={isLoading} />
        </form>
      </div>

    </div>
  );
}

