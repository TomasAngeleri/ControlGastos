import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos , setEditarGasto }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
      {gastos.map(gasto =>
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setEditarGasto={setEditarGasto}
        />
      )}
    </div>
  )
}

export default ListadoGastos;