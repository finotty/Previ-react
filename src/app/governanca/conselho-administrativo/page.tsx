"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function ConselhoAdministrativo() {

  const data = [
    { 
      id:1,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc5710109947710.pdf',
      date:'ATA N° 002/2024'
    },
    {
      id:2,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc6818472137515.pdf',
      date:'ATA N° 001/2024'
    },
    { 
      id:3,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1184355278320.pdf',
      date:'ATA N° 012/2023'
    },
    {
      id:4,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc2085297277262.pdf',
      date:'ATA N° 011/2023'
    },
    { 
      id:5,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc9826301917880.pdf',
      date:'ATA N° 010/2023'

    },
    {
      id:6,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc2540023742297.pdf',
      date:'ATA N° 009/2023'

    },
    { 
      id:7,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1234691567399.pdf',
      date:'ATA N° 008/2023'
    },
    {
      id:8,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc9103036884448.pdf',
      date:'ATA N° 007/2023'

    },
    { 
      id:9,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1524096201492.pdf',
      date:'ATA N° 006/2023'

    },
    {
      id:10,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc3787854139129.pdf',
      date:'ATA N° 005/2023'

    },
    { 
      id:11,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1054167964289.pdf',
      date:'ATA N° 004/2023'

    },
    {
      id:12,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc6758812025519.pdf',
      date:'ATA N° 003/2023'

    },
    { 
      id:13,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc8117578596646.pdf',
      date:'ATA N° 002/2023'

    },
    {
      id:14,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc2263001028113.pdf',
      date:'ATA N° 001/2023'

    },
    { 
      id:15,   
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc0784094195954.pdf',
      date:'ATA N° 012/2022'
    },
    {
      id:16,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc0679964939634.pdf',
      date:'ATA N°  011/2022'

    },
    {
      id:17,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc7296114625300.pdf',
      date:'ATA N° 010/2022'

    },
    {
      id:18,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1708787863356.pdf',
      date:'ATA N° 009/2022'

    },
    {
      id:19,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc2220597577740.pdf',
      date:'ATA N° 008/2022'

    },
    {
      id:20,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc8170383089728.pdf',
      date:'ATA N° 007/2022'

    },
    {
      id:21,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc6716355265355.pdf',
      date:'ATA N° 006/2022'

    },
    {
      id:22,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc7650750293424.pdf',
      date:'ATA N° 005/2022'

    },
    {
      id:23,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc4172467143990.pdf',
      date:'ATA N° 004/2022'

    },
    {
      id:24,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc5125727411276.pdf',
      date:'ATA N° 003/2022'

    },
    {
      id:25,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc4704337587263.pdf',
      date:'ATA N° 012/2021'

    },
    {
      id:26,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc2966990979284.pdf',
      date:'ATA N° 011/2021'


    },
    {
      id:27,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc5740737961568.pdf',
      date:'ATA N° 010/2021'

    },
    {
      id:28,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1525995084967.pdf',
      date:'ATA N° 009/2021'


    },
    {
      id:29,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1600012836830.pdf',
      date:'ATA N° 008/2021'


    },
    {
      id:30,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc9948088855958.pdf',
      date:'ATA N° 007/2021'


    },
    {
      id:31,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc1100985714096.pdf',
      date:'ATA N° 006/2021'


    },
    {
      id:32,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc7571915954088.pdf',
      date:'ATA N° 005/2021'


    },
    {
      id:33,
      docName:'ATA CONSELHO ADMINISTRAÇÃO',
      doc:'/doc/conselho-administrativo-pdf/doc7462548040228.pdf',
      date:'ATA N° 004/2021'


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