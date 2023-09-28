import prisma from "lib/prisma";

import { type Prisma } from "@prisma/client";
import FeatureCard from "@/ui/components/MDX/FeatureCard";

async function getFeature({ id }: { id: string }) {
  const feature = await prisma.feature.findUniqueOrThrow({
    where: { id: id },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return feature;
}

export type FeatureWithDetails = Prisma.PromiseReturnType<typeof getFeature>;

export default async function Page({ params }: { params: { id: string } }) {
  const feature: FeatureWithDetails = await getFeature({ id: params.id });
  return (
    <main>
      <FeatureCard {...feature} />
    </main>
  );
}
