import { Link } from '@/model/user';

type Props = {
  links: Link[];
}
export default function LinkList({ links }: Props) {

  return (
    <div className='flex flex-col p-6'>
      {links.map((link, index) => (
        link.isUse && (
          <a key={index} className='bg-gray-100 text-center p-2 mb-2' href={link.url} target='_blank'>{link.title}</a>
        )
      ))}
    </div>
  );
}

