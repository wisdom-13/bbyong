'use client'

import { FormEvent, useState } from 'react';
import Button from './ui/Button';
import useDebounce from '@/hooks/debounce';
import useSWR from 'swr';
import { MoonLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

export default function SettingLink() {
  const router = useRouter();
  const [link, setLink] = useState('');
  const debouncedKeyword = useDebounce(link);

  const lenChk = link.length >= 3 && link.length <= 30;
  const regexChk = /^[a-zA-Z0-9._]+$/.test(link)
  const apiLink = lenChk && regexChk ? debouncedKeyword : '';

  const { data: links, isLoading } = useSWR(`/api/link/${apiLink}`);

  let errorMsg = '';

  if (!link) {
  } else if (!regexChk) {
    errorMsg = '링크에는 영문, 숫자, 밑줄(_) 및 마침표(.)만 포함할 수 있습니다.';
  } else if (!lenChk) {
    errorMsg = link.length < 3 ? '링크는 3자 이상이어야 합니다.' : '링크는 30자 이하여야 합니다.';
  } else if (links?.link) {
    errorMsg = '이미 사용중인 링크입니다.';
  }

  const successChk = link != '' && errorMsg == '' && !isLoading;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('/api/link', {
      method: 'PUT',
      body: JSON.stringify({ link }),
    }).then(() => {
      router.push(`/${link}`)
    });

  };

  return (
    <form className='flex flex-col gap-3' onSubmit={onSubmit}>
      <p className='text-sm'>입력한 문자로 링크를 생성합니다.</p>
      <label className={`flex relative border rounded-md p-3 ${successChk ? 'border-blue-500' : 'border-gray-100'}`}>
        <p className='text-gray-500'>bbyong.com/</p>
        <input
          className='w-full outline-none'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type='text'
          placeholder='your link' />
        {isLoading &&
          <span className='absolute z-20 inset-0 pr-3 flex justify-end items-center'>
            <MoonLoader color='gray' size={15} speedMultiplier={0.5} />
          </span>
        }
      </label>
      {(!isLoading && errorMsg) && <p className='text-red-500 text-xs'>{errorMsg}</p>}
      <Button text='시작하기' color={`${successChk ? 'blue' : 'gray'}`} disabled={!successChk} />
    </form>
  );
}

