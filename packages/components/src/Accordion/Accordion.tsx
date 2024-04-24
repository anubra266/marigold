import { Children, cloneElement, isValidElement, useRef } from 'react';
import type { ReactElement } from 'react';

import { useAccordion } from '@react-aria/accordion';
import type { AriaAccordionProps } from '@react-aria/accordion';

import { Item } from '@react-stately/collections';
import { useTreeState } from '@react-stately/tree';

import type { ItemElement, ItemProps } from '@react-types/shared';

import { AccordionItem } from './AccordionItem';

// Herlps
// ---------------
/**
 * We need to manually set `hasChildItems` to false, otherwhise this crashes.
 * See: https://github.com/adobe/react-spectrum/issues/1989#issuecomment-1372353405
 */
const parseProps = (props: AccordionProps) => {
  const children = [] as any;

  Children.forEach(props.children, child => {
    if (isValidElement(child) && typeof child.props?.children !== 'string') {
      const clone = cloneElement(child, {
        hasChildItems: false,
      });

      children.push(clone);
      return;
    }

    children.push(child);
  });

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
}

// Component
// ---------------
export const Accordion = (props: AccordionProps) => {
  props = parseProps(props);

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
