'use client'

import { FormEvent, useState } from 'react';
import Button from './ui/Button';
import useDebounce from '@/hooks/debounce';
import useSWR from 'swr';
import { MoonLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

export default function SettingAddress() {
  const router = useRouter();
  const [address, setAddress] = useState('');
  const debouncedKeyword = useDebounce(address);

  const lenChk = address.length >= 3 && address.length <= 30;
  const regexChk = /^[a-zA-Z0-9._]+$/.test(address)
  const apiAddress = lenChk && regexChk ? debouncedKeyword : '';

  const { data: allAddress, isLoading } = useSWR(`/api/address/${apiAddress}`);

  let errorMsg = '';

  if (!address) {
  } else if (!regexChk) {
    errorMsg = '주소에는 영문, 숫자, 밑줄(_) 및 마침표(.)만 포함할 수 있습니다.';
  } else if (!lenChk) {
    errorMsg = address.length < 3 ? '주소는 3자 이상이어야 합니다.' : '주소는 30자 이하여야 합니다.';
  } else if (allAddress?.address) {
    errorMsg = '이미 사용중인 주소입니다.';
  }

  const successChk = address != '' && errorMsg == '' && !isLoading;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('/api/address', {
      method: 'PUT',
      body: JSON.stringify({ address }),
    }).then(() => {
      router.push(`/${address}`)
    });

  };

  return (
    <form className='flex flex-col gap-3' onSubmit={onSubmit}>
      <p className='text-sm'>입력한 문자로 링크를 생성합니다.</p>
      <label className={`flex relative border rounded-md p-3 ${successChk ? 'border-blue-500' : 'border-gray-100'}`}>
        <p className='text-gray-500'>bbyong.com/</p>
        <input
          className='w-full outline-none'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type='text'
          placeholder='your address' />
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

