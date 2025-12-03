import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import MiniCircleText from "../mini-circle-text";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-2">
      <div className="p-7 rounded-lg bg-[#2C2C2C]">
        <div className="flex justify-between">
          <MiniCircleText text="Follow Me" />
          <ul className="flex gap-2">            
            <li>
              <Link
                className="flex items-center justify-center text-white bg-neutral-700 rounded-full w-10 h-10 hover:bg-neutral-800"
                href="https://github.com/JoseAQMuanza"
                target="_black"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 fill-current" />
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center text-white bg-neutral-700 rounded-full w-10 h-10 hover:bg-neutral-800"
                href="http://linkedin.com/in/josemuanza"
                target="_black"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 fill-current rounded-full text-white" />
              </Link>
            </li>            
          </ul>
        </div>
      </div>


      <div className="space-y-2 sm:col-span-12 lg:col-span-4 p-8 rounded-lg bg-[#2C2C2C]">
        <div className="text-sm text-center text-[#C0C0C0] font-medium">
          &copy; 2025 José Muanza - Portfólio pessoal<br />
          Feito com carinho e curiosidade // Luanda, Angola.
        </div>
      </div>
    </footer>
  );
}
