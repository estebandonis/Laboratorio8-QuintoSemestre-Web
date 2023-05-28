import { storeonDevtools } from 'storeon/devtools'
import { createStoreon } from 'storeon'
import datos from './datos'
import router from './router'
import thema from './thema'
import { routerNavigate } from '@storeon/router'
import { persistState } from '@storeon/localstorage'

const store = createStoreon([
  datos,
  thema,
  router,
  storeonDevtools,

  persistState(['datos', 'thema'])
])

const navigate = (target) => {
  console.log('NAVIGATING TO', target)
  store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
