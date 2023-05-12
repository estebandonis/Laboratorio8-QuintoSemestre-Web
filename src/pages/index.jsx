import React from 'react'
import Game from './Game'
import Welcome from './Welcome'
import Win from './Win'

import { useStoreon } from 'storeon/react'
import { routerKey } from '@storeon/router'

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case 'welcome':
      Component = <Welcome />
      break
    case 'game':
      Component = <Game />
      break
    case 'win':
      Component = <Win />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
