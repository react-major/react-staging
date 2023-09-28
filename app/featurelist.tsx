import { FeaturesWithAuthors } from "./page";
import FeatureListCard from "ui/components/MDX/FeatureListCard";
import { H1 } from "ui/components/MDX/Heading";
import InlineLink from "ui/components/InlineLink";

type Props = {
  versionName: string;
  releaseChannel: string;
  features: FeaturesWithAuthors;
};

export default function FeatureList({
  versionName,
  releaseChannel,
  features,
}: Props) {
  return (
    <FeatureListCard title={releaseChannel}>
      <H1>{versionName}</H1>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
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
