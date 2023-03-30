import { useRef } from 'react';
import { useLocale } from '@react-aria/i18n';
import {
  DateFieldState,
  DateSegment,
  useDateFieldState,
} from '@react-stately/datepicker';
import {
  AriaDateFieldProps,
  useDateField,
  useDateSegment,
} from '@react-aria/datepicker';
import { CalendarDate, createCalendar } from '@internationalized/date';
import { Box } from '@marigold/system';

interface DateFieldProps extends AriaDateFieldProps<CalendarDate> {}

export const DateField = (props: DateFieldProps) => {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });
  let ref = useRef(null);
  let { fieldProps } = useDateField(props, state, ref);

  return (
    <Box {...fieldProps} ref={ref} __baseCSS={{ display: 'flex' }}>
      {state.segments.map((segment, i) => (
        <DateSegmentComp key={i} segment={segment} state={state} />
      ))}
    </Box>
  );
};

interface DateSegmentProps {
  segment: DateSegment;
  state: DateFieldState;
}

function DateSegmentComp({ segment, state }: DateSegmentProps) {
  let ref = useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <Box
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? String(segment.maxValue).length + 'ch'
            : '',
        padding: '0.5rem',
        borderRadius: '10px',
      }}
    >
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={{
          visibility: segment.isPlaceholder ? 'visible' : 'hidden',
          height: segment.isPlaceholder ? '' : 0,
          pointerEvents: 'none',
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </Box>
  );
}
