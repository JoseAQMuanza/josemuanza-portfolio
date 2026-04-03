import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MiniCircleText from "../mini-circle-text";

export default function FooterEn() {
  return (
    <footer className="space-y-4">
      <div className="card-surface rounded-2xl p-6">
        <div className="flex justify-between items-center">
          <MiniCircleText text="Connect" />
          <ul className="flex gap-2">
            <li>
              <Link
                className="flex items-center justify-center text-white bg-[rgba(21,27,54,0.8)] border border-[var(--color-border)] rounded-full w-10 h-10 transition-all duration-200 hover:scale-105 hover:border-[rgba(91,140,255,0.6)]"
                href="https://github.com/JoseAQMuanza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-white bg-[rgba(21,27,54,0.8)] border border-[var(--color-border)] rounded-full w-10 h-10 transition-all duration-200 hover:scale-105 hover:border-[rgba(91,140,255,0.6)]"
                href="https://linkedin.com/in/josemuanza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-surface rounded-2xl p-6 text-center text-sm text-[var(--color-muted)]">
        &copy; 2025 José Muanza - Personal portfolio
        <br />
        Built with curiosity // Luanda, Angola.
      </div>
    </footer>
  );
}
