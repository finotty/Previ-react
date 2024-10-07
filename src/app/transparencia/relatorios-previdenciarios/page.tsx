"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function RelatoriosPrevidenciarios() {

  const data = [
    { 
      id:1,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc8075174907443.pdf',
      date:'NOVEMBRO/DEZEMBRO'
    },
    { 
      id:2,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc0672318103334.pdf',
      date:'SETEMBRO/OUTUBRO'
    },
    { 
      id:3,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc6090940650725.pdf',
      date:'JULHO/AGOSTO'
    },
    { 
      id:4,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc7373534590593.pdf',
      date:'MAIO/JUNHO'
    },
    { 
      id:5,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5514316437785.pdf',
      date:'MARÇO/ABRIL'
    },
    { 
      id:6,   
      docName:'DIPR 2023',
      doc:'/doc/relatorios-previdenciarios-pdf/doc4837150358445.pdf',
      date:'Janeiro/Fevereiro'
    },
    { 
      id:7,   
      docName:'DIPR 2022',
      doc:'/doc/relatorios-previdenciarios-pdf/doc4051921083331.pdf',
      date:'Novembro/Dezembro'
    },
    { 
      id:8,   
      docName:'DIPR 2022',
      doc:'/doc/relatorios-previdenciarios-pdf/doc1679196811567.pdf',
      date:'Setembro/Outubro'
    },
    { 
      id:9,   
      docName:'DIPR 2022',
      doc:'/doc/relatorios-previdenciarios-pdf/doc9350104674876.pdf',
      date:'Julho/Agosto'
    },
    { 
      id:10,   
      docName:'DIPR 2022',
      doc:'/doc/relatorios-previdenciarios-pdf/doc2741435655706.pdf',
      date:'Maio/Junho'
    },
    { 
      id:11,   
      docName:'DIPR 2022',
      doc:'/doc/relatorios-previdenciarios-pdf/doc3294371599739.pdf',
      date:'Janeiro/Fevereiro'
    },
    { 
      id:12,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5188097480308.pdf',
      date:'Novembro/Dezembro'
    },
    /////////////////////////////////////////////////////
    { 
      id:13,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc0121567003946.pdf',
      date:'Setembro/Outubro'
    },
    { 
      id:14,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc7191906076142.pdf',
      date:'Julho/Agosto'
    },
    { 
      id:15,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc8092959949046.pdf',
      date:'Maio/Junho'
    },
    { 
      id:16,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc2231898893351.pdf',
      date:'Março/Abril'
    },
    { 
      id:17,   
      docName:'DIPR 2021',
      doc:'/doc/relatorios-previdenciarios-pdf/doc1980873209485.pdf',
      date:'Janeiro/Fevereiro'
    },
    { 
      id:18,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5492567999429.pdf',
      date:'Novembro/Dezembro'
    },
    { 
      id:19,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc7564663768615.pdf',
      date:'Setembro/Outubro'
    },
    { 
      id:20,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc7479764310855.pdf',
      date:'Julho/Agosto'
    },
    { 
      id:21,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5461257799424.pdf',
      date:'Maio/Junho'
    },
    { 
      id:22,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5837409825951.pdf',
      date:'Março/Abril'
    },
    { 
      id:23,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc8827132218806.pdf',
      date:'Janeiro/Fevereiro'
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
        <h2>Relatórios Previdenciários</h2>      
        <p>DIPR - Demonstrativos de informações previdenciários e repasses [CadPrev]</p>
         
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