import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SettingAddress from '@/components/SettingAddress';
import Title from '@/components/ui/Title';
import { getUserByUserEmail } from '@/service/user';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  const user = await getUserByUserEmail(session.user.email);

  if (user?.address) {
    redirect(`/${user.address}`);
  }

  return (
    <div className='p-6'>
      <SettingAddress />
    </div>
  );
}

