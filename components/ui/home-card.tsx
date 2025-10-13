"use client"
import MiniCircleText from "../mini-circle-text";
import MyPicture from "@/public/images/my-picture.png";
import { useState } from "react";
import HireButton from "./hire-button";
import MainCard from "./main-card";
import ListCard from "../list-card";

export default function HomeCard() {

  const [projects, setProjects] = useState(
    [
      { id: 1, cardTitle: "Projeto 1", description: "Descrição do projecto 1." },
      { id: 3, cardTitle: "Projeto 1", description: "Descrição do projecto 2." },
      { id: 2, cardTitle: "Projeto 1", description: "Descrição do projecto 3." },
    ])

  const [produtos, setProdutos] = useState(
    [
      { id: 1, cardTitle: "Produtos 1", description: "Descrição do Produtos 1." },
      { id: 3, cardTitle: "Produtos 2", description: "Descrição do Produtos 2." },
      { id: 2, cardTitle: "Produtos 3", description: "Descrição do Produtos 3." },
    ])

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

          <ListCard
            cardTitle="Projectos"
            projects={projects} />
          <ListCard
            cardTitle="Produtos"
            projects={produtos} />
        </>
      } />
  );
}