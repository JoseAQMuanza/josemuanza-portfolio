import Image from "next/image";
import MainCard from "@/components/ui/main-card";
import MyImage from "@/public/images/my-picture-not-found.png";

export default function GlobalNotFound() {
  return (
    <MainCard
      children={
        <>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted-2)]">
              Página não encontrada
            </span>
          </div>
          <section className="flex flex-col items-center justify-center text-center p-6">
            <Image
              src={MyImage}
              alt="José Muanza"
              width={96}
              height={96}
              className="rounded-full mb-4 border border-[var(--color-border)]"
              priority
            />
            <h1 className="font-display text-2xl font-semibold text-white">
              Oops! 404
            </h1>
            <p className="text-sm text-[var(--color-muted)] mt-2">
              A página que você procura não existe.
            </p>
          </section>
        </>
      }
    />
  );
}
