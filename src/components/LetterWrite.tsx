import Button from './ui/Button';
import Input from './ui/Input';
import Title from './ui/Title';

type Props = {
  address: string;
}

export default function LetterWrite({ address }: Props) {
  return (
    <div className=' text-sm'>
      <Title text='편지 작성' />
      <div className='px-6'>
        <form>
          <Input className='mb-3' placeholder='이름' />
          <Input className='mb-3' placeholder='제목' />
          <Input className='mb-3' textarea={true} placeholder='내용' />
          <Button color='blue' text='작성하기' />
        </form>
      </div>

    </div>
  );
}

