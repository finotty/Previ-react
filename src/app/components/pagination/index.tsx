//"use client";
import React, { useState } from "react";
import styles from './styles.module.scss'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (page: number) => void;
}

export default function Pagination({currentPage, totalPages,  onPreviousPage, onNextPage, onPageChange}: PaginationProps) {
    return(
        <div className={styles.pagination}>
                <button className={styles.pagButtonLeft} onClick={onPreviousPage} disabled={currentPage === 1}>
                  {"<"} {/* Seta para a esquerda */}
                </button>
                
                {/* Números de páginas */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? styles.activePage : ""}
                  >
                    {index + 1}
                  </button>
                ))}

                <button className={styles.pagButtonRight} onClick={onNextPage} disabled={currentPage === totalPages}>
                  {">"} {/* Seta para a direita */}
                </button>
              </div>
    )
}