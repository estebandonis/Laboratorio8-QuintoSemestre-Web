import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Win.module.css'

const Win = () => {
  console.log('Win')
  return (
    <div className={styles}>PAGE WIN</div>
  )
}

Win.propTypes = {
  letter: PropTypes.string
}

export default Win
