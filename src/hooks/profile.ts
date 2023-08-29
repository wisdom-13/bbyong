import { User } from '@/model/user';
import { useCallback } from 'react';
import useSWR from 'swr'

function updateDudge(userId: string) {
  return fetch('/api/dudge', {
    method: 'PUT',
    body: JSON.stringify({ userId }),
  }).then((res) => res.json())
}

export default function useProfile() {
  const { data: user, isLoading, error, mutate } = useSWR<User>('/api/me');

  const setDudge = useCallback((userId: string) => {
    if (!user) return;

    // const newUser = {}

    // return mutate(updateDudge(userId), {
    //   optimisticData: newUser,
    //   populateCache: false,
    //   revalidate: false,
    //   rollbackOnError: true,
    // });
  }, [])
}