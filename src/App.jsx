import { useState } from 'react'
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [visibleModal, setVisibleModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleOnClick = () => {
    setVisibleModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);
    setTimeout(() => {
      setVisibleModal(false);
    }, 500);
  }

  return (
    <div className={visibleModal ? 'fijar':''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      {isValidPresupuesto &&
        (
          <>
            <main>
              <ListadoGastos
                gastos={gastos}
              />
            </main>
            <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt="Icono nuevo gasto"
                onClick={handleOnClick}
              />
            </div>
          </>
        )}
      {visibleModal &&
        <Modal
          setVisibleModal={setVisibleModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      }
    </div>
  );
}

export default App;
