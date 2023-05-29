import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { navigate } from '@store'
import { Pill, Inputs, Buttons } from '@components'
import { styles, form, centerTitle } from './Welcome.module.css'

const Welcome = () => {
  const { dispatch, datos } = useStoreon('datos')
  const [data, setData] = useState(
    {
      alto: datos.alto,
      ancho: datos.ancho,
      selected: datos.selected,
      tiempo: datos.tiempo
    }
  )
  let ignore = false

  useEffect(() => {
    if (!ignore) {
      dispatch('borrar')
      ignore = true
    }
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
      <div className={centerTitle}>
        <h1>Bienvenido al Juego de Laberinto</h1>
      </div>
      <div className={form}>
        <Inputs type={'number'} value={data.alto} onchange={handleChangeAlto} placeholder={'Ingrese el alto'} />
        <Inputs type={'number'} value={data.ancho} onchange={handleChangeAncho} placeholder={'Ingrese el ancho'} />
        <Inputs type={'checkbox'} value={data.selected} onchange={handleChecked} />
        {
          data.selected === true ? <Inputs type={'number'} value={data.tiempo} onchange={handleChangeTiempo} placeholder={'Ingrese el tiempo'} /> : null
        }
        <Buttons type={'button'} onclick={handleClick} name={'Iniciar'} />
      </div>
      <Pill />
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
