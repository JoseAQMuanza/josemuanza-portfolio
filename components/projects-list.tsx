import Link from "next/link";
import MiniCircleText from "./mini-circle-text";
import notFoundImage from "@/public/images/my-picture-not-found.png"
import { useState } from "react";
import { useEffect } from "react";

export default function ProjectsList() {  

  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Erro:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);


  return (
    <section className="p-5 mt-2 bg-[#2C2C2C] rounded-lg">
      <MiniCircleText text="Projetos" />
      
      {loading && (
        <article className="p-5 mt-2 bg-[#424242] rounded-lg animate-pulse">
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-600 rounded"></div>
            <div className="w-full h-3 bg-gray-700 rounded"></div>
          </div>
        </article>
      )}
      
      {!loading && projects.length === 0 && (
        <article className="p-5 mt-2 bg-[#424242] rounded-lg">
          <div className="flex items-center space-x-2">
            <img
              src={notFoundImage.src}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="text-lg font-semibold">Sem Projetos Disponíveis</h3>
          </div>
        </article>
      )}
      
      {!loading &&
        projects.length > 0 &&
        projects.map((project) => (
          <Link
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
          >
            <article className="p-5 mt-2 bg-[#424242] rounded-lg hover:bg-[#4d4d4d] transition">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-gray-300">{project.description}</p>
            </article>
          </Link>
        ))}
    </section>
  );
}