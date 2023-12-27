import UserProfile from '@/components/UserProfile';
import { getUserByUserAddress } from '@/service/user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';


type Props = {
  params: {
    address: string
  }
}

export default async function page({ params: { address } }: Props) {
  const user = await getUserByUserAddress(address);

  if (!user) {
    notFound();
  }

  return (
    <>
      <UserProfile address={address} />
    </>
  );
}


export async function generateMetadata({
  params: { address },
}: Props): Promise<Metadata> {
  const user = await getUserByUserAddress(address);
  return {
    title: `${user.name}의 집`,
    description: `${user?.name}의 집입니다.`,
  };
}