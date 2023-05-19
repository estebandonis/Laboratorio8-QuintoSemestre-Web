import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { Maze } from '@components'
import { styles } from './Pill.module.css'

const Pill = () => {
  const [selection, setSelection] = useState({
    selected1: true,
    selected2: false
  })
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
  const [showMine, setShowMine] = useState(true)
  const [showTerra, setShowTerra] = useState(false)
  const jason = [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']]

  useEffect(() => {
    dispatch('update', data)
  }, [data])

  const changeTema = (value) => {
    setData(valors => {
      return { ...valors, theme: value }
    })
  }

  const onClick1 = () => {
    setShowMine(true)
    setShowTerra(false)
    changeTema(1)
    if (!selection.selected1) {
      setSelection({ selected1: true })
    }
    setSelection({ selected2: false })
    console.log('entro', datos.theme)
  }

  const onClick2 = () => {
    setShowMine(false)
    setShowTerra(true)
    changeTema(2)
    if (!selection.selected2) {
      setSelection({ selected2: true })
    }
    setSelection({ selected1: false })
    console.log('entro', datos.theme)
  }

  return (
    <div className={styles}>
      <ul>
        <button onClick={onClick1}>Minecraft</button>
        <button onClick={onClick2}>Terraria</button>
      </ul>
      {
        showMine ? <Maze w={parseInt(2)} h={parseInt(2)} json={jason} theme={1} /> : null
      }
      {
        showTerra ? <Maze w={parseInt(2)} h={parseInt(2)} json={jason} theme={2} /> : null
      }
    </div>
  )
}

Pill.propTypes = {
  letter: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Pill
