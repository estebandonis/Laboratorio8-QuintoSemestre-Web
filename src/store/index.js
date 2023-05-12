import { storeonDevtools } from 'storeon/devtools'
import { createStoreon } from 'storeon'
import datos from './datos'
import router from './router'
import { routerNavigate } from '@storeon/router'
import { persistState } from '@storeon/localstorage'

const store = createStoreon([
  datos,
  router,
  storeonDevtools,

  persistState(['datos'])
])

const navigate = (target) => {
  console.log('NAVIGATING TO', target)
  store.dispatch(routerNavigate, target)
}

export { navigate }
export default store
