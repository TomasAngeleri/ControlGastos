import React from 'react'
import CerrarBtn from './../img/cerrar.svg'

const Modal = ({ setVisibleModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);  
    setTimeout(() => {
      setVisibleModal(false);  
    }, 500);
  }

  const handleAgregarGasto = (e) => {
    e.preventDefault();
    console.log('Añadiendo gasto');
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
        <div className="campo">
            <label htmlFor="nombre">Nombre del Gasto</label>
            <input
              id="nombre"
              type="text"
              placeholder="Añade el nombre del gasto"
            />

          <label htmlFor="monto">Monto</label>
            <input
              id="monto"
              type="number"
              placeholder="Añade la monto del gasto: Ej: $4.000"
            />

          <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
            >
              <option value="seleccionarCategoria">Seleccionar categoria</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos varios</option>
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