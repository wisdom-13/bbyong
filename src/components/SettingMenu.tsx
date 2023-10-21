import Title from '@/components/ui/Title';
import Link from 'next/link';

const tabs = [
  { 'href': 'profile', 'title': '프로필' },
  { 'href': 'links', 'title': '링크' },
  { 'href': 'mole', 'title': '두더지' },
];

export default function SettingMenu() {
  return (
    <>
      <div className='pb-6'>
        <ul className='flex justify-around'>
          {tabs.map((tab, index) => (
            <Link key={index} href={tab.href}>{tab.title}</Link>
          ))}
        </ul>
      </div>
    </>
  );
}

