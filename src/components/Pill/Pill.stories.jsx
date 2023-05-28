import React from 'react'

import Pill from './Pill'

export default {
  title: 'Menus/Pill',
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

export const AsMinecraft = Template.bind({})
AsMinecraft.args = {
  letter: 'P'
}
