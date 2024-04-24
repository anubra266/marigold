/**
 * We are not suing `@reat-aria` here because it does not support:
 * - keyboard navigation
 * - selectionMode: single
 *
 * Hook uses `@react-aria/accordion/useAccordion` and
 * `@nextui-org/use-aria-accordion` as base.
 */
import type {
  ButtonHTMLAttributes,
  KeyboardEventHandler,
  RefObject,
} from 'react';
import { useCallback, useEffect } from 'react';

import type { AccordionItemAriaProps } from '@react-aria/accordion';
import { useButton } from '@react-aria/button';
import { focusSafely } from '@react-aria/focus';
import { mergeProps, useId } from '@react-aria/utils';

import type { TreeState } from '@react-stately/tree';

import type {
  DOMAttributes,
  Key,
  LongPressEvent,
  PressEvent,
} from '@react-types/shared';

// Props
// ---------------
export interface UseAccordionItemProps<T> extends AccordionItemAriaProps<T> {
  /**
   * Current focused key.
   */
  focusedKey: React.Key | null;
  /**
   * Callback fired when the focus state changes.
   */
  onFocusChange?: (isFocused: boolean, key: React.Key) => void;
}

export interface AccordionItemAria {
  /** Props for the accordion item button. */
  buttonProps: ButtonHTMLAttributes<HTMLElement>;
  /** Props for the accordion item content element. */
  regionProps: DOMAttributes;
}

// Hook
// ---------------
export const useAccordionItem = <T>(
  props: UseAccordionItemProps<T>,
  state: TreeState<T> & {
    focusedKey?: Key | null;
  },
  ref: RefObject<HTMLButtonElement>
): AccordionItemAria => {
  const buttonId = useId();
  const regionId = useId();

  const { item, onFocusChange } = props;
  const key = item.key;
  const manager = state.selectionManager;
  const disabled = state.disabledKeys.has(item.key);

  /**
   * Focus the associated DOM node when this item becomes the focusedKey
   */
  useEffect(() => {
    console.log('effect', state.focusedKey);
    const isFocused = key === state.focusedKey;

    if (isFocused && document.activeElement !== ref.current) {
      ref.current && focusSafely(ref.current);
    }
  }, [ref, key, state.focusedKey]);

  /**
   * Manage selecting an the arccodrion item (expand/collapse)
   */
  const onSelect = useCallback(
    (e: PressEvent | LongPressEvent | PointerEvent) => {
      if (!manager.canSelectItem(key)) {
        return;
      }
      manager.select(key, e);
      state.toggleKey(key);
    },
    [key, manager, state]
  );

  const extendFocusSelection = useCallback(
    (key: Key) => {
      if (manager.selectionBehavior === 'replace') {
        manager.extendSelection(key);
      }
      manager.setFocusedKey(key);
    },
    [manager]
  );

  /**
   * Manage keyboard navigation between accordion items.
   */
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const keyMap: Record<string, KeyboardEventHandler> = {
        ArrowDown: () => {
          const nextKey = state.collection.getKeyAfter(key);

          if (nextKey && state.disabledKeys.has(nextKey)) {
            const nextEnabledKey = state.collection.getKeyAfter(nextKey);
            nextEnabledKey && extendFocusSelection(nextEnabledKey);
          } else {
            nextKey && extendFocusSelection(nextKey);
          }
        },
        ArrowUp: () => {
          const prevKey = state.collection.getKeyBefore(key);

          if (prevKey && state.disabledKeys.has(prevKey)) {
            const prevEnabledKey = state.collection.getKeyBefore(prevKey);
            prevEnabledKey && extendFocusSelection(prevEnabledKey);
          } else {
            prevKey && extendFocusSelection(prevKey);
          }
        },
        Home: () => {
          const firstKey = state.collection.getFirstKey();
          firstKey && extendFocusSelection(firstKey);
        },
        End: () => {
          const lastKey = state.collection.getLastKey();
          lastKey && extendFocusSelection(lastKey);
        },
      };

      const action = keyMap[event.key];

      if (action) {
        event.preventDefault();
        if (manager.canSelectItem(key)) {
          action(event);
        }
      }
    },
    [extendFocusSelection, key, manager, state.collection, state.disabledKeys]
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

  const onFocus = useCallback(() => {
    onFocusChange?.(true, item.key);
  }, [item.key, onFocusChange]);

  const onBlur = useCallback(() => {
    onFocusChange?.(false, item.key);
  }, [item.key, onFocusChange]);

  const expanded = state.selectionManager.isSelected(item.key);

  return {
    buttonProps: {
      ...mergeProps(buttonProps, { onFocus, onBlur }),
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
