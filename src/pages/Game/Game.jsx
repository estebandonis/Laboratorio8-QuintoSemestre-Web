import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Maze } from '@components'
import { styles } from './Game.module.css'

const Game = () => {
  const [mazeLayout, setMazeLayout] = useState(null)

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return await response.json()
  }

  const setMaze = async () => {
    setMazeLayout(await getMaze(3, 3))
  }

  useEffect(() => {
    setMaze()
  }, [])

  if (!mazeLayout) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      <Maze w={3} h={3} json={mazeLayout} />
    </div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
