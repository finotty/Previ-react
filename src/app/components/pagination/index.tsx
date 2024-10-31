import React from "react";
import styles from './styles.module.scss'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (page: number) => void;
}

export default function Pagination({currentPage, totalPages,  onPreviousPage, onNextPage, onPageChange}: PaginationProps) {
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Adiciona sempre as primeiras duas páginas
    if (totalPages > 4) {
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      // Adiciona o intervalo de páginas ao redor da página atual
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pageNumbers.push(i);
      }

      // Adiciona o último intervalo de páginas
      if (currentPage < totalPages - 2) {
        pageNumbers.push("...");
      }
      
      pageNumbers.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };
    return(
        <div className={styles.pagination}>
          <button className={styles.pagButtonLeft} onClick={onPreviousPage} disabled={currentPage === 1}>
            {"<"} {/* Seta para a esquerda */}
          </button>
                
           {/* Renderizar os números de página */}
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? styles.activePage : ""}
          >
            {page}
          </button>
        ) : (
          <span key={index} className={styles.ellipsis}>
            {page}
          </span>
        )
      )}

          <button className={styles.pagButtonRight} onClick={onNextPage} disabled={currentPage === totalPages}>
            {">"} {/* Seta para a direita */}
          </button>
          </div>
    )
}