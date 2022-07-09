import React from 'react'

const Gasto = ({ gasto }) => {
  const { categoria, nombre, monto, id, fecha } = gasto;
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='nombre-gasto'>{nombre}</p>
          <p className='cantidad-gasto'>{monto}</p>
        </div>
      </div>
    </div>
  )
}

export default Gasto