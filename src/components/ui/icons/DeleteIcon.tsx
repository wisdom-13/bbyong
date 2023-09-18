import { RiDeleteBin6Line } from 'react-icons/ri';

type Props = {
  className?: string | '';
}
export default function DeleteIcon({ className = '' }: Props) {
  return <RiDeleteBin6Line className={className} size='20' />;
}


