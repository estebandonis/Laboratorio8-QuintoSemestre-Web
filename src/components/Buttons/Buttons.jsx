import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Buttons.module.css'

const Buttons = ({ type, name, onclick }) => {
  return (
    <button className={styles} onClick={onclick} type={type}>{name}</button>
  )
}

Buttons.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onclick: PropTypes.func
}

export default Buttons
