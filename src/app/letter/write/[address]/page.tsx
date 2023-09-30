import LetterWrite from '@/components/LetterWrite';

type Props = {
  params: {
    address: string;
  }
}

export default function page({ params: { address } }: Props) {

  return (
    <div>
      <LetterWrite address={address} />
    </div>
  );
}