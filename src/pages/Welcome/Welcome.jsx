import React from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { Maze } from '@components'
import { styles } from './Welcome.module.css'

const Welcome = () => {
  const history = useHistory()

  return (
    <div className={styles}>
      PAGE WELCOME
      <Link to="/maze">GO TO MAZE</Link>
    </div>
  )
}

Welcome.propTypes = {
  letter: PropTypes.string
}

export default Welcome
