import { ThemeComponent } from '@marigold/system';
import { cva } from 'class-variance-authority';

import { inputBox, inputHeight, inputSpacing } from './Input.styles';

export const Select: ThemeComponent<'Select'> = {
  select: cva([inputBox, inputHeight, inputSpacing]),
  icon: cva(),
};