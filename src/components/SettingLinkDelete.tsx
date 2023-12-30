import { useState } from 'react';
import DeleteIcon from './ui/icons/DeleteIcon';
import { KeyedMutator } from 'swr';
import { UserAll } from '@/model/user';
import { Button } from '@/stories/Button';

type Props = {
  id: string;
  mutate: KeyedMutator<UserAll>;
}

export default function SettingLinkDelete({ id, mutate }: Props) {
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (id: string) => {
    setIsLoading(true);

    fetch('/api/setting/links', {
      method: 'PUT',
      body: JSON.stringify({ id, type: 'delete' }),
    }).then(() => {
      mutate()
    });
  }

  return (
    <div className='w-full h-[34px] flex items-center justify-start pt-2'>
      <button onClick={() => setIsDelete(!isDelete)}>
        <DeleteIcon className={`${isDelete ? 'text-dangerColor' : 'text-gray-500'}`} />
      </button>
      {
        isDelete &&
        <>
          <p className='pl-2 text-dangerColor'>이 링크를 삭제할까요?</p>
          <div className='flex ml-auto'>
            <Button label='취소' size='small' className='mr-1' onClick={() => setIsDelete(false)} disabled={isLoading} />
            <Button label='삭제' size='small' primary={true} onClick={() => handleDelete(id)} disabled={isLoading} isLoading={isLoading} />
          </div>
        </>
      }
    </div>
  );
}

