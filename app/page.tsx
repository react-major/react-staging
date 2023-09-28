import prisma from "lib/prisma";
import FeatureList from "./featurelist";

import { Prisma } from "@prisma/client";

async function getFeaturesWithAuthors() {
  const features = await prisma.feature.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return features;
}

export type FeaturesWithAuthors = Prisma.PromiseReturnType<
  typeof getFeaturesWithAuthors
>;

export default async function Home() {
  const features = await getFeaturesWithAuthors();

  return (
    <main className="self-stretch w-full">
      <div className="grid grid-cols-3 gap-4">
        <FeatureList features={features} />
        <FeatureList features={features} />
        <FeatureList features={features} />
      </div>
    </main>
  );
}
