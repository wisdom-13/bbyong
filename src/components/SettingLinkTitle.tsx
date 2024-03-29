import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Input } from '@/stories/Input';
import { ErrorMsg } from '@/stories/ErrorMsg';

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
    fetch('/api/setting/links', {
      method: 'PUT',
      body: JSON.stringify({ id, type: 'title', value: data.title }),
    }).then(() => {
      console.log('success')
    });
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
    <>
      <Input style='simpleInput' className='font-bold bg-transparent' placeholder='Title' register={titleChk} />
      <ErrorMsg msg={errors.title?.message} />
    </>
  );
}

