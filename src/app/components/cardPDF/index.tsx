import React from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import imgPDF from "../../../assets/IMG-pdf.png";
import Link from "next/link";
import { storage } from "@/bd/firebaseConfig";
import { ref, getDownloadURL } from 'firebase/storage';

const CardPDF = ({doc,docName,date}:any) => {
  const handleDownload = (fileUrl: string) => {
    const storageRef = ref(storage, fileUrl);
    getDownloadURL(storageRef).then((url:string) => {
      window.open(url);
    });
  };
return (
    <>
      <div className={styles.cardContainer} >
        <div className={styles.cardContent}>  
        <button onClick={() => handleDownload(doc)} rel="noopener noreferrer">
            <Image className={styles.cardImage} width={128} height={128} src={imgPDF} alt="" quality={100} priority={true}/>        
         </button>
           <h3>{docName}</h3>
           <p>{date}</p>
        </div>       
      </div>

      
    </>    
    );
  }; 
export default CardPDF;