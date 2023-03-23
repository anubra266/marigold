import { AriaCalendarGridProps, useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { getWeeksInMonth } from '@internationalized/date';
import { CalendarCell } from './CalendarCell';

export interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState | RangeCalendarState;
}

export const CalendarGrid = ({ state, ...props }: CalendarGridProps) => {
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
  const numberOfWeeksInMonth = getWeeksInMonth(
    state.visibleRange.start,
    locale
  );

  return (
    <table {...gridProps} cellPadding="0">
      <thead {...headerProps} color="gray">
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(numberOfWeeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex}>
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
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
