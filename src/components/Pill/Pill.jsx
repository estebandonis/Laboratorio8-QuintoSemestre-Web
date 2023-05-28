import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { MazeTerraria, MazeMinecraft } from '@components'
import { styles } from './Pill.module.css'

const Pill = () => {
  const [selection, setSelection] = useState({
    selected1: true,
    selected2: false
  })
  const { dispatch, thema } = useStoreon('thema')
  const [dat, setDat] = useState(
    {
      tema: thema.tema
    }
  )
  const [showMine, setShowMine] = useState(true)
  const [showTerra, setShowTerra] = useState(false)
  const jason = [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']]

  useEffect(() => {
    console.log('dat tema: ', thema.tema)
  }, [])

  useEffect(() => {
    dispatch('update/tema', dat)
    console.log('data tema: ', dat.tema)
  }, [dat])

  const changeTema = (value) => {
    setDat(valors => {
      return { ...valors, tema: value }
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
    console.log('entro', thema.tema)
  }

  const onClick2 = () => {
    setShowMine(false)
    setShowTerra(true)
    changeTema(2)
    if (!selection.selected2) {
      setSelection({ selected2: true })
    }
    setSelection({ selected1: false })
    console.log('entro', thema.tema)
  }

  return (
    <div className={styles}>
      <ul>
        <button onClick={onClick1}>Minecraft</button>
        <button onClick={onClick2}>Terraria</button>
      </ul>
      {
        showMine ? <MazeMinecraft w={parseInt(2)} h={parseInt(2)} json={jason} /> : null
      }
      {
        showTerra ? <MazeTerraria w={parseInt(2)} h={parseInt(2)} json={jason} /> : null
      }
    </div>
  )
}

Pill.propTypes = {
  letter: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Pill
