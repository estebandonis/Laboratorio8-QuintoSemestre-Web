import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './Entity.module.css'

const Entity = ({ Imageurl }) => {
  return (
    <div className={styles} style={{ background: `url(${Imageurl})`, backgroundSize: '50px 50px' }}></div>
  )
}

Entity.propTypes = {
  Imageurl: PropTypes.string
}

export default Entity
