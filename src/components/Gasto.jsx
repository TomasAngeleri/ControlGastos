import React from 'react';
import { formatFecha } from '../helpers';


const Gasto = ({ gasto }) => {
  const { categoria, nombre, monto, id, fecha } = gasto;
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        {/* IMAGEN */}
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='nombre-gasto'>{nombre}</p>
          <p className='fecha-gasto'>
            Agregado el:{''}
            <span>{formatFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className='cantidad-gasto'>$ {monto}</p>
    </div>
  )
}

export default Gasto