import React from 'react'
import Game from './Game'
import Welcome from './Welcome'
import Win from './Win'

import { Switch, Route } from 'react-router-dom'

const navigate = (page) => {
  window.location = `/?route=${page}`
}

const Page = () => {
  // escoger la pagina

  return (
    <Switch>
      <Route path="/win">
        <Win />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  )
}

export { navigate }
export default Page
