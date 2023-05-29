import React from 'react'

import MazeTerraria from './MazeTerraria'

export default {
  title: 'Game/MazeTerraria',
  component: MazeTerraria
}

const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <MazeTerraria {...args} />
  </div>
)

export const Como2x2 = Template.bind({})
Como2x2.args = {
  json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
  w: 2,
  h: 2
}

export const Como3x3 = Template.bind({})
Como3x3.args = {
  json: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  w: 3,
  h: 3
}
