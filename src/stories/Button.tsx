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
  size = 'large',
  isLoading = false,
  disabled = false,
  className,
  label,
  ...props
}: ButtonProps) => {

  let baseStyle = '';

  switch (type) {
    case 'button':
      baseStyle = `relative border-none rounded-full ${primary ? 'bg-mainColor text-white' : 'bg-subColor'} ${isLoading || disabled && 'opacity-80'}`;
      break;
    case 'link':
      baseStyle = `inline-block p-1`;
      break;
  }

  let sizeStyle = '';

  switch (size) {
    case 'large':
      sizeStyle = `w-full h-[46px] p-3`;
      break;
    case 'small':
      sizeStyle = `py-1 px-2 text-sm`;
      break;
    case 'medium':
      sizeStyle = `p-2`;
      break;
  }

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading
        ?
        <div className='absolute z-20 inset-0 h-[46px] flex justify-center items-center'>
          <MoonLoader color={primary ? 'white' : 'brown'} size={15} speedMultiplier={0.5} />
        </div>
        :
        label
      }
    </button>
  );
};