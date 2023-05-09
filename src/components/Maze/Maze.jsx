import React from 'react'
import PropTypes from 'prop-types'
import { Entity } from '@components'

import { styles } from './Maze.module.css'

const Maze = ({ json, w, h }) => {
  return (
    <div
      className={styles}
      style={{
        background: 'red',
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
            return <Entity key={key} letter="p" backgroundColor="pink" />
          case 'g':
            return <Entity key={key} letter="g" backgroundColor="red" />
          case '-':
            return <Entity key={key} letter="-" backgroundColor="yellow" />
          case '|':
            return <Entity key={key} letter="|" backgroundColor="green" />
          case '+':
            return <Entity key={key} letter="+" backgroundColor="blue" />
          case ' ':
            return <Entity key={key} letter=" " backgroundColor="gray" />
        }
        return null
      }))}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number
}

export default Maze
