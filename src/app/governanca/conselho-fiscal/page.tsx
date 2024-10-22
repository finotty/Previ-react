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
export default function ConselhoFiscal() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    {//foi 
      id:1,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8211256710469.pdf',
      date:'ATA N° 002/2024'
    },
    {//foi
      id:2,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0081762923801.pdf',
      date:'ATA N° 001/2024'

    },
    {//foi 
      id:3,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc6163990429716.pdf',
      date:'ATA N° 009/2023'
    },
    {//foi
      id:4,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4413825394689.pdf',
      date:'ATA N° 008/2023'

    },
    {//foi 
      id:5,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc9704156866132.pdf',
      date:'EXTRAORDINÁRIA'
    },
    {//foi
      id:6,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4031886978518.pdf',
      date:'ATA N° 006/2023'

    },
    {//foi 
      id:7,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc1706120176927.pdf',
      date:'ATA N° 005/2023'

    },
    {//foi
      id:8,
      docName:'PARECER PRESTAÇÃO DE CONTAS',
      doc:'/doc/conselho-fiscal-pdf/doc6899119179138.pdf',
      date:'EXERCÍCIO 2022'

    },
    {//foi 
      id:9,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2820330027501.pdf',
      date:'ATA N° 004/2023'
    },
    {//foi
      id:10,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8922759582988.pdf',
      date:'ATA N° 003/2023'

    },
    {//foi 
      id:11,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5220321066894.pdf',
      date:'ATA N° 002/2023'
    },
    {//foi
      id:12,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5445037167515.pdf',
      date:'ATA N° 001/2023'

    },
    {//foi 
      id:13,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc1419574305695.pdf',
      date:'ATA N° 010/2022'
    },
    {//foi
      id:14,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc5328813027228.pdf',
      date:'ATA N° 009/2022'

    },
    {//foi 
      id:15,   
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2708610890322.pdf',
      date:'ATA N° 008/2022'

    },
    {//foi
      id:16,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2857149207006.pdf',
      date:'ATA N° 007/2022'

    },
    {//foi
      id:17,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8190698992900.pdf',
      date:'ATA N° 006/2022'

    },
    {//foi
      id:18,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc3799032714328.pdf',
      date:'ATA N° 005/2022'

    },
    {//foi
      id:19,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0053824523124.pdf',
      date:'ATA N° 004/2022'

    },
    {//foi
      id:20,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc8026614810625.pdf',
      date:'ATA N° 003/2022'

    },
    {//foi
      id:21,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc2968403713078.pdf',
      date:'ATA N° 002/2022'

    },
    {//foi
      id:22,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc4081862091349.pdf',
      date:'ATA N° 001/2022'

    },
    {//foi
      id:23,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc0831453603231.pdf',
      date:'ATA N° 101/2021'
    },
    {//foi
      id:24,
      docName:'ATA CONSELHO FISCAL',
      doc:'/doc/conselho-fiscal-pdf/doc9798960743853.pdf',
      date:'ATA N° 100/2021 E 099/2021'

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
    const querySnapshot = await getDocs(collection(db, 'governanca-conselhoFiscal'));
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
   {uploads.length != 0 ? 
   ( <div className={styles.containerCenter}>
        <h2>Conselho Fiscal</h2>      
        <p>Destinado a apresentar as ações do conselho fiscal</p>
         
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
      </div>):
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