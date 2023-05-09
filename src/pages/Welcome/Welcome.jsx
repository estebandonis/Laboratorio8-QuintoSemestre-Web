import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { styles } from './Welcome.module.css'

const Welcome = () => {
  // const history = useHistory()

  return (
    <div className={styles}>
      PAGE WELCOME
      <Link to="/game">GO TO MAZE</Link>
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
