import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Buttons.module.css'

const Buttons = ({ type, name }) => {
  return (
    <button className={styles} type={type}>{name}</button>
  )
}

Buttons.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string
}

export default Buttons
