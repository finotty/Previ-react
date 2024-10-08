import React from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import imgPDF from "../../../assets/IMG-pdf.png";
import Link from "next/link";

const CardPDF = ({doc,docName,date}:any) => {

return (
    <>
      <div className={styles.cardContainer} >
        <div className={styles.cardContent}>  
         <Link  href={doc} target="_blank" rel="noopener noreferrer" >
            <Image className={styles.cardImage} width={128} height={128} src={imgPDF} alt="" quality={100} priority={true}/>        
         </Link>
           <h3>{docName}</h3>
           <p>{date}</p>
        </div>       
      </div>

      
    </>    
    );
  }; 
export default CardPDF;