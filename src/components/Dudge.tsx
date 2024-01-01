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

  const handleClick = () => {
    setCount(count + 1);

    carrotSound.currentTime = 0;
    carrotSound.play();

    fetch('/api/dudge', {
      method: 'PUT',
      body: JSON.stringify({ id: userId }),
    })
  }

  return (
    <div>
      <button className='mt-3 w-full hover:scale-105' onClick={handleClick}>
        <Image src='/main_mole.png' width={300} height={300} alt='mole' className='w-[300px] m-auto' />
      </button>
      <div className='text-xs bg-white rounded-full text-mainColor py-1 flex items-center w-24 m-auto justify-center relative z-10'>
        <Image src='/hammer.png' width={20} height={20} alt='hammer' className='mr-2' />
        {count > 9999999 ? 9999999 : count}
      </div>
    </div>
  );
}

