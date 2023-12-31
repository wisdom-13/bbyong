import { UseFormRegisterReturn } from 'react-hook-form';

interface ToggleProps {
  id: string,
  text?: string,
  checked?: boolean,
  disabled?: boolean,
  register?: UseFormRegisterReturn;
}

export const Toggle = ({ id, text, checked, disabled = false, register }: ToggleProps) => {
  return (
    <>
      <label
        htmlFor={`toggle${id}`}
        className='flex items-center cursor-pointer'
      >
        <div className='relative'>
          <input id={`toggle${id}`} type='checkbox' className='sr-only' {...register} checked={checked} disabled={disabled} />
          <div className='w-10 h-4 bg-gray-200 rounded-full shadow-inner'></div>
          <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
        {text &&
          <div className='ml-3 text-textColor text-xs font-semibold'>{text}</div>
        }
      </label>
    </>
  );
};

