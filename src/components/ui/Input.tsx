import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  textarea?: boolean;
  style?: string;
  className?: string;
  type?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  register?: UseFormRegisterReturn;
}

export default function Input({
  textarea = false,
  style = 'bgInput',
  className = '',
  type = 'text',
  rows = 5,
  value,
  placeholder,
  readOnly = false,
  register
}: Props) {
  return (
    <>
      {
        textarea
          ? <textarea
            className={`${getInputStyle(style)} ${className}`}
            rows={rows}
            placeholder={placeholder}
            readOnly={readOnly}
            {...register}
          >
            {value}
          </textarea>
          : <input
            className={`${getInputStyle(style)} ${className}`}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            {...register}
          />
      }
    </>
  );
}

function getInputStyle(style: string): string {
  let inputStyle = '';

  switch (style) {
    case 'simpleInput':
      inputStyle = 'outline-none w-full';
      break;
    case 'bgInput':
      inputStyle = 'outline-none w-full bg-gray-50 rounded-md p-3';
      break;

  }

  return inputStyle;
}