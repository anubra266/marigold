import React, { ReactNode, useContext } from 'react';
import { useRadioGroup } from '@react-aria/radio';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';

import {
  Box,
  ThemeExtensionsWithParts,
  useComponentStyles,
} from '@marigold/system';

import { Label } from '../Field/Label';

// Context
// ---------------
export interface RadioGroupContextProps extends RadioGroupState {
  variant?: string;
  size?: string;
  error?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextProps>(
  null as any
);
export const useRadioGroupContext = () => useContext(RadioGroupContext);

// Theme Extension
// ---------------
export interface RadioGroupThemeExtension
  extends ThemeExtensionsWithParts<'RadioGroup', ['container', 'group']> {}

// Props
// ---------------
export interface RadioGroupProps
  extends Omit<
    AriaRadioGroupProps,
    'isDisabled' | 'isRquired' | 'isReadOnly ' | 'validationState'
  > {
  children: ReactNode[];
  variant?: string;
  size?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
}

// Component
// ---------------
export const RadioGroup = ({
  children,
  orientation = 'vertical',
  size,
  variant,
  required,
  disabled,
  readOnly,
  error,
  ...rest
}: RadioGroupProps) => {
  const props: AriaRadioGroupProps = {
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readOnly,
    validationState: error ? 'invalid' : 'valid',
    ...rest,
  };

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  const styles = useComponentStyles(
    'RadioGroup',
    { variant, size },
    { parts: ['container', 'group'] }
  );

  return (
    <Box {...radioGroupProps} css={styles.container}>
      {props.label && (
        <Label as="span" required={required} {...labelProps}>
          {props.label}
        </Label>
      )}
      <Box
        role="presentation"
        data-orientation={orientation}
        __baseCSS={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          alignItems: 'start',
          gap: orientation === 'vertical' ? '0.5ch' : '1.5ch',
        }}
        css={styles.group}
      >
        <RadioGroupContext.Provider value={{ variant, size, error, ...state }}>
          {children}
        </RadioGroupContext.Provider>
      </Box>
    </Box>
  );
};