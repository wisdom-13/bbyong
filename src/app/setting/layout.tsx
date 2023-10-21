import Title from '@/components/ui/Title';


export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Title text='설정' />
      {children}
    </div>
  );
}

