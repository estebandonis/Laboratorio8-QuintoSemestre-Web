import React from 'react'

import Inputs from './Inputs'

export default {
  title: 'Menus/Inputs',
  component: Inputs,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Inputs {...args} />
  </div>
)

export const AsNumber = Template.bind({})
AsNumber.args = {
  type: 'number',
  value: 2,
  placeholder: 'Prueba number'
}

export const AsLongString = Template.bind({})
AsLongString.args = {
  type: 'text',
  value: 'gagsdfasdfafdsafdasfsafsdgsffasfdsgadfsgsdfsadfdsfdasfsdafas',
  placeholder: 'Prueba string'
}

export const AsLongPlaceholder = Template.bind({})
AsLongPlaceholder.args = {
  type: 'text',
  value: '',
  placeholder: 'fñsahkñfjdklsajfkjdlsñajfjkadsñjfklñajsjdfñajkfdsñjfañjfkasdjñlj'
}
