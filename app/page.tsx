import Image from "next/image";
import prisma from "../lib/prisma";
import FeatureList from "./featurelist";

export type Feature = {
  authorName: string;
  id: string;
};

export default async function Home() {
  const features = await prisma.feature.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  const featureList: Feature[] = [];
  for (const feature of features) {
    featureList.push({
      authorName: feature.author?.name ?? "",
      id: feature.id,
    });
  }

  const authorNamesAndIds = features.map((feature: any) => ({
    authorName: feature.author?.name ?? "",
    id: feature.id,
  }));

  return <FeatureList features={authorNamesAndIds} />;
}
