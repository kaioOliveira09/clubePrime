import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/searchBar";
import "./home.css";

export default function home_logado() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="main">
        <div className= {`header ${scrolled ? "scrolled" : ""}`}>
          <img src="/img/logo.svg" alt="Logo" className="logo" width={80}/>
          <div className="barra">
             <SearchBar/>
          </div>
          <div className="login">
            Entrar 

          </div>
        </div>
        <div className="image">
          <div
              style={{
                minHeight: "100vh",
                backgroundColor: "#f3f4f6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}> 
              <img src="/img/input.png" alt="input"/>
            </div>
          
        </div>
        <div className="projects">
          <div className="filtro">
            <FilterPanel />
          </div>
          <div className="projeto">
              <div className="containner-projeto">
                <img src="/img/input.png" alt="" width={250}/>
                <p className="titulo-projeto">titulo</p>
                <p>aqui vai a Descrição do projeto do cliente</p>
              </div>
          </div>
        </div>
    </div>
  );
}