"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import Image from "next/image";
import Link from "next/link";

export default function noticiasEcomunicados() {

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
    }
    
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  // Cálculo de número total de páginas
  const totalPages = Math.ceil(data.length / cardsPerPage);

  // Obtenção dos cards para a página atual
  const currentCards = data.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  // Mudar para a página anterior
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Mudar para a próxima página
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <>
    <div className={styles.containerCenter}>
      <h2>Notícias e Comunicados</h2>
      <p>Notícias e comunicados de interesse dos servidores e da população</p>
      
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
      {/* Paginação */}
             <div className={styles.pagination}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                  {"<"} {/* Seta para a esquerda */}
                </button>
                
                {/* Números de páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? styles.activePage : ""}
                  >
                    {index + 1}
                  </button>
                ))}

                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  {">"} {/* Seta para a direita */}
                </button>
              </div>
    </div>
  </>
  );
}
