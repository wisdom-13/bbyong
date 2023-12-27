import { IoIosSettings } from "react-icons/io";

type Props = {
  className?: string | '';
}
export default function SettingIcon({ className = '' }: Props) {
  return <IoIosSettings className={className} size='20' />;
}


