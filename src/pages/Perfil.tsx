import { useEffect, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/searchBar";
import "./Perfil.css";

export default function Perfil() {
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
            </div>
            <div className="Perfil">
                <div className="fotoPerfil">
                    <img src="/img/frameGPerfil.svg" alt="input" width={300} />
                </div>
                <div className="descricao">
                    <div className="Nome"><strong> Nome Do Perfil</strong></div>
                    <div className="descricaoPerfil">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure reprehenderit at <br />perferendis quia maxime explicabo nemo dolorem illum! Ea, veniam ab. Perspiciatis ad hic libero quis sed autem magnam.</div>
                </div>
            </div>
            <div className="tittleProjeto">Meus Projetos</div>
            <div className="projects">
                <div className="filtro">
                    <FilterPanel />
                </div>
                <div className="projeto">
                    <div className="containner-projeto containner-projeto-1">
                        <img src="/img/input.png" alt="foto vazia" width={250} />
                        <p className="titulo-projeto">titulo</p>
                        <p>aqui vai a Descrição do projeto do cliente</p>
                    </div>
                    <div className="containner-projeto containner-projeto-2">
                        <img src="/img/input.png" alt="foto vazia" width={250} />
                        <p className="titulo-projeto">titulo</p>
                        <p>aqui vai a Descrição do projeto do cliente</p>
                    </div>
                    <div className="containner-projeto containner-projeto-3">
                        <img src="/img/input.png" alt="foto vazia" width={250} />
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

