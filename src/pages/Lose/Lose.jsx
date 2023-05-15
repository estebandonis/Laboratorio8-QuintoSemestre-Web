import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@store'

import { styles } from './Lose.module.css'

const Lose = () => {
  const handleChangeClick = () => {
    navigate('/')
  }

  return (
    <div className={styles}>
      <h1>Perdiste</h1>
      <button onClick={handleChangeClick}>Volver a intentarlo</button>
    </div>
  )
}

Lose.propTypes = {
  letter: PropTypes.string
}

export default Lose
