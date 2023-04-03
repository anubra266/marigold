import { Theme } from '@marigold/components';

export const DateField: Theme['components']['DateField'] = {
  base: {
    field: {
      '&.focus': {
        borderColor: 'primary',
      },
      border: '1px solid',
      borderColor: 'gray40',
      ':focus-within': {
        borderColor: 'primary',
      },
    },
    segment: {
      '&:focus': {
        background: 'gray40',
        color: 'white',
        '& span': {
          color: 'white',
        },
      },
    },
    placeholder: {
      color: 'gray70',
    },
    calendarButton: {
      '&.isPressed': {
        backgroundColor: 'gray50',
        '& svg': {
          color: 'white',
        },
      },
      '& button:hover': {
        backgroundColor: 'gray50',
        '& svg': {
          color: 'white',
        },
      },
    },
  },
};
