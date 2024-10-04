"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";

export default function DocumentosGerenciais() {
//
  const data = [
    {
      id:1,
      title: 'PLANO DE CUSTEIO ATUARIAL 2024 ANO BASE 2023',
      date: '11/03/2024',
      description: 'Avaliação Atuarial Plano Previdenciário Regime Próprio de Previdência de JAPERI – RJ Nota Técnica Atuarial: 2024.00018.1 Atuário Responsável = Sergio Aureliano Machado da Silva',
      doc:'/doc/documentos-gerenciais-pdf/doc3836900306700.pdf',
    },
    {
      id:2,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:3,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:4,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:5,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:6,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:7,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:8,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:9,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:10,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:11,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:12,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
    },
    {
      id:13,
      title: '',
      date: '',
      description: '',
      doc:'/doc/documentos-gerenciais-pdf/.pdf',
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
      <h2>Documentos Gerenciais</h2>
      <p>Documentos e relatórios administrativos e de gestão previdenciária</p>
      
         {/* Container dos cards */}
         <div className={styles.cardsContainer}>
          {currentCards.map((item) => (
            <Card 
              key={item.id} 
              title={item.title}
              date={item.date}
              description={item.description}
              doc={item.doc}
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
