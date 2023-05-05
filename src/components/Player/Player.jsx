import React from 'react'
import PropTypes from 'prop-types'

import { pepe } from './Player.module.css'

const Player = ({ letter = 'p' }) => {
  console.log('Player')
  return (
    <div className={pepe}>{letter}</div>
  )
}

Player.propTypes = {
  letter: PropTypes.string
}

export default Player
