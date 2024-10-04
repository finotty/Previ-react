"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function DiretoriaExecutiva() {

  const data = [
    { 
      id:1,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc8145814524401.pdf',
      date:'Março/2024'
    },
    {
      id:2,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7494455702814.pdf',
      date:'Fevereiro/2024'
    },
    { 
      id:3,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5456032018639.pdf',
      date:'Janeiro/2024'
    },
    {
      id:4,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4308411944148.pdf',
      date:'Dezembro/2023'
    },
    { 
      id:5,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0799753907605.pdf',
      date:'Novembro/2023'
    },
    {
      id:6,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc6460834838698.pdf',
      date:'Outubro/2023'
    },
    { 
      id:7,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0036691789049.pdf',
      date:'Setembro/2023'
    },
    {
      id:8,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7240136017229.pdf',
      date:'Agosto/2023'
    },
    { 
      id:9,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7878150941572.pdf',
      date:'Julho/2023'
    },
    {
      id:10,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1295292006162.pdf',
      date:'Junho/2023'
    },
    { 
      id:11,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1616423723800.pdf',
      date:'Maio/2023'
    },
    {
      id:12,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2758912279471.pdf',
      date:'Março/2023'
    },
    { 
      id:13,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1707915866846.pdf',
      date:'Fevereiro/2023'
    },
    {
      id:14,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0302592604296.pdf',
      date:'Janeiro/2023'
    },
    { 
      id:15,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1058530254576.pdf',
      date:'Dezembro/2022'
    },
    {
      id:16,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2921393652281.pdf',
      date:'Novembro/2022'
    },
    {
      id:17,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5126990878619.pdf',
      date:'Outubro/2022'
    },
    {
      id:18,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5904392532309.pdf',
      date:'Setembro/2022'
    },
    {
      id:19,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2222272207730.pdf',
      date:'Agosto/2022'
    },
    {
      id:20,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2742723123892.pdf',
      date:'Julho/2022'
    },
    {
      id:21,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc9540197847803.pdf',
      date:'Junho/2022'
    },
    {
      id:22,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc3993040706919.pdf',
      date:'Maio/2022'
    },
    {
      id:23,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5520172551657.pdf',
      date:'Abril/2022'
    },
    {
      id:24,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0748899903880.pdf',
      date:'Março/2022'
    },
    {
      id:25,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc8607716283571.pdf',
      date:'Fevereiro/2022'
    },
    {
      id:26,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4918699687912.pdf',
      date:'Janeiro/2022'
    },
    {
      id:27,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5274163750521.pdf',
      date:'Julho/2021'
    },
    {
      id:28,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1001542555433.pdf',
      date:'Junho/2021'
    },
    {
      id:29,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4287790922315.pdf',
      date:'Abril/2021'
    },
    {
      id:30,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1255773417496.pdf',
      date:'Março/2021'
    },
    {
      id:31,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2463529501711.pdf',
      date:'Fevereiro/2021'
    },
    {
      id:32,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc6262220575935.pdf',
      date:'Janeiro/2021'
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
        <h2>Diretoria Executiva</h2>      
        <p>Destinado em apresentar as ações relacionadas a gestão previdenciária</p>
         
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