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

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  letter: 'P'
}
