import MiniCircleText from "./mini-circle-text";

interface FirstSectionProps {
  pageTitle: string;
  pageSubtitle: string;
  description: string;
}

export default function FirstSection({ pageTitle, pageSubtitle, description }: FirstSectionProps) {
  return (
    <section className="p-5 ">

      <div className="mb-6">
        <MiniCircleText text={pageTitle} />
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl">{pageSubtitle}</h2>
        <p className="text-[#C0C0C0] tracking-wide text-[.9rem]">
          {description}
        </p>
      </div>

      
    </section>
  );
}