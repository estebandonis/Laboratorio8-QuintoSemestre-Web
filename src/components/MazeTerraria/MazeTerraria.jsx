import React from 'react'
import PropTypes from 'prop-types'

import { Entity } from '@components'
import terraPlayer from '@assets/terraria_player.png'
import terraFloor from '@assets/terraria_floor.png'
import terraPilar from '@assets/terraria_pilar.png'
import terraWall from '@assets/terraria_wall.png'
import terraGoal from '@assets/terraria_goal.png'
import { styles } from './MazeTerraria.module.css'

const MazeTerraria = ({ json, w, h }) => {
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
            return <Entity key={key} letter="p" Imageurl={terraPlayer} />
          case 'g':
            return <Entity key={key} letter="g" Imageurl={terraGoal} />
          case '-':
            return <Entity key={key} letter="-" Imageurl={terraWall} />
          case '|':
            return <Entity key={key} letter="|" Imageurl={terraWall} />
          case '+':
            return <Entity key={key} letter="+" Imageurl={terraPilar} />
          case ' ':
            return <Entity key={key} letter=" " Imageurl={terraFloor} />
        }
        return null
      }))}
    </div>
  )
}

MazeTerraria.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number,
  theme: PropTypes.number
}

export default MazeTerraria
