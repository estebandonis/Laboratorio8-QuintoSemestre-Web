import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Entity.module.css'

const Entity = ({ letter = 'p', backgroundColor = 'white' }) => {
  return (
    <div className={styles} style={{ backgroundColor }}>{letter}</div>
  )
}

Entity.propTypes = {
  letter: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Entity
