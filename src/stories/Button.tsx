interface ButtonProps {
  type?: 'button' | 'link';
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

  let baseStyle = '';

  switch (type) {
    case 'button':
      baseStyle = `w-full border rounded-full p-3 ${primary ? 'bg-mainColor text-white' : 'bg-white'}`;
      break;
    case 'link':
      baseStyle = `inline-block p-1`;
      break;
  }

  return (

    <button
      type="button"
      className={`${baseStyle}`}
      {...props}
    >
      {label}
    </button>
  );
};
