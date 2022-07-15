import React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatFecha } from '../helpers';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';
import IconoAhorro from '../img/icono_ahorro.svg';

const diccionarioImagenes = {
    comida: IconoComida,
    casa: IconoCasa,
    gastosVarios: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
    ahorro: IconoAhorro
}

const Gasto = ({ gasto, setEditarGasto }) => {
  const { categoria, nombre, monto, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditarGasto(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );


  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            {/* IMAGEN */}
            <img 
              src={diccionarioImagenes[categoria]}
              alt="Imagen gasto"
            />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>
                Agregado el:{''}
                <span>{formatFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>$ {monto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto;