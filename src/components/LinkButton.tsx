'use client';

import { SimpleLink } from '@/model/link';
import Button from './ui/Button';

type Props = {
  link: SimpleLink;
}

export default function LinkButton({ link }: Props) {

  const handleLink = (url: string) => {
    window.open(url);

    fetch('/api/link/click', {
      method: 'PUT',
      body: JSON.stringify({ id: link.id }),
    })
  }

  return (
    <Button key={link.id} className='mb-2' onClick={() => handleLink(link.url)} text={link.title} />
  );
}

