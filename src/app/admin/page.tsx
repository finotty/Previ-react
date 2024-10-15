"use client";
import { useState } from 'react';
import styles from './styles.module.scss';
export default function UploadPage() {
  const [formData, setFormData] = useState({
    pagina:"",
    sub:"",
  });
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSubmit = () => {
    // Lógica para enviar o formulário ou validação
    console.log("pagina:", formData.pagina);
    console.log("opção:", formData.sub);
    console.log("text:", title);
    console.log("data:", date);
  };

  return (
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
                  <option value="">Selecione uma opção</option>
                  <option value="home">Home</option>
                  <option value="news">News</option>
                  <option value="governanca">Governança</option>
                  <option value="transparencia">Transparencia</option>
                </select>

                <label>Sub:</label>
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

                <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
                
                <input type='date' value={date} onChange={e => setDate(e.target.value)}/>
       
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
    
                <input type="file" accept="application/pdf"   />      
              
              <button type='submit' className={styles.buttonSend}>Enviar</button>
              </div>
              </div>
           </form>
        </div>
       </div>
    </div>
  );
}
