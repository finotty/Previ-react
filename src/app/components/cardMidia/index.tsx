"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import setaEsqueda from "../../../assets/seta-esquerda.png"
import setaDireita from "../../../assets/seta-direita.png"


const CardMidia = ({ imageSrc , images, initialIndex}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
    // Função para abrir o modal
    const openModal = () => {
      setIsOpen(true);
      setCurrentIndex(initialIndex); // Inicializa o índice da imagem clicada
    };
  
    // Função para fechar o modal
    const closeModal = () => {
      setIsOpen(false);
    };

    // Função para navegar para a próxima imagem
    const nextImage = () => {
    setCurrentIndex((prevIndex:any) => (prevIndex + 1) % images.length);
    };

    // Função para navegar para a imagem anterior
    const previousImage = () => {
    setCurrentIndex((prevIndex:any) => (prevIndex - 1 + images.length) % images.length);
    };

return (
    <>
      <div className={styles.cardContainer} onClick={openModal}>
        <div className={styles.cardContent}>  
         <Image className={styles.cardImage} width={599} height={396} src={imageSrc} alt="" quality={100} priority={true}/>        
        </div>       
      </div>

       {/* Modal */}
       {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
             <div className={styles.divNav}>
                <button className={styles.navButton} onClick={previousImage}>
                 <Image
                   src={setaEsqueda}
                   alt="Seta para esquerda"
                   width={60}
                   height={60}
                 /> {/* Botão para imagem anterior */}
                </button>
                <Image
                    className={styles.modalImage}
                    width={1200}
                    height={800}
                    src={images[currentIndex].imageSrc} // Exibe a imagem com base no índice atual
                    alt=""
                    quality={100}
                />
                <button className={styles.navButton} onClick={nextImage}>
                 <Image
                 src={setaDireita}
                 alt="Seta para direita"
                 width={60}
                 height={60}
                 /> {/* Botão para imagem seguinte */}
                
                </button>

             </div>

            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>    
    );
  }; 
export default CardMidia;