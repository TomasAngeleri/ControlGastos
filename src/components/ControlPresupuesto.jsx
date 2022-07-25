import React, { useState, useEffect } from 'react'
import formatCurrency from '../utils/formatCurrency'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({ presupuesto, gastos }) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentajeGastado, setPorcentajeGastado] = useState(0)

  useEffect(() => {
    // Calculo total gastado
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.monto, 0);
    setGastado(totalGastado);
    // Calculo disponible
    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);

    //Calculo porcentaje total disponible
    const porcentajeGastado = ((totalGastado * 100) / presupuesto).toFixed(2);
    setTimeout(() => {
      setPorcentajeGastado(porcentajeGastado);
    }, 800);
  }, [gastos])



  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5'
          })}
          value={porcentajeGastado}
          text={`${porcentajeGastado}% Gastado`}
        />
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