import { Letter } from '@/model/letter';
import { parseDate } from '@/util/date';
import LockIcon from './ui/icons/LockIcon';

type Props = {
  letter: Letter;
}

export default function LetterItem({ letter }: Props) {
  return (
    <>
      <div className='bg-gray-50 rounded-md mb-3 p-3 text-sm'>
        <div className='flex justify-between'>
          <div>
            <b className='text-lg'>{letter.title}</b>
          </div>
          {!letter.isPublic && <div><LockIcon className='text-gray-500' /></div>}
        </div>
        <div className='py-2 whitespace-pre-wrap'>{letter.contents}</div>
        <div className='flex justify-between'>
          <p>from.{letter.name}</p>
          <p className='text-xs text-gray-500'>{parseDate(letter.createdAt)}</p>
        </div>
      </div>
    </>
  );
}

