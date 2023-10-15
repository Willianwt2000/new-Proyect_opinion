//Crear componentes
import React from "react";
import '../style/testimonio.css'

//definir componentes funcionales

function Testimonio({ nombre, pais, imagen, cargo, empresa, testimonio }) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../img/images-${imagen}.jpeg`)}
        alt={(`Foto de ${nombre}`)}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-textimonio"><strong>{nombre}</strong> en {pais}</p>
        <p className="cargo-textimonio">{cargo} en <strong>{empresa}</strong></p>
        <p className="texto-textimonio">"{testimonio}"</p>
      </div>
    </div>
  )
};

export default Testimonio;