import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from '@components'
import minePlayer from '@assets/minecraft_player.png'
import mineFloor from '@assets/minecraft_floor.jpeg'
import minePilar from '@assets/minecraft_pilar.png'
import mineWall from '@assets/minecraft_wall.jpeg'
import mineGoal from '@assets/minecraft_goal.jpg'

import { styles } from './MazeMinecraft.module.css'

const MazeMinecraft = ({ json, w, h }) => {
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
            return <Entity key={key} letter="p" Imageurl={minePlayer} />
          case 'g':
            return <Entity key={key} letter="g" Imageurl={mineGoal} />
          case '-':
            return <Entity key={key} letter="-" Imageurl={mineWall} />
          case '|':
            return <Entity key={key} letter="|" Imageurl={mineWall} />
          case '+':
            return <Entity key={key} letter="+" Imageurl={minePilar} />
          case ' ':
            return <Entity key={key} letter=" " Imageurl={mineFloor} />
        }
        return null
      }))}
    </div>
  )
}

MazeMinecraft.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number,
  theme: PropTypes.number
}

export default MazeMinecraft
