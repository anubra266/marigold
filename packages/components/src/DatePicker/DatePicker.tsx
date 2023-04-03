import { useRef } from 'react';
import { useDatePickerState } from '@react-stately/datepicker';
import { AriaDatePickerProps, useDatePicker } from '@react-aria/datepicker';
import { Calendar } from '../Calendar/Calendar';
import { DateField } from '../DateField';
import { Popover } from '../Overlay';
import { Box, ThemeExtensionsWithParts } from '@marigold/system';
import { CalendarDate } from '@internationalized/date';

export interface DatePickerThemeExtension
  extends ThemeExtensionsWithParts<'DatePicker', ['field', 'fieldButton']> {}

export interface DatePickerProps extends AriaDatePickerProps<CalendarDate> {}

export const DatePicker = (props: DatePickerProps) => {
  const state = useDatePickerState({
    ...props,
    // isOpen: true,
    shouldCloseOnSelect: false,
  });
  const ref = useRef(null);
  const { groupProps, fieldProps, buttonProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );
  return (
    <Box>
      <Box __baseCSS={{ display: 'flex' }} {...groupProps} ref={ref}>
        <Box
          __baseCSS={{
            width: '100%',
          }}
        >
          <DateField
            {...fieldProps}
            showIconRight
            buttonProps={buttonProps}
            label={props.label}
            isPressed={state.isOpen}
            isOpen={true}
          />
        </Box>
        <Box></Box>
      </Box>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state}>
          <Calendar {...calendarProps} />
        </Popover>
      )}
    </Box>
  );
};
