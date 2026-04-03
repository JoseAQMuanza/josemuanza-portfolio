import Footer from "./footer";
import FooterEn from "./footer-en";
import LetsWork from "../lets-work";
import LetsWorkEn from "./lets-work-en";

interface HomeCardProps {
  children: React.ReactNode;
  variant?: "pt" | "en";
}

export default function MainCard({ children, variant = "pt" }: HomeCardProps) {
  const isEn = variant === "en";

  return (
    <section className="flex justify-center items-start pt-24 pb-10">
      <div className="card-surface w-full max-w-[560px] mx-3 p-6 rounded-3xl space-y-8">
        {children}

        {isEn ? <LetsWorkEn /> : <LetsWork />}

        <section>{isEn ? <FooterEn /> : <Footer />}</section>
      </div>
    </section>
  );
}

