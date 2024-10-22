"use client";
import React, { useState, useEffect } from "react";
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
export default function DocumentosGerenciais() {
  const [uploads, setUploads] = useState<Upload[]>([]);
  const data = [
    {//foi
      id:1,
      title: 'PLANO DE CUSTEIO ATUARIAL 2024 ANO BASE 2023',
      date: '11/03/2024',
      description: 'Avaliação Atuarial Plano Previdenciário Regime Próprio de Previdência de JAPERI - RJ Nota Técnica Atuarial: 2024.00018.1 Atuário Responsável = Sergio Aureliano Machado da Silva',
      doc:'/doc/documentos-gerenciais-pdf/doc3836900306700.pdf',
    },
    {//foi
      id:2,
      title: 'POLÍTICA DE INVESTIMENTO PARA O EXERCÍCIO DE 2024',
      date: '24/01/2024',
      description: 'Atendendo à Resolução do Conselho Monetário Nacional - CMN nº 4.963, de 25 de novembro de 2021, doravante denominada simplesmente ("Resolução CMN nº 4.963/2021") e a Portaria MTP nº 1.467, de 2 de junho de 2022, doravante denominada simplesmente ("Portaria MTP nº 1.467/2022"), os responsáveis pela Gestão do INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DE JAPERI, apresentam sua Política de Investimentos para o exercício de 2024, devidamente elaborada, analisada e aprovada por seus órgãos superiores de execução e deliberação.',
      doc:'/doc/documentos-gerenciais-pdf/doc0758630288601.pdf',
    },
    {//foi
      id:3,
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '08/12/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI e fluxo de caixa dos últimos meses de 2023, projeções para 2024, sugestões para o Plano de Custeio Atuarial para apreciação do Conselho de Administração, e propostas a serem apresentas à Exma. Prefeita do município.',
      doc:'/doc/documentos-gerenciais-pdf/doc2557028811811.pdf',
    },
    {//foi
      id:4,
      title: 'LISTA DE INSTITUIÇÕES FINANCEIRAS QUE CUMPREM OS CRITÉRIOS DA RESOLUÇÃO 4.963/2021',
      date: '16/08/2023',
      description: 'A Resolução do Conselho Monetário Nacional - CMN nº 4.963, publicada em 25 de novembro de 2021, revogou a Resolução CMN nº 3.922, de 25 de novembro de 2010, entrando em vigor a partir de 03 de janeiro de 2022. A norma reforça, dentre outros pontos, critérios relacionados às instituições que podem administrar ou gerir fundos de investimentos nos quais os Regimes Próprios de Previdência Social (RPPS) podem aplicar seus recursos.',
      doc:'/doc/documentos-gerenciais-pdf/doc6544067467256.pdf',
    },
    {//foi
      id:5,
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO JULHO DE 2023',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI projetadas para 2023, incluindo a movimentação na carteira de ativos da PREVI-JAPERI, rendimentos projetados e recebidos, de acordo com a estratégia estabelecida pela Política de Investimento de 2023 e o Plano de Custeio Atuarial, bem como a apresentação de resultados no recebimento de cupons de juros das aplicações realizadas.',
      doc:'/doc/documentos-gerenciais-pdf/doc3838377107224.pdf',
    },
    {//foi
      id:6,
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO NOVEMBRO DE 2022',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar a movimentação na carteira de ativos da PREVI-JAPERI, ao longo dos meses de agosto, setembro, outubro e novembro de 2022, de acordo com a estratégia estabelecida pela Política de Investimento de 2022, bem como a apresentação de resultados no recebimento de cupons de juros das aplicações realizadas, além de amortizações recebidas dos fundos em liquidação.',
      doc:'/doc/documentos-gerenciais-pdf/doc2379087372985.pdf',
    },
    {//foi
      id:7,
      title: 'PLANO DE CUSTEIO ATUARIAL 2023',
      date: '28/02/2023',
      description: 'A GTF elaborou o presente relatório por solicitação do Município de JAPERÍ - RJ para prover às informações necessárias o Regime Próprio de Previdência do Município de JAPERÍ - RJ de acordo com as normas atuariais internacionalmente aceitas relacionadas aos compromissos para com o plano de benefício previsto na lei municipal e com base na legislação brasileira vigente.',
      doc:'/doc/documentos-gerenciais-pdf/doc9592128137328.pdf',
    },
    {//foi
      id:8,
      title: 'POLÍTICA DE INVESTIMENTO PARA O EXERCÍCIO DE 2023',
      date: '26/01/2023',
      description: 'Atendendo à Resolução do Conselho Monetário Nacional - CMN nº 4.963/2021, o Comitê de Investimentos e a Diretoria Executiva do INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DE JAPERI, apresenta sua Política de Investimentos para o exercício de 2023, devidamente analisada e aprovada pelo Conselho Administrativo, órgão superior de deliberação.',
      doc:'/doc/documentos-gerenciais-pdf/doc4056638892075.pdf',
    },
    {//foi
      id:9,
      title: 'POLÍTICA DE INVESTIMENTO PARA EXERCÍCIO 2022',
      date: '17/06/2022',
      description: 'Atendendo à Resolução do Conselho Monetário Nacional novembro de 2021, (doravante denominada simplesmente "Resolução CMN nº 4.963/2021"), o Comitê de Investimentos e a Diretoria Executiva do INSTITUTO DE PREVIDÊNENCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DE JAPERI apresenta sua Política de Investimentos para o exercício de 2022, devidamente analisada e aprovada por seu Órgão Superior de Deliberação.',
      doc:'/doc/documentos-gerenciais-pdf/doc4677813703800.pdf',
    },
    {//foi
      id:10,
      title: 'AVALIAÇÃO ATUARIAL PLANO PREVIDENCIARIO 2022',
      date: '17/06/2022',
      description: 'A GTF elaborou o presente relatório por solicitação do Município de JAPERÍ - RJ para prover às informações necessárias o Regime Próprio de Previdência do Município de JAPERÍ - RJ de acordo com as normas atuariais internacionalmente aceitas relacionadas aos compromissos para com o plano de benefício previsto na lei municipal e com base na legislação brasileira vigente.',
      doc:'/doc/documentos-gerenciais-pdf/doc9002608152671.pdf',
    },
    {//foi
      id:11,
      title: 'AVALIAÇÃO ATUARIAL PLANO PREVIDENCIÁRIO 2021',
      date: '17/06/2022',
      description: 'A GTF elaborou o presente relatório por solicitação do Município de JAPERÍ - RJ para prover às informações necessárias o Regime Próprio de Previdência do Município de JAPERÍ - RJ de acordo com as normas atuariais internacionalmente aceitas relacionadas aos compromissos para com o plano de benefício previsto na lei municipal e com base na legislação brasileira vigente.',
      doc:'/doc/documentos-gerenciais-pdf/doc7674566110328.pdf',
    },
    {//foi
      id:12,
      title: 'AVALIAÇÃO ATUARIAL PLANO PREVIDENCIARIO 2020',
      date: '17/06/2022',
      description: 'A GTF elaborou o presente relatório por solicitação do Município de JAPERÍ - RJ para prover às informações necessárias o Regime Próprio de Previdência do Município de JAPERÍ - RJ de acordo com as normas atuariais internacionalmente aceitas relacionadas aos compromissos para com o plano de benefício previsto na lei municipal e com base na legislação brasileira vigente.',
      doc:'/doc/documentos-gerenciais-pdf/doc4432676762292.pdf',
    },
    {//foi
      id:13,
      title: 'POLÍTICA DE INVESTIMENTO PARA O EXERCÍCIO 2021',
      date: '06/06/2022',
      description: 'Atendendo à Resolução do Conselho Monetário Nacional - CMN nº 3.922, de 25 de novembro de 2010, alterada pela Resolução CMN n° 4.392, de 19 de dezembro de 2014, pela Resolução CMN n° 4.604, de 19 de outubro de 2017 e posteriormente pela Resolução CMN n° 4.695, de 27 de novembro de 2018 (doravante denominada simplesmente "Resolução CMN nº 3.922/2010"), o Comitê de Investimentos, o Conselho de Administração e a Diretoria Executiva do INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DE JAPERI apresenta sua Política de Investimentos para o exercício de 2021, devidamente analisada e aprovada por seu órgão superior de deliberação.',
      doc:'/doc/documentos-gerenciais-pdf/doc4363276025534.pdf',
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
      const querySnapshot = await getDocs(collection(db, 'transparencia-documentosGerenciais'));
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
  (  <div className={styles.containerCenter}>
      <h2>Documentos Gerenciais</h2>
      <p>Documentos e relatórios administrativos e de gestão previdenciária</p>
      
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
          />)}
    </div>) :
    (<div className={styles.loadingContainer}>
     <div className={styles.spinner}></div>
     <p>Carregando informações...</p>
    </div>)}
  </>
  );
}
