import FirstSection from "@/components/first-section";
import MainCard from "@/components/ui/main-card";

export const metadata = {
  title: "About",
  description: "About José Muanza.",
  alternates: {
    canonical: "/en/about",
    languages: {
      "pt-PT": "/sobre",
      "en-US": "/en/about",
    },
  },
};

export default function AboutEnPage() {
  return (
    <MainCard
      variant="en"
      children={
        <>
          <FirstSection
            pageTitle="About"
            pageSubtitle="Building digital products with purpose"
            description="I’m a software developer and Computer Engineering student based in Angola. I focus on building simple, fast, and reliable digital solutions. I work on web products, API integrations, and user experiences that connect people and businesses with clarity."
          />
        </>
      }
    />
  );
}
