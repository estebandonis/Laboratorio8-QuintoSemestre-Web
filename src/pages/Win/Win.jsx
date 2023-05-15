import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Win.module.css'
import { navigate } from '@store'

const Win = () => {
  const onClickEvent = () => {
    navigate('/')
  }

  console.log('Win')
  return (
    <div className={styles}>
      <h1>You Win!</h1>
      <button onClick={onClickEvent}>Volver al Menu Inicial</button>
    </div>
  )
}

Win.propTypes = {
  letter: PropTypes.string
}

export default Win
