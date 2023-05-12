import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { Maze } from '@components'
import { styles } from './Game.module.css'

const Game = () => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const { datos } = useStoreon('datos')

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return await response.json()
  }

  const setMaze = async () => {
    setMazeLayout(await getMaze(datos.ancho, datos.alto))
  }

  useEffect(() => {
    console.log('Alto: ' + datos.alto)
    console.log('Ancho: ' + datos.ancho)
    setMaze()
  }, [])

  if (!mazeLayout) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      <Maze w={parseInt(datos.ancho)} h={parseInt(datos.alto)} json={mazeLayout} />
    </div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
