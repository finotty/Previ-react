import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import organogramaIMG from '../../../../public/organograma.png';

export default function Organograma() {
 
  return (
    <>
    <div className={styles.containerCenter}>
        <h2>Organograma</h2>      
        <Image className={styles.organogramaIMG} src={organogramaIMG} alt="organograma" quality={100} priority={true}/>
         
      
      </div>
 
    </>
  );
}