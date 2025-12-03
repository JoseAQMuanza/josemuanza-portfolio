"use client"

import FirstSection from "@/components/first-section";
import ProjectsList from "@/components/projects-list";

import MainCard from "@/components/ui/main-card";
import { useState } from "react";
import { useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;

  fork: boolean;
}

export default function ProjectsPage() {

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
          <FirstSection
            pageTitle="Projetos"
            pageSubtitle="Meus Projetos"
            description="Uma breve descrição dos Projetos que desenvolvi." />

          <ProjectsList projects={repos}/>          
        </>
      }
    />
  );
}
