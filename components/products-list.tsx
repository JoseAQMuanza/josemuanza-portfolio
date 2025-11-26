import Link from "next/link";
import MiniCircleText from "./mini-circle-text";
import notFoundImage from "@/public/images/my-picture-not-found.png"

interface GeneralCardProps {  
  products: any[];
}

export default function   ProductsList({products }: GeneralCardProps) {

  return (
    <section className="p-5 mt-2 bg-[#2C2C2C] rounded-lg">
      <MiniCircleText text="Produtos" />
      {
        products.length <= 0 ? (
          (<article className="p-5 mt-2 bg-[#424242] rounded-lg">
            <div className="flex justify-items-center items-center space-x-2">
              <img
                src={notFoundImage.src}
                className="w-10 h-10 rounded-full" />
              <h3 className="text-lg font-semibold">Sem Produtos Disponiveis</h3>
            </div>
          </article>)
        ) : (
          products.map((product) => (
            <Link href={product.html_url} target="_blank" rel="noopener noreferrer" key={product.id}>
              <article className="p-5 mt-2 bg-[#424242] rounded-lg">
                <div className="flex justify-items-center items-center space-x-2">
                  <img
                    src={product.avatar}
                    className="w-10 h-10 rounded-full" />
                  <div className="space-y-1 ">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <h3 className="">{product.description}</h3>
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