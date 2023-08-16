type Props = {
  text: string;
}

export default function Title({ text }: Props) {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold'>{text}</h1>
    </div>
  );
}

