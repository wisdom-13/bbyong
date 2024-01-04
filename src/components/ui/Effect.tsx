import Image from 'next/image';

type Props = {
  top: number;
  left: number;
}

export default function Effect({ top, left }: Props) {
  return (
    <div className={`absolute `} style={{ top: `${top}px`, left: `${left}px` }}>
      <Image src='/effect.png' alt='effect' width={300} height={100} />
    </div>
  );
}

