import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Toggle } from '@/stories/Toggle';

type Props = {
  id: string;
  isUse: boolean;
}

interface HookFormTypes {
  isUse: boolean;
}

export default function SettingLinkUse({ id, isUse }: Props) {
  const { register, handleSubmit, reset } = useForm<HookFormTypes>();

  useEffect(() => {
    reset({
      isUse: isUse,
    });
  }, [reset, isUse]);


  const onSubmit = (isUse: boolean) => {
    fetch('/api/setting/links', {
      method: 'PUT',
      body: JSON.stringify({ id, type: 'isUse', value: isUse }),
    }).then(() => {
      console.log('success')
    });
  }

  const useChk = register('isUse', {
    onChange: (e) => {
      onSubmit(e.target.checked)
    }
  });

  return (
    <Toggle id={id} register={useChk} />
  );
}

