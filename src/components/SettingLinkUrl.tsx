import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Input } from '@/stories/Input';
import { ErrorMsg } from '@/stories/ErrorMsg';

interface HookFormTypes {
  url: string;
}

type Props = {
  id: string;
  url: string;
}

export default function SettingLinkUrl({ id, url }: Props) {
  const { register, formState: { errors }, handleSubmit, reset } = useForm<HookFormTypes>({
    shouldFocusError: false
  });

  useEffect(() => {
    reset({
      url: url
    });
  }, [reset, url]);

  const onSubmit = (data: HookFormTypes) => {
    fetch('/api/setting/links', {
      method: 'PUT',
      body: JSON.stringify({ id, type: 'url', value: data.url }),
    }).then(() => {
      console.log('success')
    });
  }

  const urlChk = register('url', {
    required: true,
    pattern: {
      value:
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i,
      message: "URL 형식에 맞지 않습니다.",
    },
    onBlur: handleSubmit(onSubmit)
  })

  return (
    <div>
      <Input style='simpleInput' placeholder='URL' register={urlChk} />
      <ErrorMsg msg={errors.url?.message} />
    </div>
  );
}

