import HireButton from "./ui/hire-button"


export default function LetsWork() {
  return (
    <section className="flex flex-col items-center justify-between p-5 mt-2">
      <h2 className="font-bold text-2xl">Vamos trabalhar juntos.</h2>
      <p className="text-[#C0C0C0]">Estou disponível para projetos freelance e</p>
      <p className="text-[#C0C0C0]">colaborações.</p>

      <HireButton />      
    </section>
  )
}