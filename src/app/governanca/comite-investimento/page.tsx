"use client";
import React, { useState, useEffect } from "react";
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
export default function ComiteInvestimento() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    {//foi 
      id:1,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc6875256940783.pdf',
      date:'Março/2024'
    },
    {//foi
      id:2,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc2012927187864.pdf',
      date:'Fevereiro/2024'
    },
    {//foi 
      id:3,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc5313378845340.pdf',
      date:'Janeiro/2024'
    },
    {//foi
      id:4,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc7679498464796.pdf',
      date:'Dezembro/2023'
    },
    {//foi 
      id:5,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc4673220651132.pdf',
      date:'Novembro/2023'
    },
    {//foi
      id:6,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc1978589858546.pdf',
      date:'Outubro/2023'
    },
    {//foi 
      id:7,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc3197785446476.pdf',
      date:'Setembro/2023'
    },
    {//foi
      id:8,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc3242010462019.pdf',
      date:'Agosto/2023'
    },
    {//foi 
      id:9,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc7008375226665.pdf',
      date:'Julho/2023'
    },
    {//foi
      id:10,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc9642572475643.pdf',
      date:'Junho/2023'
    },
    {//foi 
      id:11,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc7135924724051.pdf',
      date:'Maio/2023'
    },
    {//foi
      id:12,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc2941271655454.pdf',
      date:'Abril/2023'
    },
    {//foi 
      id:13,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc6781024840772.pdf',
      date:'Março/2023'
    },
    {//foi
      id:14,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc0170529825627.pdf',
      date:'Fevereiro/2023'
    },
    { //foi
      id:15,   
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc0833219109192.pdf',
      date:'Janeiro/2022'
    },
    {//foi
      id:16,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc8200196137055.pdf',
      date:'Dezembro/2022'
    },
    {//foi
      id:17,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc9498420336380.pdf',
      date:'Novembro/2022'
    },
    {//foi
      id:18,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc6994989846738.pdf',
      date:'Outubro/2022'
    },
    {//foi
      id:19,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc1454776017922.pdf',
      date:'Setembro/2022'
    },
    {//foi
      id:20,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc7035296222776.pdf',
      date:'Agosto/2022'
    },
    {//foi
      id:21,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc0337349137240.pdf',
      date:'Julho/2022'
    },
    {//foi
      id:22,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc0253981048385.pdf',
      date:'Junho/2022'
    },
    {//foi
      id:23,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc6586248225056.pdf',
      date:'Maio/2022'
    },
    {//foi
      id:24,
      docName:'ATA COMITÊ DE INVESTIMENTO',
      doc:'/doc/comite-investimento-pdf/doc5871998255869.pdf',
      date:'Abril/2022'
    },
    {//foi
      id:25,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc1032826484610.pdf',
      date:'Março/2022'
    },
    {//foi
      id:26,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc0456051706623.pdf',
      date:'Janeiro/2022'
    },
    {//foi
      id:27,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc1905055346274.pdf',
      date:'Dezembro/2021'
    },
    {//foi
      id:28,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc9683546352903.pdf',
      date:'Outubro/2021'
    },
    {//foi
      id:29,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc9351591310032.pdf',
      date:'Julho/2021'
    },
    {//foi
      id:30,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc1474485347173.pdf',
      date:'Junho/2021'
    },
    {//foi
      id:31,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc4324471851723.pdf',
      date:'Abril/2021'
    },
    {//foi
      id:32,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc4797292894883.pdf',
      date:'Março/2021'
    },
    {//foi
      id:32,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/comite-investimento-pdf/doc1213005362144.pdf',
      date:'Fevereiro/2021'
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
    const querySnapshot = await getDocs(collection(db, 'governanca-comiteInvestimentos'));
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
    <>{ uploads.length != 0 ? (
    <div className={styles.containerCenter}>
        <h2>Comitê de Investimento</h2>      
        <p>Destinado a mostrar as ações realizadas pelo comitê de investimento</p>
         
          <div className={styles.containerMidia}>
            {currentCards.map((item, index) => (
              <CardPDF               
               key={item.id} 
               doc={item.fileUrl}
               docName={item.title}
               date={item.date}
              />
            ))}
          </div>
      </div>
      )  :
      (<div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Carregando informações...</p>
      </div>)}
    
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