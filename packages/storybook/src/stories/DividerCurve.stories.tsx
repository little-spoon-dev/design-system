import DividerCurve from '@littlespoon/divider-curve/src/DividerCurve'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Design System/DividerCurve',
  component: DividerCurve,
} as ComponentMeta<typeof DividerCurve>

const Template: ComponentStory<typeof DividerCurve> = (args) => (
  <DividerWrapper>
    <DividerCurve {...args} />
  </DividerWrapper>
)

export const DividerCurveOne = Template.bind({})
DividerCurveOne.args = {
  variant: 1,
}

export const DividerCurveTwo = Template.bind({})
DividerCurveTwo.args = {
  variant: 2,
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
