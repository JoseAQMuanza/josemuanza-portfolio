"use client"
import MiniCircleText from "../mini-circle-text";
import MyPicture from "@/public/images/my-picture.png";
import HireButton from "./hire-button";
import MainCard from "./main-card";
import ProductsList from "../products-list";
import ProjectsList from "../projects-list";

export default function HomeCard() {

 const projects = [
    { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test01', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 01 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test02', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 02 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test03', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 0 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 }      
  ]

   const products = [
    { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test01', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 01 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test02', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 02 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test03', 
      name: 'Project 01', 
      avatar: MyPicture.src,
      description: 'Projeto 0 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 }
  ]

  return (

    <MainCard
      children={
        <>
          <section>
            <section className="flex items-center justify-between px-4 mt-7 mb-12">
              <MiniCircleText text="Web Developer" />
              <span className="bg-[#28c780] sm:hidden w-2 h-2 rounded-full"></span>
              <span className="bg-[#28c780] hidden p-1 rounded-md sm:block">Disponivel para colaborações.</span>
            </section>

            <section className="flex flex-col">
              <div className="flex flex-col items-center gap-1">
                <img
                  src={MyPicture.src}
                  alt="My Picture"
                  className="rounded-full w-32 h-32" />
                <h2 className="text-white">José Muanza</h2>
                <p className="text-[#C0C0C0]">
                  Desenvolvedor Web Full-Stack
                </p>
              </div>

              <HireButton />
            </section>

          </section>
          
          <ProjectsList  projects={projects}/>
          <ProductsList products={products}/>
        </>
      } />
  );
}