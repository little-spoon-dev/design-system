import Divider from '@littlespoon/divider/src/Divider'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Design System/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <DividerWrapper>
    <Divider {...args} />
  </DividerWrapper>
)

export const DividerDefault = Template.bind({})
DividerDefault.args = {}

export const DividerInverted = Template.bind({})
DividerInverted.args = {
  inverted: true,
}

const DividerWrapper = styled.div`
  height: 3.5rem;
  margin-bottom: 1.6rem;
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    height: 3.75rem;
  }
`
