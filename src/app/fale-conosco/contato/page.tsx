"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { toast } from "sonner";

const Contato = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    matricula: "",
    status: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
       toast.success('Enviado com sucesso!');
       setIsLoading(false);
        setFormData({
          nomeCompleto: "",
          matricula: "",
          status: "",
          email: "",
          servico: "",
          mensagem: "",
        });
      } else {
        toast.warning('Erro ao enviar.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.warning('Erro ao enviar.');
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      nomeCompleto: "",
      matricula: "",
      status: "",
      email: "",
      servico: "",
      mensagem: "",
    })
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.divHead}>
        <h1>Formulário de Contato</h1>
        <p>* Campos de preenchimento obrigatório</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Nome completo */}
        <div className={styles.inputContainer}>
           <label className={styles.inputLabel} htmlFor="nomeCompleto">Nome completo *</label>
            <input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
        </div>
        {/* Matrícula */}
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} htmlFor="matricula">Matrícula *</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
            placeholder="Digite sua matrícula"
          />
        </div>
        {/* Status */}
        <div className={styles.inputContainer2}>
        <label className={styles.inputLabel2} htmlFor="status">Status * </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="Servidor ativo">Servidor ativo</option>
          <option value="Servidor comissionado">Servidor comissionado</option>
          <option value="Servidor aposentado">Servidor aposentado</option>
          <option value="Pensionista">Pensionista</option>
        </select>
        </div>
        {/* E-mail */}
        <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="email">Seu e-mail *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Digite seu e-mail"
        />
        </div>
        {/* Serviço */}
        <div className={styles.inputContainer2}>
        <label className={styles.inputLabel2} htmlFor="servico">Serviço *</label>
        <select
          id="servico"
          name="servico"
          value={formData.servico}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o serviço desejado</option>
          <option value="Solicitação ao atendimento">Solicitação ao atendimento</option>
          <option value="Mensagem à presidência">Mensagem à presidência</option>
          <option value="Elogios sobre serviços">Elogios sobre serviços</option>
          <option value="Denúncia à ouvidoria">Denúncia à ouvidoria</option>
          <option value="Reclamação de serviços">Reclamação de serviços</option>
          <option value="Sugestão para melhoras">Sugestão para melhoras</option>
        </select>
        </div>
        {/* Mensagem */}
        <div className={styles.inputContainer2}>
        <label className={styles.inputLabel2} htmlFor="mensagem">Mensagem *</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          placeholder="Escreva sua mensagem"
        ></textarea>
        </div>

         <div className={styles.buttonSendClear}>
          <button className={styles.clear} onClick={handleClear}>Limpar</button>
          <button className={styles.send} type="submit" disabled={isLoading} >
            {isLoading ?<div className={styles.spinner}></div>:"Enviar" }
            </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
