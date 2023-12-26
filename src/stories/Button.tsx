import { MoonLoader } from 'react-spinners';

interface ButtonProps {
  type?: 'button' | 'link';
  primary?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  primary = false,
  size = 'medium',
  isLoading = false,
  disabled = false,
  className,
  label,
  ...props
}: ButtonProps) => {

  let baseStyle = '';

  switch (type) {
    case 'button':
      baseStyle = `relative w-full h-[46px] border rounded-full p-3 ${primary ? 'bg-mainColor text-white' : 'bg-subColor'} ${isLoading || disabled && 'opacity-80'}`;
      break;
    case 'link':
      baseStyle = `inline-block p-1`;
      break;
  }

  return (

    <button
      className={`${baseStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading
        ?
        <span className='absolute z-20 inset-0 flex justify-center items-center'>
          <MoonLoader color='white' size={15} speedMultiplier={0.5} />
        </span>
        :
        label
      }
    </button>
  );
};
