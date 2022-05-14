import React from 'react'
import CerrarBtn from './../img/cerrar.svg'

const Modal = ({ setVisibleModal, animarModal, setAnimarModal }) => {
  const ocultarModal = () => {
    setAnimarModal(false);  
    setTimeout(() => {
      setVisibleModal(false);  
    }, 500);
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
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal