"use client";
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { app, db, storage } from '@/bd/firebaseConfig';
import { collection, addDoc,Timestamp  } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth , onAuthStateChanged} from "firebase/auth";

export default function UploadPage() {
  const [formData, setFormData] = useState({pagina:"",sub:""});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState<File[]>([]);
  const [isloading, setIsloading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [selectedOption, setSelectedOption] = useState('pdf');
 // const [user, setUser ]= useState<any>();
  const auth = getAuth(app);
  // Definindo as opções com base na página selecionada
  const optionsMap: Record<string, { value: string; label: string }[]> = {
    news: [
      { value: 'noticiasComunicados', label: 'Notícias e Comunicados' },
      { value: 'manuaisOrientacoes', label: 'Manuais e Orientações' },
      { value: 'CRP', label: 'Informações sobre CRP' },
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
    setFile(e.target.files ? Array.from(e.target.files) : []);
  };
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
    // Determine placeholder text and input type for the date field
  const datePlaceholder = 
  formData.sub === 'conselhoADM' ? 'Digite o número da ATA' : 
  formData.sub === 'relatoriosAPK' ? 'Digite o número da APR/ano ex. 001/2024' : 
  formData.sub === 'conselhoFiscal' ? 'Digite o número da ATA' :
  selectedOption === 'imagem'?'Digite um link (opcional)':'';
  const inputType = (
      formData.sub === 'conselhoADM' || 
      formData.sub === 'conselhoFiscal' || 
      formData.sub === 'relatoriosContabeis' ||
      formData.sub === 'licitacoesContratos' ||
      formData.sub === 'fundoPrevidenciario' ||
      formData.sub === 'relatoriosAPK' ||
      formData.sub === 'relatoriosPrevidenciarios'||
      formData.sub === 'diretoriaExecutiva' ||
      formData.sub === 'comiteInvestimentos' ||
      selectedOption === 'imagem'
    ) ? 'text' : 'date';

   // Conditional disabling of the textarea field
  const isDescriptionDisabled = (
  formData.pagina === 'governanca' || 
  formData.sub === 'relatoriosContabeis' || 
  formData.sub === 'licitacoesContratos' || 
  formData.sub === 'fundoPrevidenciario' || 
  formData.sub === 'relatoriosAPK' || 
  formData.sub === 'relatoriosPrevidenciarios' ||
  formData.sub === 'CRP' ||
  selectedOption === 'imagem'
  );

  const handleSubmit = async (e: React.FormEvent)=> {
    e.preventDefault();
    if (file.length === 0) return;

    setIsSubmitting(true); // Disable the button and show loading
    
    try {
      const fileUrls = [];
      // Upload the file to Firebase Storage
      for (const files of file) {
        const fileRef = ref(storage, `uploads/${files.name}`);
        await uploadBytes(fileRef, files);
        const fileUrl = await getDownloadURL(fileRef);
        fileUrls.push(fileUrl);
      }

      // Save the information to Firestore
      const local = `${formData.pagina}-${formData.sub}`;
      await addDoc(collection(db, local), {
        title,
        description,
        date: formData.sub === 'conselhoADM' ? `ATA N° ${date}` : formData.sub === 'relatoriosAPK' ? `APR ${date}` : date,
        fileUrl: fileUrls,
        created_at: Timestamp.now()
      });

      // Reset form fields after successful submission
      setTitle('');
      setDescription('');
      setDate('');
      setFile([]);
    } catch (error) {
      console.error("Error uploading document: ", error);
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  };

  useEffect(() => {
    
    onAuthStateChanged(auth,response => {           
           if(response)
            setIsloading(false);
    });
       
},[])
  return (
    <>{isloading ? (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando informações...</p>
      </div>
    ) : (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.divForm}>
            <h1>Adicionar documento no site</h1>
            <h5>*Preencha todos os campos*</h5>
            <form onSubmit={handleSubmit}>
              <div className={styles.divFormIn}>
                <div className={styles.divLabel}>
                  <label className={styles.labelPage}>Pagina:</label>
                  <div className={styles.divArquivo}>
                    <label>Tipo de arquivo:</label>
                    
                  </div>
                  <label>Titulo:</label>
                  <label className={styles.labelDate}>{ selectedOption === 'imagem'?"Link: ":"Data do arquivo: "}</label>
                  <label>Descrição:</label>
                  <label className={styles.labelPDF}>Arquivo:</label>
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
                      <option value="">Selecione uma página</option>     
                      <option value="news">News</option>
                      <option value="governanca">Governança</option>
                      <option value="transparencia">Transparência</option>
                    </select>

                    <label className={styles.labelSub}>Sub:</label>
                    <select
                      id="sub"
                      name="sub"
                      value={formData.sub}
                      onChange={handleChange}
                      disabled={!formData.pagina || formData.pagina === 'home'}
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      {formData.pagina && optionsMap[formData.pagina]?.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.divRadio}>
                      <input
                        type="radio"
                        value="pdf"
                        checked={selectedOption === 'pdf'}
                        onChange={handleOptionChange}
                        disabled={formData.sub !== 'noticiasComunicados'}
                      />
                  <p>
                      PDF
                    </p>
                      <input
                        type="radio"
                        value="imagem"
                        checked={selectedOption === 'imagem'}
                        onChange={handleOptionChange}
                        disabled={formData.sub !== 'noticiasComunicados'}
                      />
                    <p>
                      Imagem
                    </p>
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Digite o título do documento"
                    required
                  />

                  <input
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                    placeholder={datePlaceholder}
                    type={inputType}
                   // disabled={selectedOption === 'imagem'}
                  />

                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Digite uma breve descrição sobre o conteúdo do documento"
                    disabled={isDescriptionDisabled}
                  />

                  <input
                    type="file"
                    accept={selectedOption === 'imagem' ? 'image/*' : 'application/pdf'}
                    multiple={selectedOption === 'imagem'}
                    onChange={handleFileChange}
                    required
                  />
                  


                  <button
                    type="submit"
                    className={styles.buttonSend}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
