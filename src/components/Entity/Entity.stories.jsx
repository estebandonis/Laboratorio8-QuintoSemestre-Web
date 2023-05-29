import React from 'react'

import Entity from './Entity'

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

export const LargeImg = Template.bind({})
LargeImg.args = {
  Imageurl: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info'
}

export const SmallImg = Template.bind({})
SmallImg.args = {
  Imageurl: 'https://pbs.twimg.com/media/CmBKgGrWkAET3Eq.jpg'
}
