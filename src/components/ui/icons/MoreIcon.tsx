import { LuMoreVertical } from 'react-icons/lu';

type Props = {
  className?: string | '';
}
export default function MoreIcon({ className = '' }: Props) {
  return <LuMoreVertical className={className} size='20' />;
}


