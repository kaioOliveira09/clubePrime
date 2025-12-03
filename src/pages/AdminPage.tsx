import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Check, 
  X, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Building,
  Calendar,
  FileText
} from 'lucide-react';
import styles from './admin.module.css';

interface Projeto {
  id: number;
  nome: string;
  criadoPor: string;
  data: string;
  status: 'Em análise' | 'Aguardando documentação' | 'Em revisão final' | 'Aprovado' | 'Rejeitado';
}

const INITIAL_PROJECTS: Projeto[] = [
  { id: 1, nome: 'Projeto Alpha', criadoPor: 'Empresa XYZ', data: '15/03/2024', status: 'Em análise' },
  { id: 2, nome: 'Projeto Beta', criadoPor: 'Startup ABC', data: '14/03/2024', status: 'Aguardando documentação' },
  { id: 3, nome: 'Projeto Gamma', criadoPor: 'Tech Solutions', data: '13/03/2024', status: 'Em revisão final' },
];

export default function AdminPage() {
  const [projetos, setProjetos] = useState(INITIAL_PROJECTS);

  const handleStatusChange = (id: number, novoStatus: 'Aprovado' | 'Rejeitado') => {
    setProjetos(prevProjetos => 
      prevProjetos.map(projeto =>
        projeto.id === id 
          ? { ...projeto, status: novoStatus }
          : projeto
      )
    );
  };

  const getStatusClassName = (status: Projeto['status']) => {
    switch (status) {
      case 'Aprovado':
        return styles.statusAprovado;
      case 'Rejeitado':
        return styles.statusRejeitado;
      case 'Em análise':
      case 'Em revisão final':
      case 'Aguardando documentação':
        return styles.statusPendente;
      default:
        return '';
    }
  };

  return (
    <div className={styles.fullPageLayout}>
      <header className={styles.header}>
        <div className={styles.leftHeader}>
          {/* Logo Principal: usando logo.svg */}
          <div className={styles.logo}>
            <img src="/img/logo.svg" alt="Logo ClubePrime" className={styles.logoImage} />
          </div>
          {/* Ícone Home */}
          <div title="Página Inicial"> 
            <Home className={styles.headerIcon} size={22} />
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.userInfo}>
            <div className={styles.headerName}>João Silva</div>
            <div className={styles.headerRole}>Administrador</div>
          </div>
          
          {/* Avatar do Usuário com Avatar.svg */}
          <div className={styles.userAvatar} title="Perfil do Usuário"> 
            <img 
              src="/img/Avatar.svg" 
              alt="Avatar do Usuário" 
              className={styles.avatarImage} 
            />
          </div>
          
          
        </div>
      </header>

      <main className={styles.adminContent}>
        <h1 className={styles.titulo}>Projetos em Gestão</h1>
        
        <div className={styles.projetosList}>
          {projetos.map(projeto => (
            <div key={projeto.id} className={styles.cardProjeto}>
              <div className={styles.projetoInfo}>
                <h3>{projeto.nome}</h3>
                <p>
                  <Building size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  Criado por: {projeto.criadoPor}
                </p>
                <p>
                  <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  Data: {projeto.data}
                </p>
                <p>
                  <FileText size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  Status: <strong className={getStatusClassName(projeto.status)}>{projeto.status}</strong>
                </p>
              </div>
              
              <div className={styles.acoes}>
                <button 
                  className={styles.btnApprove} 
                  title="Aprovar Projeto"
                  onClick={() => handleStatusChange(projeto.id, 'Aprovado')}
                  disabled={projeto.status === 'Aprovado'}
                >
                  <Check className={styles.buttonIcon} size={16} />
                  Aprovar
                </button>
                <button 
                  className={styles.btnDeny} 
                  title="Rejeitar Projeto"
                  onClick={() => handleStatusChange(projeto.id, 'Rejeitado')}
                  disabled={projeto.status === 'Rejeitado'}
                >
                  <X className={styles.buttonIcon} size={16} />
                  Rejeitar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      
      <footer className={styles.pageFooter}>
        <div className={styles.copy}>
          © 2024 Clube Prime - Todos os direitos reservados
        </div>
        
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialLink} title="Facebook">
            <Facebook className={styles.socialIcon} size={18} />
          </a>
          <a href="#" className={styles.socialLink} title="Instagram">
            <Instagram className={styles.socialIcon} size={18} />
          </a>
          <a href="#" className={styles.socialLink} title="Twitter">
            <Twitter className={styles.socialIcon} size={18} />
          </a>
          <a href="#" className={styles.socialLink} title="LinkedIn">
            <Linkedin className={styles.socialIcon} size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}