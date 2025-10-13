import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function HireButton() {
  return (
    <section className="flex gap-2 justify-center py-6">
      <Link 
        href="http://linkedin.com/in/josemuanza"
        target="_black">
        <button className="flex items-center gap-1 p-1 border rounded cursor-pointer hover:bg-neutral-500">
          <AiOutlinePlusCircle className="w-4" /> Contratar
        </button>
      </Link>
      <Link 
        href="https://github.com/JoseAQMuanza" 
        target="_blank">
        <button className=" flex items-center gap-1 p-1 border rounded cursor-pointer hover:bg-neutral-500">
          meu Portfólio
        </button>
      </Link>
    </section>
  );
}