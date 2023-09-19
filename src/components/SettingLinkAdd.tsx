import React, { useState } from 'react';
import Input from './ui/Input';
import { useForm } from 'react-hook-form';
import Button from './ui/Button';
import ErrorMsg from './ui/ErrorMsg';
import { KeyedMutator } from 'swr';
import { UserAll } from '@/model/user';

type Props = {
  mutate: KeyedMutator<UserAll>;
}

interface HookFormTypes {
  title: string;
  url: string;
}

export default function SettingLinkAdd({ mutate }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChk, setIsChk] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);



  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>({
    mode: 'onBlur',
    shouldFocusError: false,
  });

  const onSubmit = (data: HookFormTypes) => {
    setIsLoading(true);

    fetch('/api/setting/links', {
      method: 'POST',
      body: JSON.stringify({ title: data.title, url: data.url }),
    }).then(() => {
      setIsOpen(false);
      setIsChk(false);
      setIsLoading(false);
      mutate();

      reset({
        title: '',
        url: '',
      });
    });
  }

  const onChk = () => {
    setIsChk(true)
  }

  const titleChk = register('title', {
    required: true,
    minLength: {
      value: 2,
      message: "2자 이상의 이름을 입력해주세요."
    },
    onBlur: handleSubmit(onChk)
  })

  const urlChk = register('url', {
    required: true,
    pattern: {
      value:
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i,
      message: "URL 형식에 맞지 않습니다.",
    },
    onBlur: handleSubmit(onChk)
  })

  return (
    <>
      {
        isOpen ?
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-2'>
                <Input placeholder='Title' readOnly={isLoading} register={titleChk} />
                <ErrorMsg msg={errors.title?.message} />
                <Input placeholder='Url' className='mt-2' readOnly={isLoading} register={urlChk} />
                <ErrorMsg msg={errors.url?.message} />
              </div>
              <Button text='추가하기1' color={isChk ? 'blue' : 'gray'} disabled={!isChk} isLoading={isLoading} />
            </form>
          </div>
          : <Button text='추가하기2' color='blue' onClick={() => setIsOpen(true)} />
      }

    </>

  );
}

