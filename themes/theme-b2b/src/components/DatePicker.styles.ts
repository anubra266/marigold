import { ThemeComponent } from '@marigold/system';
import { cva } from 'class-variance-authority';

export const DatePicker: ThemeComponent<'DatePicker'> = {
  container: cva(),
  button: cva([
    'h-full w-9 p-0',
    'flex items-center justify-center ',
    'text-text-primary/80',
    'data-[hover]:bg-bg-hover group-focus/field:bg-bg-hover group-focus/field:[&[aria-expanded=true]]:bg-bg-dark focus-visible:border-none focus-visible:outline-0 group-focus/field:text-white data-[hover]:text-white',
    'disabled:hidden',
  ]),
};