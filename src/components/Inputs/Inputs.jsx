import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Inputs.module.css'

const Inputs = ({ type, value, onchange, placeholder }) => {
  return (
    <input className={styles} type={type} value={value} onChange={onchange} placeholder={placeholder} />
  )
}

Inputs.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onchange: PropTypes.func,
  placeholder: PropTypes.string
}

export default Inputs
