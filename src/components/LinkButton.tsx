'use client';

import { SimpleLink } from '@/model/link';
import { Button } from '@/stories/Button';

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
    <Button label={link.title} className='mb-2 bg-subColor hover:scale-105' onClick={() => handleLink(link.url)} />
  );
}

