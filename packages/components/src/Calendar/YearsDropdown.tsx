import React, { Key } from 'react';
import { CalendarDate } from '@internationalized/date';
import { useDateFormatter } from '@react-aria/i18n';
import { CalendarState } from '@react-stately/calendar';
import { Select } from '../Select';
import { Box } from '@marigold/system';

interface YearDropdownProps {
  state: CalendarState;
}

const YearsDropdown = ({ state }: YearDropdownProps) => {
  const years: { value: CalendarDate; formatted: string }[] = [];
  let formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  });

  for (let i = -20; i <= 20; i++) {
    let date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  let onChange = (key: Key) => {
    let index = Number(key);
    // let date = years[index].value;
    let date = state.focusedDate.set({ year: index });
    state.setFocusedDate(date);
  };

  return (
    <Box style={{ zIndex: 1000 }}>
      <Select
        aria-label="year"
        onChange={onChange}
        defaultSelectedKey="20"
        value={state.focusedDate.toString()}
      >
        {years.map((year, i) => (
          <Select.Option key={year.value.toString()}>
            {year.formatted}
          </Select.Option>
        ))}
      </Select>
    </Box>
  );
};

export default YearsDropdown;
