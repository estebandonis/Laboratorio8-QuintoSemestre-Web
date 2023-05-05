import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Maze.module.css'

const Maze = () => {
  console.log('Maze')
  return (
    <div className={styles}>PAGE MAZE</div>
  )
}

Maze.propTypes = {
  letter: PropTypes.string
}

export default Maze
