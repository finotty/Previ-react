"use client";
import { useState } from 'react';
import styles from './styles.module.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { app } from '@/bd/firebaseConfig';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'sonner';

export default function Login(){
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidade da senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const auth = getAuth(app);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

   // Função para navegar para a página /admin
   const handleLogin = () => {
    setIsloading(true);
      if(!email || !password){
      setIsloading(false)
      return toast.warning('Informe Usuario e Senha!');
      }

      signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        toast.success("Loguin efetuado com sucesso!")
        router.push('/admin'); 
      })
      .catch((error) => {
       console.log(error.code);
        if(error.code =='auth/user-not-found'){
          setIsloading(false);
        return toast.warning('Usuario ou senha incorretos.')
        }
        if(error.code =='auth/wrong-password'){
          setIsloading(false);
         return toast.warning('Usuario ou senha incorretos.')
        }
  
        if(error.code =='auth/invalid-email'){
          setIsloading(false);
          return toast.warning('Usuario ou senha incorretos.')
         }
         if(error.code =='auth/invalid-credential'){
            setIsloading(false);
            return toast.warning('Usuario ou senha incorretos.')
           }
       setIsloading(false);
      })
        
     setIsloading(true);
    
  };
    return(
        <>
         <div className={styles.container}>

            <div className={styles.divContent}>
                <div className={styles.divInput}>
                    <label>
                        E-mail:
                    </label>
                    <input type='email' placeholder='exemplo@gmail.com' value={email} onChange={text => setEmail(text.target.value)}/>
                    <label>
                        Senha:
                    </label>
                    <div className={styles.passwordInputContainer}>
                        <input type={showPassword ? 'text' : 'password'} placeholder='************' value={password} onChange={text => setPassword(text.target.value)}/>
                            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Ícone que alterna */}
                            </span>
                    </div>
                    <button onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? 'Validando...' : 'Entrar'}
                    </button>
                </div>
            </div>
         </div>
        </>
    )}