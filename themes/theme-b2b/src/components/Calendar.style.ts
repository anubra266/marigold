import type { Theme } from '@marigold/components';

export const Calendar: Theme['components']['Calendar'] = {
  base: {
    arrowButton: {
      color: 'gray',
      '& button': {
        padding: '8px 12px',
        '&:hover': {
          bg: 'gray50',
          color: 'white',
        },
      },
    },
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
