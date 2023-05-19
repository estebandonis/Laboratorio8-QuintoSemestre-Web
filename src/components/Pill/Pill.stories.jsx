import React from 'react'

import Pill from './Pill'

export default {
  title: 'Sprites/Entity',
  component: Pill,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Pill {...args} />
  </div>
)

export const AsPlayer = Template.bind({})
AsPlayer.args = {
  letter: 'P'
}

export const AsGoal = Template.bind({})
AsGoal.args = {
  letter: 'G'
}
