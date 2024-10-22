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
export default function DiretoriaExecutiva() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    { //foi
      id:1,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc8145814524401.pdf',
      date:'Março/2024'
    },
    {//foi
      id:2,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7494455702814.pdf',
      date:'Fevereiro/2024'
    },
    {//foi 
      id:3,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5456032018639.pdf',
      date:'Janeiro/2024'
    },
    {//foi
      id:4,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4308411944148.pdf',
      date:'Dezembro/2023'
    },
    {//foi 
      id:5,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0799753907605.pdf',
      date:'Novembro/2023'
    },
    {//foi
      id:6,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc6460834838698.pdf',
      date:'Outubro/2023'
    },
    { //foi
      id:7,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0036691789049.pdf',
      date:'Setembro/2023'
    },
    {//foi
      id:8,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7240136017229.pdf',
      date:'Agosto/2023'
    },
    {//foi 
      id:9,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc7878150941572.pdf',
      date:'Julho/2023'
    },
    {//foi
      id:10,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1295292006162.pdf',
      date:'Junho/2023'
    },
    {//foi 
      id:11,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1616423723800.pdf',
      date:'Maio/2023'
    },
    {//foi
      id:12,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2758912279471.pdf',
      date:'Março/2023'
    },
    {//foi 
      id:13,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1707915866846.pdf',
      date:'Fevereiro/2023'
    },
    {//foi
      id:14,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0302592604296.pdf',
      date:'Janeiro/2023'
    },
    {//foi 
      id:15,   
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1058530254576.pdf',
      date:'Dezembro/2022'
    },
    {//foi
      id:16,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2921393652281.pdf',
      date:'Novembro/2022'
    },
    {//foi
      id:17,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5126990878619.pdf',
      date:'Outubro/2022'
    },
    {//foi
      id:18,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5904392532309.pdf',
      date:'Setembro/2022'
    },
    {//foi
      id:19,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2222272207730.pdf',
      date:'Agosto/2022'
    },
    {//foi
      id:20,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2742723123892.pdf',
      date:'Julho/2022'
    },
    {//foi
      id:21,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc9540197847803.pdf',
      date:'Junho/2022'
    },
    {//foi
      id:22,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc3993040706919.pdf',
      date:'Maio/2022'
    },
    {//foi
      id:23,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5520172551657.pdf',
      date:'Abril/2022'
    },
    {//foi
      id:24,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc0748899903880.pdf',
      date:'Março/2022'
    },
    {//foi
      id:25,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc8607716283571.pdf',
      date:'Fevereiro/2022'
    },
    {//foi
      id:26,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4918699687912.pdf',
      date:'Janeiro/2022'
    },
    {//foi
      id:27,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc5274163750521.pdf',
      date:'Julho/2021'
    },
    {//foi
      id:28,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1001542555433.pdf',
      date:'Junho/2021'
    },
    {//foi
      id:29,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc4287790922315.pdf',
      date:'Abril/2021'
    },
    {//foi
      id:30,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc1255773417496.pdf',
      date:'Março/2021'
    },
    {//foi
      id:31,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc2463529501711.pdf',
      date:'Fevereiro/2021'
    },
    {//foi
      id:32,
      docName:'ATA DIRETORIA EXECUTIVA',
      doc:'/doc/diretoria-executiva-pdf/doc6262220575935.pdf',
      date:'Janeiro/2021'
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
    const querySnapshot = await getDocs(collection(db, 'governanca-diretoriaExecutiva'));
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
    (<div className={styles.containerCenter}>
        <h2>Diretoria Executiva</h2>      
        <p>Destinado em apresentar as ações relacionadas a gestão previdenciária</p>
         
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
      { (totalPages > 1 && uploads.length != 0) && (

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