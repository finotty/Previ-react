import React from "react";
import styles from "./page.module.scss";
import Card from "./components/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      title: 'RELATÓRIO ECONÔMICO, FINANCEIRO E PREVIDENCIÁRIO MARÇO DE 2024',
      date: '02/04/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      imageSrc: '/img1.jpg'
    },
    {
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '24/01/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      imageSrc: '/img 2.jpg'
    },
    {
      title: ' RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIADA PREVI JAPERI 2024',
      date: '17/01/2024',
      description: 'No dia de hoje, dia 15 de janeiro de 2024, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
      imageSrc: '/img 3.jpg'
    },
    {
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI projetadas para 2023, incl...',
      imageSrc: '/img 4.jpg'
    },
    {
      title: 'RELATÓRIO ECONÔMICO E FINANCEIRO JULHO DE 2023',
      date: '02/04/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      imageSrc: '/img 2.jpg'
    },
    {
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '24/01/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      imageSrc: '/img1.jpg'
    },
    {
      title: ' RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIADA PREVI JAPERI 2024',
      date: '17/01/2024',
      description: 'No dia de hoje, dia 15 de janeiro de 2024, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
      imageSrc: '/img 3.jpg'
    },
    {
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI projetadas para 2023, incl...',
      imageSrc: '/img 4.jpg'
    },
    
  ];
  return (
    <>
      <div className={styles.containerCenter}>
        <h2>Notícias e Comunicados</h2>
        <p>Notícias e comunicados de interesse dos servidores e da população</p>
        <div className={styles.divButton}>
           <Link className={styles.button} href="/news/noticias-comunicados">Ver mais</Link>
         </div>
         <div className={styles.cardsContainer}>
          {data.map((item, index) => (
           <Card 
            key={index} 
            title={item.title}
            date={item.date}
            description={item.description}
            imageSrc={item.imageSrc}
          />
          ))}
         </div>

      </div>
    </>
  );
}
