import React from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import imagePDF from "../../../assets/IMG-pdf.png"
import Link from "next/link";
import { storage } from "@/bd/firebaseConfig";
import { ref, getDownloadURL } from 'firebase/storage';


const Card = ({  doc,title, date, description }:any) => {
  const handleDownload = (fileUrl: string) => {
    const storageRef = ref(storage, fileUrl);
    getDownloadURL(storageRef).then((url:string) => {
      window.open(url);
    });
  };

    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={styles.divDate}>
            <p className={styles.cardDate}>{date}</p>
          </div>
        <Image className={styles.cardImage} width={599} height={396} src={imagePDF} alt={title} quality={100} priority={true}/>
          <p className={styles.cardDescription}>{description.length > 150 ? description.substring(0, 150) + "..." : description}</p>
        </div>

        
         <button className={styles.cardButton} onClick={() => handleDownload(doc)} rel="noopener noreferrer">
          Leia mais
         </button>
        
      </div>
    );
  };
  
  export default Card;