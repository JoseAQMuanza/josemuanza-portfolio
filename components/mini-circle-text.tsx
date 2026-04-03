interface MiniCircleTextProps {
  text: string;
}

export default function MiniCircleText({ text }: MiniCircleTextProps) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted-2)]">
      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
      <span>{text}</span>
    </div>
  );
}
