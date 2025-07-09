import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@syf/syf-ui';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    onCheckedChange: {
      action: 'checked changed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};


export const WithCustomClass: Story = {
  args: {
    className: 'border-2 border-red-500',
  },
};

export const Interactive: Story = {
  args: {
    onCheckedChange: (checked: boolean) => {
      console.log('Checkbox checked:', checked);
    },
  },
};