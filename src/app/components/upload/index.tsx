"use client";
import React, { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!file) {
      console.error('Nenhum arquivo selecionado');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('http://localhost:3333/api/files/upload', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      console.log('Arquivo enviado com sucesso');
    } else {
      console.error('Erro ao enviar o arquivo');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}
