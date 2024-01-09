interface ErrorMsgProps {
  msg?: string;
  className?: string;
}

export const ErrorMsg = ({ msg, className }: ErrorMsgProps) => {
  return (
    <div>
      <p className={`text-xs mt-1 text-red-600 ${className}`}>{msg}</p>
    </div>
  );
};

