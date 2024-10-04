"use client";
import React, { useEffect, useState } from 'react';

// Defina a interface dos arquivos
interface File {
  id: string;
  name: string;
  createdTime: string;
}

export default function FileList() {
  // Defina o tipo do estado 'files' como um array de 'File'
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('http://localhost:3333/api/files/list');
      const data: File[] = await response.json(); // Defina o tipo da resposta
      setFiles(data); // Armazene os arquivos no estado
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Arquivos no Google Drive</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <a
              href={`https://drive.google.com/file/d/${file.id}/view`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name} - {new Date(file.createdTime).toLocaleDateString()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
