'use client'

import { useState } from "react";
import Button from './ui/Button';


type Props = {
  userId: string;
  dudge: number;
}

export default function Dudge({ userId, dudge = 0 }: Props) {

  const [count, setCount] = useState(dudge);

  const handleClick = () => {
    setCount(count + 1);

    fetch('/api/dudge', {
      method: 'PUT',
      body: JSON.stringify({ id: userId }),
    })
  }

  return (
    <div>
      <div>카운트:{count}</div>
      <Button text='뿅' className='mt-3' onClick={handleClick} />
    </div>
  );
}

