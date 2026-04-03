import Link from "next/link";
import MiniCircleText from "./mini-circle-text";

type CaseStudy = {
  title: string;
  summary: string;
  outcome: string;
  stack: string[];
  href?: string;
};

type CaseStudiesProps = {
  title: string;
  subtitle: string;
  items: CaseStudy[];
  ctaLabel: string;
  statusLabel: string;
};

export default function CaseStudies({
  title,
  subtitle,
  items,
  ctaLabel,
  statusLabel,
}: CaseStudiesProps) {
  return (
    <section className="space-y-4">
      <MiniCircleText text={title} />
      <p className="text-base text-[var(--color-muted)]">{subtitle}</p>

      <div className="grid gap-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="card-surface rounded-2xl p-5 space-y-3"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <span className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted-2)]">
                {statusLabel}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[var(--color-muted)]">{item.summary}</p>
              <p className="text-sm text-[var(--color-muted-2)]">
                <span className="text-white">Impacto:</span> {item.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-[var(--color-muted-2)]">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-[var(--color-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {item.href && (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-semibold text-white hover:text-[var(--color-accent)]"
              >
                {ctaLabel}
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
