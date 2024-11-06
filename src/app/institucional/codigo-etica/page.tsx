"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import CardPDF from "@/app/components/cardPDF";
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
export default function CodigoEtica() {
  const [uploads, setUploads] = useState<Upload[]>([]);

  useEffect(() => {
    const fetchUploads = async () => {
      const querySnapshot = await getDocs(collection(db, 'institucional-codigoEtica'));
      const uploadsData: Upload[] = [];
      querySnapshot.forEach((doc) => {    
        uploadsData.push({ id: doc.id, ...doc.data() } as Upload);
      });
   
      setUploads(uploadsData);
    };
    fetchUploads();
  }, []);
  return (
    <>
  {uploads.length != 0 ?
  (  <div className={styles.containerCenter}>
      <h2>Código de ética</h2>
  
         {/* Container dos cards */}
         <div className={styles.cardsContainer}>
          {uploads.map((item) => (
            <CardPDF               
            key={item.id} 
            doc={item.fileUrl}
            docName={item.title}
            date={item.date}
            />
          ))}
        </div>
    </div>) :
    (<div className={styles.loadingContainer}>
     <div className={styles.spinner}></div>
     <p>Carregando informações...</p>
    </div>)}
  </>
  );
}