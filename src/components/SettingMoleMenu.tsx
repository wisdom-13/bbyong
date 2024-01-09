'use client'

import Image from 'next/image';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef, useState } from 'react';
import { Button } from '@/stories/Button';


export default function SettingMoleMenu() {
  const moleImageRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState(1);
  // const [item, setItem] = useState<{ item1: Number, item2: Number, item3: Number, item4: Number }>({ item1: 0, item2: 0, item3: 0, item4: 0 });
  const [itemObj, setItemObj] = useState(
    [
      {
        key: 1,
        name: '눈',
        pos: { x: 0, y: 0 },
        image: 1,
      },
      {
        key: 2,
        name: '머리',
        pos: { x: 100, y: 0 },
        image: 1,
      },
      {
        key: 3,
        name: '옷',
        pos: { x: 0, y: 100 },
        image: 1,
      },
      {
        key: 4,
        name: '장식',
        pos: { x: 100, y: 100 },
        image: 1,
      },
    ]
  );

  const onDownload = () => {
    if (!moleImageRef.current) return
    domtoimage.toBlob(moleImageRef.current).then(blob => {
      saveAs(blob, 'card.png');
    });
  };

  const tmpItemList = (menu: Number) => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      arr.push(
        <div className='w-[80px] h-[80px] bg-blue-100' onClick={() => setItemObj((item) => ({ ...item, ['item' + menu]: i }))}>
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
        {
          itemObj.map((item, i) => (
            <div key={i} className='absolute' style={{ top: `${item.pos.y}px`, left: `${item.pos.x}px` }}>
              <div className={`w-[80px] h-[80px] bg-blue-100`}>
                {
                  item.image != 0
                  && <Image src={`/moleItem/type${i + 1}/${i + 1}-${item.image}.png`} width={80} height={80} alt={`item${i + 1}-${item.image}`} />
                }
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex mt-3 items-center h-10'>
        {
          itemObj.map((item, i) => (
            <div key={i} className='w-[80px] h-full bg-red-100' onClick={() => setTab(i)}>{item.name}</div>
          ))
        }
      </div>

      <div className='mt-3'>
        <div className='grid grid-cols-4 gap-4'>
          {tmpItemList(tab + 1)}
        </div>
      </div>

      <div className='mt-3'>
        <Button label='저장' onClick={onDownload} />
      </div>
    </div>
  );
}

