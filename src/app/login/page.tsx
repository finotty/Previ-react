"use client";
import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login(){
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidade da senha
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

   // Função para navegar para a página /admin
   const handleLogin = () => {
    
    router.push('/admin'); 
  };
    return(
        <>
         <div className={styles.container}>

            <div className={styles.divContent}>
                <div className={styles.divInput}>
                    <label>
                        E-mail:
                    </label>
                    <input type='email' placeholder='exemplo@gmail.com'/>
                    <label>
                        Senha:
                    </label>
                    <div className={styles.passwordInputContainer}>
                        <input type={showPassword ? 'text' : 'password'} placeholder='************'/>
                            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Ícone que alterna */}
                            </span>
                    </div>
                    <button onClick={handleLogin}>
                        Entrar
                    </button>
                </div>
            </div>
         </div>
        </>
    )}