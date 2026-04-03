import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function HireButton() {
  return (
    <section className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
      <Link
        href="/contato"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] accent-gradient shadow-[0_12px_30px_rgba(91,140,255,0.35)]"
      >
        <AiOutlinePlusCircle className="w-4" /> Vamos conversar
      </Link>
      <Link
        href="https://github.com/JoseAQMuanza"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-[var(--color-text)] border border-[var(--color-border)] bg-[rgba(21,27,54,0.6)] transition-all duration-300 hover:border-[rgba(91,140,255,0.5)] hover:text-white"
      >
        Ver GitHub
      </Link>
    </section>
  );
}
