import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Entity } from '@components'
import minePlayer from '@assets/minecraft_player.png'
import mineFloor from '@assets/minecraft_floor.jpeg'
import minePilar from '@assets/minecraft_pilar.png'
import mineWall from '@assets/minecraft_wall.jpeg'
import mineGoal from '@assets/minecraft_goal.jpg'

import terraPlayer from '@assets/terraria_player.png'
import terraFloor from '@assets/terraria_floor.png'
import terraPilar from '@assets/terraria_pilar.png'
import terraWall from '@assets/terraria_wall.png'
import terraGoal from '@assets/terraria_goal.png'

import { styles } from './Maze.module.css'

const Maze = ({ json, w, h, theme }) => {
  const [sprites, setSprites] = useState({
    player: '',
    floor: '',
    wall: '',
    pilar: '',
    goal: ''
  })

  useEffect(() => {
    if (theme === 1) {
      setSprites({
        player: minePlayer,
        floor: mineFloor,
        wall: mineWall,
        pilar: minePilar,
        goal: mineGoal
      })
    } else if (theme === 2) {
      setSprites({
        player: terraPlayer,
        floor: terraFloor,
        wall: terraWall,
        pilar: terraPilar,
        goal: terraGoal
      })
    }
    console.log('thema:', theme)
  }, [])

  if (sprites.player === '' || sprites.floor === '' || sprites.wall === '' || sprites.pilar === '' || sprites.goal === '') {
    return ''
  }

  return (
    <div
      className={styles}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${((w * 2) + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`
      }}
    >
      {json.map((row, ri) => row.map((col, ci) => {
        const key = `${ri}-${ci}`
        switch (col) {
          case 'p':
            return <Entity key={key} letter="p" Imageurl={sprites.player} />
          case 'g':
            return <Entity key={key} letter="g" Imageurl={sprites.goal} />
          case '-':
            return <Entity key={key} letter="-" Imageurl={sprites.wall} />
          case '|':
            return <Entity key={key} letter="|" Imageurl={sprites.wall} />
          case '+':
            return <Entity key={key} letter="+" Imageurl={sprites.pilar} />
          case ' ':
            return <Entity key={key} letter=" " Imageurl={sprites.floor} />
        }
        return null
      }))}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number,
  theme: PropTypes.number
}

export default Maze
