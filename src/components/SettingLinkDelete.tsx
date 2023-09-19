import { useState } from 'react';
import Button from './ui/Button';
import DeleteIcon from './ui/icons/DeleteIcon';
import { KeyedMutator } from 'swr';
import { UserAll } from '@/model/user';

type Props = {
  id: string;
  mutate: KeyedMutator<UserAll>;
}

export default function SettingLinkDelete({ id, mutate }: Props) {
  const [deleted, setDeleted] = useState(false);
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
    <>
      <button className='mt-2' onClick={() => setDeleted(true)}>
        <DeleteIcon className={`${deleted ? 'text-red-500' : 'text-gray-500'}`} />
      </button>
      {deleted &&
        <div>
          <p>이 링크를 삭제할까요?</p>
          <div className='flex w-full'>
            <Button text='취소' color='gray' onClick={() => setDeleted(false)} disabled={isLoading} />
            <Button text='삭제' color='red' onClick={() => handleDelete(id)} disabled={isLoading} isLoading={isLoading} />
          </div>
        </div>
      }
    </>
  );
}

