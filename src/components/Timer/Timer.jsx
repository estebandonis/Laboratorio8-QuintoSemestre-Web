import React, { useEffect, useState } from 'react'
import { useStoreon } from 'storeon/react'
import { navigate } from '@store'

import { styles } from './Timer.module.css'

const Timer = () => {
  const { datos } = useStoreon('datos')
  const time = datos.tiempo * 60
  const [timi, setTimi] = useState(time)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimi(timi => timi - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setMinutes(Math.floor(timi / 60))
    setSeconds(timi - (minutes * 60))
  }, [timi])

  if (timi === 0) {
    navigate('/lose')
  }

  return (
    <div className={styles}>You have {minutes}:{seconds} time left</div>
  )
}

export default Timer
