import React, { useState } from 'react';
import Buscador from './Buscador'; // Asegúrate de que la ruta sea correcta
import '../App.css'; // Importa los estilos globales (o crea estilos específicos para Hero.css)

function Hero() {
  const [resultados, setResultados] = useState([]);
  const [todosLosElementos] = useState([
    { id: 1, titulo: 'Artículo sobre HTML Semántico' },
    { id: 2, titulo: 'Guía de CSS Avanzado' },
    { id: 3, titulo: 'Trucos de JavaScript Moderno' },
    // ... más elementos de tu portfolio
  ]);

  const handleBuscar = (termino) => {
    const terminoLowerCase = termino.toLowerCase();
    const nuevosResultados = todosLosElementos.filter(elemento =>
      elemento.titulo.toLowerCase().includes(terminoLowerCase)
    );
    setResultados(nuevosResultados);
  };

  return (
    <div className="hero-container">
      <div className="background-image"></div>
      <div className="search-overlay">
        <Buscador onSearch={handleBuscar} />
      </div>
      {resultados.length > 0 && (
        <div className="search-results">
          <h2>Resultados de la Búsqueda:</h2>
          <ul>
            {resultados.map(resultado => (
              <li key={resultado.id}>{resultado.titulo}</li>
            ))}
          </ul>
        </div>
      )}
      {/* Aquí podrías agregar más contenido específico del Hero si lo necesitas */}
    </div>
  );
}

export default Hero;