import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@store'

import { Buttons } from '@components'
import { styles } from './Lose.module.css'

const Lose = () => {
  const handleChangeClick = () => {
    navigate('/')
  }

  return (
    <div className={styles}>
      <h1>Perdiste</h1>
      <Buttons type={'button'} onclick={handleChangeClick} name={'Volver a intentarlo'} />
    </div>
  )
}

Lose.propTypes = {
  letter: PropTypes.string
}

export default Lose
