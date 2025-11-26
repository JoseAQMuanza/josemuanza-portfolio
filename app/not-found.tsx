import MainCard from "@/components/ui/main-card";
import MyImage from "@/public/images/my-picture-not-found.png"

export default function GlobalNotFound() {
  return (
    <MainCard
      children={
        <>
          <div className="flex items-center gap-3 m-5">
            <span className="w-2 h-2 bg-neutral-100 rounded-full"></span>
            <span>Oops! 404</span>
          </div>
          <section className="flex flex-col items-center justify-center text-center p-6">
            <img
              src={MyImage.src}
              alt="José Muanza"
              className="w-32 h-32 justify-center rounded-full mb-4"
            />
            <h1 className="font-bold">Página não encontrada</h1>
            <p className="text-neutral-500 mt-2">A página que você procura não existe.</p>
          </section>
        </>
      }
    />
  );
}