'use client'

import Image from 'next/image';
import Button from './ui/Button';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';


export default function SettingMoleMenu() {
  const moleImageRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(1);
  const [item, setItem] = useState<{ item1: Number, item2: Number, item3: Number, item4: Number }>({ item1: 0, item2: 0, item3: 0, item4: 0 });

  const onDownload = () => {
    if (!moleImageRef.current) return
    domtoimage.toBlob(moleImageRef.current).then(blob => {
      saveAs(blob, 'card.png');
    });
  };

  const tmpItemMenu = ['눈', '머리', '옷', '장식'];

  const tmpItemList = (menu: Number) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(
        <div className='w-[80px] h-[80px] bg-blue-100' onClick={() => setItem((item) => ({ ...item, ['item' + menu]: i }))}>
          <Image src={`/moleItem/type${menu}/${menu}-${i}.png`} width={80} height={80} alt={`item${menu}-${i}`} />
        </div>
      )
    }
    return arr;
  }

  return (
    <div>
      <div ref={moleImageRef} className='moleImage relative'>
        <Image src='/mole.png' width={300} height={300} alt='mole' />
        <div className='absolute top-3 left-10'>
          <div className='w-[80px] h-[80px] bg-blue-100'>
            {item.item1 != 0 && <Image src={`/moleItem/type1/1-${item.item1}.png`} width={80} height={80} alt={`item1-${item.item1}`} />}
          </div>
        </div>
      </div>

      <div className='flex mt-3 items-center h-10'>
        {
          tmpItemMenu.map((menu, i) => (
            <div key={i} className='w-[80px] h-full bg-red-100' onClick={() => setTab(i)}>{menu}</div>
          ))
        }
      </div>

      <div className='mt-3'>
        <div className='grid grid-cols-4 gap-4'>
          {tmpItemList(tab + 1)}
        </div>
      </div>

      <div className='mt-3'>
        <Button text='저장' onClick={onDownload} />
      </div>
    </div>
  );
}

