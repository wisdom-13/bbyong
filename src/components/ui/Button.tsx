type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ text, className, onClick }: Props) {
  return (
    <button
      className={`p-2 bg-gray-50 hover:bg-gray-100 text-sm rounded-md ${className}`}
      onClick={onClick}>
      {text}
    </button>
  );
}

