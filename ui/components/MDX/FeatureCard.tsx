import { FeatureWithDetails } from "@/app/features/[id]/page";
import { format } from "date-fns";

export type FeatureCardType = typeof FeatureCard;

export default function FeatureCard({
  title,
  content,
  createdAt,
  updatedAt,
  author,
}: FeatureWithDetails) {
  const createdDate = format(new Date(createdAt), "yyyy-MM-dd");
  const updatedDate = format(new Date(updatedAt), "yyyy-MM-dd");
  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
        {`Created: ${createdDate}`}
      </h6>
      <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
        {`Updated: ${updatedDate}`}
      </h6>
      {author?.name && (
        <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
          {`Author: ${author.name}`}
        </h6>
      )}
      <p className="mb-4 text-base  leading-normal text-neutral-600 dark:text-neutral-200">
        {content}
      </p>
    </div>
  );
}
