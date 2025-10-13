import MiniCircleText from "./mini-circle-text";

interface GeneralCardProps {
  cardTitle: string;  
  projects: any[];
}

export default function ListCard({ cardTitle, projects }: GeneralCardProps) {

  return (
    <section className="p-5 mt-2 bg-[#2C2C2C] rounded-lg">
      <MiniCircleText text={cardTitle} />
      {
        projects.length == 0 ? (
          <p>Sem {cardTitle}</p>
        ) : (
          projects.map((project) => (
            <article key={project.id} className="p-5 mt-2 bg-[#424242] rounded-lg">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.cardTitle}</h3>
                <p className="text-[#C0C0C0]">{project.description}</p>
              </div>
            </article>
          ))
        )
      }
    </section>
  );
}