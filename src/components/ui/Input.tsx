import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  className?: string;
  textarea?: boolean;
  type?: string;
  rows?: number;
  placeholder?: string;
  readOnly?: boolean
  register?: UseFormRegisterReturn;
}

export default function Input({ textarea = false, className, type = 'text', rows = 5, placeholder, readOnly = false, register }: Props) {
  return (
    <>
      {
        textarea
          ? <textarea
            className={`bg-gray-50 rounded-md p-3 outline-none w-full ${className}`}
            rows={rows}
            placeholder={placeholder}
            readOnly={readOnly}
            {...register}
          />
          : <input
            className={`bg-gray-50 rounded-md p-3 outline-none w-full ${className}`}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            {...register}
          />
      }
    </>
  );
}

