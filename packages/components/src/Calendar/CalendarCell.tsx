import React, { useRef } from 'react';
import { AriaCalendarCellProps, useCalendarCell } from '@react-aria/calendar';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { CalendarState } from '@react-stately/calendar';
import { Box } from '@marigold/system';

export interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState;
}
export const CalendarCell = (props: CalendarCellProps) => {
  const ref = useRef<any>();
  const { cellProps, buttonProps, formattedDate, isOutsideVisibleRange } =
    useCalendarCell(props, props.state, ref);
  const { focusProps } = useFocusRing();

  return (
    <td {...cellProps}>
      <Box
        hidden={isOutsideVisibleRange}
        ref={ref}
        {...mergeProps(buttonProps, focusProps)}
      >
        {formattedDate}
      </Box>
    </td>
  );
};
