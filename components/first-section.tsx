import MiniCircleText from "./mini-circle-text";

interface FirstSectionProps {
  pageTitle: string;
  pageSubtitle: string;
  description: string;
}

export default function FirstSection({ pageTitle, pageSubtitle, description }: FirstSectionProps) {
  return (
    <section className="p-5 space-y-4">

      <div className="mb-8">
        <MiniCircleText text={pageTitle} />
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl">{pageSubtitle}</h2>
        <p className="text-[#C0C0C0] tracking-wide text-[1.1rem]">
          {description}
        </p>
      </div>

      
    </section>
  );
}