import LinkButton from './LinkButton';
import { SimpleLink } from '@/model/link';
import LinkEdit from './LinkEdit';

type Props = {
  links: SimpleLink[];
  edit?: boolean
}
export default function LinkList({ links, edit = false }: Props) {

  return (
    <div className='flex flex-col p-6'>
      {
        edit
          ? links.map((link) => (
            <LinkEdit key={link.id} link={link} />
          ))
          : links.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))
      }
    </div>
  );
}

