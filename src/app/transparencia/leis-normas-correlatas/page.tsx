"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import Image from "next/image";
import Link from "next/link";

export default function LeisNormasCorrelatas() {

  const data = [
      {
        id: 1,
        title: 'RELATÓRIO ECONÔMICO, FINANCEIRO E PREVIDENCIÁRIO MARÇO DE 2024',
        date: '02/04/2024',
        description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
        imageSrc: '/img1.jpg'
      },
      {
        id: 2,
        title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
        date: '24/01/2024',
        description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
        imageSrc: '/img 2.jpg'
      },
      {
        id: 3,
        title: 'RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA DA PREVI JAPERI 2024',
        date: '17/01/2024',
        description: 'No dia de hoje, dia 15 de janeiro de 2024, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
        imageSrc: '/img 3.jpg'
      },
      {
        id: 4,
        title: 'RELATÓRIO ECONÔMICO E FINANCEIRO JULHO DE 2023',
        date: '08/08/2023',
        description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
        imageSrc: '/img 4.jpg'
      },
      {
        id: 5,
        title: 'RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA JULHO 2023',
        date: '03/08/2023',
        description: 'No dia de hoje, 19 de julho de 2023, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA do I...',
        imageSrc: '/img 10.jpg'
      },
   
    {
      id:6,
      title: 'Renovado o Certificado de Regularidade Previdenciária da Previ Japeri 2023',
      date: '19/04/2023',
      description: 'No dia de hoje, dia 20 de janeiro de 2023, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
      imageSrc: '/img 8.jpg'
    },
    {
      id:7 ,
      title: 'Eleição para os Conselhos Fiscal e Administrativo 2023/2025',
      date: '14/12/2022',
      description: 'A Presidente do Instituto de Previdência dos Servidores Públicos de Japeri, no uso de suas atribui...',
      imageSrc: '/img 7.jpg'
    },
    {
      id:8 ,
      title: 'Um balanço dos 500 dias das atividades de toda a equipe da Previ Japeri',
      date: '06/06/2022',
      description: 'Dois mil e vinte um foi um ano de desafios para a maioria dos integrantes da diretoria executiva da ...',
      imageSrc: '/img 9.jpg'
    },
    {
      id:9 ,
      title: 'Análise Econômica e Política Nacional em 2022 e seus Impactos na Estratégia de Investimentos',
      date: '06/06/2022',
      description: 'As projeções para o cenário macroeconômico nacional, para 2022, refletem as incertezas em relaç...',
      imageSrc: '/img 11.jpg'
    },
    {
      id:10 ,
      title: 'Instituto de Previdência de Japeri conquista Certificado de Regularidade Previdenciária',
      date: '06/06/2022',
      description: 'O Instituto de Previdência dos Servidores Públicos do Município de Japeri (Previ-Japeri) conquist...',
      imageSrc: '/img 12.jpg'
    },
    {
      id:11 ,
      title: 'Servidor, Quais são os atuais critérios que são adotados para a sua aposentadoria?',
      date: '06/06/2022',
      description: 'Nesta semana tivemos a satisfação de presenciar a concessão da aposentadoria da servidora Valéri...',
      imageSrc: '/img 6.jpg'
    },
     
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

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
      <h2>Leis e Normas Previdenciárias</h2>
      <p>Conjunto de leis e normas previdenciárias das RPPS</p>
      
         {/* Container dos cards */}
         <div className={styles.cardsContainer}>
          {currentCards.map((item) => (
            <Card 
              key={item.id} 
              title={item.title}
              date={item.date}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      {/* Paginação */}
             <div className={styles.pagination}>
                <button className={styles.pagButtonLeft} onClick={handlePreviousPage} disabled={currentPage === 1}>
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

                <button className={styles.pagButtonRight} onClick={handleNextPage} disabled={currentPage === totalPages}>
                  {">"} {/* Seta para a direita */}
                </button>
              </div>
    </div>
  </>
  );
}
