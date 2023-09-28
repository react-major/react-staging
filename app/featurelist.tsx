import Link from "next/link";
import { Feature } from "./page";

type Props = {
  features: Feature[];
};

export default function FeatureList(props: Props) {
  return (
    <ul>
      {props.features.map((feature) => (
        <li key={feature.id}>
          <Link href={`/features/${feature.id}`}>{feature.authorName}</Link>
        </li>
      ))}
    </ul>
  );
}
