/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { DatePicker } from './DatePicker';

const meta = {
  title: 'Components/Calendar',
} satisfies Meta<CalendarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => {
    return <Calendar />;
  },
};

export const DatePickerField: Story = {
  render: args => {
    return <DatePicker />;
  },
};
