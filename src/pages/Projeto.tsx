"use client";

import React from "react";
import { Instagram, Linkedin, Youtube, X, Home, Heart } from "lucide-react";
import styles from "./Projeto.module.css"; 

export default function Projeto() {
  return (
    <div className={styles.perfilContainer}>
      {/* Cabeçalho */}
      <header className={styles.perfilHeader}>
        <div className={styles.perfilUserArea}>
          <Home className={styles.perfilHomeIcon} />
          <div className={styles.perfilUserInfo}>
            <img
              src="/img/Avatar.svg"
              alt="Avatar"
              className={styles.perfilAvatar}
            />
            <div>
              <p className={styles.perfilUserName}>Nome</p>
              <p className={styles.perfilUserRole}>Adm/User</p>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.perfilMain}>
        <div className={styles.perfilCard}>
          <div className={styles.perfilImagemContainer}>
            <img
              src="/img/Image.svg"
              alt="Imagem"
              className={styles.perfilImagem}
            />
            <button className={styles.perfilFavorito}>
              <Heart size={16} />
            </button>
          </div>

          <div className={styles.perfilInfo}>
            <h2 className={styles.perfilHeading}>Text Heading</h2>
            <span className={styles.perfilTag}>Tag</span>
            <h1 className={styles.perfilPreco}>$50</h1>

            <div className={styles.perfilDescricaoBox}>
              <h3 className={styles.perfilDescricaoTitulo}>Title</h3>
              <p className={styles.perfilDescricaoTexto}>descríção rápida</p>
            </div>

            <button className={styles.perfilBotao}>Button</button>
          </div>
        </div>

        {/* Detalhes */}
        <div className={styles.perfilDetalhes}>
          <div className={styles.perfilEmpresaHeader}>
            <div className={styles.perfilEmpresaInfo}>
              <img
                src="/img/Avatar.svg"           
                alt="Avatar empresa"
                className={styles.perfilAvatarEmpresa}
              />
              <h2 className={styles.perfilEmpresaNome}>Empresa</h2>

              <div className={styles.perfilAcoes}>
                <button className={styles.perfilAcaoBtn}>Conversar</button>
                <button className={styles.perfilAcaoBtn}>Ver perfil</button>
              </div>
            </div>
          </div>

          <div className={styles.perfilDetalhesTexto}>
            <h3 className={styles.perfilDetalhesTitulo}>Detalhes do projeto</h3>
            <p className={styles.perfilCategoria}>
              Categoria <span>text</span>
            </p>
            <h4 className={styles.perfilDescricaoDetalhada}>Descrição detalhada</h4>
            <p className={styles.perfilDescricaoDetalhadaTexto}>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a<br />
              [ref:my_label] [ref:my_label]
            </p>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className={styles.perfilFooter}>
        <div className={styles.footerIcons}>
          <X className={styles.footerIcon} />
          <Instagram className={styles.footerIcon} />
          <Youtube className={styles.footerIcon} />
          <Linkedin className={styles.footerIcon} />
        </div>
      </footer>
    </div>
  );
}