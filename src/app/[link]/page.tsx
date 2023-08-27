import UserProfile from '@/components/UserProfile';
import { getUserByUserLink } from '@/service/user';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    link: string
  }
}

export default async function page({ params: { link } }: Props) {
  const user = await getUserByUserLink(link);

  if (!user) {
    notFound();
  }

  return (
    <>
      <UserProfile link={link} />
    </>
  );
}

