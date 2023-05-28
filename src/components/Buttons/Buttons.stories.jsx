import React from 'react'

import Buttons from './Buttons'

export default {
  title: 'Menus/Buttons',
  component: Buttons,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Buttons {...args} />
  </div>
)

export const AsButton = Template.bind({})
AsButton.args = {
  type: 'button',
  name: 'Prueba'
}
