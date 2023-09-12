'use client';

import { SimpleLink } from '@/model/link';

type Props = {
  link: SimpleLink;
}

export default function LinkEdit({ link }: Props) {
  return (
    <div>
      <div>
        <input type='text' value={link.title} />
      </div>
      <div>
        <input type='text' value={link.url} />
      </div>
    </div>
  );
}

