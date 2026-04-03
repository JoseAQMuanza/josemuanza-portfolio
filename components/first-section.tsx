import MiniCircleText from "./mini-circle-text";

interface FirstSectionProps {
  pageTitle: string;
  pageSubtitle: string;
  description: string;
}

export default function FirstSection({
  pageTitle,
  pageSubtitle,
  description,
}: FirstSectionProps) {
  return (
    <section className="space-y-4">
      <MiniCircleText text={pageTitle} />

      <div className="space-y-3">
        <h2 className="font-display text-2xl font-semibold text-white">
          {pageSubtitle}
        </h2>
        <p className="text-base text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
