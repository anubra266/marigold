/**
 * We are not suing `@reat-aria` here because it does not support:
 * - keyboard navigation
 * - selectionMode: single
 *
 * Hook uses `@react-aria/accordion/useAccordion` as base.
 */
import type { ButtonHTMLAttributes, RefObject } from 'react';
import { useCallback } from 'react';

import type { AccordionItemAriaProps } from '@react-aria/accordion';
import { useButton } from '@react-aria/button';
import { useId } from '@react-aria/utils';

import type { TreeState } from '@react-stately/tree';

import type {
  DOMAttributes,
  LongPressEvent,
  PressEvent,
} from '@react-types/shared';

// Props
// ---------------
export interface AccordionItemAria {
  /** Props for the accordion item button. */
  buttonProps: ButtonHTMLAttributes<HTMLElement>;
  /** Props for the accordion item content element. */
  regionProps: DOMAttributes;
}

// Hook
// ---------------
export const useAccordionItem = <T>(
  props: AccordionItemAriaProps<T>,
  state: TreeState<T>,
  ref: RefObject<HTMLButtonElement>
): AccordionItemAria => {
  const buttonId = useId();
  const regionId = useId();

  const { item } = props;
  const key = item.key;
  const manager = state.selectionManager;
  const disabled = state.disabledKeys.has(item.key);

  const onSelect = useCallback(
    (e: PressEvent | LongPressEvent | PointerEvent) => {
      if (!manager.canSelectItem(key)) {
        return;
      }
      manager.select(key, e);
      state.toggleKey(key);
    },
    [key, manager]
  );

  const { buttonProps } = useButton(
    {
      id: buttonId,
      elementType: 'button',
      isDisabled: disabled,
      onKeyDown,
      onPress: onSelect,
    },
    ref
  );

  const expanded = state.selectionManager.isSelected(item.key);

  return {
    buttonProps: {
      ...buttonProps,
      'aria-expanded': expanded,
      'aria-controls': expanded ? regionId : undefined,
    },
    regionProps: {
      id: regionId,
      role: 'region',
      'aria-labelledby': buttonId,
    },
  };
};
