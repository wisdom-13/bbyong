import React, { ReactElement } from 'react';
import './button.css';

interface TitleProps {
  text: string;
  leftItem?: ReactElement | '';
  rightItem?: ReactElement | '';
}

/**
 * Primary UI component for user interaction
 */
export const Title = ({ text, leftItem, rightItem }: TitleProps) => {
  return (
    <div className='flex items-center justify-between p-6'>
      <div>
        {
          leftItem && leftItem
        }
      </div>
      <h1 className='text-2xl font-semibold'>{text}</h1>
      <div>
        {
          rightItem && rightItem
        }
      </div>
    </div>
  );
};

