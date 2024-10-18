"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { app, db, storage } from '@/bd/firebaseConfig';
import { collection, addDoc,Timestamp  } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { getAuth , onAuthStateChanged, Auth} from "firebase/auth";
export default function UploadPage() {
  const [formData, setFormData] = useState({
    pagina:"",
    sub:"",
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [isloading, setIsloading] = useState(true);
  const [user, setUser ]= useState<any>();
  const auth = getAuth(app);
  // Definindo as opções com base na página selecionada
  const optionsMap: Record<string, { value: string; label: string }[]> = {
    news: [
      { value: 'noticiasComunicados', label: 'Notícias e Comunicados' },
      { value: 'manuaisOrientacoes', label: 'Manuais e Orientações' },
      { value: 'fotosVideos', label: 'Fotos e Videos' },
    ],
    governanca: [
      { value: 'diretoriaExecutiva', label: 'Diretoria Executiva' },
      { value: 'comiteInvestimentos', label: 'Comitê de Investimentos' },
      { value: 'conselhoADM', label: 'Conselho Administrativo' },
      { value: 'conselhoFiscal', label: 'Conselho Fiscal' },
    ],
    transparencia: [
      { value: 'documentosGerenciais', label: 'Documentos Gerenciais' },
      { value: 'relatoriosContabeis', label: 'Relatórios Contábeis' },
      { value: 'licitacoesContratos', label: 'Licitações e Contratos' },
      { value: 'fundoPrevidenciario', label: 'Fundo Previdenciário' },
      { value: 'relatoriosAPK', label: 'Relatórios de Aplicações e Resgate' },
      { value: 'relatoriosPrevidenciarios', label: 'Relatórios Previdenciários' },
      { value: 'leisNormasCorrelatas', label: 'Leis e Normas Correlatas' },
    ],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });    
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };


  const handleSubmit = async (e: React.FormEvent)=> {
    e.preventDefault();
    if (!file) return;


    // Salva o arquivo no Storage
    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);


    // Salva as informações no Firestore
    const local = `${formData.pagina}-${formData.sub}`;

    const docRef = await addDoc(collection(db, local), {
      title,
      description,
      date: (formData.sub === 'conselhoADM' || formData.sub === 'conselhoFiscal')? `ATA N° ${date}`: formData.sub === "relatoriosAPK" ? `APR ${date}`: date,
      fileUrl: `uploads/${file.name}`,
      created_at: Timestamp.now()
    })
   
    console.log('Documento escrito com ID: ', docRef.id);
    setTitle('');
    setDescription('');
    setDate('');
    setFile(null);

  };

  useEffect(() => {
    
    onAuthStateChanged(auth,response => {           
           if(response)
            setIsloading(false);
    });
       
},[])
  return (
    <>{ isloading ? (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando informações...</p>
      </div>
    ) :
    <div className={styles.container}>
       <div className={styles.content}>
        <div className={styles.divForm}>
          <h1>Adicionar documento no site</h1>
          <h5>*Preencha todos os campos*</h5>
           <form onSubmit={handleSubmit}>
            <div className={styles.divFormIn}>
              <div className={styles.divLabel}>
                <label className={styles.labelPage}>Pagina:</label>
              
                <label>Titulo:</label>
                <label className={styles.labelDate}>Data do arquivo:</label>
                <label>Descrição:</label>
                <label className={styles.labelPDF}>Arquivo PDF:</label>
              </div>

              <div className={styles.divInputs}>

              <div className={styles.divSelect}>
                <select
                  id="pagina"
                  name="pagina"
                  value={formData.pagina}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma pagina</option>
                  <option value="home">Home</option>
                  <option value="news">News</option>
                  <option value="governanca">Governança</option>
                  <option value="transparencia">Transparencia</option>
                </select>

                <label className={styles.labelSub}>Sub:</label>
                <select
                  id="sub"
                  name="sub"
                  value={formData.sub}
                  onChange={handleChange}
                  disabled={(formData.pagina === '' || formData.pagina === "home")? true : false}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  
                  {formData.pagina &&
                  optionsMap[formData.pagina]?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))} 
                </select>
              </div>

                <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Digite o titulo do documento' required/>
                
                <input  value={date} onChange={e => setDate(e.target.value)} required 
                placeholder={
                  formData.sub === 'conselhoADM'?'Digite o numero da ATA':formData.sub === 'relatoriosAPK' ? 'Digite o número da APR/ano ex. 001/2024 ':''}
                type={(
                  formData.sub === 'conselhoADM' || 
                  formData.sub === "conselhoFiscal"|| 
                  formData.sub === "relatoriosContabeis"||
                  formData.sub === "licitacoesContratos" ||
                  formData.sub === "fundoPrevidenciario" ||
                  formData.sub === "relatoriosAPK" ||
                  formData.sub === "relatoriosPrevidenciarios" 
                  )?'text':'date'} />
       
                <textarea  value={description} onChange={e => setDescription(e.target.value)} placeholder='Digite uma breve descrição sobre o conteúdo do documento'
                 disabled={(
                  formData.pagina === "governanca" || 
                  formData.sub === "relatoriosContabeis" || 
                  formData.sub === "licitacoesContratos" ||
                  formData.sub === "fundoPrevidenciario" ||
                  formData.sub === "relatoriosAPK" ||
                  formData.sub === "relatoriosPrevidenciarios" 
                  )? true : false}/>
    
                <input type="file" accept="application/pdf" onChange={handleFileChange} required />      
              
              <button type='submit' className={styles.buttonSend}>Enviar</button>
              </div>
              </div>
           </form>
        </div>
       </div>
    </div>
   
  }
    </>
  );
}
