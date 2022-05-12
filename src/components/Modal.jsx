import React from 'react'
import CerrarBtn from './../img/cerrar.svg'

const Modal = ({ setVisibleModal }) => {
  const ocultarModal = () => {
    setVisibleModal(false);
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
    </div>
  )
}

export default Modal