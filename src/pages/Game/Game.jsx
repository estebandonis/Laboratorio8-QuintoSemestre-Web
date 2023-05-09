import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Game.module.css'

const Game = () => {
  console.log('Game')
  return (
    <div className={styles}>PAGE GAME</div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
