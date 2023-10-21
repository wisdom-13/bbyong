import SettingLinks from '@/components/SettingLinks';
import SettingMenu from '@/components/SettingMenu';

export default function page() {
  return (
    <div className='px-6'>
      <SettingMenu />
      <SettingLinks />
    </div>
  );
}

