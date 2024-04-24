import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { Key, ReactElement } from 'react';

import { useAccordion } from '@react-aria/accordion';
import type { AriaAccordionProps } from '@react-aria/accordion';

import { Item } from '@react-stately/collections';
import { useTreeState } from '@react-stately/tree';

import type {
  ItemElement,
  ItemProps,
  SelectionMode,
} from '@react-types/shared';

import { AccordionItem } from './AccordionItem';

// Herlps
// ---------------
/**
 * We need to set `hasChildItems` to render ReactNode children, as a workaround.
 * See: https://github.com/adobe/react-spectrum/issues/1989#issuecomment-1372353405
 */
const useProps = ({ children, ...props }: AccordionProps) => {
  children = useMemo(() => {
    const result = [] as any;

    Children.forEach(children, child => {
      if (isValidElement(child) && typeof child.props?.children !== 'string') {
        const clone = cloneElement(child, {
          hasChildItems: false,
        });

        result.push(clone);
        return;
      }

      result.push(child);
    });
    return result;
  }, [children]);

  return {
    ...props,
    children,
  };
};

// Props
// ---------------
export interface AccordionProps
  extends Omit<AriaAccordionProps<object>, 'children'> {
  children: ItemElement<object>[] | ItemElement<object>;
  selectionMode?: SelectionMode;
}

// Component
// ---------------
export const Accordion = (props: AccordionProps) => {
  props = useProps(props);

  const ref = useRef(null);
  const [focusedKey, setFocusedKey] = useState<Key | null>(null);

  const state = useTreeState({
    selectionMode: 'single',
    ...props,
  });
  state.selectionManager.setFocusedKey = (key: Key | null) => {
    setFocusedKey(key);
  };

  const { accordionProps } = useAccordion(props, state, ref);

  const updateFocus = useCallback((isFocused: boolean, key: Key | null) => {
    isFocused && setFocusedKey(key);
  }, []);

  return (
    <div {...accordionProps} ref={ref}>
      {[...state.collection].map(item => (
        <AccordionItem
          key={item.key}
          item={item}
          state={state}
          variant={item.props.variant}
          size={item.props.size}
          focusedKey={focusedKey}
          onFocusChange={updateFocus}
        />
      ))}
    </div>
  );
};

export interface AccordionOwnItemProps<T> extends ItemProps<T> {
  variant?: string;
  size?: string;
  title: string | ReactElement;
}

Accordion.Item = Item as <T>(props: AccordionOwnItemProps<T>) => JSX.Element;
