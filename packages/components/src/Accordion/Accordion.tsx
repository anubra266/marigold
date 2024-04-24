import { Children, cloneElement, isValidElement, useMemo, useRef } from 'react';
import type { ReactElement } from 'react';

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
  const state = useTreeState({
    selectionMode: 'single',
    ...props,
  });
  const { accordionProps } = useAccordion(props, state, ref);

  return (
    <div {...accordionProps} ref={ref}>
      {[...state.collection].map(item => (
        <AccordionItem
          key={item.key}
          item={item}
          state={state}
          variant={item.props.variant}
          size={item.props.size}
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
