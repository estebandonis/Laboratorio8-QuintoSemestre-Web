import React from 'react'

import MazeTerraria from './MazeTerraria'

export default {
  title: 'Game/Maze',
  component: MazeTerraria
}

const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <MazeTerraria {...args} />
  </div>
)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
  w: 2,
  h: 2
}
