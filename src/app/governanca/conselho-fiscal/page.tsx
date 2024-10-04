"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function ConselhoFiscal() {

  const data = [
    { 
      id:1,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8211256710469.pdf',
      date:'ATA N° 002/2024'
    },
    {
      id:2,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0081762923801.pdf',
      date:'ATA N° 001/2024'

    },
    { 
      id:3,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc6163990429716.pdf',
      date:'ATA N° 009/2023'
    },
    {
      id:4,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4413825394689.pdf',
      date:'ATA N° 008/2023'

    },
    { 
      id:5,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc9704156866132.pdf',
      date:'EXTRAORDINÁRIA'
    },
    {
      id:6,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4031886978518.pdf',
      date:'ATA N° 006/2023'

    },
    { 
      id:7,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc1706120176927.pdf',
      date:'ATA N° 005/2023'

    },
    {
      id:8,
      docName:'PARECER PRESTAÇÃO DE CONTAS',
      doc:'/doc/conselho-fiscal-pdf/doc6899119179138.pdf',
      date:'EXERCÍCIO 2022'

    },
    { 
      id:9,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2820330027501.pdf',
      date:'ATA N° 004/2023'
    },
    {
      id:10,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8922759582988.pdf',
      date:'ATA N° 003/2023'

    },
    { 
      id:11,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5220321066894.pdf',
      date:'ATA N° 002/2023'
    },
    {
      id:12,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5445037167515.pdf',
      date:'ATA N° 001/2023'

    },
    { 
      id:13,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc1419574305695.pdf',
      date:'ATA N° 010/2022'
    },
    {
      id:14,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5328813027228.pdf',
      date:'ATA N° 009/2022'

    },
    { 
      id:15,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2708610890322.pdf',
      date:'ATA N° 008/2022'

    },
    {
      id:16,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2857149207006.pdf',
      date:'ATA N° 007/2022'

    },
    {
      id:17,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8190698992900.pdf',
      date:'ATA N° 006/2022'

    },
    {
      id:18,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc3799032714328.pdf',
      date:'ATA N° 005/2022'

    },
    {
      id:19,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0053824523124.pdf',
      date:'ATA N° 004/2022'

    },
    {
      id:20,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8026614810625.pdf',
      date:'ATA N° 003/2022'

    },
    {
      id:21,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2968403713078.pdf',
      date:'ATA N° 002/2022'

    },
    {
      id:22,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4081862091349.pdf',
      date:'ATA N° 001/2022'

    },
    {
      id:23,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0831453603231.pdf',
      date:'ATA N° 101/2021'
    },
    {
      id:24,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc9798960743853.pdf',
      date:'ATA N° 100/2021 E 099/2021'

    },

  ]

const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 14;

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
        <h2>Conselho Fiscal</h2>      
        <p>Destinado a apresentar as ações do conselho fiscal</p>
         
          <div className={styles.containerMidia}>
            {currentCards.map((item, index) => (
              <CardPDF               
               key={item.id} 
               doc={item.doc}
               docName={item.docName}
               date={item.date}
              />
            ))}
          </div>
      </div>
    
            {/* Paginação */}
            { totalPages > 1  && (

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
        )}
    </>
  );
}