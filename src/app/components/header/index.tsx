"use client";
import { useState } from 'react';
import Image from "next/image";
import logoImg from '../../../../public/logo.svg';
import styles from './styles.module.scss';
import Link from "next/link";
import foneIMG from '../../../../public/fones-de-ouvido.png';

export default function Header(){   
    // Estado que controla se a gaveta de "News" está aberta     
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile
      
    // Função para abrir/fechar a gaveta
    const toggleMenu = (option: string) => {
        setActiveMenu((prevMenu) => (prevMenu === option ? null : option)); // Se já estiver aberto, fecha; senão, abre o selecionado
    }
    const  handleToggleMenu = () => {
        setActiveMenu(null)
    }
    return(
        <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <div className={styles.divLogo}>

           <Link  href="/" >
            <Image
              className={styles.logo}
              src={logoImg}
              alt="Logo Previ"
              width={220}
              height={55}
              priority={true}
              quality={100}
            />  
           </Link>
           <ul className={styles.ulFaleConoscoMobile}>
             {/* Botão Fale-conosco */}
             <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('fale')} className={styles.menuItem}>
                    <Image
                    className={styles.foneIMG}
                     src={foneIMG}
                     alt=''
                     width={25}
                     height={25}
                    />
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'fale' && (
                        <ul className={styles.dropdownMenuFale}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/fale-conosco/contato" onClick={handleToggleMenu} passHref>
                             Contatos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" onClick={handleToggleMenu} passHref>
                             Nossa página no Facebook
                            </Link>
                        </li>
                     
                        </ul>
                    )}
             </li>
           </ul>
            </div>
        <nav className={styles.navMobile}>
          <ul className={styles.menu}>         
             {/* Botão News */}
             <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('news')} className={styles.menuItem}>
                    News
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'news' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem} href="/news/noticias-comunicados" onClick={handleToggleMenu} passHref>
                             Notícias e Comunicações
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem} href="/news/manuais-orientacoes" onClick={handleToggleMenu} passHref>
                             Manuais e Orientações
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
                            <Link className={styles.dropdownItem}  href="/governanca/diretoria-executiva" onClick={handleToggleMenu} passHref>
                             Diretoria Executiva
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/comite-investimento" onClick={handleToggleMenu} passHref>
                             Comitê de Investimentos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/conselho-administrativo" onClick={handleToggleMenu} passHref>
                             Conselho Administrativo
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/conselho-fiscal" onClick={handleToggleMenu} passHref>
                             Conselho Fiscal
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>

             {/* Botão Transparencia */}
             <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('transp')} className={styles.menuItem}>
                    Transparência
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'transp' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/documentos-gerenciais" onClick={handleToggleMenu} passHref>
                             Documentos Gerenciais
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-contabeis" onClick={handleToggleMenu} passHref>
                             Relatórios Contábeis
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/licitacoes-contratos" onClick={handleToggleMenu} passHref>
                             Licitações e Contratos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/fundo-previdenciario" onClick={handleToggleMenu} passHref>
                             Fundo Previdenciário
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-aplicacao-resgate" onClick={handleToggleMenu} passHref>
                             Relatórios de Aplicações e Resgate (APR)
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-previdenciarios" onClick={handleToggleMenu} passHref>
                             Relatorios Previdenciários (DIPR)
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/leis-normas-correlatas" onClick={handleToggleMenu} passHref>
                             Leis e Normas Correlatas
                            </Link>
                        </li>
                        </ul>
                    )}
             </li>
             {/* Botão Institucional */}
             <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('inst')} className={styles.menuItem}>
                    Institucional
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'inst' && (
                        <ul className={styles.dropdownMenuInst}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/sobre" onClick={handleToggleMenu} passHref>
                             Sobre o Instituto
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/organograma" onClick={handleToggleMenu} passHref>
                             Organograma
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/diretoria-executiva" onClick={handleToggleMenu} passHref>
                             Diretoria Executiva
                            </Link>
                        </li>
                        
                        </ul>
                    )}
                </li>
          </ul>
        </nav>

           <nav className={styles.nav}>
            
            <ul className={styles.menu}>
                {/* Botão Home */}
                <li  className={styles.menuItemHome}>

                <Link className={styles.homeButton} href="/" passHref>
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
                            <Link className={styles.dropdownItem} href="/news/noticias-comunicados" onClick={handleToggleMenu} passHref>
                             Notícias e Comunicações
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem} href="/news/manuais-orientacoes" onClick={handleToggleMenu} passHref>
                             Manuais e Orientações
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem} href="/news/certificados-CRP" onClick={handleToggleMenu} passHref>
                             Informações sobre CRP
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
                            <Link className={styles.dropdownItem}  href="/governanca/diretoria-executiva" onClick={handleToggleMenu} passHref>
                             Diretoria Executiva
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/comite-investimento" onClick={handleToggleMenu} passHref>
                             Comitê de Investimentos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/conselho-administrativo" onClick={handleToggleMenu} passHref>
                             Conselho Administrativo
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/governanca/conselho-fiscal" onClick={handleToggleMenu} passHref>
                             Conselho Fiscal
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>

                {/* Botão Transparencia */}
                <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('transp')} className={styles.menuItem}>
                    Transparência
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'transp' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/documentos-gerenciais" onClick={handleToggleMenu} passHref>
                             Documentos Gerenciais
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-contabeis" onClick={handleToggleMenu} passHref>
                             Relatórios Contábeis
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/licitacoes-contratos" onClick={handleToggleMenu} passHref>
                             Licitações e Contratos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/fundo-previdenciario" onClick={handleToggleMenu} passHref>
                             Fundo Previdenciário
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-aplicacao-resgate" onClick={handleToggleMenu} passHref>
                             Relatórios de Aplicações e Resgate (APR)
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/relatorios-previdenciarios" onClick={handleToggleMenu} passHref>
                             Relatorios Previdenciários (DIPR)
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/transparencia/leis-normas-correlatas" onClick={handleToggleMenu} passHref>
                             Leis e Normas Correlatas
                            </Link>
                        </li>
                        </ul>
                    )}
                </li>
                        {/* Botão Institucional */}
                        <li className={styles.menuItemWithDropdown}>
                <button onClick={() => toggleMenu('inst')} className={styles.menuItem}>
                    Institucional
                </button>
                {/* Gaveta com opções */}
                    {activeMenu === 'inst' && (
                        <ul className={styles.dropdownMenu}>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/sobre" onClick={handleToggleMenu} passHref>
                             Sobre o Instituto
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/organograma" onClick={handleToggleMenu} passHref>
                             Organograma
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/institucional/diretoria-executiva" onClick={handleToggleMenu} passHref>
                             Diretoria Executiva
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
                            <Link className={styles.dropdownItem}  href="/fale-conosco/contato" onClick={handleToggleMenu} passHref>
                             Contatos
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownItem}  href="/Home" onClick={handleToggleMenu} passHref>
                             Nossa página no Facebook
                            </Link>
                        </li>
                     
                        </ul>
                    )}
                 </li>
                 {/* Botão Entrar */}
              
            </ul>           
    </nav>
         </div>
            <div  className={styles.buttonLogin}>
            <Link className={styles.homeButton} href="/login" passHref>
                Entrar
            </Link>
            </div>
        </header>
    )
}