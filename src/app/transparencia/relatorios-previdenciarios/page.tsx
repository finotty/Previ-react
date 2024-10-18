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
export default function RelatoriosPrevidenciarios() {
  const [uploads, setUploads] = useState<Upload[]>([]);
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
    { //foi
      id:22,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc5837409825951.pdf',
      date:'Março/Abril'
    },
    { //foi
      id:23,   
      docName:'DIPR 2020',
      doc:'/doc/relatorios-previdenciarios-pdf/doc8827132218806.pdf',
      date:'Janeiro/Fevereiro'
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
    const querySnapshot = await getDocs(collection(db, 'transparencia-relatoriosPrevidenciarios'));
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
        <h2>Relatórios Previdenciários</h2>      
        <p>DIPR - Demonstrativos de informações previdenciários e repasses [CadPrev]</p>
         
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