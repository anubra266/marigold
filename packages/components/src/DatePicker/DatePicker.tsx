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

export interface DatePickerProps
  extends Omit<
    AriaDatePickerProps<CalendarDate>,
    'isDisabled' | 'isRequired' | 'isReadOnly'
  > {
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
}

export const DatePicker = ({
  disabled,
  required,
  readonly,
  ...res
}: DatePickerProps) => {
  const props: AriaDatePickerProps<CalendarDate> = {
    isDisabled: disabled,
    isReadOnly: readonly,
    isRequired: required,
  };
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  const ref = useRef(null);
  const { groupProps, fieldProps, buttonProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );
  const { isDisabled, errorMessage, description, label } = props;
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
            label={label}
            isPressed={state.isOpen}
            isOpen={true}
            disabled={isDisabled}
            errorMessage={errorMessage}
            description={description}
          />
        </Box>
      </Box>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state}>
          <Calendar {...calendarProps} />
        </Popover>
      )}
    </Box>
  );
};
