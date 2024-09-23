"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const Contato = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar o formulário ou validação
    console.log("Dados do formulário:", formData);
  };

  return (
    <div className={styles.formContainer}>
      <h1>Formulário de Contato</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Nome completo */}
        <div className={styles.inputContainer}>
           <label htmlFor="nomeCompleto">Nome completo *</label>
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
          <label htmlFor="matricula">Matrícula *</label>
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
        <div className={styles.inputContainer}>
        <label htmlFor="status">Estatus *</label>
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
        <label htmlFor="email">Seu e-mail *</label>
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
        <div className={styles.inputContainer}>
        <label htmlFor="servico">Serviço *</label>
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
        <div className={styles.inputContainer}>
        <label htmlFor="mensagem">Mensagem *</label>
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
          <button className={styles.clear} type="submit">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
