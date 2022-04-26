import { colors } from './colors';

/**
 * Select component
 */
const selectButton = {
  appearance: 'none',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  outline: 'none',
  width: '100%',
  lineHeight: 'medium',
  px: 'xxsmall',
  color: 'text',
  bg: colors.gray00,
} as const;

const selectOption = {
  fontFamily: 'body',
  fontSize: 'xxsmall',
  fontWeight: 'body',
  lineHeight: 'medium',
  outline: 'none',
  cursor: 'pointer',
  color: 'text',
  px: '6px',
  listStyle: 'none',
  bg: colors.gray00,
} as const;

const select = {
  __default: {
    fontFamily: 'body',
    fontSize: 'xxsmall',
    fontWeight: 400,
    lineHeight: 'medium',
    color: 'text',
  },
  disabled: {
    fontFamily: 'body',
    fontSize: 'xxsmall',
    fontWeight: 400,
    lineHeight: 'medium',
    color: 'disabled',
    cursor: 'not-allowed',
  },
  listbox: {
    __default: {
      background: colors.gray00,
      borderTop: 'none',
      borderRight: '1px solid',
      borderLeft: '1px solid',
      borderBottom: '1px solid',
      borderBottomRightRadius: '2px',
      borderBottomLeftRadius: '2px',
      borderColor: '#aaa',
      outline: 'none',
      px: 'xxsmall',
      pb: 'xxsmall',
    },
    error: {
      background: colors.gray00,
      borderTop: 'none',
      borderRight: '1px solid',
      borderLeft: '1px solid',
      borderBottom: '1px solid',
      borderBottomRightRadius: '2px',
      borderBottomLeftRadius: '2px',
      borderColor: 'error',
      outline: 'none',
      px: 'xxsmall',
      pb: 'xxsmall',
    },
  },
  option: {
    __default: {
      ...selectOption,
      ':focus': {
        color: colors.gray00,
        bg: '#3875d7',
        backgroundImage: 'linear-gradient(#3875d7 20%, #2a62bc 90%)',
      },
    },
    selected: {
      ...selectOption,
      color: colors.gray00,
      bg: '#3875d7',
      backgroundImage: 'linear-gradient(#3875d7 20%, #2a62bc 90%)',
    },
    disabled: {
      ...selectOption,
      cursor: 'not-allowed',
      color: colors.gray40,
    },
  },
} as const;

/**
 * Button component
 */
const button = {
  root: {
    position: 'relative',
    fontFamily: 'body',
    fontWeight: 'body',
    border: 'none',
    borderRadius: 'small',
    display: 'inline-flex',
  },
  select: {
    ...selectButton,
    border: '1px solid',
    borderColor: '#aaa',
    ':hover': {
      cursor: 'pointer',
    },
    ':focus': {
      border: '1px solid',
      borderColor: '#5897fb',
    },
    ':disabled': {
      bg: colors.gray20,
      color: 'disabled',
      cursor: 'not-allowed',
    },
    error: {
      ...selectButton,
      border: '1px solid',
      borderColor: 'error',
    },
    open: {
      ...selectButton,
      borderTop: '1px solid',
      borderRight: '1px solid',
      borderLeft: '1px solid',
      borderBottom: 'none',
      borderColor: '#aaa',
      borderTopRightRadius: '2px',
      borderTopLeftRadius: '2px',
      boxShadow: '0 1px 0 #fff inset',
      backgroundImage: 'linear-gradient(#eee 20%, #fff 80%)',
    },
    errorOpened: {
      ...selectButton,
      borderTop: '1px solid',
      borderRight: '1px solid',
      borderLeft: '1px solid',
      borderBottom: 'none',
      borderColor: 'error',
      borderTopRightRadius: '2px',
      borderTopLeftRadius: '2px',
      boxShadow: '0 1px 0 #fff inset',
      backgroundImage: 'linear-gradient(#eee 20%, #fff 80%)',
    },
  },
} as const;

/**
 * Slider component
 */
const sliderThumb = {
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
  border: '4px solid ' + colors.gray70,
  width: '16px',
  height: '16px',
  background: colors.gray00,
  borderRadius: 'large',
  cursor: 'pointer',
  marginTop: '-4px',
} as const;

const sliderTrack = {
  WebkitAppearance: 'none',
  width: '100%',
  height: '8px',
  background: colors.gray30,
  borderRadius: 'large',
  border: 'none',
} as const;

const slider = {
  __default: {
    // styles need to be applied to range inputs in all browsers to override their basic appearance.
    WebkitAppearance: 'none',
    background: 'transparent',
    borderColor: 'transparent',
    color: 'transparent',
    ':focus': {
      outline: 'none',
    },
    // chrome, safari, opera (theres actually no webkit option to style the progress bar like in firefox)
    '&::-webkit-slider-thumb': {
      ...sliderThumb,
    },
    '&:focus::-webkit-slider-thumb': {
      ...sliderThumb,
      border: '4px solid ' + colors.blue60,
    },
    '&:disabled::-webkit-slider-thumb': {
      ...sliderThumb,
      border: '4px solid ' + colors.gray40,
      background: colors.gray40,
    },
    '&::-webkit-slider-runnable-track': {
      ...sliderTrack,
    },
    '&:focus::-webkit-slider-runnable-track': {
      ...sliderTrack,
      background: colors.blue60,
    },
    '&:disabled::-webkit-slider-runnable-track': {
      ...sliderTrack,
      background: colors.gray40,
    },
    '&::-webkit-progress-value': {
      background: colors.green60,
    },
    // firefox
    '&::-moz-range-thumb': {
      ...sliderThumb,
    },
    '&:focus::-moz-range-thumb': {
      ...sliderThumb,
      border: '4px solid ' + colors.blue60,
    },
    '&:disabled::-moz-range-thumb': {
      ...sliderThumb,
      border: '4px solid ' + colors.gray40,
      background: colors.gray40,
    },
    '&::-moz-range-track': {
      ...sliderTrack,
    },
    '&::-moz-range-progress': {
      ...sliderTrack,
      background: colors.gray70,
    },
    '&:focus::-moz-range-progress': {
      ...sliderTrack,
      background: colors.blue60,
    },
    '&:disabled::-moz-range-progress': {
      ...sliderTrack,
      background: colors.gray40,
    },
  },
} as const;

export const component = {
  button: {
    __default: {
      p: 0,
      border: 'none',
    },
    large: {
      lineHeight: '30px',
      paddingX: 'medium',
      fontSize: 'xxsmall',
    },
    small: {
      lineHeight: '24px',
      paddingX: 'small',
      fontSize: 'xxsmall',
    },
    select: {
      ...button.select,
    },
  },
  card: {
    __default: {
      maxWidth: '500px',
      background: colors.gray00,
      p: 'small',
      boxShadow: '0px 4px 4px rgba(165, 165, 165, 0.25)',
      borderRadius: 'xlarge',
    },
  },
  dialog: {
    __default: {
      bg: '#ffffff',
      minWidth: '510px',
      minHeight: '240px',
    },
    backdrop: {
      bg: '#00000080',
    },
  },
  label: {
    above: {
      fontSize: 'xxsmall',
      lineHeight: 'small',
      color: 'text',
    },
    inline: {
      fontSize: 'xxsmall',
      lineHeight: 'small',
      display: 'inline-flex',
      alignItems: 'center',
    },
    section: {
      fontSize: 'xsmall',
      lineHeight: '32px',
      color: colors.gray50,
    },
  },
  message: {
    warning: {
      borderStyle: 'solid',
      borderColor: 'warning',
      borderWidth: '2px 2px 2px 16px',
      padding: '8px 16px 16px',
      color: 'warning',
    },
    error: {
      borderStyle: 'solid',
      borderColor: 'error',
      borderWidth: '2px 2px 2px 16px',
      padding: '8px 16px 16px',
      color: 'error',
    },
    info: {
      borderStyle: 'solid',
      borderColor: 'info',
      borderWidth: '2px 2px 2px 16px',
      padding: '8px 16px 16px',
      color: 'info',
    },
    title: {
      mb: '8px',
    },
  },
  select,
  slider,
  switch: {
    __default: {
      fill: 'gray20',
      stroke: 'gray40',
    },
    ':checked': {
      fill: 'primary',
      stroke: 'orange80',
    },
    ':disabled': {
      fill: 'gray30',
      stroke: 'gray40',
    },
  },
  tooltip: {
    __default: {
      p: 'xsmall',
      color: 'gray90',
      fontSize: 14,
      border: '1px solid',
      borderColor: 'info',
      borderRadius: 'large',
      bg: 'blue10',
    },
  },
  validation: {
    error: {
      fontSize: '0.813rem',
      color: 'error',
    },
  },
} as const;