type Props = {
  text: string;
  color?: 'gray' | 'red' | 'blue';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ text, color = 'gray', className, onClick, disabled }: Props) {
  let colorStyle = '';

  switch (color) {
    case 'gray':
      colorStyle = 'bg-gray-50 hover:bg-gray-100';
      break;
    case 'blue':
      colorStyle = 'bg-blue-500 hover:bg-blue-600 text-white';
      break;
    case 'red':
      colorStyle = 'bg-red-500 hover:bg-red-600 text-white';
      break;
  }

  return (
    <button
      className={`p-2  text-sm rounded-md ${colorStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}

