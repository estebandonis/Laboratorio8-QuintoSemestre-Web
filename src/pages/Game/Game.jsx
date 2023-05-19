import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'

import { Maze, Timer } from '@components'
import { styles } from './Game.module.css'
import { navigate } from '@store'

const Game = () => {
  const [mazeLayout, setMazeLayout] = useState(null)
  const [show, setShow] = useState(true)
  const { datos } = useStoreon('datos')
  let ignore = false

  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return await response.json()
  }

  const setMaze = async () => {
    setMazeLayout(await getMaze(datos.ancho, datos.alto))
  }

  useEffect(() => {
    if (!ignore) {
      setMaze()
      console.log('theme: ' + datos.theme)
      ignore = true
    }
  }, [])

  useEffect(() => {
    console.log('current: ', mazeLayout)
    document.addEventListener('keydown', detectKeyDown, true)
  }, [mazeLayout])

  const search = () => {
    const val = 'p'
    for (const row in mazeLayout) {
      for (const col in mazeLayout[row]) {
        if (mazeLayout[row][col] === val) {
          const index = [row, col]
          return index
        }
      }
    }
  }

  const searchSpecific = (row, col, val) => {
    if (mazeLayout[row][col] === val) {
      console.log('val: ' + mazeLayout[row][col])
      console.log('posicion: ', row, col, val)
      return true
    } else {
      return false
    }
  }

  const pressD = (index, val) => {
    if (index[1] > 0) {
      const row = index[0]
      const col = parseInt(index[1]) + 1
      if (searchSpecific(row, col, ' ')) {
        const newLayout = mazeLayout
        newLayout[index[0]][index[1]] = ' '
        newLayout[row][col] = val
        setMazeLayout(newLayout)
      } else if (searchSpecific(row, col, 'g')) {
        console.log('gano por D')
        navigate('/win')
      }
    }
  }

  const pressW = (index, val) => {
    if (index[0] > 1) {
      const row = parseInt(index[0]) - 1
      const col = index[1]
      if (searchSpecific(row, col, ' ')) {
        const newLayout = mazeLayout
        newLayout[index[0]][index[1]] = ' '
        newLayout[row][col] = val
        setMazeLayout(newLayout)
      } else if (searchSpecific(row, col, 'g')) {
        navigate('/win')
      }
    }
  }

  const pressA = (index, val) => {
    if (index[0][0] < 20) {
      const row = index[0]
      const col = parseInt(index[1]) - 1
      if (searchSpecific(row, col, ' ')) {
        const newLayout = mazeLayout
        newLayout[index[0]][index[1]] = ' '
        newLayout[row][col] = val
        setMazeLayout(newLayout)
      } else if (searchSpecific(row, col, 'g')) {
        navigate('/win')
      }
    }
  }

  const pressS = (index, val) => {
    if (index[0] < 20) {
      const row = parseInt(index[0]) + 1
      const col = index[1]
      if (searchSpecific(row, col, ' ')) {
        const newLayout = mazeLayout
        newLayout[index[0]][index[1]] = ' '
        newLayout[row][col] = val
        setMazeLayout(newLayout)
      } else if (searchSpecific(row, col, 'g')) {
        navigate('/win')
      }
    }
  }

  const detectKeyDown = (e) => {
    console.log('Clicked key: ', e.key)
    setShow(false)
    if (mazeLayout) {
      const val = 'p'
      const index = search()

      if (e.key === 'w') {
        pressW(index, val)
      } else if (e.key === 'a') {
        pressA(index, val)
      } else if (e.key === 'd') {
        pressD(index, val)
      } else if (e.key === 's') {
        pressS(index, val)
      }
      setShow(true)
    } else {
      console.log('no esta')
    }
  }

  if (!mazeLayout) {
    return 'Loading...'
  }

  return (
    <div className={styles}>
      {
        datos.selected ? <div><h3>Tiempo Restantes:</h3><Timer /><br /></div> : null
      }
      {
        show ? <Maze w={parseInt(datos.ancho)} h={parseInt(datos.alto)} json={mazeLayout} theme={datos.theme} /> : null
      }
    </div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
