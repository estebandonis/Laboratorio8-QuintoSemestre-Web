import React from 'react'

import MazeMinecraft from './MazeMinecraft'

export default {
  title: 'Game/Maze',
  component: MazeMinecraft
}

const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <MazeMinecraft {...args} />
  </div>
)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
  w: 2,
  h: 2
}
