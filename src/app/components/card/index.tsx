import React from "react";
import styles from "./styles.module.scss"
import Image from "next/image";


const Card = ({ imageSrc, title, date, description }:any) => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={styles.divDate}>
            <p className={styles.cardDate}>{date}</p>
          </div>
        <Image className={styles.cardImage} width={599} height={396} src={imageSrc} alt={title} quality={100} priority={true}/>
          <p className={styles.cardDescription}>{description}</p>
        </div>
          <button className={styles.cardButton}>Leia mais</button>
      </div>
    );
  };
  
  export default Card;