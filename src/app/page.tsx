"use client";
import React,{useEffect,useState} from "react";
import styles from "./page.module.scss";
import Card from "./components/card";
import Link from "next/link";
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
export default function Home() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    {
      title: 'RELATÓRIO ECONÔMICO, FINANCEIRO E PREVIDENCIÁRIO MARÇO DE 2024',
      date: '02/04/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI e fluxo de caixa do primeiro trimestre de 2024, para apreciação da diretoria Executiva, Comitê de Investimento e pelo Conselho de Administração, e propostas a serem apresentas à Exma. Prefeita do município',
      doc:'/doc/noticias-comunicados-pdf/doc6586018181250.pdf',
    },
    {
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '24/01/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      doc:'/doc/noticias-comunicados-pdf/doc0478035267451.pdf',
    },
    {
      title: ' RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIADA PREVI JAPERI 2024',
      date: '17/01/2024',
      description: 'No dia de hoje, dia 15 de janeiro de 2024, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
      doc:'/doc/noticias-comunicados-pdf/doc9805937696075.pdf',
    },
    {
      title: 'RELATÓRIO ECONÔMICO E FINANCEIRO JULHO DE 2023',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI projetadas para 2023, incluindo a movimentação na carteira de ativos da PREVI-JAPERI, rendimentos projetados e recebidos, de acordo com a estratégia estabelecida pela Política de Investimento de 2023 e o Plano de Custeio Atuarial, bem como a apresentação de resultados no recebimento de cupons de juros das aplicações realizadas.',
      doc:'/doc/noticias-comunicados-pdf/doc3704895032814.pdf',
    },
    
  ];

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
      const firstObjects = sortedUploads.slice(0,4);
      setUploads(firstObjects);
    };
    fetchUploads();
  }, []);
  return (
    <>
      <div className={styles.containerCenter}>
        <h2>Notícias e Comunicados</h2>
        <p>Notícias e comunicados de interesse dos servidores e da população</p>
        <div className={styles.divButton}>
           <Link className={styles.button} href="/news/noticias-comunicados">Ver mais</Link>
         </div>
         {uploads.length != 0 ?
         (<div className={styles.cardsContainer}>
          {uploads.map((item, index) => (
           <Card 
            key={index} 
            title={item.title}
            date={item.date}
            description={item.description}
            doc={item.fileUrl}
          />
          ))}
         </div>) :
        (<div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando informações...</p>
        </div>)}

      </div>
    </>
  );
}
