import Image from "next/image";
import imag from "../../../assets/background.png";
import imageBrasao from "../../../../public/brasao.svg"
import styles from './styles.module.scss';

export default function ImageContainer(){
    return(
      <div className={styles.imageContainer}>
        <Image
         src={imag}
         alt=""
         layout="responsive"
         width={1980} 
         height={175} 
         priority={true} 
         
        />
        <div className={styles.blueOverlay}></div>
        <div className={styles.text}>
            <Image
             src={imageBrasao}
             alt=""
             width={120}
             height={100}
             quality={100}
             />
            <h1>Instituto de Previdência do Município de Japeri</h1>
           
        </div>
      </div>
    )
}