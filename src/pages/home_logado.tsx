import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/searchBar";
import "./home.css";

export default function Home_logar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="main">
            <div className={`header ${scrolled ? "scrolled" : ""} ${mobileSearchOpen ? "search-open" : ""}`}>
                <img src="/img/logo.svg" alt="Logo" className="logo" width={60} />

                <button
                    className="mobile-search-btn open-btn"
                    onClick={() => setMobileSearchOpen(true)}
                    aria-label="Abrir pesquisa"
                >
                    <img src="/img/lupa.png" alt="" />
                </button>

                <div className="barra">
                    <SearchBar />
                    <button
                        className="mobile-search-btn close-btn"
                        onClick={() => setMobileSearchOpen(false)}
                        aria-label="Fechar pesquisa"
                    >
                        ✕
                    </button>
                </div>

                <div className="login">
                    <img src="/img/framePerfil.svg" alt="Perfil" />
                    <div className="infoPerfil">
                        <p className="nomePerfil"> Nome </p>
                        <p className="permicao">ADM/User</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="input">
                    <img src="/img/input.png" alt="input" width={300} />
                </div>
            </div>
            <div className="projects">
                <div className="filtro">
                    <FilterPanel />
                </div>
                <div className="projeto">
                    <div className="containner-projeto containner-projeto-1">
                        <img src="/img/input.png" alt="" width={250} />
                        <p className="titulo-projeto">titulo</p>
                        <p>aqui vai a Descrição do projeto do cliente</p>
                    </div>
                    <div className="containner-projeto containner-projeto-2">
                        <img src="/img/input.png" alt="" width={250} />
                        <p className="titulo-projeto">titulo</p>
                        <p>aqui vai a Descrição do projeto do cliente</p>
                    </div>
                    <div className="containner-projeto containner-projeto-3">
                        <img src="/img/input.png" alt="" width={250} />
                        <p className="titulo-projeto">titulo</p>
                        <p>aqui vai a Descrição do projeto do cliente</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="marca">Clube Prime © 2025</p>
            </div>
        </div>
    );
}