import { useState, ChangeEvent } from "react";
import "./FilterPanel.css";

export default function FilterPanel() {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([
    "Spring",
    "Smart",
    "Modern",
  ]);
  const [selectedOptions, setSelectedOptions] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  function removeKeyword(keyword: string) {
    setSelectedKeywords((prevKeywords) =>
      prevKeywords.filter((item) => item !== keyword)
    );
  }

  function toggleOption(index: number) {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((checked, i) => (i === index ? !checked : checked))
    );
  }

  function updatePriceRange(event: ChangeEvent<HTMLInputElement>, position: number) {
    const newValue = Number(event.target.value);
    setPriceRange((prevRange) =>
      position === 0 ? [newValue, prevRange[1]] : [prevRange[0], newValue]
    );
  }

  return (
    <aside className="filter-panel">
      {/* Cabeçalho */}
      <div className="filter-header">
        <h2 className="filter-title">Filtros</h2>
        <button
          className="clear-button"
          onClick={() => {
            setSelectedKeywords([]);
            setSelectedOptions([false, false, false]);
            setPriceRange([0, 100]);
          }}
        >
          Limpar tudo
        </button>
      </div>

      {/* Palavras-chave */}
      <section className="keywords-section">
        <h3>Palavras-chave</h3>
        <div className="keywords-list">
          {selectedKeywords.length > 0 ? (
            selectedKeywords.map((keyword) => (
              <span key={keyword} className="keyword-tag">
                {keyword}
                <button
                  onClick={() => removeKeyword(keyword)}
                  className="remove-keyword"
                >
                  ✕
                </button>
              </span>
            ))
          ) : (
            <p className="empty-text">Nenhuma palavra selecionada</p>
          )}
        </div>
      </section>

      {/* Opções */}
      <section className="options-section">
        <h3>Categorias</h3>
        {selectedOptions.map((isChecked, index) => (
          <label key={index} className="option-item">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleOption(index)}
            />
            <div>
              <div className="option-title">Opção {index + 1}</div>
              <div className="option-description">
                Descrição da opção {index + 1}
              </div>
            </div>
          </label>
        ))}
      </section>

      {/* Faixa de preço */}
      <section className="price-section">
        <h3>Faixa de preço</h3>
        <div className="price-values">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <div className="range-inputs">
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => updatePriceRange(e, 0)}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => updatePriceRange(e, 1)}
          />
        </div>
      </section>
    </aside>
  );
}
