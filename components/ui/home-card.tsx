"use client"
import MiniCircleText from "../mini-circle-text";
import MyPicture from "@/public/images/my-picture.png";
import HireButton from "./hire-button";
import MainCard from "./main-card";
import ProjectsList from "../projects-list";
import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;

  fork: boolean;
}

export default function HomeCard() {

  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)))
      .catch((error) => console.error(error));
  }, []);

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

          <ProjectsList projects={repos} />
        </>
      } />
  );
}