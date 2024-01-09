type Props = {
  msg?: string;
  className?: string;
}

export default function ErrorMsg({ msg, className }: Props) {
  return (
    <div>
      <p className={`text-xs text-red-600 ${className}`}>{msg}</p>
    </div>
  );
}

