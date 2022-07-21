import { useState, useEffect } from 'react'
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
  const [editarGasto, setEditarGasto] = useState({});

  useEffect(() => {
    if(Object.keys(editarGasto).length > 0){
      setVisibleModal(true);
      setTimeout(() => {
      setAnimarModal(true);
    }, 500);
    }
  }, [editarGasto]);

  const handleNuevoGasto = () => {
    setVisibleModal(true);
    setEditarGasto({})
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  // eliminar gastos
  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(elem => elem.id !== id);
    setGastos(gastosActualizados);
  }
  
  const guardarGasto = gasto => {
    if(gasto.id){
    // Actualizo gasto
    const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ?
      gasto : gastoState )
    setGastos(gastosActualizados);
    setEditarGasto({})
    }else{
    // Nuevo gasto
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    }
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
                setEditarGasto={setEditarGasto}
                eliminarGasto={eliminarGasto}
              />
            </main>
            <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt="Icono nuevo gasto"
                onClick={handleNuevoGasto}
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
          editarGasto={editarGasto}
          setEditarGasto={setEditarGasto}
        />
      }
    </div>
  );
}

export default App;
