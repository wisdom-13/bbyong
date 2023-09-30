import Title from './ui/Title';

type Props = {
  address: string;
}

export default function LetterWrite({ address }: Props) {
  return (
    <div>
      <Title text='편지 작성' />
    </div>
  );
}

