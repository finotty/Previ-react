import styles from "./styles.module.scss";
import CardMidia from "@/app/components/cardMidia";
import Link from "next/link";

export default function FotosVideos() {
  const data = [
    { 
      id:1,  
      imageSrc: '/midia/foto001.jpg'
    },
    {
      id:2,
      imageSrc: '/midia/foto002.jpg'
    },
    {  
      id:3,
      imageSrc: '/midia/foto004.jpg'
    },
    {
      id:4,
      imageSrc: '/midia/foto005.jpg'
    },
    {  
      id:5,
      imageSrc: '/midia/foto006.jpg'
    },
    {
      id:6,
      imageSrc: '/midia/foto007.jpg'
    },
    {   
      id:7,
      imageSrc: '/midia/foto008.jpg'
    },
    {
      id:8,
      imageSrc: '/midia/foto009.jpg'
    },
    {   
      id:9,
      imageSrc: '/midia/foto010.jpg'
    },
    {
      id:10,
      imageSrc: '/midia/foto011.jpg'
    },
    {   
      id:11,
      imageSrc: '/midia/foto012.jpg'
    },
    {
      id:12,
      imageSrc: '/midia/foto013.jpg'
    },

];
  return (
    <>
      <div className={styles.containerCenter}>
        <h1>Fotos e Videos</h1>
         <div className={styles.divButton}>
           <h2>Fotos de eventos Previ Japeri</h2>
           <Link className={styles.button} href="/news/fotos-videos">Ver mais</Link>
         </div>
          <div className={styles.containerMidia}>
            {data.map((item, index) => (
              <CardMidia               
              key={item.id} 
              imageSrc={item.imageSrc} 
              images={data} 
              initialIndex={index}
              />
            ))}
          </div>
      </div>
    </>
  );
}