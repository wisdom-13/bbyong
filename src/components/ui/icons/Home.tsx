import { TiHome } from "react-icons/ti";

type Props = {
  className?: string | '';
}
export default function HomeIcon({ className = '' }: Props) {
  return <TiHome className={className} size='20' />;
}


