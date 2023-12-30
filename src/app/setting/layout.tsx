import { Title } from '@/stories/Title';

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Title text='설정' homeLink={true} />
      {children}
    </div>
  );
}

