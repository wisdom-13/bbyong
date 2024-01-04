'use client'

import { MouseEvent, useState } from "react";
import Image from 'next/image';
import Effect from './ui/Effect';
const carrotSound = new Audio('/sound/carrot_pull.mp3');

type Props = {
  userId: string;
  dudge: number;
}

export default function Dudge({ userId, dudge = 0 }: Props) {
  const [count, setCount] = useState(dudge);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(count + 1);

    carrotSound.currentTime = 0;
    carrotSound.play();

    fetch('/api/dudge', {
      method: 'PUT',
      body: JSON.stringify({ id: userId }),
    })

    setTop(e.clientY);
    setLeft(e.clientX);
    console.log(top)
  }

  const clickEffect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // const result = document.getElementById('wrap');
    // e.offsetX
    console.log('a')
  }

  return (
    <div>
      <button className='mt-3 w-full hover:scale-105' onClick={(e) => handleClick(e)}>
        <Image src='/main_mole.png' width={300} height={300} alt='mole' className='w-[300px] m-auto' />
      </button>
      <div className='text-xs bg-white rounded-full text-mainColor py-1 flex items-center w-24 m-auto justify-center relative z-10'>
        <Image src='/hammer.png' width={20} height={20} alt='hammer' className='mr-2' />
        {count > 9999999 ? 9999999 : count}
      </div>
      {/* <Effect top={top} left={left} /> */}
    </div>
  );
}

