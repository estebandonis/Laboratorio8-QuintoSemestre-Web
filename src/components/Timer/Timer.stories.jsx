import React from 'react'

import Entity from './Timer'

export default {
  title: 'Sprites/Entity',
  component: Entity,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Entity {...args} />
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
