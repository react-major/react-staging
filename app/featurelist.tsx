import Link from "next/link";
import { FeaturesWithAuthors } from "./page";
import BlogCard from "@/ui/components/MDX/BlogCard";
import FeatureListCard from "@/ui/components/MDX/FeatureListCard";

type Props = {
  features: FeaturesWithAuthors;
};

export default function FeatureList(props: Props) {
  return (
    <FeatureListCard>
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
    </FeatureListCard>
  );
}
