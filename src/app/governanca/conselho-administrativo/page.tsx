"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function ConselhoAdministrativo() {

  const data = [
    { 
      id:1,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:2,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:3,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:4,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:5,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:6,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:7,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:8,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:9,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:10,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:11,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:12,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:13,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:14,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:15,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0022024.pdf',
      date:'MARÇO/2024'
    },
    {
      id:16,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/ATADR0032024.pdf',
      date:'FEVEREIRO/2024'
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
        <h2>Conselho Administrativo</h2>      
        <p>Destinado a mostrar as ações do conselho de administração</p>
         
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