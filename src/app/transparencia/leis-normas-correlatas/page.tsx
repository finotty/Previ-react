"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Card from "../../components/card";
import Image from "next/image";
import Link from "next/link";

export default function LeisNormasCorrelatas() {

  const data = [
      {
        id: 1,
        title: 'LEI COMPLEMENTAR Nº 269 , 13 DE SETEMBRO DE 2023',
        date: '01/12/2023',
        description: 'ALTERA O §2º DA LEI 1.345/2017 PARA REAJUSTAR O APORTE ANUAL E INCLUIR O ANEXO VI NA LEI Nº 1.345/2017 COM A TABELA DE AMORTIZAÇÃO, NA FORMA DO DISPOSTO NO §3º, DO INCISO II DO ARTIGO 97 DA LEI 1.345/2017. Autor: Poder Executivo – Fernanda Machado Ontiveros',
        doc:'/doc/leis-normas-correlatas-pdf/doc3317188620791.pdf'
      },
      {
        id: 2,
        title: 'LEI ORGÂNICA DO MUNICÍPIO',
        date: '18/08/2023',
        description: 'DOS PRINCÍPIOS FUNDAMENTAIS, DOS DIREITOS E GARANTIAS FUNDAMENTAIS. Art. 1º O Município de Japeri é a expressão da vontade soberana do povo japeriense, e a cidadania, a união das liberdades sociais, políticos e econômicos, ainda que não totalmente consolidados pela legislação. I – Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Lei Orgânica; II - A soberania popular é manifestada quando a todos são asseguradas condições dignas de existência, será exercida; a) Pelo sufrágio universal e pelo voto direto e secreto com valor igual para todos; b) Pelo plebiscito; c) Pelo referendo;',
        doc:'/doc/leis-normas-correlatas-pdf/doc7637975531349.pdf'
      },
      {
        id: 3,
        title: 'LEI COMPLEMENTAR N.º 263, DE 06 DE DEZEMBRO DE 2022.',
        date: '11/01/2023',
        description: '“Altera dispositivo a Lei Municipal nº 1.345/2017 de 13 de janeiro de 2017, Estabelecendo Nova Estrutura Organizacional e Criando Cargos Permanentes de Preenchimento por Meio de Concurso Publico de Novas e Títulos, e da outras providências.” A PREFEITA DO MUNICÍPIO DE JAPERI, no uso de suas atribuições legais, faz saber que a Câmara Municipal de Japeri aprovou e eu sanciono a seguinte LEI COMPLEMENTAR: Art. 1° - Altera o artigo 116 dando nova redação aos mesmos:',
        doc:'/doc/leis-normas-correlatas-pdf/doc2136512021749.pdf'
      },
      {
        id: 4,
        title: 'LEI COMPLEMENTAR Nº 265 DE 12DEZEMBRO DE 2022',
        date: '11/01/2023',
        description: '“Altera o dispositivo nº §2º da Lei 1.345/2017, para reajustar o aporte anual, e incluir o anexo VI na lei nº 1.345/2017 com a tabela de amortização, na forma do disposto no §3º, do Inciso II do artigo 97º da Lei 1.345/2017 Art. 1º - Altera os parágrafos 2º e 4º do Art. 97, passando a vigorar a seguinte redação.',
        doc:'/doc/leis-normas-correlatas-pdf/doc4546169707227.pdf'
      },
      {
        id: 5,
        title: 'PORTARIA MTP Nº 3.803, DE 16 DE NOVEMBRO DE 2022',
        date: '07/12/2022',
        description: 'O MINISTRO DE ESTADO DO TRABALHO E PREVIDÊNCIA, no uso das atribuições que lhe confere o art. 87, parágrafo único, inciso II, da Constituição Federal e tendo em vista o disposto no art. 9º da Lei n° 9.717, de 27 de novembro de 1998, e no art. 9º da Emenda Constitucional nº 103, de 12 de novembro de 2019, resolve: Art. 1º A Portaria MTP nº 1.467, de 2 de junho de 2022, passa a vigorar com as seguintes alterações:',
        doc:'/doc/leis-normas-correlatas-pdf/doc8500506813013.pdf'
      },
      {
        id: 6,
        title: 'LEI MUNICIPAL 1345 DE JANEIRO DE 2017 COMPILADA 2022',
        date: '13/07/2022',
        description: '“Dispõe sobre a atualização, revisão e readequação do Previ Japeri - Regime Próprio de Previdência dos Servidores Públicos do Município de Japeri e sobre a organização de sua entidade gestora”. Legislação compilada com suas atualizações. O PREFEITO MUNICIPAL DE JAPERI : Faço saber que a Câmara Municipal de Japeri APROVOU e eu sanciono a seguinte Lei:',
        doc:'/doc/leis-normas-correlatas-pdf/doc8879069438975.pdf'
      },
      {
        id: 7,
        title: 'PORTARIA MTP Nº 1.467, DE 02 DE JUNHO DE 2022',
        date: '16/06/2022',
        description: 'Disciplina os parâmetros e as diretrizes gerais para organização e funcionamento dos Regimes Próprios de Previdência Social dos servidores públicos da União, dos Estados, do Distrito Federal e dos Municípios, em cumprimento à Lei nº 9.717, de 1998, aos arts. 1º e 2º da Lei nº 10.887, de 2004 e à Emenda Constitucional nº 103, de 2019.',
        doc:'/doc/leis-normas-correlatas-pdf/doc3158957649966.pdf'
      },
      {
        id: 8,
        title: 'RESOLUÇÃO CMN N° 4.963, DE 25 DE NOVEMBRO DE 2021',
        date: '06/06/2022',
        description: 'O Banco Central do Brasil, na forma do art. 9º da Lei nº 4.595, de 31 de dezembro de 1964, torna público que o Conselho Monetário Nacional, em sessão realizada em 25 de novembro de 2021, com base no inciso IV e no parágrafo único do art. 6º da Lei nº 9.717, de 27 de novembro de 1998, e no art. 9º, § 7º, da Emenda Constitucional nº 103, de 12 de novembro de 2019,',
        doc:'/doc/leis-normas-correlatas-pdf/doc7977643070313.pdf'
      },
     
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Cálculo de número total de páginas
  const totalPages = Math.ceil(data.length / cardsPerPage);

  // Obtenção dos cards para a página atual
  const currentCards = data.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  // Mudar para a página anterior
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Mudar para a próxima página
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    
  };
  return (
    <>
    <div className={styles.containerCenter}>
      <h2>Leis e Normas Previdenciárias</h2>
      <p>Conjunto de leis e normas previdenciárias das RPPS</p>
      
         {/* Container dos cards */}
         <div className={styles.cardsContainer}>
          {currentCards.map((item) => (
            <Card 
              key={item.id} 
              title={item.title}
              date={item.date}
              description={item.description}
              doc={item.doc}
            />
          ))}
        </div>
      {/* Paginação */}
             <div className={styles.pagination}>
                <button className={styles.pagButtonLeft} onClick={handlePreviousPage} disabled={currentPage === 1}>
                  {"<"} {/* Seta para a esquerda */}
                </button>
                
                {/* Números de páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? styles.activePage : ""}
                  >
                    {index + 1}
                  </button>
                ))}

                <button className={styles.pagButtonRight} onClick={handleNextPage} disabled={currentPage === totalPages}>
                  {">"} {/* Seta para a direita */}
                </button>
              </div>
    </div>
  </>
  );
}
