import React, {useState} from 'react'
import CerrarBtn from './../img/cerrar.svg'

const Modal = ({ setVisibleModal, animarModal, setAnimarModal }) => {
  
  const [nombre, setNombre] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');

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