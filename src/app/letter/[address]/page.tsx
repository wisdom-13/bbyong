import LetterList from '@/components/LetterList';

type Props = {
  params: {
    address: string;
  }
}

export default function page({ params: { address } }: Props) {

  return (
    <div>
      <LetterList address={address} />
    </div>
  );
}