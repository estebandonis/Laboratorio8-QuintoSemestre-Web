import React from 'react'

import Timer from './Timer'

export default {
  title: 'Game/Timer',
  component: Timer,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Timer {...args} />
  </div>
)

export const OneMinuto = Template.bind({})
OneMinuto.args = {
  timen: 1
}

export const OneAndHalfMinuto = Template.bind({})
OneAndHalfMinuto.args = {
  timen: 1.5
}
