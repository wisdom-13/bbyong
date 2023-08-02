import Dudge from "@/components/Dudge";

type Props = {
  params: {
    username: string
  }
}

export default function page({ params: { username } }: Props) {
  return (
    <div>
      <h1>{username} 의 페이지</h1>
      <div>두더지</div>
      <Dudge />
    </div>
  );
}

