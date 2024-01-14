import Signin from "@/components/Signin";
import { authOptions } from "../[...nextauth]/route";
import { getServerSession } from 'next-auth';
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Signup or Login to BBYONG',
}

type Props = {
  searchParams: {
    callbackUrl: string;
  }
}

export default async function SignPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
  );
}

