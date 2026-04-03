export default function ProjectsListSkeleton() {
  return (
    <section className="card-surface rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted-2)]">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
        <span>Loading projects</span>
      </div>
      <article className="rounded-2xl border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)] p-5 animate-pulse">
        <div className="space-y-2">
          <div className="w-40 h-4 bg-[rgba(148,163,184,0.2)] rounded"></div>
          <div className="w-full h-3 bg-[rgba(148,163,184,0.15)] rounded"></div>
        </div>
      </article>
      <article className="rounded-2xl border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)] p-5 animate-pulse">
        <div className="space-y-2">
          <div className="w-32 h-4 bg-[rgba(148,163,184,0.2)] rounded"></div>
          <div className="w-full h-3 bg-[rgba(148,163,184,0.15)] rounded"></div>
        </div>
      </article>
    </section>
  );
}
