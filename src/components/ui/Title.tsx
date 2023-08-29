import { ReactElement } from 'react';

type Props = {
  text: string;
  icon?: ReactElement | '';
}

export default function Title({ text, icon }: Props) {
  return (
    <div className='flex items-center justify-between p-6'>
      <h1 className='text-2xl font-semibold'>{text}</h1>
      {
        icon && <div>{icon}</div>
      }
    </div>
  );
}

