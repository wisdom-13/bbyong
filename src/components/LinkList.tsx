import Button from './ui/Button';
import { SimpleLink } from '@/model/link';

type Props = {
  links: SimpleLink[];
}
export default function LinkList({ links }: Props) {
  const handleLink = (url: string) => {
    window.open(url);
  }

  return (
    <div className='flex flex-col p-6'>
      {links.map((link, index) => (
        <Button key={index} className='mb-2' onClick={() => handleLink(link.url)} text={link.title} />
      ))}
    </div>
  );
}

