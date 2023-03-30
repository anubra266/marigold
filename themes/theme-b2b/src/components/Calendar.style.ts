import type { Theme } from '@marigold/components';

export const Calendar: Theme['components']['Calendar'] = {
  base: {
    calendarCell: {
      padding: '0.3rem',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      '&:not([aria-label*=selected]):not([aria-disabled=true]):hover': {
        backgroundColor: 'orange10',
      },
      '&[aria-label*=selected]': {
        color: '#fff',
        fontWeight: '600',
        backgroundColor: 'orange60',
        outline: 'none',
      },
    },
    calendarGrid: {},
  },
};
