import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <Hero />
      <Footer />
      {/* Si quieres el buscador también fuera del Hero, descomenta la siguiente línea */}
      {/* <Buscador /> */}
      {/* Aquí iría el resto del contenido de tu aplicación (proyectos, sobre mí, etc.) */}
    </>
  );
}

export default App;