import { useRef } from 'react';

import { useAccordion } from '@react-aria/accordion';
import type { AriaAccordionProps } from '@react-aria/accordion';

import { useTreeState } from '@react-stately/tree';

import { AccordionItem } from './AccordionItem';

// Props
// ---------------
export interface AccordionProps extends AriaAccordionProps<object> {}

// Component
// ---------------
export const Accordion = (props: AccordionProps) => {
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
