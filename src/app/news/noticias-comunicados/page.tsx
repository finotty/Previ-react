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
  const data = [
    {
      id:1,
      title: 'RELATÓRIO ECONÔMICO, FINANCEIRO E PREVIDENCIÁRIO MARÇO DE 2024',
      date: '02/04/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI e fluxo de caixa do primeiro trimestre de 2024, para apreciação da diretoria Executiva, Comitê de Investimento e pelo Conselho de Administração, e propostas a serem apresentas à Exma. Prefeita do município',
      doc:'/doc/noticias-comunicados-pdf/doc6586018181250.pdf',
    },
    {//foi 
      id:2,
      title: 'GESTÃO DE ATIVOS E PASSIVOS PREVIDENCIÁRIOS - RELATÓRIO ECONÔMICO E FINANCEIRO DEZEMBRO DE 2023',
      date: '24/01/2024',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos ...',
      doc:'/doc/noticias-comunicados-pdf/doc0478035267451.pdf',
    },
    {//foi
      id:3,
      title: ' RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIADA PREVI JAPERI 2024',
      date: '17/01/2024',
      description: 'No dia de hoje, dia 15 de janeiro de 2024, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRI...',
      doc:'/doc/noticias-comunicados-pdf/doc9805937696075.pdf',
    },
    {//foi
      id:4,
      title: 'RELATÓRIO ECONÔMICO E FINANCEIRO JULHO DE 2023',
      date: '08/08/2023',
      description: 'O presente relatório tem como objetivo apresentar as informações da Gestão de Ativos e Passivos da PREVI projetadas para 2023, incluindo a movimentação na carteira de ativos da PREVI-JAPERI, rendimentos projetados e recebidos, de acordo com a estratégia estabelecida pela Política de Investimento de 2023 e o Plano de Custeio Atuarial, bem como a apresentação de resultados no recebimento de cupons de juros das aplicações realizadas.',
      doc:'/doc/noticias-comunicados-pdf/doc3704895032814.pdf',
    },
    {//foi
      id:5,
      title: 'RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA JULHO 2023',
      date: '03/08/2023',
      description: 'No dia de hoje, 19 de julho de 2023, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA do Instituto de Previdência dos Servidores Públicos do Município de Japeri. Fruto dos esforços e dedicação dos servidores do Instituto, cada um dentro de sua competência, no caminho para atingir a excelência operacional e administrativa, sempre com transparência e responsabilidade.',
      doc:'/doc/noticias-comunicados-pdf/doc4601200345146.pdf',
    },
    {//foi
      id:6,
      title: ' RENOVADO O CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIADA DA PREVI JAPERI 2023',
      date: '19/04/2023',
      description: 'No dia de hoje, dia 20 de janeiro de 2023, foi renovado o CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA do Instituto de Previdência dos Servidores Públicos do Município de Japeri. Fruto dos esforços e dedicação dos servidores do Instituto, cada um dentro de sua competência, no caminho para atingir a excelência operacional e administrativa, sempre com transparência e responsabilidade.',
      doc:'/doc/noticias-comunicados-pdf/doc2203985768533.pdf',
    },
    {//foi
      id:7,
      title: 'ELEIÇÃO PARA OS CONSELHOS FISCAL E ADMINISTRATIVO 2023/2025',
      date: '14/12/2022',
      description: 'A Presidente do Instituto de Previdência dos Servidores Públicos de Japeri, no uso de suas atribuições legais e tendo em vista o que preceitua a Lei Federal 13.846/2019 e a nova redação dada aos arts. 8º-A e 8º-B, Incisos I e II da Lei 9.717/1995, com arrimo em nossa Lei Municipal nº 1.345/2017, mais precisamente em seu artigo 126º, parágrafo 7º, que também cuida da matéria, através deste expediente CONVOCA Vossas Senhorias para participarem do PLEITO ELEITORAL, o qual terá por objetivo a inscrição à candidatura de CONSELHEIROS da PREVI-JAPERI e que obedecerá ao seguinte cronograma:',
      doc:'/doc/noticias-comunicados-pdf/doc1793561159706.pdf',
    },
    {//foi
      id:8,
      title: 'UM BALANÇO DOS 500 DIAS DAS ATIVIDADES DE TODA A EQUIPE DA PREVI JAPERI',
      date: '06/06/2022',
      description: 'Dois mil e vinte um foi um ano de desafios para a maioria dos integrantes da diretoria executiva da Previ Japeri, seja em função das diversas irregularidades identificadas no início da gestão, junto à Secretaria de Previdência a serem regularizadas, algumas delas datadas de 2015, seja pelo fato de que alguns destes diretores vinham da iniciativa privada, com pouca ou nenhuma experiência em administração pública.',
      doc:'/doc/noticias-comunicados-pdf/docinstitutojaperi.pdf',
    },
    {//foi
      id:9,
      title: 'ANÁLISE ECONÔMICA E POLÍTICA NACIONAL EM 2022 E SEUS IMPACTOS NA ESTRATÉGIA DE INVESTIMENTOS',
      date: '06/06/2022',
      description: 'As projeções para o cenário macroeconômico nacional, para 2022, refletem as incertezas em relação ao cenário da econômica mundial, sejam elas em função da pandemia que assola o mundo desde 2020, sejam pelos pelas consequentes reduções na oferta de insumos e produtos como resultado das diversas paralisações na pandemia, e seus impactos inflacionários em todo o planeta, sejam pelo cenário político nacional e desencontros nas questões das políticas de governo, que de alguma forma agravam ou intensificam seus reflexos na economia nacional, pode-se deduzir que para 2022 o cenários será de incerteza, por conseguinte, espera-se níveis de riscos maiores, que exigirá do INSTITUTO DE PREVIDENCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DE JAPERI, um esforço maior para mitigar os diversos riscos que estarão presentes, e ao mesmo tempo, dado as condições dos seguidos aumentos das taxas de juros pelo Tesouro Nacional, operacionalizar as oportunidades de atingir e de até superar as metas atuariais estabelecidas para este ano e para os anos seguintes.',
      doc:'/doc/noticias-comunicados-pdf/doc7934456093625.pdf',
    },
    {//foi
      id:10,
      title: 'INSTITUTO DE PREVIDÊNCIA DE JAPERI CONQUISTA CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA',
      date: '06/06/2022',
      description: 'O Instituto de Previdência dos Servidores Públicos do Município de Japeri (Previ-Japeri) conquistou, nesta terça-feira (25), o Certificado de Regularidade Previdenciária (CRP) administrativamente – documento que comprova que o Instituto segue normas de boa gestão e assegura o pagamento dos benefícios aos aposentados e pensionistas. Na Baixada Fluminense, apenas quatro municípios têm o CRP válido, sendo que três deles obtiveram a certificação judicialmente. Os outros seis não tem o documento.',
      doc:'/doc/noticias-comunicados-pdf/docInstituto-Previdência-conquista.pdf',
    },
    {//foi
      id:11,
      title: 'SERVIDOR, QUAIS SÃO OS ATUAIS CRITÉRIOS QUE SÃO ADOTADOS PARA A SUA APOSENTADORIA',
      date: '06/06/2022',
      description: 'Nesta semana tivemos a satisfação de presenciar a concessão da aposentadoria da servidora Valéria de Sousa Couto, professora da Escola Municipal Bernardino de Melo, estatutária que cumpriu todos os critérios da aposentadoria especial de professores. Este evento tão especial e dezenas de consultas ao Instituto sobre o que mudou no regime de aposentadoria dos servidores públicos do município de Japeri como consequência da atualização da lei que regulamenta a concessão de aposentadoria e pensões aos servidores do município, nos motivou a disponibilizar este manual de orientação sobre os critérios hoje aplicados para a concessão de benefícios previdenciários da Previ-Japeri.',
      doc:'/doc/noticias-comunicados-pdf/doc3291135409242.pdf',
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
