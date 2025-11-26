import Link from "next/link";
import MiniCircleText from "./mini-circle-text";
import notFoundImage from "@/public/images/my-picture-not-found.png"

interface GeneralCardProps {
  projects: any[];
}

export default function ProjectsList({ projects }: GeneralCardProps) {

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
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer" key={project.id}>
              <article className="p-5 mt-2 bg-[#424242] rounded-lg">
                <div className="flex justify-items-center items-center space-x-2">
                  <img
                    src={project.avatar}
                    className="w-10 h-10 rounded-full" />
                  <div className="space-y-1 ">
                    <h2 className="text-lg font-semibold">{project.name}</h2>
                    <h3 className="">{project.description}</h3>
                  </div>
                </div>
              </article>
            </Link>
          ))
        )
      }
    </section>
  );
}