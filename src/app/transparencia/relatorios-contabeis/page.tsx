"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";
import Pagination from "@/app/components/pagination";

export default function RelatoriosContabeis() {

  const data = [
    { 
      id:1,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc6560499258981.pdf',
      date:'FEVEREIRO/2024'
    },
    {
      id:2,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc3018331531673.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:3,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc1008266796316.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:4,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc4490640532665.pdf',
      date:'JANEIRO/2024'
    },
    {
      id:5,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc2065342042029.pdf',
      date:'JANEIRO/2024'
    },
    { 
      id:6,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc5686722788923.pdf',
      date:'JANEIRO/2024'
    },
    { 
      id:7,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc5468371408157.pdf',
      date:'DEZEMBRO/2023'
    },
    {
      id:8,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc8200859137463.pdf',
      date:'DEZEMBRO/2023'
    },
    { 
      id:9,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc5214121782101.pdf',
      date:'DEZEMBRO/2023'
    },
    { 
      id:10,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc0325663070357.pdf',
      date:'NOVEMBRO/2023'
    },
    {
      id:11,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc2410320425563.pdf',
      date:'NOVEMBRO/2023'
    },
    { 
      id:12,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc1397612020909.pdf',
      date:'NOVEMBRO/2023'
    },
    { 
      id:13,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc4033391113949.pdf',
      date:'OUTUBRO/2023'
    },
    {
      id:14,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc3364784968011.pdf',
      date:'OUTUBRO/2023'
    },
    { 
      id:15,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc9359766836766.pdf',
      date:'OUTUBRO/2023'
    },
    { 
      id:16,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc5425678652081.pdf',
      date:'SETEMBRO/2023'
    },
    {
      id:17,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc8699625717013.pdf',
      date:'SETEMBRO/2023'
    },
    { 
      id:18,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc2667753626167.pdf',
      date:'SETEMBRO/2023'
    },
    { 
      id:19,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc5474896045900.pdf',
      date:'AGOSTO/2023'
    },
    { 
      id:20,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc6994762846461.pdf',
      date:'JULHO/2023'
    },
    { 
      id:21,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc9442265499579.pdf',
      date:'AGOSTO/2023'
    },  { 
      id:22,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc1163388433857.pdf',
      date:'JULHO/2023'
    },
    {
      id:23,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc4497371249715.pdf',
      date:'AGOSTO/2023'
    },
    {
      id:24,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc2225007827103.pdf',
      date:'JULHO/2023'
    },
////////////////////////////////////////////////////////////////
    { 
      id:25,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc4750755306094.pdf',
      date:'JUNHO/2023'
    },
    { 
      id:26,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc9305825741271.pdf',
      date:'MAIO/2023'
    },
    { 
      id:27,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc3608315919804.pdf',
      date:'JUNHO/2023'
    },  
    { 
      id:28,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc3456687010707.pdf',
      date:'MAIO/2023'
    },
    {
      id:29,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc4627395495500.pdf',
      date:'JUNHO/2023'
    },
    {
      id:30,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc6533802003728.pdf',
      date:'MAIO/2023'
    },
    { 
      id:31,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc3375564313372.pdf',
      date:'ABRIL/2023'
    },
    { 
      id:32,   
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc4340289764549.pdf',
      date:'MARÇO/2023'
    },
    { 
      id:33,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc9843181195326.pdf',
      date:'ABRIL/2023'
    },  
    { 
      id:34,   
      docName:'BALANCETE ANALÍTICO DE DESPESAS',
      doc:'/doc/relatorios-contabeis-pdf/doc4304650668646.pdf',
      date:'MARÇO/2023'
    },
    {
      id:35,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc1131511330645.pdf',
      date:'ABRIL/2023'
    },
    {
      id:36,
      docName:'BALANCETE ANALÍTICO DE RECEITAS',
      doc:'/doc/relatorios-contabeis-pdf/doc8825134470903.pdf',
      date:'MARÇO/2023'
    },
    ////////////////////////////////////////////////////////////
    {
      id:37,
      docName:'BALANCETE DE VERIFICAÇÃO COMPARATIVO',
      doc:'/doc/relatorios-contabeis-pdf/doc3094040719657.pdf',
      date:'FEVEREIRO 2023'
    },
    {
      id:38,
      docName:'BALANCETE DE VERIFICAÇÃO COMPARATIVO',
      doc:'/doc/relatorios-contabeis-pdf/doc5566073461803.pdf',
      date:'JANEIRO 2023'
    },
    {
      id:39,
      docName:'DESPESAS 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc9540198718535.pdf',
      date:'FEVEREIRO 2023'
    },
    {
      id:40,
      docName:'DESPESAS 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc4331221370733.pdf',
      date:'JANEIRO 2023'
    },
    {
      id:41,
      docName:'RECEITAS 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc2018661556311.pdf',
      date:'FEVEREIRO 2023'
    },
    {
      id:42,
      docName:'RECEITAS 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc4798042257962.pdf',
      date:'JANEIRO 2023'
    },
    {
      id:43,
      docName:'BALANCETE DE VERIFICAÇÃO COMPARATIVO',
      doc:'/doc/relatorios-contabeis-pdf/doc7695753471623.pdf',
      date:'DEZEMBRO 2022'
    },
    {
      id:44,
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc7220162151649.pdf',
      date:'DEZEMBRO 2022'
    },
    {
      id:45,
      docName:'RECEITAS 6º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc4663135388168.pdf',
      date:'6º BIMESTRE DE 2022'
    },
    {
      id:46,
      docName:'RECEITAS 6º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc0925780830686.pdf',
      date:'6º BIMESTRE DE 2022'
    },
    {
      id:47,
      docName:'BALANCETE DE VERIFICAÇÃO COMPARATIVO',
      doc:'/doc/relatorios-contabeis-pdf/doc7115973805881.pdf',
      date:'OUTUBRO/NOVEMBRO/2022'
    },
    {
      id:48,
      docName:'BALANCETE DE VERIFICAÇÃO',
      doc:'/doc/relatorios-contabeis-pdf/doc1276663546360.pdf',
      date:'NOVEMBRO/2022'
    },
    /////////////////////////////////////////////////////
    {
      id:49,
      docName:'DESPESAS 5º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc7287026948976.pdf',
      date:'5º BIM/2022'
    },
    {
      id:50,
      docName:'RECEITAS 5º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc0120232054180.pdf',
      date:'5º BIM/2022'
    },
    {
      id:51,
      docName:'DESPESAS 4º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc0280627429839.pdf',
      date:'4º BIM/2022'
    },
    {
      id:52,
      docName:'RECEITAS 4º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc3011794511651.pdf',
      date:'4º BIM/2022'
    },
    {
      id:53,
      docName:'DESPESAS 3º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc8534622277719.pdf',
      date:'3º BIM/2022'
    },
    {
      id:54,
      docName:'RECEITAS 3º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc6192120871300.pdf',
      date:'3º BIM/2022'
    },
    {
      id:55,
      docName:'DESPESAS 2º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc5201075529843.pdf',
      date:'2º BIM/2022'
    },
    {
      id:56,
      docName:'RECEITAS 2º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc4246312799720.pdf',
      date:'2º BIM/2022'
    },
    {
      id:57,
      docName:'DESPESAS 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc0790495063286.pdf',
      date:'1º BIM/2022'
    },
    {
      id:58,
      docName:'RECEITAS DO 1º BIMESTRE',
      doc:'/doc/relatorios-contabeis-pdf/doc8069044506946.pdf',
      date:'1º BIM/2022'
    },
    {
      id:59,
      docName:'Balancete de Verificação 2021',
      doc:'/doc/relatorios-contabeis-pdf/doc9463534611140.pdf',
      date:'Janeiro a Dezembro de 2021'
    },
    {
      id:60,
      docName:'Balanço Patrimonial 2021',
      doc:'/doc/relatorios-contabeis-pdf/doc8775451206808.pdf',
      date:'Exercício 2021'
    },
    /////////////////////////////////////////////////////////////
    {
      id:61,
      docName:'Balanço Financeiro Empenhado 2021',
      doc:'/doc/relatorios-contabeis-pdf/doc0597393747161.pdf',
      date:'Exercício 2021'
    },
    {
      id:62,
      docName:'Balanço Orçamentário 2021',
      doc:'/doc/relatorios-contabeis-pdf/doc0371419658680.pdf',
      date:'Exercício 2021'
    },
    {
      id:63,
      docName:'Balancete de Verificação 2020',
      doc:'/doc/relatorios-contabeis-pdf/doc2871247635907.pdf',
      date:'Janeiro a Dezembro de 2020'
    },
    {
      id:64,
      docName:'Balanço Patrimonial 2020',
      doc:'/doc/relatorios-contabeis-pdf/doc8588248038354.pdf',
      date:'Exercício 2020'
    },
    {
      id:65,
      docName:'Balanço Financeiro Empenhado 2020',
      doc:'/doc/relatorios-contabeis-pdf/doc3389801845460.pdf',
      date:'Exercício 2020'
    },
    {
      id:66,
      docName:'Balanço Orçamentário 2020',
      doc:'/doc/relatorios-contabeis-pdf/doc8787667592678.pdf',
      date:'Exercício 2020'
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

const handlePageChange = (page: number) => {
  setCurrentPage(page);
};
  return (
    <>
    <div className={styles.containerCenter}>
        <h2>Relatórios Contábeis</h2>      
        <p>Destinado a apresentação das informações contábeis e financeiras</p>
         
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
        onPageChange={handlePageChange}
      />
        )}
    </>
  );
}