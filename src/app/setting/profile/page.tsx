import SettingMenu from '@/components/SettingMenu';
import SettingProfile from '@/components/SettingProfile';

export default async function page() {

  return (
    <div className='px-6'>
      <SettingMenu />
      <SettingProfile />
    </div>
  );
}

