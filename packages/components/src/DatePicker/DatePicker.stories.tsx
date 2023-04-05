import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DatePickerProps } from './DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disable the date picker',
      defaultValue: false,
    },
    required: {
      control: {
        type: 'boolean',
      },
      description: 'Disable the date picker',
      defaultValue: false,
    },
  },
} satisfies Meta<DatePickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => {
    return <DatePicker label="Date Picker" />;
  },
};
