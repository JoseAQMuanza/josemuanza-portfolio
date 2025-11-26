import Footer from "./footer";
import LetsWork from "../lets-work";

interface HomeCardProps {
  children: React.ReactNode
}

export default function MainCard({ children }: HomeCardProps ) {
  return (
    <>    
    <section className="flex justify-center items-center mt-18.5">
      <div className="bg-[#212121] xs:min-w-[10px]  min-h-screen min-w-[455px] max-w-[500px] sm:min-w-[500px] m-1.5  p-3 rounded-2xl space-y-4">
        { 
          children
        }        

        <LetsWork />

        <section>
          <Footer />
        </section>
      </div >
    </section>
    </>
  );
}