import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import React from 'react';

export default function page() {
  return (
    <div>
      <Title text='Setting Link' />
      <div className='p-6'>
        <form className='flex flex-col gap-3'>
          <p className='text-sm'>입력한 문자로 링크를 생성합니다.</p>
          <label className='flex border border-gray-100 rounded-md p-3'>
            <p>bbyong.com/</p>
            <input className='text-blue-500 w-full outline-none' type='text' placeholder='your link' />
          </label>
          <Button text='시작하기' className='bg-blue-500 hover:bg-blue-600 text-white' />
        </form>
      </div>
    </div>
  );
}

