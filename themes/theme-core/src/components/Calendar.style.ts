import type { Theme } from '@marigold/components';

export const Calendar: Theme['components']['Calendar'] = {
  base: {
    calendarCell: {
      '&:hover': {
        backgroundColor: 'green',
      },
    },
    calendarGrid: {},
  },
};
