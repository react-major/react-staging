import Link from "next/link";
import { FeaturesWithAuthors } from "./page";
import FeatureListCard from "ui/components/MDX/FeatureListCard";

export default function FeatureList({
  features,
}: {
  features: FeaturesWithAuthors;
}) {
  return (
    <FeatureListCard title="Upcoming features">
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <Link href={`/features/${feature.id}`}>
              {feature.title}
              {feature.author != null ? ` by ${feature.author.name}` : ""}
            </Link>
          </li>
        ))}
      </ul>
    </FeatureListCard>
  );
}
