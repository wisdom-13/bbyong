import { Link } from '@/model/link';
import LinkEdit from './LinkEdit';

type Props = {
  links: Link[];
}
export default function LinkEditList({ links }: Props) {

  return (
    <div className='flex flex-col'>
      {
        links.map((link) => (
          <LinkEdit key={link.id} link={link} />
        ))
      }
    </div>
  );
}

