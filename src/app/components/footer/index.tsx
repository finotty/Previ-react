import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss'; 
import Image from 'next/image';
import logo from '../../../../public/logo.svg';
import fb from '../../../../public/fb-icon.svg';
import japeri from '../../../../public/japeri.svg';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* Seção de links importantes */}
        <div className={styles.linksSection}>
         <Link href="/">
          <Image
            src={logo}
            alt=''
            width={140}
            height={70}
          />
         </Link>
        </div>

        {/* Direitos autorais */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Previ Japeri. Todos os direitos reservados.</p>
        </div>
        {/* Seção de redes sociais */}
        <div className={styles.socialMediaSection}>
         
              <Link href="https://facebook.com">
                <Image className={styles.imgFB}
                 src={fb}
                 alt=''
                 width={50}
                 height={50}
                />
              </Link>

              
                <Image className={styles.imgJaperi}
                 src={japeri}
                 alt=''
                 width={50}
                 height={50}
                 
                />
              
           
        </div>

      </div>
    </footer>
  );
}
