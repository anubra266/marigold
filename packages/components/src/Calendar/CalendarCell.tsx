import React, { useRef } from 'react';
import { AriaCalendarCellProps, useCalendarCell } from '@react-aria/calendar';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { CalendarState } from '@react-stately/calendar';
import { Box, useComponentStyles } from '@marigold/system';

export interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState;
}
export const CalendarCell = (props: CalendarCellProps) => {
  const ref = useRef(null);
  let { cellProps, buttonProps, formattedDate, isOutsideVisibleRange } =
    useCalendarCell(props, props.state, ref);
  const { focusProps } = useFocusRing();
  const styles = useComponentStyles(
    'Calendar',
    {},
    { parts: ['calendarCell'] }
  );
  return (
    <Box
      as="td"
      // width="26"
      {...cellProps}
    >
      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          __baseCSS={{
            fontSize: 'xxsmall',
            fontWeight: '400',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '26px',
            height: '26px',
            '&[aria-disabled=true]': {
              color: 'gray40',
              cursor: 'default',
            },
          }}
          css={styles.calendarCell}
          hidden={isOutsideVisibleRange}
          ref={ref}
          {...mergeProps(buttonProps, focusProps)}
        >
          {formattedDate}
        </Box>
      </Box>
    </Box>
  );
};
