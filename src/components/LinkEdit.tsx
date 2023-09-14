'use client';

import { Link } from '@/model/link';
import Input from './ui/Input';
import Toggle from './ui/Toggle';

type Props = {
  link: Link;
}

export default function LinkEdit({ link }: Props) {
  return (
    <div className='w-full mb-3'>
      <div className='flex'>
        <Input value={link.title} style='simpleInput' className='font-bold' placeholder='Title' />
        <Toggle id={link.id} checked={link.isUse} />
      </div>
      <div>
        <Input value={link.url} style='simpleInput' placeholder='URL' />
      </div>
    </div>
  );
}

