import LinkButton from './LinkButton';
import { SimpleLink } from '@/model/link';

type Props = {
  links: SimpleLink[];
}
export default function LinkList({ links }: Props) {

  return (
    <div className='flex flex-col'>
      {
        links.map((link) => (
          <LinkButton key={link.id} link={link} />
        ))
      }
    </div>
  );
}

