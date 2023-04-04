/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateField, DateFieldProps } from './DateField';

const meta = {
  title: 'Components/DateField',
} satisfies Meta<DateFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: args => {
    return (
      <DateField label="date field" error errorMessage="tshis is description" />
    );
  },
};
