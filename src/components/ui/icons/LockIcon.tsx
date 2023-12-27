import { FaLock } from "react-icons/fa6";

type Props = {
  className?: string | '';
}
export default function LockIcon({ className = '' }: Props) {
  return <FaLock className={className} />;
}


