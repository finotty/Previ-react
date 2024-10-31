"use client";
import React, { useState,useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
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

export default function noticiasEcomunicados() {
  const [uploads, setUploads] = useState<Upload[]>([]);
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
      const querySnapshot = await getDocs(collection(db, 'news-noticiasComunicados'));
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
 { uploads.length != 0 ?
  ( <div className={styles.containerCenter}>
      <h2>Notícias e Comunicados</h2>
      <p>Notícias e comunicados de interesse dos servidores e da população</p>
      
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
       {(totalPages > 1 && uploads.length != 0)  && 
       (   <Pagination  
            currentPage={currentPage}
            totalPages={totalPages}
            onPreviousPage={handlePreviousPage}
            onNextPage={handleNextPage}
            onPageChange={handlePageChange}
          /> )}                
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
