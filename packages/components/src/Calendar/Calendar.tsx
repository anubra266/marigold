import { useRef } from 'react';
import { useCalendarState } from '@react-stately/calendar';
import { useCalendar, AriaCalendarProps } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { createCalendar } from '@internationalized/date';
import { Button } from '../Button';
import { CalendarGrid } from './CalendarGrid';
import {
  Box,
  ThemeExtensionsWithParts,
  useComponentStyles,
} from '@marigold/system';

export interface CalendarProps extends AriaCalendarProps<any> {
  shadow?: boolean;
}
export interface CalendarThemeExtension
  extends ThemeExtensionsWithParts<
    'Calendar',
    ['calendarGrid', 'calendarCell', 'arrowButton']
  > {}

export const Calendar = ({ shadow = true, ...props }: CalendarProps) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );
  const styles = useComponentStyles('Calendar', {}, { parts: ['arrowButton'] });
  return (
    <Box
      __baseCSS={{
        boxShadow: shadow && '0px 4px 4px rgba(165, 165, 165, 0.25)',
        borderRadius: '16px',
        padding: '16px',
        width: '360px',
      }}
      {...calendarProps}
      ref={ref}
      className="inline-block text-gray-800"
    >
      <Box
        __baseCSS={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '18px',
        }}
      >
        <Box
          __baseCSS={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 39,
          }}
          css={styles.arrowButton}
        >
          <Button {...prevButtonProps}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M16.8506 18.0244L10.8394 12L16.8506 5.97563L15 4.125L7.125 12L15 19.875L16.8506 18.0244Z"></path>
            </svg>
          </Button>
          <Button {...nextButtonProps}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.125 18.0244L13.1363 12L7.125 5.97563L8.97563 4.125L16.8506 12L8.97563 19.875L7.125 18.0244Z"></path>
            </svg>
          </Button>
        </Box>
      </Box>
      <CalendarGrid state={state} />
    </Box>
  );
};
