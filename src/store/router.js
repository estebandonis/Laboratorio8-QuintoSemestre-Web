import { createRouter } from '@storeon/router'

export default createRouter([
  ['/', () => ({ page: 'welcome' })],
  ['/game', () => ({ page: 'game' })],
  ['/win', () => ({ page: 'win' })]
])
