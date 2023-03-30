import { AriaCalendarGridProps, useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { CalendarState } from '@react-stately/calendar';
import { getWeeksInMonth } from '@internationalized/date';
import { CalendarCell } from './CalendarCell';
import { Box } from '@marigold/system';

export interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState;
}

export const CalendarGrid = ({ state, ...props }: CalendarGridProps) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
  const numberOfWeeksInMonth = getWeeksInMonth(
    state.visibleRange.start,
    locale
  );

  return (
    <Box as="table" {...gridProps} cellPadding="5" style={{ width: '100%' }}>
      <Box as="thead" {...headerProps}>
        <Box as="tr">
          {weekDays.map((day, index) => (
            <th
              style={{ fontWeight: 'bolder', fontFamily: 'Inter' }}
              key={index}
            >
              {day}
            </th>
          ))}
        </Box>
      </Box>
      <Box as="tbody">
        {[...new Array(numberOfWeeksInMonth).keys()].map(weekIndex => (
          <Box as="tr" key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    date={date}
                    state={state as CalendarState}
                  />
                ) : (
                  <Box as="td" key={i} />
                )
              )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
