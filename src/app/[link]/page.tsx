import Dudge from "@/components/Dudge";
import UserProfile from '@/components/UserProfile';
import Title from '@/components/ui/Title';
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

