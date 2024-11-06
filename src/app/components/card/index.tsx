"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import imagePDF from "../../../assets/IMG-pdf.png"
import { storage } from "@/bd/firebaseConfig";
import { ref, getDownloadURL } from 'firebase/storage';

const Card = ({  doc,title, date, description }:any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const isImageArray = Array.isArray(doc);

  // Funções para abrir/fechar o modal e navegar entre imagens
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const showNextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % doc.length);
  const showPreviousImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + doc.length) % doc.length);
  
  const handleDownload = (fileUrl: string) => {
   const storageRef = ref(storage, fileUrl);
   getDownloadURL(storageRef).then((url:string) => {
      window.open(url);
    });
  };
  
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

    // Função para alternar entre as imagens automaticamente
    useEffect(() => {
      if (isImageArray && doc.length > 1 && !isModalOpen) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % doc.length);
        }, 5000); // Alterna a cada 5 segundos
  
        return () => clearInterval(interval);
      }
 
    }, [doc, isImageArray, isModalOpen]);
    
    return (
      <>
      <div className={styles.cardContainer}>
        <div className={date.length > 12? styles.cardContentIMG : styles.cardContent}>
          <h3 className={date.length > 12 ?styles.cardTitleIMG : styles.cardTitle}>{title}</h3>
          <div className={date.length > 12?styles.isArray : styles.divDate}>
            <p className={styles.cardDate}>{formatDate(date)}</p>
          </div>
         {/* Exibe um slide de imagens ou uma única imagem PDF */}
         {date.length > 12 ? (
          <Image
            onClick={toggleModal} // Ao clicar, abre o modal
            className={styles.cardImageDownload}
            width={599}
            height={396}
            src={doc[currentImageIndex]}
            alt={title}
            quality={100}
            priority={true}
          />
        ) : (
          <Image
            className={styles.cardImage}
            width={599}
            height={396}
            src={imagePDF}
            alt={title}
            quality={100}
            priority={true}
          />
        )}
         { date.length > 12 ? null : <p className={styles.cardDescription}>{description.length > 150 ? description.substring(0, 150) + "..." : description}</p>}
        </div>

        
        <button
          className={styles.cardButton}
          onClick={() => (date.length > 12) ? window.open(date, '_blank'): handleDownload(doc)}
          rel="noopener noreferrer"
      >
          {date.length > 12 ?"Acesse Agora!":"Leia mais"}
         </button>
        
      </div>
        {/* Modal para exibir imagem em tamanho maior */}
        {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {isImageArray && doc.length > 1 && (
              <button onClick={showPreviousImage} className={styles.navButton}>◀</button>
            )}
            <div className={styles.divModalIMG}>
            <button onClick={toggleModal}>X</button>
            <Image
              className={styles.modalImage}
              width={1000} // Largura maior para exibição no modal
              height={700} // Altura maior para exibição no modal
              src={doc[currentImageIndex]}
              alt={title}
              quality={100}
              priority={true}
            />
            </div>
               {isImageArray && doc.length > 1 && (
              <button onClick={showNextImage} className={styles.navButton}>▶</button>
            )}
          </div>
        </div>
      )}
      </>
    );
  };
  
  export default Card;