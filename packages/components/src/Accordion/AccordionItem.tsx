import { useRef } from 'react';

import type { AccordionItemAriaProps } from '@react-aria/accordion';
import { useFocusRing } from '@react-aria/focus';
import type { AriaFocusRingProps } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';

import type { TreeState } from '@react-stately/tree';

import { cn, useClassNames } from '@marigold/system';

import { ChevronDown, ChevronUp } from '../Chevron';
import { useAccordionItem } from './useAccordionItem';

// Props
// ---------------
export interface AccordionItemProps
  extends AccordionItemAriaProps<object>,
    AriaFocusRingProps {
  state: TreeState<object>;
  variant?: string;
  size?: string;
}

export const AccordionItem = ({
  variant,
  size,
  ...props
}: AccordionItemProps) => {
  const { state, item } = props;

  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, regionProps } = useAccordionItem<object>(
    props,
    state,
    ref
  );
  const expanded = state.expandedKeys.has(item.key);
  const disabled = state.disabledKeys.has(item.key);

  /** is this needed?  */
  const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
  const { isHovered, hoverProps } = useHover({ isDisabled: disabled });

  const classNames = useClassNames({ component: 'Accordion', variant, size });

  return (
    <div className="flex flex-col">
      <button
        className={cn(
          'inline-flex items-center justify-center gap-[0.5ch]',
          classNames.button
        )}
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        aria-label={item.textValue}
        data-disabled={disabled || undefined}
        // data-pressed={ctx.isPressed || isPressed || undefined}
        data-hovered={isHovered || undefined}
        data-focused={isFocused || undefined}
        data-focus-visible={isFocusVisible || undefined}
      >
        {item.props.title}
        {expanded ? (
          <ChevronUp className="h3 w-6" aria-hidden="true" />
        ) : (
          <ChevronDown className="h3 w-6" aria-hidden="true" />
        )}
      </button>
      <div
        {...regionProps}
        className={cn(classNames.item, !expanded && 'hidden')}
      >
        {item.props.children}
      </div>
    </div>
  );
};
