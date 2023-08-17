import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SettingLink from '@/components/SettingLink';
import Title from '@/components/ui/Title';
import { getUserByUseremail } from '@/service/user';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  const user = await getUserByUseremail(session.user.email);

  if (user?.link) {
    redirect('/');
  }

  return (
    <div>
      <Title text='Setting Link' />
      <div className='p-6'>
        <SettingLink />
      </div>
    </div>
  );
}

