import Link from "next/link";
import MiniCircleText from "./mini-circle-text";
import notFoundImage from "@/public/images/my-picture-not-found.png"

interface GeneralCardProps {
  projects: any[];
}

export default function ProjectsList({ projects }: GeneralCardProps) {

  const icons: Record<string, string> = {
    JavaScript: "/icons/js.png",
    TypeScript: "/icons/ts.png",
    React: "/icons/react.png",
  };

  return (
    <section className="p-5 mt-2 bg-[#2C2C2C] rounded-lg">
      <MiniCircleText text="Projetos" />
      {
        projects.length <= 0 ? (
          (<article className="p-5 mt-2 bg-[#424242] rounded-lg">
            <div className="flex justify-items-center items-center space-x-2">
              <img
                src={notFoundImage.src}
                className="w-10 h-10 rounded-full" />
              <h3 className="text-lg font-semibold">Sem Projetos Disponiveis</h3>
            </div>
          </article>)
        ) : (
          projects.map((project) => (
            <Link
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-[#424242] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 transform mb-3 mt-3"
            >
              <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
              <p className="text-gray-300">{project.description || "No description available."}</p>
            </Link>
          ))
        )
      }
    </section>
  );
}