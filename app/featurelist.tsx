import { FeaturesWithAuthors } from "./page";
import FeatureListCard from "ui/components/MDX/FeatureListCard";
import InlineLink from "ui/components/InlineLink";

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
            <InlineLink href={`/features/${feature.id}`}>
              {feature.title}
              {feature.author != null ? ` by ${feature.author.name}` : ""}
            </InlineLink>
          </li>
        ))}
      </ul>
    </FeatureListCard>
  );
}
