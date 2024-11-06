/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'], // Permitir imagens do Firebase Storage
      },
};

export default nextConfig;
