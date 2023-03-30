import { useRef } from 'react';
import { AriaDatePickerProps, useDatePicker } from '@react-aria/datepicker';
import { useDatePickerState } from '@react-stately/datepicker';
import { Button } from '../Button';
import { Calendar } from './Calendar';
import { DateField } from './DateField';
import { Popover } from '../Overlay';
import { CalendarDate } from '@internationalized/date';
import { Box } from '@marigold/system';

interface DatePickerProps extends AriaDatePickerProps<CalendarDate> {}

export const DatePicker = (props: DatePickerProps) => {
  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  let ref = useRef(null);
  let { groupProps, labelProps, fieldProps, buttonProps, calendarProps } =
    useDatePicker(props, state, ref);

  return (
    <Box
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
      }}
    >
      <Box as="label" {...labelProps}>
        {String(state.isOpen)}
      </Box>
      <Box
        style={{
          display: 'inline-flex',
          width: 'auto',
          background: 'blueviolet',
        }}
        {...groupProps}
        ref={ref}
      >
        <Box style={{ paddingRight: '4rem' }}>
          <DateField {...fieldProps} />
        </Box>
        <Button {...buttonProps}>
          <svg width="48" height="48" viewBox="0 0 24 24">
            <path d="M20.0906 19.2V6.6C20.0906 5.61 19.2806 4.8 18.2906 4.8H17.3906V3H15.5906V4.8H8.39062V3H6.59062V4.8H5.69063C4.69163 4.8 3.89962 5.61 3.89962 6.6L3.89062 19.2C3.89062 20.19 4.69163 21 5.69063 21H18.2906C19.2806 21 20.0906 20.19 20.0906 19.2ZM9.29062 11.1001H7.49061V12.9001H9.29062V11.1001ZM5.69062 8.40009H18.2906V6.60008H5.69062V8.40009ZM18.2906 10.2V19.2H5.69062V10.2H18.2906ZM14.6906 12.9001H16.4906V11.1001H14.6906V12.9001ZM12.8906 12.9001H11.0906V11.1001H12.8906V12.9001Z"></path>
          </svg>
        </Button>
      </Box>
      {state.isOpen && (
        <Popover isNonModal triggerRef={ref} state={state}>
          <Calendar {...calendarProps} />
        </Popover>
      )}
    </Box>
  );
};
