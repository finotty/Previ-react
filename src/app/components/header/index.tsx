"use client";
import { useState } from 'react';
import Image from "next/image";
import logoImg from '../../../../public/logo.svg';
import styles from './styles.module.scss';
import Link from "next/link";
import Home from '@/app/page';


export default function Header(){

    
    // Estado que controla se a gaveta de "News" está aberta     
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
      
    // Função para abrir/fechar a gaveta
    const toggleMenu = (option: string) => {
        setActiveMenu((prevMenu) => (prevMenu === option ? null : option)); // Se já estiver aberto, fecha; senão, abre o selecionado
    }


    return(
        <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
           <Link  href="/">
            <Image
              src={logoImg}
              alt="Logo Previ"
              width={220}
              height={70}
              priority={true}
              quality={100}
            />  
           </Link>

           <nav className={styles.nav}>
            <ul className={styles.menu}>
                {/* Botão Home */}
                <li  className={styles.menuItemHome}>

                <Link className={styles.homeButton} href="/news/noticias-comunicados" passHref>
                    Home
                </Link>
                </li>

                {/* Botão News */}
                <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('news')} className={styles.menuItem}>
                    News
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'news' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem} href="/news/noticias-comunicados" passHref>
                             Notícias e Comunicações
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem} href="/Home" passHref>
                             Manuais e Orientações
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem} href="/Home" passHref>
                             Fotos e vídeos
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>

                {/* Botão Governança */}
                <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('gov')} className={styles.menuItem}>
                    Governança
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'gov' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Diretoria Executiva
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Comitê de Investimentos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Conselho Administrativo
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Conselho Fiscal
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>

                {/* Botão Transparencia */}
                <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('transp')} className={styles.menuItem}>
                    Transparencia
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'transp' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Documentos Gerenciais
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Relatórios Contábeis
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Licitações e Contratos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Fundo Previdenciário
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Relatórios de Aplicações e Resgate
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Relatorios Previdenciários
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Leis e Normas Correlatas
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>

                   {/* Botão Fale-conosco */}
                   <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('fale')} className={styles.menuItem}>
                    Fale Conosco
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'fale' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Contatos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" passHref>
                             Nossa página no Facebook
                            </Link>
                        </li>
                     
                        </ul>
                    )}
                </li>
            </ul>
    </nav>
         </div>
        </header>
    )
}