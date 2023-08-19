import Dudge from "@/components/Dudge";
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
      <Title text={`${user.name}의 페이지`} />
      <Dudge user={user} />
    </>
  );
}

