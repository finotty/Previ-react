import Image from "next/image";
import imag from "../../../assets/background.png";
import imageBrasao from "../../../../public/brasao.svg"
import logo from "../../../../public/logo.svg";
import styles from './styles.module.scss';

export default function ImageContainer(){
    return(
      <div className={styles.imageContainer}>
        <Image
         src={imag}
         alt=""
         layout="fill"
         objectFit="cover"
         priority={true} 
         
        />
        <div className={styles.blueOverlay}></div>
         <div  className={styles.imageContainerContent}>


            <Image
             src={logo}
             alt="logo"
             width={260}
             height={80}
             priority={true}
             quality={100}
            />
         
         <div className={styles.text}>
             <div className={styles.divAli}></div>
             <h1>Instituto de Previdência do Município de Japeri</h1>
            <Image
             src={imageBrasao}
             alt="brasao"
             width={120}
             height={100}
             quality={100}
             />
           
          </div>
          </div>
       </div>
    )
}