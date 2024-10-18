"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "@/app/components/card";
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

export default function ManuaisOrientacoes() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    {//10:41:21
      id: 1,
      title: 'MANUAL DE PROCEDIMENTOS DE ENVIO DE FOLHA DE PAGAMENTO - TCE-RJ',
      date: '18/08/2023',
      description: 'Este manual do Módulo de Folha de Pagamento do Sistema e-TCERJ descreve os procedimentos a serem ad...',
      doc:'/doc/manuais-orientacoes-pdf/doc9417384887116.pdf',
    },
    {//10:40:35
      id: 2,
      title: 'SERVIDOR, QUAIS SÃO OS ATUAIS CRITÉRIOS QUE SÃO ADOTADOS PARA A SUA APOSENTADORIA?',
      date: '25/07/2022',
      description: 'Nesta semana tivemos a satisfação de presenciar a concessão da aposentadoria da servidora Valéri...',
      doc:'/doc/manuais-orientacoes-pdf/doc5104222917594.pdf',
    },
    
  
];

const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 8;

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
    const querySnapshot = await getDocs(collection(db, 'news-manuaisOrientacoes'));
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
      <h2>Manuais e Orientações</h2>
      <p>Manuais de procedimentos e orientações sobre as questões previdenciárias</p>
      
         {/* Container dos cards */}
         <div className={styles.cardsContainer}>
          {currentCards.map((item) => (
            <Card 
              key={item.id} 
              title={item.title}
              date={item.date}
              description={item.description}
              doc={item.fileUrl}
            />
          ))}
        </div>
      {/* Paginação */}
            { totalPages > 4  && (         
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPreviousPage={handlePreviousPage}
                onNextPage={handleNextPage}
                onPageChange={handlePageChange}
              />
            )}
    </div>)
    :
    (<div className={styles.loadingContainer}>
    <div className={styles.spinner}></div>
    <p>Carregando informações...</p>
    </div>)
    }
    </>
  );
}