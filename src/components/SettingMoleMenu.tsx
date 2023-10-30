'use client'

import Image from 'next/image';
import Button from './ui/Button';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';


export default function SettingMoleMenu() {
  const moleImageRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState('1');

  const onDownload = () => {
    if (!moleImageRef.current) return
    domtoimage.toBlob(moleImageRef.current).then(blob => {
      saveAs(blob, 'card.png');
    });
  };

  return (
    <div>
      <div ref={moleImageRef} className='moleImage relative'>
        <Image src='/mole.png' width={300} height={300} alt='mole' />
        <div className='absolute top-3 left-10'>
          <div className='w-[80px] h-[80px] bg-blue-100'>item</div>
        </div>
      </div>
      <div className='flex mt-3'>
        <div className='w-[80px] h-10 bg-red-100' onClick={() => setTab('1')}>메뉴1</div>
        <div className='w-[80px] h-10 bg-red-100' onClick={() => setTab('2')}>메뉴2</div>
        <div className='w-[80px] h-10 bg-red-100' onClick={() => setTab('3')}>메뉴3</div>
        <div className='w-[80px] h-10 bg-red-100' onClick={() => setTab('4')}>메뉴4</div>
      </div>
      {
        tab == '1' &&
        <div className='mt-3'>
          <div className='grid grid-cols-4 gap-4'>

            <div className='w-[80px] h-[80px] bg-blue-100'>
              <Image src={`/moleItem/type1/1-1.png`} width={80} height={80} alt='item1-1' />
            </div>

            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item1</div>
          </div>
        </div>
      }
      {
        tab == '2' &&
        <div className='mt-3'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item2</div>
          </div>
        </div>
      }
      {
        tab == '3' &&
        <div className='mt-3'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item3</div>
          </div>
        </div>
      }
      {
        tab == '4' &&
        <div className='mt-3'>
          <div className='grid grid-cols-4 gap-4'>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
            <div className='w-[80px] h-[80px] bg-blue-100'>item4</div>
          </div>
        </div>
      }
      <div className='mt-3'>
        <Button text='저장' onClick={onDownload} />
      </div>
    </div>
  );
}

