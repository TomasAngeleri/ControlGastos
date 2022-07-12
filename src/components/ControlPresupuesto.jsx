import React, {useState, useEffect} from 'react'
import formatCurrency from '../utils/formatCurrency'

const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    // Calculo total gastado
    const totalGastado = gastos.reduce((total,gasto) => total + gasto.monto,0);
    setGastado(totalGastado);

    // Calculo disponible
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    
  }, [gastos])
  

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatCurrency(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatCurrency(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto