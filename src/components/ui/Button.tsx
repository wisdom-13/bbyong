import { MoonLoader } from 'react-spinners';

type Props = {
  text: string;
  color?: 'gray' | 'red' | 'blue';
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({ text, color = 'gray', className, onClick, isLoading, disabled }: Props) {
  let colorStyle = '';

  switch (color) {
    case 'gray':
      colorStyle = `bg-gray-50 ${!disabled && 'hover:bg-gray-100'}`;
      break;
    case 'blue':
      colorStyle = `bg-blue-500 text-white ${!disabled && 'hover:bg-blue-600'}`;
      break;
    case 'red':
      colorStyle = `bg-red-500 text-white ${!disabled && 'hover:bg-red-600'}`;
      break;
  }

  return (
    <div className='relative'>
      <button
        className={`w-full min-h-[36px] p-2 text-sm rounded-md ${colorStyle} ${className} ${isLoading && 'opacity-80'}`}
        onClick={onClick}
        disabled={disabled || isLoading}>
        {!isLoading && text}
      </button>
      {isLoading &&
        <span className='absolute z-20 inset-0 flex justify-center items-center'>
          <MoonLoader color='white' size={15} speedMultiplier={0.5} />
        </span>
      }
    </div>
  );
}

