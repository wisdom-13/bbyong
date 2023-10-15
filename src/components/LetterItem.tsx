import { Letter } from '@/model/letter';
import { parseDate } from '@/util/date';

type Props = {
  letter: Letter;
}

export default function LetterItem({ letter }: Props) {
  return (
    <>
      <div className='bg-gray-50 rounded-md mb-3 p-3 text-sm'>
        <div className='flex'>
          <b>{letter.title}</b> - <span>{letter.name}</span>
        </div>
        <div className='py-2 whitespace-pre-wrap'>{letter.contents}</div>
        <p className='text-xs text-gray-500'>{parseDate(letter.createdAt)}</p>
      </div>
    </>
  );
}

