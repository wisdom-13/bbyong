'use client'

import Image from 'next/image';

export default function SettingMoleMenu() {
  return (
    <div className='p-6'>
      <div>
        <Image src='/mole.png' width={300} height={300} alt='mole' />
      </div>
      <div className='flex mt-3'>
        <div className='w-[80px] h-10 bg-red-100'>메뉴1</div>
        <div className='w-[80px] h-10 bg-red-100'>메뉴2</div>
        <div className='w-[80px] h-10 bg-red-100'>메뉴3</div>
        <div className='w-[80px] h-10 bg-red-100'>메뉴4</div>
      </div>
      <div className='mt-3'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
        </div>
      </div>
    </div>
  );
}

