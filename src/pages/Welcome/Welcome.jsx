import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'

import { styles } from './Welcome.module.css'

const Welcome = () => {
  const history = useHistory()

  console.log('Welcome')

  useEffect(() => {
    setTimeout(() => {
      // ???
      console.log('win')
      history.push('/win')
    }, 5000)
  }, [])

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
