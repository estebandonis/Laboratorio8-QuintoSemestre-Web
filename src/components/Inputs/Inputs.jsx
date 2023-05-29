import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { styles } from './Inputs.module.css'

const Inputs = ({ type, value, onchange, placeholder }) => {
  let prop

  useEffect(() => {
    if (type === 'number') {
      prop = 'number'
    } else if (type === 'text') {
      prop = 'string'
    }
  }, [])

  return (
    <input className={styles} type={type} value={value} onChange={onchange} placeholder={placeholder} />
  )
}

Inputs.propTypes = {
  type: PropTypes.string,
  value: PropTypes.prop,
  onchange: PropTypes.func,
  placeholder: PropTypes.string
}

export default Inputs
