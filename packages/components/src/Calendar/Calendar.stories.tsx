/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { DatePicker } from './DatePicker';
import { Box } from '@marigold/system';

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
    return (
      <Box style={{ width: '350px' }}>
        <DatePicker
          label="date picker"
          defaultOpen
          aria-label="date-picker"
          aria-describedby="this is date picker"
          aria-details="date-picker"
        />
      </Box>
    );
  },
};
