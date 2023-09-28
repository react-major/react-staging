import Link from "next/link";
import { Prisma } from "@prisma/client";
import { FeaturesWithAuthors } from "./page";

type Props = {
  features: FeaturesWithAuthors;
};

export default function FeatureList(props: Props) {
  return (
    <ul>
      {props.features.map((feature) => (
        <li key={feature.id}>
          <Link href={`/features/${feature.id}`}>
            {feature.title}
            {feature.author != null ? ` by ${feature.author.name}` : ""}
          </Link>
        </li>
      ))}
    </ul>
  );
}
