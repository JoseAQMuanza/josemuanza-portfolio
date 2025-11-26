"use client"

import FirstSection from "@/components/first-section";
import ProductsList from "@/components/products-list";

import MainCard from "@/components/ui/main-card";
import myAvatar from "@/public/images/my-picture.png"
import { useEffect, useState } from "react"

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;

  fork: boolean;
}

export default function ProductsPage() {

   const [repos, setRepos] = useState<Repo[]>([]);
  
    useEffect(() => {
      fetch("/api/github")
        .then((res) => res.json())
        .then((data) => setRepos(data.slice(0, 6)))
        .catch((error) => console.error(error));
    }, []);

   const products = [
    { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test01', 
      name: 'Project 01', 
      avatar: myAvatar.src,
      description: 'Projeto 01 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test02', 
      name: 'Project 01', 
      avatar: myAvatar.src,
      description: 'Projeto 02 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 },
       { 
      id: 1, 
      html_url: 'https://http://localhost:3000/test03', 
      name: 'Project 01', 
      avatar: myAvatar.src,
      description: 'Projeto 0 para o teste de comportamento do card', 
      language: 'Typescript', 
      stargazers_count: 1 }
  ]

  return (
    <MainCard
      children={
        <>
          <FirstSection
            pageTitle="Produtos"
            pageSubtitle="Meus Produtos"
            description="Uma breve descrição dos Produtos que desenvolvi."/>

          <ProductsList products={products}/>                
        </>
      }
    />
  );
}
