// src/app/page.tsx

// Importa o componente Login. O caminho pode variar, mas este é o mais provável:
import { Login } from './Login';

// Este é o componente da página. O Next.js renderiza esta função
// na rota principal: http://localhost:3000/
export default function HomePage() {
  return (
    // Renderiza o componente de Login que você criou
    <Login />
  );
}