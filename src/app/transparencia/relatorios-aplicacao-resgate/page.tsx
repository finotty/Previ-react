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
export default function RelatoriosAplicacaoResgate() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    { 
      id:1,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6395873188673.pdf',
      date:'APR 002/2024'
    },
    { 
      id:2,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6868707497312.pdf',
      date:'APR 001/2024'
    },
    { 
      id:3,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2292601304941.pdf',
      date:'APR 010/2023'
    },
    { 
      id:4,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6325559956655.pdf',
      date:'APR 009/2023'
    },
    { 
      id:5,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc8694492414370.pdf',
      date:'APR 008/2023'
    },
    { 
      id:6,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5225726544605.pdf',
      date:'APR007/2023'
    },
    { 
      id:7,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc1057279004147.pdf',
      date:'APR006/2023'
    },
    { 
      id:8,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc4147721058994.pdf',
      date:'APR005/2023'
    },
    { 
      id:9,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc8777236953665.pdf',
      date:'APR 004/2023'
    },
    { 
      id:10,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6724311048129.pdf',
      date:'APR 003/2023'
    },
    { 
      id:11,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc4479536674242.pdf',
      date:'APR 002/2023'
    },
    { 
      id:12,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc7601027166825.pdf',
      date:'APR 001/2023'
    },
    //////////////////////////////////////////////////////
    { 
      id:13,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc8933608636665.pdf',
      date:'APR 022/2022'
    },
    { 
      id:14,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6857996861974.pdf',
      date:'APR 021/2022'
    },
    { 
      id:15,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc0755965245640.pdf',
      date:'APR 020/2022'
    },
    { 
      id:16,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc4678819211696.pdf',
      date:'APR 018/2022'
    },
    { 
      id:17,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc0368682311377.pdf',
      date:'APR 017/2022'
    },
    { 
      id:18,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc0525186907336.pdf',
      date:'APR 0016/2022'
    },
    { 
      id:19,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc1405567020448.pdf',
      date:'APR 015/2022'
    },
    { 
      id:20,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc3897896832412.pdf',
      date:'APR 014/2022'
    },
    { 
      id:21,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc4683942718328.pdf',
      date:'APR 013/2022'
    },
    { 
      id:22,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5417972522205.pdf',
      date:'APR 012/2022'
    },
    { 
      id:23,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc4861464607273.pdf',
      date:'APR 011/2022'
    },
    { 
      id:24,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5038547882997.pdf',
      date:'APR 010/2022'
    },
    /////////////////////////////////////////////////////////
    { 
      id:25,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc8261233776976.pdf',
      date:'APR 009/2022'
    },
    { 
      id:26,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2903102302351.pdf',
      date:'APR 008/2022'
    },
    { 
      id:27,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2375444237062.pdf',
      date:'APR 007/2022'
    },
    { 
      id:28,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc3862218527365.pdf',
      date:'APR 006/2022'
    },
    { 
      id:29,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc6222469142898.pdf',
      date:'APR 005/2022'
    },
    { 
      id:30,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc3284381209046.pdf',
      date:'APR 004/2022'
    },
    { 
      id:31,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5543977650486.pdf',
      date:'APR 003/2022'
    },
    { 
      id:32,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc9740857707938.pdf',
      date:'APR 002/2022'
    },
    { 
      id:33,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc7639394794871.pdf',
      date:'APR 001/2022'
    },
    { 
      id:34,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2119181204991.pdf',
      date:'APR 016/2021'
    },
    { 
      id:35,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc9621252527131.pdf',
      date:'APR 015/2021'
    },
    { 
      id:36,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc7769820387376.pdf',
      date:'APR 014/2021'
    },
    ///////////////////////////////////////////////////////////////
    { 
      id:37,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc8727476273698.pdf',
      date:'APR 013/2021'
    },
    { 
      id:38,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc1768816751968.pdf',
      date:'APR 012/2021'
    },
    { 
      id:39,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc0883523268363.pdf',
      date:'APR 011/2021'
    },
    { 
      id:40,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc1066804607674.pdf',
      date:'APR 010/2021'
    },
    { 
      id:41,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc9209705442383.pdf',
      date:'APR 009/2021'
    },
    { 
      id:42,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2350999156410.pdf',
      date:'APR 008/2021'
    },
    { 
      id:43,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5063853194068.pdf',
      date:'APR 007/2021'
    },
    { 
      id:44,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc9161996422461.pdf',
      date:'APR 006/2021'
    },
    { 
      id:45,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5889004694327.pdf',
      date:'APR 005/2021'
    },
    { 
      id:46,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc1536962111347.pdf',
      date:'APR 004/2021'
    },
    { 
      id:47,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc2936007641416.pdf',
      date:'APR 004/2021'
    },
    { 
      id:48,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc5760840328750.pdf',
      date:'APR 003/2021'
    },
    ////////////////////////////////////////////////////
    { //foi
      id:49,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc9809735063114.pdf',
      date:'APR 002/2021'
    },
    { //foi
      id:50,   
      docName:'Demonstrativo de Aplicação e Resgate',
      doc:'/doc/relatorios-resgate-aplicacao-pdf/doc0186607378897.pdf',
      date:'APR 001/2021'
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
    const querySnapshot = await getDocs(collection(db, 'transparencia-relatoriosAPK'));
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
        <h2>Demonstrativo de Aplicação e Resgate</h2>      
        <p>Destinado a apresentar os demonstrativos de aplicações e resgates</p>
         
          {uploads.length != 0 ?
          (<div className={styles.containerMidia}>
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