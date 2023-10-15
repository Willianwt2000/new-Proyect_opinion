import './App.css';
import Testimonio from  './components/Testimonio'
import { cliente1, cliente2,cliente3, cliente4 } from './components/Clientes';

//La aplicacion App esta renderizando y creando el componente testimonio
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros clientes sobre WtShop: </h1>
        <Testimonio 
          nombre={cliente1.nombre}
          pais={cliente1.pais}
          imagen={cliente1.imagen}
          cargo={cliente1.cargo}
          empresa={cliente1.empresa}
          testimonio={cliente1.testimonio}
        />
        <Testimonio 
          nombre={cliente2.nombre}
          pais={cliente2.pais}
          imagen={cliente2.imagen}
          cargo={cliente2.cargo}
          empresa={cliente2.empresa}
          testimonio={cliente2.testimonio}
        />
        <Testimonio 
          nombre={cliente3.nombre}
          pais={cliente3.pais}
          imagen={cliente3.imagen}
          cargo={cliente3.cargo}
          empresa={cliente3.empresa}
          testimonio={cliente3.testimonio}
        />
        <Testimonio 
          nombre={cliente4.nombre}
          pais={cliente4.pais}
          imagen={cliente4.imagen}
          cargo={cliente4.cargo}
          empresa={cliente4.empresa}
          testimonio={cliente4.testimonio}
        />
      </div>
    </div>
  );
}

export default App;
