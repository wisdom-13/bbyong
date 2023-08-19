'use client'

import { User } from '@/model/user';
import { useState } from "react";
import Button from './ui/Button';

type Props = {
  user: User;
}

type Dudge = {
  count: number;
}

export default function Dudge({ user }: Props) {
  const [count, setCount] = useState(user.dudge);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='p-6'>
      <div>카운트:{count}</div>
      <Button text='뿅' className='mt-3' onClick={handleClick} />
    </div>
  );
}

