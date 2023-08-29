import UserProfile from '@/components/UserProfile';
import { getUserByUserAddress } from '@/service/user';
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

