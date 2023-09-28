import prisma from "lib/prisma";

import { Prisma } from "@prisma/client";

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

type FeatureWithDetails = Prisma.PromiseReturnType<typeof getFeature>;

export default async function Page({ params }: { params: { id: string } }) {
  const feature: FeatureWithDetails = await getFeature({ id: params.id });
  return (
    <main>
      <h1 className="text-3xl font-bold">{feature.title}</h1>
      <p className="text-sm">Created: {feature.createdAt.toISOString()}</p>
      <p className="text-sm">Updated: {feature.updatedAt.toISOString()}</p>
      {feature.author != null ? (
        <p className="text-sm">Author: {feature.author.name}</p>
      ) : null}
      <p>{feature.content}</p>
    </main>
  );
}
