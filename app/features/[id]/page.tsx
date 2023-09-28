export default function Page({ params }: { params: { id: string } }) {
  return <div>Feature id: {params.id}</div>;
}
