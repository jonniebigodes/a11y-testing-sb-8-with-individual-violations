import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta = {
  title: 'Components/Typography/Heading',
  component: Heading,
  argTypes: {
    children: { controls: 'text' },
    level: { table: { disable: true } },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'heading-order',
            enabled: false,
          },
        ],
      },
    },
  },
  args: {
    children: '',
  },
  render: ({ children }) => (
    <div>
      <Heading>{children || 'Heading 1'}</Heading>
      <Heading level={1}>{children || 'Heading 1'}</Heading>
      <Heading level={3}>{children || 'Heading 3'}</Heading>
      <Heading level={4}>{children || 'Heading 4'}</Heading>
    </div>
  ),
}
