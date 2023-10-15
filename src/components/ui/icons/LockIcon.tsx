import { AiOutlineLock } from 'react-icons/ai';

type Props = {
  className?: string | '';
}
export default function LockIcon({ className = '' }: Props) {
  return <AiOutlineLock className={className} size='20' />;
}


