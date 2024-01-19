import { ThemeComponent, cva } from '@marigold/system';

import {
  inputBackground,
  inputBox,
  inputDisabled,
  inputError,
  inputFocus,
  inputHover,
  inputPlaceholder,
  inputSpacing,
} from './Input.styles';

export const Select: ThemeComponent<'Select'> = {
  icon: cva(),
  select: cva([
    inputBox,
    inputDisabled(),
    inputFocus(),
    inputError('group-error/field'),
    inputHover(),
    inputBackground,
    inputSpacing,
    inputPlaceholder('[&>[data-placeholder=true]]'),
    'appearance-none leading-8',
    'cursor-pointer',
    'aria-expanded:bg-bg-base-active ',
  ]),
};
