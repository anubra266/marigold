import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DatePickerProps } from './DatePicker';

const meta = {
  title: 'Components/DatePicker',
} satisfies Meta<DatePickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => {
    return <DatePicker />;
  },
};
