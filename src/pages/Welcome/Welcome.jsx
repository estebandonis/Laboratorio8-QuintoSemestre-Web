import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { navigate } from '@store'
import { Pill } from '@components'
import { styles } from './Welcome.module.css'

const Welcome = () => {
  const { dispatch, datos } = useStoreon('datos')
  const [data, setData] = useState(
    {
      alto: datos.alto,
      ancho: datos.ancho,
      selected: datos.selected,
      tiempo: datos.tiempo,
      theme: datos.theme
    }
  )

  useEffect(() => {
    dispatch('borrar')
  }, [])

  useEffect(() => {
    dispatch('update', data)
  }, [data])

  const handleChangeAlto = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, alto: nuevo }
    })
  }

  const handleChangeAncho = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, ancho: nuevo }
    })
  }

  const handleChangeTiempo = (valor) => {
    const nuevo = valor.target.value
    setData(valors => {
      return { ...valors, tiempo: nuevo }
    })
  }

  const handleChecked = () => {
    if (data.selected === false) {
      setData(valors => {
        return { ...valors, selected: true }
      })
    } else {
      setData(valors => {
        return { ...valors, selected: false }
      })
    }
  }

  const handleClick = async () => {
    if (data.alto >= 4 && data.alto <= 100) {
      if (data.ancho >= 4 && data.ancho <= 100) {
        if (data.selected === true) {
          if (data.tiempo !== null) {
            dispatch('update', data)
            navigate('/game')
          } else {
            alert('Debe incluir una cantidad de tiempo')
          }
        } else {
          dispatch('update', data)
          navigate('/game')
        }
      } else {
        alert('El ancho debe estar entre 4 y 100')
      }
    } else {
      alert('El alto debe de estar entre 4 y 100')
    }
  }

  return (
    <div className={styles}>
      Bienvenido al Juego de Laberinto

      <input type="number" value={data.alto} onChange={handleChangeAlto} placeholder='Ingrese el alto' />
      <input type="number" value={data.ancho} onChange={handleChangeAncho} placeholder='Ingrese el ancho' />
      <input type="checkbox" checked={data.selected} onChange={handleChecked} />
      {
        data.selected === true ? <input type="number" value={data.tiempo} onChange={handleChangeTiempo} placeholder='Ingrese el tiempo' /> : null
      }
      <button onClick={handleClick}>Iniciar</button>
      <Pill />
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
