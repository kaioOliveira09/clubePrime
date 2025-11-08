import "./globals.css";

export default function Home() {
   return (
    <div>
        <div className="cabecalho" id="cabecalho">
          
          <div id="logo">F</div> 

          <div className="barraPesquisa" id="barraPesquisa">
            <img src="/img/lupa.png" alt="Lupa" />
            <p>Pesquisa</p>
          </div>
          <div id="login">
            <img src="/img/perfilIcon.png" alt="perfil"/>
            <p>Entrar</p>
          </div>
        </div>
        <img src="/img/input.png" alt="input"/>
    </div>
  );
}
