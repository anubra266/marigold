import { useRef } from 'react';
import { useLocale } from '@react-aria/i18n';
import {
  DateFieldState,
  DateFieldStateOptions,
  useDateFieldState,
  DateSegment,
} from '@react-stately/datepicker';
import { useDateField, useDateSegment } from '@react-aria/datepicker';
import { createCalendar } from '@internationalized/date';

interface DateFieldProps extends DateFieldStateOptions {}

export const DateField = (props: DateFieldProps) => {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = useRef<any>();
  let { fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
};

interface DateSegmentInterface {
  state: DateFieldState;
  segment: DateSegment;
}

const DateSegment = ({ segment, state }: DateSegmentInterface) => {
  let ref = useRef<any>();
  let { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{}}
      className={`px-0.5 box-content tabular-nums text-right outline-none rounded-sm focus:bg-violet-600 focus:text-white group ${
        !segment.isEditable ? 'text-gray-500' : 'text-gray-800'
      }`}
    >
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={
          {
            // visibility: segment.isPlaceholder ? "" : "hidden",
            // height: segment.isPlaceholder ? "" : 0,
            // pointerEvents: "none"
          }
        }
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
};
