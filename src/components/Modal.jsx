import React, { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from './../img/cerrar.svg';

const Modal = ({ 
  setVisibleModal,
  animarModal, 
  setAnimarModal, 
  guardarGasto,
  editarGasto }) => {

  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensajeValidacion, setMensajeValidacion] = useState('');

  useEffect(() => {
    console.log('Componente Modal. EditarGasto', editarGasto );
    if(Object.keys(editarGasto).length > 0){
      setNombre(editarGasto.nombre);
      setMonto(editarGasto.monto);
      setCategoria(editarGasto.categoria);
    }
  }, [])

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setVisibleModal(false);
    }, 500);
  }

  const handleAgregarGasto = (e) => {
    e.preventDefault();
    // metodo de arreglos. Si alguno de los tres incluye '' entra en el if
    if ([nombre, monto, categoria].includes('')) {
      setMensajeValidacion('Todos los campos son obligatorios');
      setTimeout(() => {
        setMensajeValidacion('')
      }, 3000);
      return;
    };
    guardarGasto({ nombre, monto, categoria });
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="Cerrar modal"
          onClick={ocultarModal}
        />
      </div>
      <form onSubmit={handleAgregarGasto} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        {mensajeValidacion && <Mensaje tipo="error">{mensajeValidacion}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />

          <label htmlFor="monto">Monto</label>
          <input
            id="monto"
            type="number"
            placeholder="Añade la monto del gasto: Ej: $4.000"
            value={monto}
            onChange={e => setMonto(Number(e.target.value))}
          />

          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="seleccionarCategoria">Seleccionar categoria</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastosVarios">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

          <input
            type="submit"
            value="Añadir Gasto"
          />
        </div>
      </form>
    </div>
  )
}

export default Modal