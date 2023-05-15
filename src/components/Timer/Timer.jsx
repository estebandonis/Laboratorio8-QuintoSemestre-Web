import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStoreon } from 'storeon/react'
import { navigate } from '@store'

import { styles } from './Timer.module.css'

const Timer = () => {
  const { datos } = useStoreon('datos')
  const time = datos.tiempo * 60
  const [seconds, setSeconds] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (seconds === 0) {
    navigate('/')
  }

  return (
    <div className={styles}>{seconds} seconds elapsed</div>
  )
}

Timer.propTypes = {
  time: PropTypes.int
}

export default Timer
