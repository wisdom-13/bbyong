'use client';

import { SimpleLink } from '@/model/link';
import Input from './ui/Input';

type Props = {
  link: SimpleLink;
}

export default function LinkEdit({ link }: Props) {
  return (
    <div className='w-full'>
      <div>
        <Input value={link.title} style='simpleInput' placeholder='Title' />
      </div>
      <div>
        <Input value={link.url} style='simpleInput' placeholder='URL' />
      </div>
    </div>
  );
}

