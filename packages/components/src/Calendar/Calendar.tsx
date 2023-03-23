import { useRef } from 'react';
import { CalendarState, useCalendarState } from '@react-stately/calendar';
import { useCalendar, AriaCalendarProps } from '@react-aria/calendar';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { CalendarDate, createCalendar } from '@internationalized/date';
import { Button } from '../Button';
import { CalendarGrid } from './CalendarGrid';
import { Select } from '../Select';
import { Box } from '@marigold/system';

export interface CalendarProps extends AriaCalendarProps<any> {}

export const Calendar = (props: CalendarProps) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef({} as any);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <Box
        __baseCSS={{
          '& button': { borderRadius: '10px', height: '50px' },
        }}
      >
        <YearDropdown state={state} />
        <MonthDropdown state={state} />
      </Box>
      <div className="flex items-center pb-4">
        <Button {...prevButtonProps}>ChevronLeftIcon</Button>
        <Button {...nextButtonProps}>ChevronRightIcon</Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
};

interface YearDropdownProps {
  state: CalendarState;
}

function YearDropdown({ state }: YearDropdownProps) {
  const years: { value: CalendarDate; formatted: string }[] = [];
  let formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  });
  for (let i = -15; i <= 15; i++) {
    let date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    });
  }

  let onSelect = (key: unknown) => {
    let index = Number(key);
    let date = years[index].value;
    state.setFocusedDate(date);
  };

  return (
    <Select
      aria-label="Year"
      onChange={onSelect}
      value={state.focusedDate.year}
      defaultValue={state.focusedDate.year}
    >
      {years.map((year, index) => (
        <Select.Option key={index}>{year.formatted}</Select.Option>
      ))}
    </Select>
  );
}

interface MonthDropdownProps {
  state: CalendarState;
}

function MonthDropdown({ state }: MonthDropdownProps) {
  let months = [];
  let formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  });
  let numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    let date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }
  let onChange = (key: unknown) => {
    let value = Number(key);
    let date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };
  return (
    <Select
      aria-label="Month"
      onChange={onChange}
      defaultSelectedKey={state.visibleRange.end.month.toString()}
    >
      {months.map((month, i) => (
        <Select.Option key={i + 1}>{month}</Select.Option>
      ))}
    </Select>
  );
}
