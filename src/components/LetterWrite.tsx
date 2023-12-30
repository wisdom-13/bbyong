'use client'

import { useForm } from 'react-hook-form';
import Input from './ui/Input';
import { useState } from 'react';
import ErrorMsg from './ui/ErrorMsg';
import { UserDetail } from '@/model/user';
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import { Title } from '@/stories/Title';
import { Button } from '@/stories/Button';

type Props = {
  address: string;
}

interface HookFormTypes {
  userId: string;
  title: string;
  name: string;
  contents: string;
  isPublic: boolean;
}

export default function LetterWrite({ address }: Props) {
  const router = useRouter();
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

    fetch('/api/letter', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      setIsLoading(false);
      router.push(`/letter/${address}`)
    });
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

  const contentsChk = register('contents', {
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
            <Input textarea={true} placeholder='내용' register={contentsChk} />
            <ErrorMsg msg={errors.contents?.message} />
          </label>
          <label className='flex items-center mb-5'>
            <input type='checkbox' {...register('isPublic')} />
            <span className='font-semibold pl-2'>비공개</span>
          </label>
          <input type='hidden' value={user.id}  {...register('userId')} />
          <Button label='작성하기' primary={true} />
          {/* isLoading={isLoading} */}
        </form>
      </div>

    </div>
  );
}

