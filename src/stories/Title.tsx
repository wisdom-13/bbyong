import HomeIcon from '@/components/ui/icons/Home';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface TitleProps {
  text: string;
  homeLink?: boolean;
  rightItem?: ReactElement | '';
}

/**
 * Primary UI component for user interaction
 */
export const Title = ({ text, homeLink = false, rightItem }: TitleProps) => {
  return (
    <div className='flex items-center justify-between p-6'>
      <div className='w-[20px]'>
        {homeLink && <Link href='/'><HomeIcon /></Link>}
      </div>
      <h1 className='text-2xl font-semibold'>{text}</h1>
      <div className='w-[20px]'>
        {
          rightItem && rightItem
        }
      </div>
    </div>
  );
};

