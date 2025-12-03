import Link from "next/link";
import { AiOutlineHome, AiOutlineUser,AiOutlineProject, AiOutlinePlus, AiFillProduct } from "react-icons/ai";

export default function Header() {
  return (
    <header className="fixed mx-auto px-2 my-2 z-50 left-0 right-0 top-0 min-w-[280px] max-w-[523px] sm:max-w-[523px]">
      <div className="flex items-center justify-between rounded-lg bg-neutral-800 px-2 shadow-lg shadow-black/[0.03]">
        <div className="flex p-3 rounded-lg">
          <Link href="/" className="hover:bg-[#2C2C2C] hover:rounded-full  p-2 rounded-full transition duration-1000">
            <AiOutlineHome title="Início" size={22} className="text-[#C0C0C0] hover:text-white transition duration-500" />
          </Link>

          <Link href="/sobre" title="Sobre" className="hover:bg-[#2C2C2C] hover:rounded-full hover:text-white p-2 rounded-md">
            <AiOutlineUser size={22} className="text-[#C0C0C0] hover:text-white transition duration-500" />
          </Link>

          <Link href="/projetos" title="Projetos" className="hover:bg-[#2C2C2C] hover:rounded-full hover:text-white p-2 rounded-md">
            <AiOutlineProject size={22} className="text-[#C0C0C0] hover:text-white transition duration-500" />
          </Link>
        </div>

        <ul className="flex flex-1 items-center justify-end gap-3">
          <li>
            <Link
              href="https://github.com/JoseAQMuanza"
              target="black"
              className="flex items-center gap-1 bg-neutral-700 px-3 py-1 rounded-md hover:bg-neutral-900"
            >
              <AiOutlinePlus /> Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
