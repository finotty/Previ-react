"use client";
import React, { useState } from "react";
import styles from './styles.module.scss'

export default function Pagination({data}:any){

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

    return(
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
    )
}