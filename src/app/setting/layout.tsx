import Title from '@/components/ui/Title';
import Link from 'next/link';

const tabs = [
  { 'href': 'profile', 'title': '프로필' },
  { 'href': 'links', 'title': '링크' },
  { 'href': 'mole', 'title': '두더지' },
];

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Title text='설정' />
      <div className='px-6'>
        <ul className='flex justify-around'>
          {tabs.map((tab, index) => (
            <Link key={index} href={tab.href}>{tab.title}</Link>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}

