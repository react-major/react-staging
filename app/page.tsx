import Image from "next/image";
import prisma from "../lib/prisma";

export default async function Home() {
  const features = await prisma.feature.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return (
    <div>
      {features.map((feature) => (
        <div key={feature.id}>{feature.author?.name}</div>
      ))}
    </div>
  );
}
