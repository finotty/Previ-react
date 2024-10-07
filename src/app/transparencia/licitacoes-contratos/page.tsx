"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";

export default function LicitacoesContratos() {

  const data = [
    { 
      id:1,   
      docName:'EDITAL DO CLUBE DE DESCONTO PREVI-JAPERI',
      doc:'/doc/licitacoes-contratos-pdf/doc4142373650273.pdf',
      date:'Clube de desconto PREVI-JAPERI'
    },
    { 
      id:2,   
      docName:'Contrato de Sistema Integrado Previdenciário',
      doc:'/doc/licitacoes-contratos-pdf/doc8720234723593.pdf',
      date:'Exercício 2023'
    },
    { 
      id:3,   
      docName:'Contrato de Consultoria Atuarial',
      doc:'/doc/licitacoes-contratos-pdf/doc1439949634808.pdf',
      date:'Exercício 2023'
    },
    { 
      id:4,   
      docName:'Aditivo de Contrato de Custódia BB',
      doc:'/doc/licitacoes-contratos-pdf/doc6621522092840.pdf',
      date:'Custódia BB 2023'
    },
    { 
      id:5,   
      docName:'Edital de Pregão Eletrônico',
      doc:'/doc/licitacoes-contratos-pdf/doc9644242027443.pdf',
      date:'SISTEMA DE GESTÃO PREVIDENCIÁRIA'
    },
    { 
      id:6,   
      docName:'Edital de Dispensa de Licitação ',
      doc:'/doc/licitacoes-contratos-pdf/doc7747247574853.pdf',
      date:'CONSULTORIA E ASSESSORIA PREVIDENCIÁRIA E ATUARIAL'
    },
    { 
      id:7,   
      docName:'Edital Dispensa de Licitação',
      doc:'/doc/licitacoes-contratos-pdf/doc6637949244225.pdf',
      date:'CURSO PREPARATÓRIO CERTIFICAÇÃO RPPS'
    },
    { 
      id:8,   
      docName:'Contrato Custódia Qualificada',
      doc:'/doc/licitacoes-contratos-pdf/doc4026862263658.pdf',
      date:'CAIXA ECONÔMICA FEDERAL'
    },
    { 
      id:9,   
      docName:'Contrato Dataprev',
      doc:'/doc/licitacoes-contratos-pdf/doc0442549711976.pdf',
      date:'SISTEMA COMPREV'
    },
    { 
      id:10,   
      docName:'Termo de Adesão Compensação Previdenciária',
      doc:'/doc/licitacoes-contratos-pdf/doc2462657969178.pdf',
      date:'COMPREV'
    },
    { 
      id:11,   
      docName:'Contrato Custódia Qualificada',
      doc:'/doc/licitacoes-contratos-pdf/doc4639543894915.pdf',
      date:'BANCO DO BRASIL'
    },
    { 
      id:12,   
      docName:'Contrato Crédito e Mercado',
      doc:'/doc/licitacoes-contratos-pdf/doc0112023509191.pdf',
      date:'2022'
    },
    //////////////////////////////////////////////////
    { 
      id:13,   
      docName:'Contrato de Serviços Atuariais',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2022'
    },
    { 
      id:14,   
      docName:'Contrato de Serviços Atuariais',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2020'
    },
    { 
      id:15,   
      docName:'Aditivo Sistema Contábil e Previdenciário',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2022'
    },
    { 
      id:16,   
      docName:'Aditivo Sistema Contábil e Previdenciário',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2021'
    },
    { 
      id:17,   
      docName:'Contrato Agenda Sistema Contábil e Previdenciário',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2019'
    },
    { 
      id:18,   
      docName:'Contrato Caixa Econômica Federal',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2021/2024'
    },
    { 
      id:19,   
      docName:'Edital de Credenciamento Instituições Financeiras',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2021/2024'
    },
    { 
      id:20,   
      docName:'Convênio Consignado Banco do Brasil',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2021/2024'
    },
    { 
      id:21,   
      docName:'Convênio Consignado Itau-Unibanco',
      doc:'/doc/licitacoes-contratos-pdf/.pdf',
      date:'2021/2024'
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
        <h2>Licitações e Contratos</h2>      
        <p>Apresentação dos editais de licitações, dispensa e contratos em vigor</p>
         
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