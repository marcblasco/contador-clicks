import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freecodelogo from './img/freecode.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log("click")
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className="logo-container">
        <img className='freecodecamp-logo' src={freecodelogo} alt='Logo'></img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
          <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />
          <Boton texto='Reiniciar'  esBotonDeClic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
