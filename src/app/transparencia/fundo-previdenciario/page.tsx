"use client";
import React, { useState,useEffect } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";
import Pagination from "@/app/components/pagination";
import { db} from '@/bd/firebaseConfig';
import { Timestamp, collection, getDocs } from 'firebase/firestore';

interface Upload {
  id: string;
  title: string;
  description: string;
  date: string;
  fileUrl: string;
  created_at:Timestamp;
}
export default function FundoPrevidenciario() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    { 
      id:1,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc2173483254315.pdf',
      date:'FEVEREIRO/2024'
    },
    { 
      id:2,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6911504060246.pdf',
      date:'JANEIRO/2024'
    },
    { 
      id:3,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc3975095152029.pdf',
      date:'DEZEMBRO/2023'
    },
    { 
      id:4,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc0153332336240.pdf',
      date:'NOVEMBRO/2023'
    },
    { 
      id:5,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc9186373279130.pdf',
      date:'OUTUBRO/2023'
    },
    { 
      id:6,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6138639499570.pdf',
      date:'SETEMBRO/2023'
    },
    { 
      id:7,   
      docName:'ATESTADO DE CREDENCIAMENTO FUNDO',
      doc:'/doc/fundo-previdenciario-pdf/doc0449963351097.pdf',
      date:'0001/2023 FUNDO CAIXA BRASIL TP'
    },
    { 
      id:8,   
      docName:'TERMO DE ANÁLISE DE CREDENCIAMENTO',
      doc:'/doc/fundo-previdenciario-pdf/doc8084907151622.pdf',
      date:'0002/2022 CAIXA ECONÔMICA'
    },
    { 
      id:9,   
      docName:'TERMO DE ANÁLISE DE CREDENCIAMENTO',
      doc:'/doc/fundo-previdenciario-pdf/doc6759237040426.pdf',
      date:'0001/2022 BANCO DO BRASIL'
    },
    { 
      id:10,   
      docName:'TERMO DE ANÁLISE DE CREDENCIAMENTO',
      doc:'/doc/fundo-previdenciario-pdf/doc3118945337200.pdf',
      date:'0002/2021 CAIXA ECONÔMICA'
    },
    { 
      id:11,   
      docName:'TERMO DE ANÁLISE DE CREDENCIAMENTO',
      doc:'/doc/fundo-previdenciario-pdf/doc4871234819342.pdf',
      date:'0001/2021 BANCO DO BRASIL'
    },
    { 
      id:12,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc7532916031429.pdf',
      date:'AGOSTO/2023'
    },
    ////////////////////////////////////////////////////////
    { 
      id:13,   
      docName:'LÂMINA FI CAIXA BRASIL IDKA IPCA 2A',
      doc:'/doc/fundo-previdenciario-pdf/doc7581069755001.pdf',
      date:'AGOSTO/2023 (Fonte maisretorno.com)'
    },
    { 
      id:14,   
      docName:'LÂMINA FI CAIXA BRASIL TP RF',
      doc:'/doc/fundo-previdenciario-pdf/doc9054894115102.pdf',
      date:'AGOSTO/2023 (Fonte maisretorno.com)'
    },
   
    { 
      id:15,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc9885556968051.pdf',
      date:'JULHO/2023'
    },
   
    { 
      id:16,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc1100569690779.pdf',
      date:'JUNHO/2023'
    },
   
    { 
      id:17,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc5645719321254.pdf',
      date:'MAIO/2023'
    },
   
    { 
      id:18,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc8069889320795.pdf',
      date:'ABRIL/2023'
    },
   
    { 
      id:19,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc7963487615325.pdf',
      date:'MARÇO/2023'
    },
   
    { 
      id:20,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc3295978065887.pdf',
      date:'FEVEREIRO/2023'
    },
   
    { 
      id:21,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6122910202912.pdf',
      date:'JANEIRO/2023'
    },
   
    { 
      id:22,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc7374369394445.pdf',
      date:'DEZEMBRO/2022'
    },
   
    { 
      id:23,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc4254914294692.pdf',
      date:'NOVEMBRO/2022'
    },
   
    { 
      id:24,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6321327580218.pdf',
      date:'OUTUBRO/2022'
    },
   ////////////////////////////////////////////////////
    { 
      id:25,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc4931069881506.pdf',
      date:'SETEMBRO/2022'
    },
    { 
      id:26,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc8869674884780.pdf',
      date:'AGOSTO/2022'
    },
    { 
      id:27,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc8176855221279.pdf',
      date:'JULHO/2022'
    },
    { 
      id:28,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc7267801796224.pdf',
      date:'JUNHO/2022'
    },
    { 
      id:29,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc2606317866826.pdf',
      date:'MAIO/2022'
    },
    { 
      id:30,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc4616967024205.pdf',
      date:'ABRIL/2022'
    },
    { 
      id:31,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc5666966741819.pdf',
      date:'MARÇO/2022'
    },
    { 
      id:32,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc9882227880717.pdf',
      date:'FEVEREIRO/2022'
    },
    { 
      id:33,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc2380302103054.pdf',
      date:'JANEIRO/2022'
    },
    { 
      id:34,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc9870092423853.pdf',
      date:'DEZEMBRO/2021'
    },
    { 
      id:35,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc4596134576281.pdf',
      date:'NOVEMBRO/2021'
    },
    { 
      id:36,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc8577066916583.pdf',
      date:'OUTUBRO/2021'
    },
    ///////////////////////////////////////////////////////////
    { 
      id:37,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc0717720599024.pdf',
      date:'SETEMBRO/2021'
    },
    { 
      id:38,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc5518903002483.pdf',
      date:'AGOSTO/2021'
    },
    { 
      id:39,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc8616032577896.pdf',
      date:'JULHO/2021'
    },
    { 
      id:40,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc9552208971339.pdf',
      date:'JUNHO/2021'
    },
    { 
      id:41,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6019372614721.pdf',
      date:'MAIO/2021'
    },
    { 
      id:42,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc4884666542129.pdf',
      date:'ABRIL/2021'
    },
    { 
      id:43,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc3765866366801.pdf',
      date:'MARÇO/2021'
    },
    { //foi
      id:44,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc1643788525162.pdf',
      date:'FEVEREIRO/2021'
    },
    { //foi
      id:45,   
      docName:'CARTEIRA DE ATIVOS',
      doc:'/doc/fundo-previdenciario-pdf/doc6460793164467.pdf',
      date:'JANEIRO/2021'
    },
  ]

const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 14;

// Cálculo de número total de páginas
const totalPages = Math.ceil(uploads.length / cardsPerPage);

// Obtenção dos cards para a página atual
const currentCards = uploads.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

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
useEffect(() => {
  const fetchUploads = async () => {
    const querySnapshot = await getDocs(collection(db, 'transparencia-fundoPrevidenciario'));
    const uploadsData: Upload[] = [];
    querySnapshot.forEach((doc) => {    
      uploadsData.push({ id: doc.id, ...doc.data() } as Upload);
    });
      // Ordenar pelo campo created_at
    const sortedUploads = uploadsData.sort((a, b) => {
    const dateA = a.created_at.toDate().getTime(); // Converter Timestamp para Date
    const dateB = b.created_at.toDate().getTime(); // Converter Timestamp para Date
    return dateB - dateA; // Ordena da mais antiga para a mais recente
  });
    setUploads(sortedUploads);
  };
  fetchUploads();
}, []);
  return (
    <>
    <div className={styles.containerCenter}>
        <h2>Fundo Previdenciário</h2>      
        <p>Destinado a informações sobre os ativos mobiliários que integram a carteira da previ</p>
         
         {uploads.length != 0 ?
         ( <div className={styles.containerMidia}>
            {currentCards.map((item, index) => (
              <CardPDF               
               key={item.id} 
               doc={item.fileUrl}
               docName={item.title}
               date={item.date}
              />
            ))}
          </div>):
          (<div className={styles.loadingContainer}>
           <div className={styles.spinner}></div>
           <p>Carregando informações...</p>
          </div>)}
      </div>
    
        {/* Paginação */}
        { (totalPages > 1 && uploads.length != 0)  && (

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