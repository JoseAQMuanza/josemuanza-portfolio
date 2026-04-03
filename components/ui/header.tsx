"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const base = isEn ? "/en" : "";

  const homeHref = isEn ? "/en" : "/";
  const aboutHref = isEn ? `${base}/about` : `${base}/sobre`;
  const projectsHref = isEn ? `${base}/projects` : `${base}/projetos`;
  const contactHref = isEn ? `${base}/contact` : `${base}/contato`;

  const toggleHref = isEn ? "/" : "/en";
  const toggleLabel = isEn ? "PT" : "EN";

  return (
    <header className="fixed mx-auto px-3 top-4 z-50 left-0 right-0 min-w-[280px] max-w-[680px]">
      <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[rgba(21,27,54,0.8)] px-3 py-2 backdrop-blur-xl shadow-[0_20px_45px_rgba(3,7,24,0.45)]">
        <div className="flex p-2 gap-1 rounded-xl">
          <Link
            href={homeHref}
            className="rounded-full p-2 text-[var(--color-muted)] transition-all duration-200 hover:bg-[rgba(91,140,255,0.16)] hover:text-white"
            title={isEn ? "Home" : "Início"}
          >
            <AiOutlineHome size={20} />
          </Link>

          <Link
            href={aboutHref}
            title={isEn ? "About" : "Sobre"}
            className="rounded-full p-2 text-[var(--color-muted)] transition-all duration-200 hover:bg-[rgba(91,140,255,0.16)] hover:text-white"
          >
            <AiOutlineUser size={20} />
          </Link>

          <Link
            href={projectsHref}
            title={isEn ? "Projects" : "Projetos"}
            className="rounded-full p-2 text-[var(--color-muted)] transition-all duration-200 hover:bg-[rgba(91,140,255,0.16)] hover:text-white"
          >
            <AiOutlineProject size={20} />
          </Link>

          <Link
            href={contactHref}
            title={isEn ? "Contact" : "Contato"}
            className="rounded-full p-2 text-[var(--color-muted)] transition-all duration-200 hover:bg-[rgba(91,140,255,0.16)] hover:text-white"
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={contactHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] accent-gradient shadow-[0_10px_25px_rgba(91,140,255,0.35)]"
          >
            {isEn ? "Let’s talk" : "Vamos conversar"}
          </Link>
          <Link
            href={toggleHref}
            className="inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-white border border-[var(--color-border)] hover:border-[rgba(91,140,255,0.6)]"
          >
            {toggleLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
