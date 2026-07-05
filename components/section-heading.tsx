import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel
}: {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-normal text-violet">
          <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_12px_rgba(168,85,247,0.85)]" />
          {eyebrow}
        </p>
        <h2 className="mt-2 text-balance text-3xl font-black leading-tight text-primary md:text-4xl">
          {title}
        </h2>
        {description ? <p className="mt-3 max-w-2xl text-base leading-7 text-secondary">{description}</p> : null}
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="inline-flex items-center gap-2 text-sm font-medium text-primary/85 transition hover:text-blue">
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
