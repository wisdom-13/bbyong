import Input from './ui/Input';
import ErrorMsg from './ui/ErrorMsg';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface HookFormTypes {
  title: string;
}

type Props = {
  id: string;
  title: string;
}

export default function SettingTitleUrl({ id, title }: Props) {
  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>({
    shouldFocusError: false
  });

  useEffect(() => {
    reset({
      title: title,
    });
  }, [reset, title]);

  const onSubmit = (data: HookFormTypes) => {
    console.log(data)
  }

  const titleChk = register('title', {
    required: true,
    minLength: {
      value: 2,
      message: "2자 이상의 이름을 입력해주세요."
    },
    onBlur: handleSubmit(onSubmit)
  })


  return (
    <div>
      <Input style='simpleInput' className='font-bold' placeholder='Title' register={titleChk} />
      <ErrorMsg msg={errors.title?.message} />
    </div>
  );
}

