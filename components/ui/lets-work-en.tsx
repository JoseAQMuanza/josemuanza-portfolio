import HireButton from "./hire-button";

export default function LetsWorkEn() {
  return (
    <section className="card-surface rounded-2xl p-6 text-center space-y-2">
      <h2 className="font-display text-2xl font-semibold text-white">
        Let’s build something together.
      </h2>
      <p className="text-sm text-[var(--color-muted)]">
        Available for freelance projects, collaborations, and short-term
        contracts.
      </p>
      <HireButton />
    </section>
  );
}

