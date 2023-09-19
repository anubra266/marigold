// src/hooks.ts
import { useAsyncList, useListData } from "@react-stately/data";

// src/Accordion/Accordion.tsx
import {
  Children,
  cloneElement,
  isValidElement,
  useRef as useRef2
} from "react";
import { useAccordion } from "@react-aria/accordion";
import { Item } from "@react-stately/collections";
import { useTreeState } from "@react-stately/tree";

// src/Accordion/AccordionItem.tsx
import { useEffect, useRef } from "react";
import { FocusRing, useFocusRing as useFocusRing2 } from "@react-aria/focus";
import { mergeProps as mergeProps3 } from "@react-aria/utils";
import { useClassNames as useClassNames2, useStateProps as useStateProps2 } from "@marigold/system";

// src/Button/Button.tsx
import { forwardRef } from "react";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { cn, useClassNames, useStateProps } from "@marigold/system";
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    as = "button",
    children,
    variant,
    size,
    disabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    fullWidth,
    excludeFromTabOrder,
    className,
    ...props
  }, ref) => {
    const Component = as;
    const buttonRef = useObjectRef(ref);
    const { hoverProps, isHovered } = useHover({ isDisabled: disabled });
    const { isFocusVisible, focusProps } = useFocusRing({
      autoFocus: props.autoFocus
    });
    const { buttonProps, isPressed } = useButton(
      {
        /**
         * `react-aria` only expected `Element` but we casted
         * it to a `HTMLButtonElement` internally.
         */
        ...props,
        onPress,
        onPressStart,
        onPressEnd,
        onPressChange,
        onPressUp,
        elementType: typeof as === "string" ? as : "span",
        isDisabled: disabled,
        excludeFromTabOrder
      },
      buttonRef
    );
    const classNames2 = useClassNames({
      component: "Button",
      variant,
      size,
      className
    });
    const stateProps = useStateProps({
      active: isPressed,
      focusVisible: isFocusVisible,
      hover: isHovered
    });
    return /* @__PURE__ */ jsx(
      Component,
      {
        ...mergeProps(buttonProps, focusProps, hoverProps, props),
        ...stateProps,
        ref: buttonRef,
        className: cn(
          "inline-flex items-center justify-center gap-[0.5ch]",
          classNames2,
          fullWidth ? "w-full" : void 0
        ),
        children
      }
    );
  }
);

// src/Chevron/ChevronUp.tsx
import { forwardRef as forwardRef2 } from "react";
import { SVG } from "@marigold/system";
import { jsx as jsx2 } from "react/jsx-runtime";
var ChevronUp = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2(SVG, { className, ...props, viewBox: "0 0 24 24", ref, children: /* @__PURE__ */ jsx2("path", { d: "M5.97563 16.8506L12 10.8394L18.0244 16.8506L19.875 15L12 7.125L4.125 15L5.97563 16.8506Z" }) })
);

// src/Chevron/ChevronDown.tsx
import { forwardRef as forwardRef3 } from "react";
import { SVG as SVG2 } from "@marigold/system";
import { jsx as jsx3 } from "react/jsx-runtime";
var ChevronDown = forwardRef3(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx3(SVG2, { className, ...props, viewBox: "0 0 24 24", ref, children: /* @__PURE__ */ jsx3("path", { d: "M5.97563 7.125L12 13.1363L18.0244 7.125L19.875 8.97563L12 16.8506L4.125 8.97563L5.97563 7.125Z" }) })
);

// src/Accordion/useAccordionItem.ts
import { useButton as useButton2 } from "@react-aria/button";
import { useSelectableItem } from "@react-aria/selection";
import { mergeProps as mergeProps2, useId } from "@react-aria/utils";
import { isAppleDevice } from "@react-aria/utils";
import { isMac } from "@react-aria/utils";
function isNonContiguousSelectionModifier(e) {
  return isAppleDevice() ? e.altKey : e.ctrlKey;
}
function isCtrlKeyPressed(e) {
  if (isMac()) {
    return e.metaKey;
  }
  return e.ctrlKey;
}
function useAccordionItem(props, state, ref) {
  let { item } = props;
  let key = item.key;
  let manager = state.selectionManager;
  let buttonId = useId();
  let regionId = useId();
  let isDisabled = state.disabledKeys.has(item.key);
  let { itemProps } = useSelectableItem({
    selectionManager: manager,
    key,
    ref
  });
  const isDefaultExpanded = state.expandedKeys.has(
    item.key.toString().replace(".$", "")
  );
  let onSelect = (e) => {
    if (e.pointerType === "keyboard" && isNonContiguousSelectionModifier(e)) {
      if (isDefaultExpanded) {
        state.expandedKeys.clear();
      }
      manager.toggleSelection(key);
    } else {
      if (manager.selectionMode === "none") {
        return;
      }
      if (manager.selectionMode === "single") {
        if (manager.isSelected(key) && !manager.disallowEmptySelection) {
          if (isDefaultExpanded) {
            state.expandedKeys.clear();
          }
          manager.toggleSelection(key);
        } else {
          if (isDefaultExpanded) {
            state.expandedKeys.clear();
          }
          manager.replaceSelection(key);
        }
      } else if (e && e.shiftKey) {
        if (isDefaultExpanded) {
          state.expandedKeys.clear();
        }
        manager.extendSelection(key);
      } else if (manager.selectionBehavior === "toggle" || e && (isCtrlKeyPressed(e) || e.pointerType === "touch" || e.pointerType === "virtual")) {
        if (isDefaultExpanded) {
          state.expandedKeys.clear();
          manager.toggleSelection(key);
        }
        manager.toggleSelection(key);
      } else {
        if (isDefaultExpanded) {
          state.expandedKeys.clear();
        }
        manager.replaceSelection(key);
      }
    }
  };
  let { buttonProps } = useButton2(
    mergeProps2(itemProps, {
      id: buttonId,
      elementType: "button",
      isDisabled,
      // if remove than everything click
      onPress: onSelect
    }),
    ref
  );
  return {
    buttonProps: {
      ...buttonProps,
      role: "button",
      "aria-expanded": manager.isSelected(key) || isDefaultExpanded,
      "aria-controls": manager.isSelected(key) || isDefaultExpanded ? regionId : void 0
    },
    regionProps: {
      id: regionId,
      role: "region",
      "aria-labelledby": buttonId
    }
  };
}

// src/Accordion/AccordionItem.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var AccordionItem = ({
  item,
  state,
  title,
  variant,
  size,
  ...props
}) => {
  const ref = useRef(null);
  const defaultExpanded = state.expandedKeys.has(
    item.key.toString().replace(".$", "")
  );
  const expanded = state.selectionManager.isSelected(item.key);
  useEffect(() => {
    if (defaultExpanded) {
      if (state.selectionManager.selectionMode === "multiple") {
        state.expandedKeys.forEach((key) => {
          state.selectionManager.select(key);
        });
      } else {
        state.expandedKeys.clear();
        state.selectionManager.toggleSelection(item.key);
      }
    }
  }, [defaultExpanded, item.key, state.expandedKeys, state.selectionManager]);
  const { buttonProps, regionProps } = useAccordionItem(
    {
      item
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing2();
  const stateProps = useStateProps2({
    focus: isFocusVisible,
    expanded: defaultExpanded || expanded
  });
  const classNames2 = useClassNames2({ component: "Accordion", variant, size });
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", ...props, children: [
    /* @__PURE__ */ jsx4(FocusRing, { within: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        className: classNames2.button,
        ...mergeProps3(buttonProps, stateProps, props),
        ref,
        "aria-label": item.textValue,
        children: [
          title,
          !expanded ? /* @__PURE__ */ jsx4(ChevronUp, { className: "h3 w-6" }) : /* @__PURE__ */ jsx4(ChevronDown, { className: "h3 w-6" })
        ]
      }
    ) }),
    expanded || defaultExpanded ? /* @__PURE__ */ jsx4(
      "div",
      {
        ...mergeProps3(regionProps, focusProps, stateProps),
        className: classNames2.item,
        children: item.props.children
      }
    ) : null
  ] });
};

// src/Accordion/Accordion.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Accordion = ({ children, ...props }) => {
  const ownProps = {
    ...props,
    // we have to do this because JSX childs are not supported
    children: Children.toArray(children).map((child) => {
      if (!isValidElement(child)) {
        return child;
      }
      return cloneElement(child, {
        hasChildItems: false,
        ...child.props
      });
    })
  };
  const ref = useRef2(null);
  const state = useTreeState({
    selectionMode: "single",
    ...ownProps
  });
  const { accordionProps } = useAccordion(
    { ...ownProps, children },
    state,
    ref
  );
  return /* @__PURE__ */ jsx5("div", { ...accordionProps, ref, children: [...state.collection].map((item) => /* @__PURE__ */ jsx5(
    AccordionItem,
    {
      title: item.props.title,
      item,
      state,
      variant: item.props.variant,
      size: item.props.size
    },
    item.key
  )) });
};
Accordion.Item = Item;

// src/Aside/Aside.tsx
import { Children as Children2 } from "react";
import { cn as cn2, createVar, gapSpace } from "@marigold/system";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var classNames = {
  aside: "grow basis-[--sideWidth]",
  content: "basis-0 grow-[999] [min-inline-size:--wrap]"
};
var Aside = ({
  children,
  sideWidth,
  space = 0,
  side = "left",
  stretch = true,
  wrap = "50%"
}) => {
  const [left, right] = Children2.toArray(children);
  const vars = {
    aside: createVar({ sideWidth }),
    content: createVar({ wrap })
  };
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn2(
        "flex flex-wrap",
        gapSpace[space],
        !stretch && "items-start"
      ),
      children: [
        /* @__PURE__ */ jsx6(
          "div",
          {
            className: classNames[side === "left" ? "aside" : "content"],
            style: vars[side === "left" ? "aside" : "content"],
            children: left
          }
        ),
        /* @__PURE__ */ jsx6(
          "div",
          {
            className: classNames[side === "right" ? "aside" : "content"],
            style: vars[side === "right" ? "aside" : "content"],
            children: right
          }
        )
      ]
    }
  );
};

// src/Aspect/Aspect.tsx
import { aspect, cn as cn3, createVar as createVar2 } from "@marigold/system";
import { jsx as jsx7 } from "react/jsx-runtime";
var Aspect = ({
  ratio = "square",
  maxWidth,
  children
}) => /* @__PURE__ */ jsx7(
  "div",
  {
    className: cn3("overflow-hidden", aspect[ratio], "max-w-[var(--maxWidth)]"),
    style: createVar2({ maxWidth }),
    children
  }
);

// src/Autocomplete/Autocomplete.tsx
import { useRef as useRef7 } from "react";
import { useSearchAutocomplete } from "@react-aria/autocomplete";
import { useFilter } from "@react-aria/i18n";
import { Item as Item2 } from "@react-stately/collections";
import { useComboBoxState } from "@react-stately/combobox";

// src/FieldBase/FieldBase.tsx
import {
  cn as cn6,
  width as twWidth,
  useClassNames as useClassNames5
} from "@marigold/system";

// src/HelpText/HelpText.tsx
import { SVG as SVG3, cn as cn4, useClassNames as useClassNames3 } from "@marigold/system";
import { Fragment, jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var HelpText = ({
  variant,
  size,
  className,
  disabled,
  description,
  descriptionProps,
  error,
  errorMessage,
  errorMessageProps,
  ...props
}) => {
  const hasErrorMessage = errorMessage && error;
  const classNames2 = useClassNames3({
    component: "HelpText",
    variant,
    size,
    className
  });
  return /* @__PURE__ */ jsx8(
    "div",
    {
      ...props,
      ...hasErrorMessage ? errorMessageProps : descriptionProps,
      className: cn4("flex items-center gap-1", classNames2.container),
      children: hasErrorMessage ? /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx8(
          SVG3,
          {
            className: cn4("h-4 w-4", classNames2.icon),
            viewBox: "0 0 24 24",
            role: "presentation",
            children: /* @__PURE__ */ jsx8("path", { d: "M2.25 20.3097H21.75L12 3.46875L2.25 20.3097ZM12.8864 17.2606H11.1136V15.4879H12.8864V17.2606ZM12.8864 13.7151H11.1136V10.1697H12.8864V13.7151Z" })
          }
        ),
        errorMessage
      ] }) : /* @__PURE__ */ jsx8(Fragment, { children: description })
    }
  );
};

// src/Label/Label.tsx
import { SVG as SVG4, cn as cn5, createVar as createVar3, useClassNames as useClassNames4 } from "@marigold/system";
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Label = ({
  as = "label",
  children,
  variant,
  size,
  labelWidth,
  ...props
}) => {
  const Component = as;
  const classNames2 = useClassNames4({ component: "Label", size, variant });
  return /* @__PURE__ */ jsxs4(
    Component,
    {
      ...props,
      className: cn5(classNames2.container, "flex w-[var(--labelWidth)]"),
      style: createVar3({ labelWidth }),
      children: [
        children,
        /* @__PURE__ */ jsx9(
          SVG4,
          {
            viewBox: "0 0 24 24",
            role: "presentation",
            size: 16,
            className: cn5("hidden", classNames2.indicator),
            children: /* @__PURE__ */ jsx9("path", { d: "M10.8 3.84003H13.2V9.85259L18.1543 7.01815L19.3461 9.10132L14.3584 11.9549L19.3371 14.7999L18.1463 16.8836L13.2 14.0572V20.16H10.8V13.9907L5.76116 16.8735L4.56935 14.7903L9.5232 11.9561L4.56 9.12003L5.75073 7.03624L10.8 9.92154V3.84003Z" })
          }
        )
      ]
    }
  );
};

// src/FieldBase/FieldGroup.tsx
import { createContext, useContext } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var FieldGroupContext = createContext({});
var useFieldGroupContext = () => useContext(FieldGroupContext);
var FieldGroup = ({ labelWidth, children }) => {
  return /* @__PURE__ */ jsx10(FieldGroupContext.Provider, { value: { labelWidth }, children });
};

// src/FieldBase/FieldBase.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var FieldBase = ({
  children,
  variant,
  size,
  width = "full",
  disabled,
  label,
  labelProps,
  description,
  descriptionProps,
  error,
  errorMessage,
  errorMessageProps,
  stateProps,
  ...props
}) => {
  const hasHelpText = !!description || errorMessage && error;
  const { labelWidth } = useFieldGroupContext();
  const classNames2 = useClassNames5({
    component: "Field",
    variant,
    size
  });
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      ...props,
      ...stateProps,
      className: cn6("group/field", twWidth[width], classNames2),
      children: [
        label && /* @__PURE__ */ jsx11(
          Label,
          {
            variant,
            size,
            labelWidth,
            ...labelProps,
            children: label
          }
        ),
        children,
        hasHelpText && /* @__PURE__ */ jsx11(
          HelpText,
          {
            variant,
            size,
            disabled,
            description,
            descriptionProps,
            error,
            errorMessage,
            errorMessageProps
          }
        )
      ]
    }
  );
};

// src/Input/Input.tsx
import {
  cloneElement as cloneElement2,
  forwardRef as forwardRef4
} from "react";
import { cn as cn7, useClassNames as useClassNames6 } from "@marigold/system";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Input = forwardRef4(
  ({
    type = "text",
    icon,
    action,
    variant,
    size,
    className,
    ...props
  }, ref) => {
    const classNames2 = useClassNames6({
      component: "Input",
      variant,
      size,
      className
    });
    const inputIcon = icon ? cloneElement2(icon, {
      className: cn7(
        "pointer-events-none absolute",
        classNames2.icon,
        icon.props.className
      ),
      ...icon.props
    }) : null;
    const inputAction = action && !props.readOnly ? cloneElement2(action, {
      className: cn7(
        "absolute",
        classNames2.action,
        action.props.className
      ),
      ...action.props
    }) : null;
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        className: "group/input relative flex items-center",
        "data-icon": icon && "",
        "data-action": action && "",
        children: [
          inputIcon,
          /* @__PURE__ */ jsx12(
            "input",
            {
              ...props,
              className: cn7(
                "flex-1",
                "disabled:cursor-not-allowed",
                "[&[type=file]]:border-none [&[type=file]]:p-0",
                "[&[type=color]]:ml-0 [&[type=color]]:border-none [&[type=color]]:bg-transparent [&[type=color]]:p-0",
                classNames2.input,
                className
              ),
              ref,
              type
            }
          ),
          inputAction
        ]
      }
    );
  }
);

// src/ListBox/ListBox.tsx
import { forwardRef as forwardRef5 } from "react";
import { useListBox } from "@react-aria/listbox";
import { useObjectRef as useObjectRef2 } from "@react-aria/utils";
import { cn as cn8, useClassNames as useClassNames7 } from "@marigold/system";

// src/ListBox/Context.ts
import { createContext as createContext2, useContext as useContext2 } from "react";
var ListBoxContext = createContext2({});
var useListBoxContext = () => useContext2(ListBoxContext);

// src/ListBox/ListBoxOption.tsx
import { useRef as useRef3 } from "react";
import { useOption } from "@react-aria/listbox";
import { mergeProps as mergeProps4 } from "@react-aria/utils";
import { useStateProps as useStateProps3 } from "@marigold/system";
import { jsx as jsx13 } from "react/jsx-runtime";
var ListBoxOption = ({ item, state }) => {
  const ref = useRef3(null);
  const { optionProps, isSelected, isDisabled, isFocused } = useOption(
    {
      key: item.key
    },
    state,
    ref
  );
  const { onPointerUp, ...props } = optionProps;
  const { classNames: classNames2 } = useListBoxContext();
  const stateProps = useStateProps3({
    selected: isSelected,
    disabled: isDisabled,
    focusVisible: isFocused
  });
  return /* @__PURE__ */ jsx13(
    "li",
    {
      ref,
      className: classNames2.option,
      ...mergeProps4(props, { onPointerDown: onPointerUp }, { ...stateProps }),
      children: item.props.children
    }
  );
};

// src/ListBox/ListBoxSection.tsx
import { useListBoxSection } from "@react-aria/listbox";
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var ListBoxSection = ({ section, state }) => {
  const { classNames: classNames2 } = useListBoxContext();
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"]
  });
  return /* @__PURE__ */ jsxs7("li", { className: classNames2.section, ...itemProps, children: [
    section.rendered && /* @__PURE__ */ jsx14("div", { className: classNames2.sectionTitle, ...headingProps, children: section.rendered }),
    /* @__PURE__ */ jsx14("ul", { className: classNames2.list, ...groupProps, children: [...section.props.children].map((node) => /* @__PURE__ */ jsx14(ListBoxOption, { item: node, state }, node.key)) })
  ] });
};

// src/ListBox/ListBox.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var ListBox = forwardRef5(
  ({ state, variant, size, ...props }, ref) => {
    const innerRef = useObjectRef2(ref);
    const { listBoxProps } = useListBox(props, state, innerRef);
    const classNames2 = useClassNames7({ component: "ListBox", variant, size });
    return /* @__PURE__ */ jsx15(ListBoxContext.Provider, { value: { classNames: classNames2 }, children: /* @__PURE__ */ jsx15("div", { className: classNames2.container, children: /* @__PURE__ */ jsx15(
      "ul",
      {
        className: cn8(
          "overflow-y-auto sm:max-h-[75vh] lg:max-h-[45vh]",
          classNames2.list
        ),
        ref: innerRef,
        ...listBoxProps,
        children: [...state.collection].map(
          (item) => item.type === "section" ? /* @__PURE__ */ jsx15(ListBoxSection, { section: item, state }, item.key) : /* @__PURE__ */ jsx15(ListBoxOption, { item, state }, item.key)
        )
      }
    ) }) });
  }
);

// src/Overlay/Modal.tsx
import { forwardRef as forwardRef6 } from "react";
import { FocusScope } from "@react-aria/focus";
import { useModal, useOverlay, usePreventScroll } from "@react-aria/overlays";
import { mergeProps as mergeProps5, useObjectRef as useObjectRef3 } from "@react-aria/utils";

// src/Overlay/Underlay.tsx
import { cn as cn9, useClassNames as useClassNames8 } from "@marigold/system";
import { jsx as jsx16 } from "react/jsx-runtime";
var Underlay = ({ size, variant, ...props }) => {
  const classNames2 = useClassNames8({ component: "Underlay", size, variant });
  return /* @__PURE__ */ jsx16("div", { className: cn9("fixed inset-0 z-40", classNames2), ...props });
};

// src/Overlay/Modal.tsx
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
var Modal = forwardRef6(
  ({ children, open, dismissable, keyboardDismissable, onClose, ...props }, ref) => {
    const modalRef = useObjectRef3(ref);
    const { overlayProps, underlayProps } = useOverlay(
      {
        isOpen: open,
        onClose,
        isDismissable: dismissable,
        isKeyboardDismissDisabled: !keyboardDismissable
      },
      modalRef
    );
    usePreventScroll();
    const { modalProps } = useModal({});
    return /* @__PURE__ */ jsxs8(FocusScope, { contain: true, restoreFocus: true, autoFocus: true, children: [
      /* @__PURE__ */ jsx17(Underlay, { ...underlayProps, variant: "modal" }),
      /* @__PURE__ */ jsx17(
        "div",
        {
          className: "pointer-none fixed inset-0 z-50 flex items-center justify-center",
          ref: modalRef,
          ...mergeProps5(props, overlayProps, modalProps),
          children: /* @__PURE__ */ jsx17("div", { style: { pointerEvents: "auto" }, children })
        }
      )
    ] });
  }
);

// src/Overlay/Overlay.tsx
import { useRef as useRef4 } from "react";
import {
  Overlay as ReactAriaOverlay
} from "@react-aria/overlays";
import { useTheme } from "@marigold/system";
import { jsx as jsx18 } from "react/jsx-runtime";
var Overlay = ({ children, container, open }) => {
  const nodeRef = useRef4(null);
  const theme = useTheme();
  let mountOverlay = open;
  if (!mountOverlay) {
    return null;
  }
  return /* @__PURE__ */ jsx18(ReactAriaOverlay, { portalContainer: container, children: /* @__PURE__ */ jsx18(
    "div",
    {
      ref: nodeRef,
      "data-testid": "overlay",
      "data-theme": theme.name,
      className: "opacity-100",
      children
    }
  ) });
};

// src/Overlay/Popover.tsx
import { forwardRef as forwardRef7, useRef as useRef5 } from "react";
import { FocusScope as FocusScope2 } from "@react-aria/focus";
import {
  DismissButton,
  usePopover
} from "@react-aria/overlays";
import { useClassNames as useClassNames9 } from "@marigold/system";
import { jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
var Popover = forwardRef7(
  (props, ref) => {
    const fallbackRef = useRef5(null);
    const popoverRef = ref || fallbackRef;
    let { children, state, ...otherProps } = props;
    return /* @__PURE__ */ jsx19(Overlay, { open: state.isOpen, ...otherProps, children: /* @__PURE__ */ jsx19(PopoverWrapper, { ref: popoverRef, ...props, children }) });
  }
);
var PopoverWrapper = forwardRef7(
  ({
    children,
    isNonModal,
    state,
    keyboardDismissDisabled,
    ...props
  }, ref) => {
    const { popoverProps, underlayProps, placement } = usePopover(
      {
        ...props,
        isNonModal,
        isKeyboardDismissDisabled: keyboardDismissDisabled,
        popoverRef: ref,
        placement: "bottom left"
      },
      state
    );
    const classNames2 = useClassNames9({
      component: "Popover",
      variant: placement
    });
    return /* @__PURE__ */ jsxs9(FocusScope2, { restoreFocus: true, children: [
      !isNonModal && /* @__PURE__ */ jsx19(Underlay, { ...underlayProps }),
      /* @__PURE__ */ jsxs9(
        "div",
        {
          ...popoverProps,
          className: classNames2,
          style: {
            ...popoverProps.style,
            minWidth: props.triggerRef.current ? props.triggerRef.current.offsetWidth : void 0
          },
          ref,
          role: "presentation",
          children: [
            !isNonModal && /* @__PURE__ */ jsx19(DismissButton, { onDismiss: state.close }),
            children,
            /* @__PURE__ */ jsx19(DismissButton, { onDismiss: state.close })
          ]
        }
      )
    ] });
  }
);

// src/Overlay/Tray.tsx
import { forwardRef as forwardRef8 } from "react";
import { FocusScope as FocusScope3 } from "@react-aria/focus";
import {
  DismissButton as DismissButton2,
  useModalOverlay
} from "@react-aria/overlays";
import { useObjectRef as useObjectRef4 } from "@react-aria/utils";
import { jsx as jsx20, jsxs as jsxs10 } from "react/jsx-runtime";
var Tray = forwardRef8(
  ({ state, children, ...props }, ref) => {
    const trayRef = useObjectRef4(ref);
    return /* @__PURE__ */ jsx20(Overlay, { open: state.isOpen, children: /* @__PURE__ */ jsx20(TrayWrapper, { state, ...props, ref: trayRef, children }) });
  }
);
var TrayWrapper = forwardRef8(
  ({ children, state, ...props }, ref) => {
    let { modalProps, underlayProps } = useModalOverlay(
      {
        ...props,
        isDismissable: true
      },
      state,
      ref
    );
    return /* @__PURE__ */ jsx20(FocusScope3, { contain: true, restoreFocus: true, autoFocus: true, children: /* @__PURE__ */ jsx20(Underlay, { ...underlayProps, variant: "modal", children: /* @__PURE__ */ jsxs10(
      "div",
      {
        ...modalProps,
        ref,
        className: "absolute bottom-0 w-full",
        "data-testid": "tray",
        children: [
          /* @__PURE__ */ jsx20(DismissButton2, { onDismiss: state.close }),
          children,
          /* @__PURE__ */ jsx20(DismissButton2, { onDismiss: state.close })
        ]
      }
    ) }) });
  }
);

// src/Autocomplete/ClearButton.tsx
import { useRef as useRef6 } from "react";
import { useButton as useButton3 } from "@react-aria/button";
import { useFocusRing as useFocusRing3 } from "@react-aria/focus";
import { useHover as useHover2 } from "@react-aria/interactions";
import { mergeProps as mergeProps6 } from "@react-aria/utils";
import { cn as cn10, useStateProps as useStateProps4 } from "@marigold/system";
import { jsx as jsx21 } from "react/jsx-runtime";
var ClearButton = ({
  preventFocus,
  disabled,
  onClick,
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  excludeFromTabOrder,
  preventFocusOnPress,
  className,
  ...props
}) => {
  const buttonRef = useRef6(null);
  const { hoverProps, isHovered } = useHover2({ isDisabled: disabled });
  const { isFocusVisible, focusProps } = useFocusRing3({
    autoFocus: props.autoFocus
  });
  const { buttonProps, isPressed } = useButton3(
    {
      ...props,
      onClick,
      onPress,
      onPressStart,
      onPressEnd,
      onPressChange,
      onPressUp,
      excludeFromTabOrder,
      preventFocusOnPress,
      isDisabled: disabled
    },
    buttonRef
  );
  if (preventFocus) {
    delete buttonProps.tabIndex;
  }
  const stateProps = useStateProps4({
    active: isPressed,
    focusVisible: isFocusVisible,
    hover: isHovered
  });
  return /* @__PURE__ */ jsx21(
    "button",
    {
      ...mergeProps6(buttonProps, focusProps, hoverProps, props),
      ...stateProps,
      ref: buttonRef,
      className: cn10(
        "cursor-pointer appearance-none border-none p-0 pr-1",
        className
      ),
      children: /* @__PURE__ */ jsx21(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          width: 20,
          height: 20,
          children: /* @__PURE__ */ jsx21("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
        }
      )
    }
  );
};

// src/Autocomplete/Autocomplete.tsx
import { Fragment as Fragment2, jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var SearchIcon = (props) => /* @__PURE__ */ jsx22(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: 24,
    height: 24,
    ...props,
    children: /* @__PURE__ */ jsx22("path", { d: "M16.1865 14.5142H15.3057L14.9936 14.2131C16.0862 12.9421 16.744 11.292 16.744 9.497C16.744 5.49443 13.4996 2.25 9.497 2.25C5.49443 2.25 2.25 5.49443 2.25 9.497C2.25 13.4996 5.49443 16.744 9.497 16.744C11.292 16.744 12.9421 16.0862 14.2131 14.9936L14.5142 15.3057V16.1865L20.0888 21.75L21.75 20.0888L16.1865 14.5142ZM9.49701 14.5142C6.72085 14.5142 4.47986 12.2732 4.47986 9.49701C4.47986 6.72085 6.72085 4.47986 9.49701 4.47986C12.2732 4.47986 14.5142 6.72085 14.5142 9.49701C14.5142 12.2732 12.2732 14.5142 9.49701 14.5142Z" })
  }
);
var Autocomplete = ({
  disabled,
  required,
  readOnly,
  error,
  onChange,
  value,
  defaultValue,
  variant,
  size,
  width,
  ...rest
}) => {
  const { contains } = useFilter({ sensitivity: "base" });
  const props = {
    ...rest,
    onInputChange: onChange,
    inputValue: value,
    defaultInputValue: defaultValue,
    isDisabled: disabled,
    isRequired: required,
    isReadOnly: readOnly,
    validationState: error ? "invalid" : "valid"
  };
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsCustomValue: true,
    onSelectionChange: (key) => {
      var _a;
      return key !== null && ((_a = props.onSubmit) == null ? void 0 : _a.call(props, key, null));
    },
    selectedKey: void 0,
    defaultSelectedKey: void 0
  });
  const inputRef = useRef7(null);
  const listBoxRef = useRef7(null);
  const popoverRef = useRef7(null);
  const { inputProps, listBoxProps, labelProps, clearButtonProps } = useSearchAutocomplete(
    {
      ...props,
      onSubmit: (value2, key) => {
        var _a;
        return (_a = props.onSubmit) == null ? void 0 : _a.call(props, key, value2);
      },
      popoverRef,
      listBoxRef,
      inputRef
    },
    state
  );
  const { isDisabled, ...restClearButtonProps } = clearButtonProps;
  return /* @__PURE__ */ jsxs11(Fragment2, { children: [
    /* @__PURE__ */ jsx22(
      FieldBase,
      {
        label: props.label,
        labelProps,
        description: props.description,
        error,
        errorMessage: props.errorMessage,
        disabled,
        width,
        children: /* @__PURE__ */ jsx22(
          Input,
          {
            ...inputProps,
            ref: inputRef,
            icon: /* @__PURE__ */ jsx22(SearchIcon, {}),
            action: state.inputValue !== "" ? /* @__PURE__ */ jsx22(
              ClearButton,
              {
                preventFocus: true,
                disabled: isDisabled,
                ...restClearButtonProps
              }
            ) : null
          }
        )
      }
    ),
    /* @__PURE__ */ jsx22(
      Popover,
      {
        state,
        ref: popoverRef,
        triggerRef: inputRef,
        scrollRef: listBoxRef,
        isNonModal: true,
        children: /* @__PURE__ */ jsx22(ListBox, { ref: listBoxRef, state, ...listBoxProps })
      }
    )
  ] });
};
Autocomplete.Item = Item2;

// src/ComboBox/ComboBox.tsx
import React from "react";
import { useButton as useButton4 } from "@react-aria/button";
import { useComboBox } from "@react-aria/combobox";
import { useFilter as useFilter2 } from "@react-aria/i18n";
import { Item as Item3 } from "@react-stately/collections";
import { useComboBoxState as useComboBoxState2 } from "@react-stately/combobox";
import { Fragment as Fragment3, jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var ComboBox = ({
  error,
  width,
  disabled,
  required,
  readOnly,
  defaultValue,
  value,
  onChange,
  variant,
  size,
  ...rest
}) => {
  const props = {
    isDisabled: disabled,
    isRequired: required,
    isReadOnly: readOnly,
    defaultInputValue: defaultValue,
    inputValue: value,
    onInputChange: onChange,
    ...rest
  };
  const { contains } = useFilter2({ sensitivity: "base" });
  const state = useComboBoxState2({ ...props, defaultFilter: contains });
  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps
  } = useComboBox(
    { ...props, inputRef, buttonRef, listBoxRef, popoverRef },
    state
  );
  const errorMessageProps = { "aria-invalid": error };
  const { buttonProps } = useButton4(triggerProps, buttonRef);
  const { label, description, errorMessage } = props;
  return /* @__PURE__ */ jsxs12(Fragment3, { children: [
    /* @__PURE__ */ jsx23(
      FieldBase,
      {
        label,
        labelProps,
        description,
        error,
        errorMessage,
        errorMessageProps,
        width,
        children: /* @__PURE__ */ jsx23(
          Input,
          {
            ...inputProps,
            ref: inputRef,
            action: /* @__PURE__ */ jsx23(
              Button,
              {
                className: "absolute right-2 h-4 w-4 border-none bg-transparent p-0",
                ref: buttonRef,
                ...buttonProps,
                children: /* @__PURE__ */ jsx23(ChevronDown, { className: "h-4 w-4" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx23(
      Popover,
      {
        state,
        ref: popoverRef,
        triggerRef: inputRef,
        scrollRef: listBoxRef,
        isNonModal: true,
        children: /* @__PURE__ */ jsx23(ListBox, { ref: listBoxRef, state, ...listBoxProps })
      }
    )
  ] });
};
ComboBox.Item = Item3;

// src/Badge/Badge.tsx
import { useClassNames as useClassNames10 } from "@marigold/system";
import { jsx as jsx24 } from "react/jsx-runtime";
var Badge = ({ variant, size, children, ...props }) => {
  const classNames2 = useClassNames10({ component: "Badge", variant, size });
  return /* @__PURE__ */ jsx24("div", { ...props, className: classNames2, children });
};

// src/Breakout/Breakout.tsx
import { alignment, cn as cn11, createVar as createVar4 } from "@marigold/system";
import { jsx as jsx25 } from "react/jsx-runtime";
var Breakout = ({
  height,
  children,
  orientation,
  alignX = "left",
  alignY = "center",
  ...props
}) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsx25(
    "div",
    {
      className: cn11(
        "col-start-[1_!important] col-end-[-1_!important] w-full",
        alignX && ((_b = (_a = alignment) == null ? void 0 : _a.horizontal) == null ? void 0 : _b.alignmentX[alignX]),
        alignY && ((_d = (_c = alignment) == null ? void 0 : _c.horizontal) == null ? void 0 : _d.alignmentY[alignY]),
        alignX || alignY ? "flex" : "block",
        "h-[--height]"
      ),
      style: createVar4({ height }),
      ...props,
      children
    }
  );
};

// src/Body/Body.tsx
import { useClassNames as useClassNames11 } from "@marigold/system";
import { jsx as jsx26 } from "react/jsx-runtime";
var Body = ({ children, variant, size, ...props }) => {
  const classNames2 = useClassNames11({ component: "Body", variant, size });
  return /* @__PURE__ */ jsx26("section", { ...props, className: classNames2, children });
};

// src/Card/Card.tsx
import {
  cn as cn12,
  gapSpace as gapSpace2,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingSpace,
  paddingSpaceX,
  paddingSpaceY,
  paddingTop,
  useClassNames as useClassNames12
} from "@marigold/system";
import { jsx as jsx27 } from "react/jsx-runtime";
var Card = ({
  children,
  variant,
  size,
  space = 0,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  ...props
}) => {
  const classNames2 = useClassNames12({ component: "Card", variant, size });
  return /* @__PURE__ */ jsx27(
    "div",
    {
      ...props,
      className: cn12(
        "flex flex-col",
        classNames2,
        gapSpace2[space],
        paddingSpace !== void 0 && paddingSpace[p],
        paddingSpaceX !== void 0 && paddingSpaceX[px],
        paddingSpaceY !== void 0 && paddingSpaceY[py],
        paddingRight !== void 0 && paddingRight[pr],
        paddingLeft !== void 0 && paddingLeft[pl],
        paddingBottom !== void 0 && paddingBottom[pb],
        paddingTop !== void 0 && paddingTop[pt]
      ),
      children
    }
  );
};

// src/Center/Center.tsx
import { cn as cn13, createVar as createVar5, gapSpace as gapSpace3 } from "@marigold/system";
import { jsx as jsx28 } from "react/jsx-runtime";
var Center = ({
  maxWidth = "100%",
  space = 0,
  children,
  ...props
}) => {
  return /* @__PURE__ */ jsx28(
    "div",
    {
      className: cn13(
        "me-[auto] ms-[auto] box-content flex flex-col items-center justify-center",
        gapSpace3[space],
        "max-w-[--maxWidth]"
      ),
      style: createVar5({ maxWidth }),
      ...props,
      children
    }
  );
};

// src/Checkbox/Checkbox.tsx
import { forwardRef as forwardRef9 } from "react";
import { useCheckbox, useCheckboxGroupItem } from "@react-aria/checkbox";
import { useFocusRing as useFocusRing4 } from "@react-aria/focus";
import { useHover as useHover3 } from "@react-aria/interactions";
import { useObjectRef as useObjectRef5 } from "@react-aria/utils";
import { useToggleState } from "@react-stately/toggle";
import {
  cn as cn14,
  useClassNames as useClassNames14,
  useStateProps as useStateProps6
} from "@marigold/system";

// src/Checkbox/CheckboxField.tsx
import { createVar as createVar6, useClassNames as useClassNames13 } from "@marigold/system";
import { jsx as jsx29, jsxs as jsxs13 } from "react/jsx-runtime";
var CheckboxField = ({ children, labelWidth }) => {
  const classNames2 = useClassNames13({ component: "Field" });
  return /* @__PURE__ */ jsxs13("div", { className: classNames2, children: [
    /* @__PURE__ */ jsx29("div", { className: "w-[--labelWidth]", style: createVar6({ labelWidth }) }),
    children
  ] });
};

// src/Checkbox/CheckboxGroup.tsx
import { createContext as createContext3, useContext as useContext3 } from "react";
import { useCheckboxGroup } from "@react-aria/checkbox";
import {
  useCheckboxGroupState
} from "@react-stately/checkbox";
import { useStateProps as useStateProps5 } from "@marigold/system";
import { jsx as jsx30 } from "react/jsx-runtime";
var CheckboxGroupContext = createContext3(
  null
);
var useCheckboxGroupContext = () => useContext3(CheckboxGroupContext);
var CheckboxGroup = ({
  children,
  required,
  disabled,
  readOnly,
  error,
  width,
  ...rest
}) => {
  const props = {
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readOnly,
    validationState: error ? "invalid" : "valid",
    ...rest
  };
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(props, state);
  const stateProps = useStateProps5({
    disabled,
    readOnly,
    error
  });
  return /* @__PURE__ */ jsx30(
    FieldBase,
    {
      label: props.label,
      labelProps: { as: "span", ...labelProps },
      description: props.description,
      descriptionProps,
      error,
      errorMessage: props.errorMessage,
      errorMessageProps,
      disabled,
      stateProps,
      width,
      ...groupProps,
      children: /* @__PURE__ */ jsx30("div", { role: "presentation", className: "flex flex-col items-start", children: /* @__PURE__ */ jsx30(CheckboxGroupContext.Provider, { value: { error, ...state }, children }) })
    }
  );
};

// src/Checkbox/Checkbox.tsx
import { jsx as jsx31, jsxs as jsxs14 } from "react/jsx-runtime";
var CheckMark = () => /* @__PURE__ */ jsx31("svg", { viewBox: "0 0 12 10", children: /* @__PURE__ */ jsx31(
  "path",
  {
    fill: "currentColor",
    stroke: "none",
    d: "M11.915 1.548 10.367 0 4.045 6.315 1.557 3.827 0 5.373l4.045 4.046 7.87-7.871Z"
  }
) });
var IndeterminateMark = () => /* @__PURE__ */ jsx31("svg", { width: "12", height: "3", viewBox: "0 0 12 3", children: /* @__PURE__ */ jsx31(
  "path",
  {
    fill: "currentColor",
    stroke: "none",
    d: "M11.5 2.04018H0.5V0.46875H11.5V2.04018Z"
  }
) });
var Icon = ({ className, checked, indeterminate, ...props }) => {
  return /* @__PURE__ */ jsx31(
    "div",
    {
      "aria-hidden": "true",
      className: cn14(
        "flex shrink-0 grow-0 basis-4 items-center justify-center",
        "h-4 w-4 p-px",
        "bg-white",
        "rounded-[3px] border border-solid border-black",
        className
      ),
      ...props,
      children: indeterminate ? /* @__PURE__ */ jsx31(IndeterminateMark, {}) : checked ? /* @__PURE__ */ jsx31(CheckMark, {}) : null
    }
  );
};
var Checkbox = forwardRef9(
  ({
    size,
    variant,
    disabled,
    checked,
    defaultChecked,
    indeterminate,
    readOnly,
    required,
    error,
    ...props
  }, ref) => {
    const inputRef = useObjectRef5(ref);
    const checkboxProps = {
      isIndeterminate: indeterminate,
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
      validationState: error ? "invalid" : "valid"
    };
    const groupState = useCheckboxGroupContext();
    const { inputProps } = groupState ? useCheckboxGroupItem(
      {
        ...props,
        ...checkboxProps,
        /**
         * value is optional for standalone checkboxes, but required when
         * used inside a group.
         */
        value: props.value
      },
      groupState,
      inputRef
    ) : useCheckbox(
      {
        isSelected: checked,
        defaultSelected: defaultChecked,
        ...checkboxProps,
        ...props
      },
      useToggleState({
        isSelected: checked,
        defaultSelected: defaultChecked,
        isReadOnly: readOnly,
        ...props
      }),
      inputRef
    );
    const classNames2 = useClassNames14({ component: "Checkbox", variant, size });
    const { hoverProps, isHovered } = useHover3({
      isDisabled: inputProps.disabled
    });
    const { labelWidth } = useFieldGroupContext();
    const { isFocusVisible, focusProps } = useFocusRing4();
    const stateProps = useStateProps6({
      hover: isHovered,
      focus: isFocusVisible,
      checked: inputProps.checked,
      disabled: inputProps.disabled,
      error: (groupState == null ? void 0 : groupState.error) || error,
      readOnly,
      indeterminate
    });
    const component = /* @__PURE__ */ jsxs14(
      "label",
      {
        className: cn14(
          "group/checkbox relative flex items-center gap-[1ch]",
          classNames2.container
        ),
        ...hoverProps,
        ...stateProps,
        children: [
          /* @__PURE__ */ jsx31(
            "input",
            {
              ref: inputRef,
              className: "z-1 absolute left-0 top-0 h-full w-full cursor-pointer opacity-[0.0001] group-disabled/checkbox:cursor-not-allowed",
              ...inputProps,
              ...focusProps
            }
          ),
          /* @__PURE__ */ jsx31(
            Icon,
            {
              checked: inputProps.checked,
              indeterminate,
              className: classNames2.checkbox
            }
          ),
          props.children && /* @__PURE__ */ jsx31("div", { className: classNames2.label, children: props.children })
        ]
      }
    );
    return !groupState && labelWidth ? /* @__PURE__ */ jsx31(CheckboxField, { labelWidth, children: component }) : component;
  }
);

// src/Columns/Columns.tsx
import { Children as Children3, cloneElement as cloneElement3, isValidElement as isValidElement2 } from "react";
import { cn as cn15, createVar as createVar7, gapSpace as gapSpace4 } from "@marigold/system";
import { jsx as jsx32 } from "react/jsx-runtime";
var Columns = ({
  space = 0,
  columns,
  collapseAt = "0em",
  stretch,
  children,
  ...props
}) => {
  if (Children3.count(children) !== columns.length) {
    throw new Error(
      `Columns: expected ${columns.length} children, got ${Children3.count(
        children
      )}`
    );
  }
  return /* @__PURE__ */ jsx32(
    "div",
    {
      className: cn15(
        "flex flex-wrap items-stretch",
        stretch && "h-full",
        gapSpace4[space]
      ),
      ...props,
      children: Children3.map(children, (child, idx) => /* @__PURE__ */ jsx32(
        "div",
        {
          className: cn15(
            "grow-[--columnSize] basis-[calc((var(--collapseAt)_-_100%)_*_999)]"
          ),
          style: createVar7({ collapseAt, columnSize: columns[idx] }),
          children: isValidElement2(child) ? cloneElement3(child) : child
        }
      ))
    }
  );
};

// src/Container/Container.tsx
import {
  cn as cn16,
  createVar as createVar8,
  gridColsAlign,
  gridColumn,
  placeItems
} from "@marigold/system";
import { jsx as jsx33 } from "react/jsx-runtime";
var content = {
  small: "20ch",
  medium: "45ch",
  large: "60ch"
};
var header = {
  small: "20ch",
  medium: "25ch",
  large: "35ch"
};
var Container = ({
  contentType = "content",
  size = "medium",
  align = "left",
  alignItems = "none",
  children,
  ...props
}) => {
  const maxWidth = contentType === "content" ? content[size] : header[size];
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: cn16(
        "grid",
        placeItems[alignItems],
        gridColsAlign[align],
        gridColumn[align]
      ),
      style: createVar8({ maxWidth }),
      ...props,
      children
    }
  );
};

// src/Dialog/Dialog.tsx
import {
  Children as Children5,
  cloneElement as cloneElement4,
  isValidElement as isValidElement3,
  useRef as useRef9
} from "react";
import { useButton as useButton5 } from "@react-aria/button";
import { useDialog } from "@react-aria/dialog";
import { cn as cn19, useClassNames as useClassNames17 } from "@marigold/system";

// src/Header/Header.tsx
import { cn as cn17, useClassNames as useClassNames15 } from "@marigold/system";
import { jsx as jsx34 } from "react/jsx-runtime";
var Header = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  const classNames2 = useClassNames15({
    component: "Header",
    variant,
    size,
    className
  });
  return /* @__PURE__ */ jsx34("header", { ...props, className: cn17(classNames2), children });
};

// src/Headline/Headline.tsx
import {
  cn as cn18,
  createVar as createVar9,
  get,
  textAlign,
  useClassNames as useClassNames16,
  useTheme as useTheme2
} from "@marigold/system";
import { jsx as jsx35 } from "react/jsx-runtime";
var Headline = ({
  children,
  variant,
  size,
  align = "left",
  color,
  level = "1",
  as = `h${level}`,
  ...props
}) => {
  const theme = useTheme2();
  const classNames2 = useClassNames16({
    component: "Headline",
    variant,
    size: size != null ? size : `level-${level}`
  });
  const Component = as;
  return /* @__PURE__ */ jsx35(
    Component,
    {
      ...props,
      className: cn18(classNames2, "text-[--color]", textAlign[align]),
      style: createVar9({
        color: color && theme.colors && get(
          theme.colors,
          color.replace("-", "."),
          color
          /* fallback */
        )
      }),
      children
    }
  );
};

// src/Dialog/Context.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var DialogContext = createContext4({});
var useDialogContext = () => useContext4(DialogContext);

// src/Dialog/DialogController.tsx
import { useOverlayTriggerState } from "@react-stately/overlays";
import { jsx as jsx36 } from "react/jsx-runtime";
var DialogController = ({
  children,
  dismissable = true,
  keyboardDismissable = true,
  open,
  onOpenChange
}) => {
  const state = useOverlayTriggerState({
    isOpen: open,
    onOpenChange
  });
  const ctx = { open: state.isOpen, close: state.close };
  return /* @__PURE__ */ jsx36(DialogContext.Provider, { value: ctx, children: /* @__PURE__ */ jsx36(Overlay, { open: state.isOpen, children: /* @__PURE__ */ jsx36(
    Modal,
    {
      open: state.isOpen,
      onClose: state.close,
      dismissable,
      keyboardDismissable,
      children
    }
  ) }) });
};

// src/Dialog/DialogTrigger.tsx
import { Children as Children4, useRef as useRef8 } from "react";
import { PressResponder } from "@react-aria/interactions";
import { useOverlayTriggerState as useOverlayTriggerState2 } from "@react-stately/overlays";
import { jsx as jsx37, jsxs as jsxs15 } from "react/jsx-runtime";
var DialogTrigger = ({
  children,
  dismissable = true,
  keyboardDismissable = true
}) => {
  const [dialogTrigger, dialog] = Children4.toArray(children);
  const dialogTriggerRef = useRef8(null);
  const state = useOverlayTriggerState2({});
  const ctx = { open: state.isOpen, close: state.close };
  return /* @__PURE__ */ jsxs15(DialogContext.Provider, { value: ctx, children: [
    /* @__PURE__ */ jsx37(
      PressResponder,
      {
        ref: dialogTriggerRef,
        isPressed: state.isOpen,
        onPress: state.toggle,
        children: dialogTrigger
      }
    ),
    /* @__PURE__ */ jsx37(Overlay, { open: state.isOpen, children: /* @__PURE__ */ jsx37(
      Modal,
      {
        open: state.isOpen,
        onClose: state.close,
        dismissable,
        keyboardDismissable,
        children: dialog
      }
    ) })
  ] });
};

// src/Dialog/Dialog.tsx
import { jsx as jsx38, jsxs as jsxs16 } from "react/jsx-runtime";
var CloseButton = ({ className }) => {
  const ref = useRef9(null);
  const { close } = useDialogContext();
  const { buttonProps } = useButton5(
    {
      onPress: () => close == null ? void 0 : close()
    },
    ref
  );
  return /* @__PURE__ */ jsx38("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx38(
    "button",
    {
      className: cn19(
        "h-4 w-4 cursor-pointer border-none p-0 leading-normal outline-0",
        className
      ),
      ref,
      ...buttonProps,
      children: /* @__PURE__ */ jsx38("svg", { viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx38(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        }
      ) })
    }
  ) });
};
var addTitleProps = (children, titleProps) => {
  const childs = Children5.toArray(children);
  const titleIndex = childs.findIndex(
    (child) => isValidElement3(child) && (child.type === Header || child.type === Headline)
  );
  if (titleIndex < 0) {
    console.warn(
      "No child in <Dialog> found that can act as title for accessibility. Please add a <Header> or <Headline> as direct child."
    );
    return children;
  }
  const titleChild = cloneElement4(
    childs[titleIndex],
    titleProps
  );
  childs.splice(titleIndex, 1, titleChild);
  return childs;
};
var Dialog = ({
  children,
  variant,
  size,
  closeButton,
  ...props
}) => {
  const ref = useRef9(null);
  const { close } = useDialogContext();
  const { dialogProps, titleProps } = useDialog(props, ref);
  const classNames2 = useClassNames17({ component: "Dialog", variant, size });
  return /* @__PURE__ */ jsxs16("div", { className: classNames2.container, ...dialogProps, children: [
    closeButton && /* @__PURE__ */ jsx38(CloseButton, { className: classNames2.closeButton }),
    typeof children === "function" ? children({ close, titleProps }) : props["aria-labelledby"] ? children : addTitleProps(children, titleProps)
  ] });
};
Dialog.Trigger = DialogTrigger;
Dialog.Controller = DialogController;

// src/Divider/Divider.tsx
import { useSeparator } from "@react-aria/separator";
import { useClassNames as useClassNames18 } from "@marigold/system";
import { jsx as jsx39 } from "react/jsx-runtime";
var Divider = ({ variant, ...props }) => {
  const { separatorProps } = useSeparator(props);
  const classNames2 = useClassNames18({ component: "Divider", variant });
  return /* @__PURE__ */ jsx39("div", { className: classNames2, ...props, ...separatorProps });
};

// src/Footer/Footer.tsx
import { useClassNames as useClassNames19 } from "@marigold/system";
import { jsx as jsx40 } from "react/jsx-runtime";
var Footer = ({ children, variant, size, ...props }) => {
  const classNames2 = useClassNames19({ component: "Footer", variant, size });
  return /* @__PURE__ */ jsx40("footer", { ...props, className: classNames2, children });
};

// src/Image/Image.tsx
import {
  cn as cn20,
  objectFit,
  objectPosition,
  useClassNames as useClassNames20
} from "@marigold/system";
import { jsx as jsx41 } from "react/jsx-runtime";
var Image = ({
  variant,
  size,
  fit = "none",
  position = "none",
  ...props
}) => {
  const classNames2 = useClassNames20({ component: "Image", variant, size });
  return /* @__PURE__ */ jsx41(
    "img",
    {
      ...props,
      alt: props.alt,
      className: cn20(
        fit !== "none" && "h-full w-full",
        classNames2,
        objectFit[fit],
        objectPosition[position]
      )
    }
  );
};

// src/Inline/Inline.tsx
import {
  alignment as alignment2,
  cn as cn21,
  gapSpace as gapSpace5
} from "@marigold/system";
import { jsx as jsx42 } from "react/jsx-runtime";
var Inline = ({
  space = 0,
  orientation,
  alignX = ((_a) => (_a = orientation == null ? void 0 : orientation.horizontal) == null ? void 0 : _a.alignX)(),
  alignY = ((_b) => (_b = orientation == null ? void 0 : orientation.horizontal) == null ? void 0 : _b.alignY)(),
  children,
  ...props
}) => {
  var _a2, _b2, _c, _d;
  return /* @__PURE__ */ jsx42(
    "div",
    {
      className: cn21(
        "flex flex-wrap",
        gapSpace5[space],
        alignX && ((_b2 = (_a2 = alignment2) == null ? void 0 : _a2.horizontal) == null ? void 0 : _b2.alignmentX[alignX]),
        alignY && ((_d = (_c = alignment2) == null ? void 0 : _c.horizontal) == null ? void 0 : _d.alignmentY[alignY])
      ),
      ...props,
      children
    }
  );
};

// src/DateField/DateField.tsx
import { createCalendar } from "@internationalized/date";
import { useRef as useRef11 } from "react";
import { useDateField } from "@react-aria/datepicker";
import { useFocusRing as useFocusRing6 } from "@react-aria/focus";
import { useLocale } from "@react-aria/i18n";
import { useHover as useHover4 } from "@react-aria/interactions";
import { mergeProps as mergeProps8 } from "@react-aria/utils";
import { useDateFieldState } from "@react-stately/datepicker";
import { cn as cn23, useClassNames as useClassNames21, useStateProps as useStateProps8 } from "@marigold/system";

// src/DateField/DateSegment.tsx
import { useRef as useRef10 } from "react";
import { useDateSegment } from "@react-aria/datepicker";
import { useFocusRing as useFocusRing5 } from "@react-aria/focus";
import { mergeProps as mergeProps7 } from "@react-aria/utils";
import { cn as cn22, useStateProps as useStateProps7 } from "@marigold/system";
import { jsx as jsx43, jsxs as jsxs17 } from "react/jsx-runtime";
var DateSegment = ({
  className,
  segment,
  state,
  isPrevPlaceholder
}) => {
  const ref = useRef10(null);
  const { segmentProps } = useDateSegment(segment, state, ref);
  const { focusProps, isFocused } = useFocusRing5({
    within: true,
    isTextInput: true
  });
  const stateProps = useStateProps7({
    disabled: state.isDisabled,
    focusVisible: isFocused
  });
  const { isPlaceholder, placeholder, text, type, maxValue } = segment;
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      ...mergeProps7(segmentProps, stateProps, focusProps),
      ref,
      className: cn22(
        "group/segment",
        "text-center leading-none outline-0",
        type !== "literal" && "p-0.5",
        className
      ),
      style: {
        ...segmentProps.style,
        minWidth: maxValue != null ? String(maxValue).length + "ch" : void 0
      },
      children: [
        /* @__PURE__ */ jsx43(
          "span",
          {
            "aria-hidden": "true",
            className: cn22(
              isPlaceholder ? "visible block" : "invisible hidden",
              "pointer-events-none w-full text-center"
            ),
            children: isPlaceholder && (placeholder == null ? void 0 : placeholder.toUpperCase())
          }
        ),
        /* @__PURE__ */ jsx43("span", { children: isPlaceholder ? "" : type === "month" || type === "day" ? Number(text) < 10 ? "0" + text : text : text })
      ]
    }
  );
};

// src/DateField/DateField.tsx
import { jsx as jsx44, jsxs as jsxs18 } from "react/jsx-runtime";
var DateField = ({
  disabled,
  readOnly,
  required,
  error,
  errorMessage,
  errorMessageProps,
  variant,
  size,
  action,
  isPressed,
  triggerRef,
  width,
  ...res
}) => {
  const { locale } = useLocale();
  const props = {
    isDisabled: disabled,
    isReadOnly: readOnly,
    isRequired: required,
    ...res
  };
  const { label, description } = props;
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });
  const ref = useRef11(null);
  const { fieldProps, labelProps, descriptionProps } = useDateField(
    props,
    state,
    ref
  );
  const classNames2 = useClassNames21({ component: "DateField", variant, size });
  const { focusProps, isFocused } = useFocusRing6({
    within: true,
    isTextInput: true,
    autoFocus: props.autoFocus
  });
  const { hoverProps, isHovered } = useHover4({ isDisabled: disabled });
  const stateProps = useStateProps8({
    hover: isHovered,
    error,
    readOnly,
    disabled,
    required,
    focus: isFocused || isPressed
  });
  return /* @__PURE__ */ jsx44(
    FieldBase,
    {
      error,
      errorMessage,
      errorMessageProps,
      label,
      labelProps,
      description,
      descriptionProps,
      disabled,
      stateProps,
      variant,
      size,
      width,
      children: /* @__PURE__ */ jsxs18(
        "div",
        {
          ...mergeProps8(fieldProps, focusProps, stateProps, hoverProps),
          className: cn23(
            "relative flex flex-row flex-nowrap",
            "cursor-text aria-disabled:cursor-not-allowed",
            classNames2.field
          ),
          "data-testid": "date-field",
          ref: triggerRef,
          children: [
            /* @__PURE__ */ jsx44("div", { ref, className: "flex basis-full items-center", children: state.segments.map((segment, i) => {
              var _a;
              return /* @__PURE__ */ jsx44(
                DateSegment,
                {
                  className: classNames2.segment,
                  isPrevPlaceholder: (_a = state.segments[i - 1]) == null ? void 0 : _a.isPlaceholder,
                  segment,
                  state
                },
                i
              );
            }) }),
            action ? action : /* @__PURE__ */ jsx44("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx44(
              "svg",
              {
                "data-testid": "action",
                className: cn23(classNames2.action),
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                children: /* @__PURE__ */ jsx44("path", { d: "M20.0906 19.2V6.6C20.0906 5.61 19.2806 4.8 18.2906 4.8H17.3906V3H15.5906V4.8H8.39062V3H6.59062V4.8H5.69063C4.69163 4.8 3.89962 5.61 3.89962 6.6L3.89062 19.2C3.89062 20.19 4.69163 21 5.69063 21H18.2906C19.2806 21 20.0906 20.19 20.0906 19.2ZM9.29062 11.1001H7.49061V12.9001H9.29062V11.1001ZM5.69062 8.40009H18.2906V6.60008H5.69062V8.40009ZM18.2906 10.2V19.2H5.69062V10.2H18.2906ZM14.6906 12.9001H16.4906V11.1001H14.6906V12.9001ZM12.8906 12.9001H11.0906V11.1001H12.8906V12.9001Z" })
              }
            ) })
          ]
        }
      )
    }
  );
};

// src/Calendar/Calendar.tsx
import { createCalendar as createCalendar2 } from "@internationalized/date";
import { useRef as useRef14 } from "react";
import {
  useCalendar
} from "@react-aria/calendar";
import { useLocale as useLocale3 } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { ChevronLeft, ChevronRight } from "@marigold/icons";
import { cn as cn26, useClassNames as useClassNames24, useStateProps as useStateProps11 } from "@marigold/system";

// src/Calendar/CalendarGrid.tsx
import { getWeeksInMonth, startOfWeek, today } from "@internationalized/date";
import { useMemo } from "react";
import { useCalendarGrid } from "@react-aria/calendar";
import { useLocale as useLocale2 } from "@react-aria/i18n";
import { useDateFormatter } from "@react-aria/i18n";

// src/Calendar/CalendarCell.tsx
import { useRef as useRef12 } from "react";
import { useCalendarCell } from "@react-aria/calendar";
import { useHover as useHover5 } from "@react-aria/interactions";
import { mergeProps as mergeProps9 } from "@react-aria/utils";
import { cn as cn24, useClassNames as useClassNames22, useStateProps as useStateProps9 } from "@marigold/system";
import { jsx as jsx45 } from "react/jsx-runtime";
var CalendarCell = (props) => {
  const ref = useRef12(null);
  const { state } = props;
  let { cellProps, buttonProps, formattedDate, isOutsideVisibleRange } = useCalendarCell(props, state, ref);
  const classNames2 = useClassNames22({
    component: "Calendar"
  });
  const isDisabled = cellProps["aria-disabled"];
  const { hoverProps, isHovered } = useHover5({
    isDisabled: isDisabled || cellProps["aria-selected"]
  });
  const stateProps = useStateProps9({
    disabled: isDisabled,
    hover: isHovered,
    selected: cellProps["aria-selected"]
  });
  return /* @__PURE__ */ jsx45("td", { className: "group/cell", ...cellProps, children: /* @__PURE__ */ jsx45(
    "div",
    {
      className: cn24(
        "flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full p-[5.3px] text-sm font-normal aria-disabled:cursor-default",
        classNames2.calendarCell
      ),
      hidden: isOutsideVisibleRange,
      ref,
      ...mergeProps9(buttonProps, stateProps, hoverProps),
      children: formattedDate
    }
  ) });
};

// src/Calendar/CalendarGrid.tsx
import { jsx as jsx46, jsxs as jsxs19 } from "react/jsx-runtime";
var CalendarGrid = ({ state, ...props }) => {
  const { locale } = useLocale2();
  const { gridProps, headerProps } = useCalendarGrid(props, state);
  const numberOfWeeksInMonth = getWeeksInMonth(
    state.visibleRange.start,
    locale
  );
  const dayFormatter = useDateFormatter({
    weekday: "short",
    timeZone: state.timeZone
  });
  const weekDays = useMemo(() => {
    const weekStart = startOfWeek(today(state.timeZone), locale);
    return [...new Array(7).keys()].map((index) => {
      const date = weekStart.add({ days: index });
      const dateDay = date.toDate(state.timeZone);
      return dayFormatter.format(dateDay);
    });
  }, [locale, state.timeZone, dayFormatter]);
  return /* @__PURE__ */ jsxs19(
    "table",
    {
      className: "w-full border-spacing-[6px]",
      ...gridProps,
      cellPadding: "8",
      children: [
        /* @__PURE__ */ jsx46("thead", { ...headerProps, children: /* @__PURE__ */ jsx46("tr", { children: weekDays.map((day, index) => /* @__PURE__ */ jsx46("th", { style: { fontWeight: "bolder" }, children: day.substring(0, 2) }, index)) }) }),
        /* @__PURE__ */ jsx46("tbody", { children: [...new Array(numberOfWeeksInMonth).keys()].map((weekIndex) => /* @__PURE__ */ jsx46("tr", { children: state.getDatesInWeek(weekIndex).map(
          (date, i) => date ? /* @__PURE__ */ jsx46(
            CalendarCell,
            {
              date,
              state
            },
            i
          ) : /* @__PURE__ */ jsx46("td", {}, i)
        ) }, weekIndex)) })
      ]
    }
  );
};

// src/Calendar/MonthDropdown.tsx
import { useDateFormatter as useDateFormatter2 } from "@react-aria/i18n";

// src/Select/Select.tsx
import {
  forwardRef as forwardRef10,
  useRef as useRef13
} from "react";
import { useButton as useButton6 } from "@react-aria/button";
import { useFocusRing as useFocusRing7 } from "@react-aria/focus";
import { useLocalizedStringFormatter } from "@react-aria/i18n";
import { HiddenSelect, useSelect } from "@react-aria/select";
import { mergeProps as mergeProps10, useObjectRef as useObjectRef6 } from "@react-aria/utils";
import { Item as Item4, Section } from "@react-stately/collections";
import { useSelectState } from "@react-stately/select";
import {
  cn as cn25,
  useClassNames as useClassNames23,
  useSmallScreen,
  useStateProps as useStateProps10
} from "@marigold/system";

// src/Select/intl.ts
var messages = {
  "en-US": {
    placeholder: "Select an option\u2026"
  },
  "de-DE": {
    placeholder: "Option ausw\xE4hlen\u2026"
  }
};

// src/Select/Select.tsx
import { jsx as jsx47, jsxs as jsxs20 } from "react/jsx-runtime";
var Select = forwardRef10(
  ({
    variant,
    size,
    width,
    open,
    disabled,
    required,
    error,
    onChange,
    ...rest
  }, ref) => {
    const formatMessage = useLocalizedStringFormatter(messages);
    const props = {
      isOpen: open,
      isDisabled: disabled,
      isRequired: required,
      validationState: error ? "invalid" : "valid",
      placeholder: rest.placeholder || formatMessage.format("placeholder"),
      onSelectionChange: onChange,
      ...rest
    };
    const buttonRef = useObjectRef6(ref);
    const listboxRef = useRef13(null);
    const state = useSelectState(props);
    const {
      labelProps,
      triggerProps,
      valueProps,
      menuProps,
      descriptionProps,
      errorMessageProps
    } = useSelect(props, state, buttonRef);
    const { buttonProps } = useButton6(
      { isDisabled: disabled, ...triggerProps },
      buttonRef
    );
    const { focusProps, isFocusVisible } = useFocusRing7();
    const classNames2 = useClassNames23({ component: "Select", variant, size });
    const isSmallScreen = useSmallScreen();
    const stateProps = useStateProps10({
      disabled,
      error,
      focusVisible: isFocusVisible,
      expanded: state.isOpen,
      required
    });
    return /* @__PURE__ */ jsxs20(
      FieldBase,
      {
        variant,
        size,
        width,
        label: props.label,
        labelProps: { as: "span", ...labelProps },
        description: props.description,
        descriptionProps,
        error,
        errorMessage: props.errorMessage,
        errorMessageProps,
        stateProps,
        disabled,
        children: [
          /* @__PURE__ */ jsx47(
            HiddenSelect,
            {
              state,
              triggerRef: buttonRef,
              label: props.label,
              name: props.name,
              isDisabled: disabled
            }
          ),
          /* @__PURE__ */ jsxs20(
            "button",
            {
              className: cn25(
                "flex w-full items-center justify-between gap-1",
                classNames2.select
              ),
              ref: buttonRef,
              ...mergeProps10(buttonProps, focusProps),
              ...stateProps,
              children: [
                /* @__PURE__ */ jsx47("div", { className: "overflow-hidden whitespace-nowrap", ...valueProps, children: state.selectedItem ? state.selectedItem.rendered : props.placeholder }),
                /* @__PURE__ */ jsx47(ChevronDown, { className: "h-4 w-4" })
              ]
            }
          ),
          isSmallScreen ? /* @__PURE__ */ jsx47(Tray, { state, children: /* @__PURE__ */ jsx47(
            ListBox,
            {
              ref: listboxRef,
              state,
              variant,
              size,
              ...menuProps
            }
          ) }) : /* @__PURE__ */ jsx47(Popover, { state, triggerRef: buttonRef, scrollRef: listboxRef, children: /* @__PURE__ */ jsx47(
            ListBox,
            {
              ref: listboxRef,
              state,
              variant,
              size,
              ...menuProps
            }
          ) })
        ]
      }
    );
  }
);
Select.Option = Item4;
Select.Section = Section;

// src/Calendar/MonthDropdown.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
var MonthDropdown = ({ state }) => {
  let months = [];
  let formatter = useDateFormatter2({
    month: "long",
    timeZone: state.timeZone
  });
  let numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i++) {
    let date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }
  let onChange = (index) => {
    let value = Number(index);
    let date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };
  return /* @__PURE__ */ jsx48(
    Select,
    {
      "aria-label": "Month",
      onChange,
      selectedKey: String(state.focusedDate.month),
      "data-testid": "month",
      disabled: state.isDisabled,
      children: months.map((month, i) => /* @__PURE__ */ jsx48(Select.Option, { children: month.substring(0, 3) }, i + 1))
    }
  );
};
var MonthDropdown_default = MonthDropdown;

// src/Calendar/YearDropdown.tsx
import { useDateFormatter as useDateFormatter3 } from "@react-aria/i18n";
import { jsx as jsx49 } from "react/jsx-runtime";
var YearDropdown = ({ state }) => {
  const years = [];
  let formatter = useDateFormatter3({
    year: "numeric",
    timeZone: state.timeZone
  });
  for (let i = -20; i <= 20; i++) {
    let date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone))
    });
  }
  let onChange = (key) => {
    let index = Number(key);
    let date = years[index].value;
    state.setFocusedDate(date);
  };
  return /* @__PURE__ */ jsx49(
    Select,
    {
      "aria-label": "Year",
      selectedKey: "20",
      onChange,
      "data-testid": "year",
      disabled: state.isDisabled,
      children: years.map((year, i) => /* @__PURE__ */ jsx49(Select.Option, { children: year.formatted }, i))
    }
  );
};
var YearDropdown_default = YearDropdown;

// src/Calendar/Calendar.tsx
import { jsx as jsx50, jsxs as jsxs21 } from "react/jsx-runtime";
var Calendar = ({
  disabled,
  readOnly,
  size,
  variant,
  ...rest
}) => {
  const { locale } = useLocale3();
  const props = {
    isDisabled: disabled,
    isReadOnly: readOnly,
    ...rest
  };
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar: createCalendar2
  });
  const ref = useRef14(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );
  const {
    isDisabled: prevIsDisabled,
    onFocusChange: prevFocusChange,
    ...prevPropsRest
  } = prevButtonProps;
  const {
    isDisabled: nextIsDisabled,
    onFocusChange: nextFocusChange,
    ...nextPropsRest
  } = nextButtonProps;
  const calendarState = useStateProps11({
    disabled: state.isDisabled,
    focusVisible: state.isFocused
  });
  const classNames2 = useClassNames24({ component: "Calendar" });
  return /* @__PURE__ */ jsxs21(
    "div",
    {
      tabIndex: -1,
      className: cn26(
        "flex w-[360px] flex-col rounded-sm p-4 shadow-[0_4px_4px_rgba(165,165,165,0.25)]",
        classNames2.calendar
      ),
      ...calendarProps,
      ...calendarState,
      ref,
      children: [
        /* @__PURE__ */ jsxs21("div", { className: "mb-4 flex items-center gap-[60px]", children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex min-w-[170px] gap-[9px] [&_div]:flex", children: [
            /* @__PURE__ */ jsx50(MonthDropdown_default, { state }),
            /* @__PURE__ */ jsx50(YearDropdown_default, { state })
          ] }),
          /* @__PURE__ */ jsxs21("div", { className: "flex w-full flex-nowrap justify-end gap-[10px] [&_button:disabled]:cursor-not-allowed [&_button]:px-2 [&_button]:py-1", children: [
            /* @__PURE__ */ jsx50(
              Button,
              {
                className: classNames2.calendarControllers,
                ...prevPropsRest,
                disabled: prevIsDisabled,
                children: /* @__PURE__ */ jsx50(ChevronLeft, {})
              }
            ),
            /* @__PURE__ */ jsx50(
              Button,
              {
                className: classNames2.calendarControllers,
                ...nextPropsRest,
                disabled: nextIsDisabled,
                children: /* @__PURE__ */ jsx50(ChevronRight, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx50(CalendarGrid, { state })
      ]
    }
  );
};

// src/DatePicker/DatePicker.tsx
import { useRef as useRef15 } from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { mergeProps as mergeProps11 } from "@react-aria/utils";
import { useDatePickerState } from "@react-stately/datepicker";
import { cn as cn27, useClassNames as useClassNames25, useStateProps as useStateProps12 } from "@marigold/system";
import { Fragment as Fragment4, jsx as jsx51, jsxs as jsxs22 } from "react/jsx-runtime";
var DatePicker = ({
  disabled,
  required,
  readonly,
  open,
  error,
  shouldCloseOnSelect,
  variant,
  size,
  ...rest
}) => {
  const props = {
    isDisabled: disabled,
    isReadOnly: readonly,
    isRequired: required,
    isOpen: open,
    ...rest
  };
  const state = useDatePickerState({
    shouldCloseOnSelect,
    ...props
  });
  const ref = useRef15(null);
  const stateProps = useStateProps12({
    focus: state.isOpen
  });
  const { groupProps, fieldProps, buttonProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );
  const { isDisabled, errorMessage, description, label } = props;
  const classNames2 = useClassNames25({
    component: "DatePicker",
    size,
    variant
  });
  return /* @__PURE__ */ jsxs22(Fragment4, { children: [
    /* @__PURE__ */ jsx51("div", { className: "flex w-full min-w-[300px]", ...groupProps, children: /* @__PURE__ */ jsx51(
      DateField,
      {
        ...fieldProps,
        label,
        isPressed: state.isOpen,
        disabled,
        required,
        errorMessage,
        error,
        description: !state.isOpen && description,
        triggerRef: ref,
        action: /* @__PURE__ */ jsx51("div", { className: classNames2.container, children: /* @__PURE__ */ jsx51(
          Button,
          {
            ...mergeProps11(buttonProps, stateProps),
            className: cn27("absolute right-0 top-0", classNames2.button),
            disabled: isDisabled,
            children: /* @__PURE__ */ jsx51(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx51("path", { d: "M20.0906 19.2V6.6C20.0906 5.61 19.2806 4.8 18.2906 4.8H17.3906V3H15.5906V4.8H8.39062V3H6.59062V4.8H5.69063C4.69163 4.8 3.89962 5.61 3.89962 6.6L3.89062 19.2C3.89062 20.19 4.69163 21 5.69063 21H18.2906C19.2806 21 20.0906 20.19 20.0906 19.2ZM9.29062 11.1001H7.49061V12.9001H9.29062V11.1001ZM5.69062 8.40009H18.2906V6.60008H5.69062V8.40009ZM18.2906 10.2V19.2H5.69062V10.2H18.2906ZM14.6906 12.9001H16.4906V11.1001H14.6906V12.9001ZM12.8906 12.9001H11.0906V11.1001H12.8906V12.9001Z" })
              }
            )
          }
        ) })
      }
    ) }),
    state.isOpen && /* @__PURE__ */ jsx51(Popover, { triggerRef: ref, state, children: /* @__PURE__ */ jsx51(Calendar, { disabled, ...calendarProps }) })
  ] });
};

// src/Inset/Inset.tsx
import {
  cn as cn28,
  paddingSpace as paddingSpace2,
  paddingSpaceX as paddingSpaceX2,
  paddingSpaceY as paddingSpaceY2
} from "@marigold/system";
import { jsx as jsx52 } from "react/jsx-runtime";
var Inset = ({ space, spaceX, spaceY, children }) => /* @__PURE__ */ jsx52(
  "div",
  {
    className: cn28(
      space && paddingSpace2[space],
      !space && spaceX && paddingSpaceX2[spaceX],
      !space && spaceY && paddingSpaceY2[spaceY]
    ),
    children
  }
);

// src/Link/Link.tsx
import { forwardRef as forwardRef11 } from "react";
import { useLink } from "@react-aria/link";
import { useObjectRef as useObjectRef7 } from "@react-aria/utils";
import { useClassNames as useClassNames26 } from "@marigold/system";
import { jsx as jsx53 } from "react/jsx-runtime";
var Link = forwardRef11(
  ({
    as = "a",
    variant,
    size,
    children,
    disabled,
    onPress,
    onPressStart,
    className,
    ...props
  }, ref) => {
    const linkRef = useObjectRef7(ref);
    const { linkProps } = useLink(
      {
        ...props,
        elementType: typeof as === "string" ? as : "span",
        isDisabled: disabled
      },
      linkRef
    );
    const Component = as;
    const classNames2 = useClassNames26({
      component: "Link",
      variant,
      size,
      className
    });
    return /* @__PURE__ */ jsx53(
      Component,
      {
        ...props,
        role: "link",
        className: classNames2,
        ref: linkRef,
        ...linkProps,
        children
      }
    );
  }
);

// src/List/List.tsx
import { useClassNames as useClassNames27 } from "@marigold/system";

// src/List/Context.ts
import { createContext as createContext5, useContext as useContext5 } from "react";
var ListContext = createContext5({});
var useListContext = () => useContext5(ListContext);

// src/List/ListItem.tsx
import { jsx as jsx54 } from "react/jsx-runtime";
var ListItem = ({ children, ...props }) => {
  const { classNames: classNames2 } = useListContext();
  return /* @__PURE__ */ jsx54("li", { ...props, className: classNames2, children });
};

// src/List/List.tsx
import { jsx as jsx55 } from "react/jsx-runtime";
var List = ({
  as = "ul",
  children,
  variant,
  size,
  ...props
}) => {
  const Component = as;
  const classNames2 = useClassNames27({ component: "List", variant, size });
  return /* @__PURE__ */ jsx55(Component, { ...props, className: classNames2[as], children: /* @__PURE__ */ jsx55(ListContext.Provider, { value: { classNames: classNames2.item }, children }) });
};
List.Item = ListItem;

// src/Menu/Menu.tsx
import { useRef as useRef18 } from "react";
import { useMenu } from "@react-aria/menu";
import { useSyncRef } from "@react-aria/utils";
import { Item as Item5, Section as Section2 } from "@react-stately/collections";
import { useTreeState as useTreeState2 } from "@react-stately/tree";
import { useClassNames as useClassNames29 } from "@marigold/system";

// src/Menu/Context.ts
import {
  createContext as createContext6,
  useContext as useContext6
} from "react";
var MenuContext = createContext6({});
var useMenuContext = () => useContext6(MenuContext);

// src/Menu/MenuItem.tsx
import { useRef as useRef16 } from "react";
import { useFocusRing as useFocusRing8 } from "@react-aria/focus";
import { useMenuItem } from "@react-aria/menu";
import { mergeProps as mergeProps12 } from "@react-aria/utils";
import { useStateProps as useStateProps13 } from "@marigold/system";
import { jsx as jsx56 } from "react/jsx-runtime";
var MenuItem = ({
  item,
  state,
  onAction,
  className
}) => {
  const ref = useRef16(null);
  const { onClose } = useMenuContext();
  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing8();
  const stateProps = useStateProps13({
    focus: isFocusVisible
  });
  const { onPointerUp, ...props } = menuItemProps;
  return /* @__PURE__ */ jsx56(
    "li",
    {
      ref,
      className,
      ...mergeProps12(
        props,
        { onPointerDown: onPointerUp },
        stateProps,
        focusProps
      ),
      children: item.props.children
    }
  );
};

// src/Menu/MenuSection.tsx
import { useMenuSection } from "@react-aria/menu";
import { useClassNames as useClassNames28 } from "@marigold/system";
import { Fragment as Fragment5, jsx as jsx57, jsxs as jsxs23 } from "react/jsx-runtime";
var MenuSection = ({ onAction, item, state }) => {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    "aria-label": item["aria-label"]
  });
  const className = useClassNames28({ component: "Menu" });
  return /* @__PURE__ */ jsxs23(Fragment5, { children: [
    item.key !== state.collection.getFirstKey() && /* @__PURE__ */ jsx57("li", { children: /* @__PURE__ */ jsx57(Divider, { variant: "section" }) }),
    /* @__PURE__ */ jsxs23("li", { ...itemProps, children: [
      item.rendered && /* @__PURE__ */ jsx57("span", { ...headingProps, className: className.section, children: item.rendered }),
      /* @__PURE__ */ jsx57("ul", { ...groupProps, className: "pb-1", children: [...item.props.children].map((node) => /* @__PURE__ */ jsx57(
        MenuItem,
        {
          item: node,
          state,
          onAction,
          className: className.item
        },
        node.key
      )) })
    ] })
  ] });
};
var MenuSection_default = MenuSection;

// src/Menu/MenuTrigger.tsx
import { Children as Children6, useRef as useRef17 } from "react";
import { PressResponder as PressResponder2 } from "@react-aria/interactions";
import { useMenuTrigger } from "@react-aria/menu";
import { useObjectRef as useObjectRef8 } from "@react-aria/utils";
import { useMenuTriggerState } from "@react-stately/menu";
import { useSmallScreen as useSmallScreen2 } from "@marigold/system";
import { jsx as jsx58, jsxs as jsxs24 } from "react/jsx-runtime";
var MenuTrigger = ({
  disabled,
  open,
  onOpenChange,
  children
}) => {
  const [menuTrigger, menu] = Children6.toArray(children);
  const menuTriggerRef = useRef17(null);
  const menuRef = useObjectRef8();
  const state = useMenuTriggerState({
    isOpen: open,
    onOpenChange
  });
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger: "press", isDisabled: disabled },
    state,
    menuTriggerRef
  );
  const menuContext = {
    ...menuProps,
    ref: menuRef,
    open: state.isOpen,
    onClose: state.close,
    autoFocus: state.focusStrategy
  };
  const isSmallScreen = useSmallScreen2();
  return /* @__PURE__ */ jsxs24(MenuContext.Provider, { value: menuContext, children: [
    /* @__PURE__ */ jsx58(
      PressResponder2,
      {
        ...menuTriggerProps,
        ref: menuTriggerRef,
        isPressed: state.isOpen,
        children: menuTrigger
      }
    ),
    isSmallScreen ? /* @__PURE__ */ jsx58(Tray, { state, children: menu }) : /* @__PURE__ */ jsx58(Popover, { triggerRef: menuTriggerRef, scrollRef: menuRef, state, children: menu })
  ] });
};

// src/Menu/Menu.tsx
import { jsx as jsx59 } from "react/jsx-runtime";
var Menu = ({ variant, size, ...props }) => {
  const { ref: scrollRef, ...menuContext } = useMenuContext();
  const ownProps = { ...props, ...menuContext };
  const ref = useRef18(null);
  const state = useTreeState2({ ...ownProps, selectionMode: "none" });
  const { menuProps } = useMenu(ownProps, state, ref);
  useSyncRef({ ref: scrollRef }, ref);
  const classNames2 = useClassNames29({ component: "Menu", variant, size });
  return /* @__PURE__ */ jsx59("ul", { ref, className: classNames2.container, ...menuProps, children: [...state.collection].map((item) => {
    if (item.type === "section") {
      return /* @__PURE__ */ jsx59(
        MenuSection_default,
        {
          item,
          state,
          onAction: props.onAction
        },
        item.key
      );
    }
    return /* @__PURE__ */ jsx59(
      MenuItem,
      {
        item,
        state,
        onAction: props.onAction,
        className: classNames2.item
      },
      item.key
    );
  }) });
};
Menu.Trigger = MenuTrigger;
Menu.Item = Item5;
Menu.Section = Section2;

// src/Menu/ActionMenu.tsx
import { SVG as SVG5 } from "@marigold/system";
import { jsx as jsx60, jsxs as jsxs25 } from "react/jsx-runtime";
var ActionMenu = (props) => {
  return /* @__PURE__ */ jsxs25(Menu.Trigger, { children: [
    /* @__PURE__ */ jsx60(Button, { variant: "menu", size: "small", children: /* @__PURE__ */ jsx60(SVG5, { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx60("path", { d: "M12.0117 7.47656C13.2557 7.47656 14.2734 6.45879 14.2734 5.21484C14.2734 3.9709 13.2557 2.95312 12.0117 2.95312C10.7678 2.95312 9.75 3.9709 9.75 5.21484C9.75 6.45879 10.7678 7.47656 12.0117 7.47656ZM12.0117 9.73828C10.7678 9.73828 9.75 10.7561 9.75 12C9.75 13.2439 10.7678 14.2617 12.0117 14.2617C13.2557 14.2617 14.2734 13.2439 14.2734 12C14.2734 10.7561 13.2557 9.73828 12.0117 9.73828ZM12.0117 16.5234C10.7678 16.5234 9.75 17.5412 9.75 18.7852C9.75 20.0291 10.7678 21.0469 12.0117 21.0469C13.2557 21.0469 14.2734 20.0291 14.2734 18.7852C14.2734 17.5412 13.2557 16.5234 12.0117 16.5234Z" }) }) }),
    /* @__PURE__ */ jsx60(Menu, { ...props })
  ] });
};

// src/Message/Message.tsx
import { cn as cn29, useClassNames as useClassNames30 } from "@marigold/system";
import { jsx as jsx61, jsxs as jsxs26 } from "react/jsx-runtime";
var icons = {
  info: () => /* @__PURE__ */ jsx61(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx61(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd"
        }
      )
    }
  ),
  warning: () => /* @__PURE__ */ jsx61(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx61(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd"
        }
      )
    }
  ),
  error: () => /* @__PURE__ */ jsx61(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsx61(
        "path",
        {
          fillRule: "evenodd",
          d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd"
        }
      )
    }
  )
};
var Message = ({
  messageTitle,
  variant = "info",
  size,
  children,
  ...props
}) => {
  const classNames2 = useClassNames30({ component: "Message", variant, size });
  const Icon3 = icons[variant];
  return /* @__PURE__ */ jsxs26(
    "div",
    {
      className: cn29(
        "grid auto-rows-min grid-cols-[min-content_auto] gap-1",
        classNames2.container
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx61("div", { className: cn29("col-span-1 h-5 w-5 self-center", classNames2.icon), children: /* @__PURE__ */ jsx61(Icon3, {}) }),
        /* @__PURE__ */ jsx61(
          "div",
          {
            className: cn29("col-start-2 row-start-1 self-center", classNames2.title),
            children: messageTitle
          }
        ),
        /* @__PURE__ */ jsx61("div", { className: cn29("col-start-2", classNames2.content), children })
      ]
    }
  );
};

// src/NumberField/NumberField.tsx
import { forwardRef as forwardRef12 } from "react";
import { useFocusRing as useFocusRing9 } from "@react-aria/focus";
import { useLocale as useLocale4 } from "@react-aria/i18n";
import { useHover as useHover7 } from "@react-aria/interactions";
import { useNumberField } from "@react-aria/numberfield";
import { mergeProps as mergeProps14, useObjectRef as useObjectRef9 } from "@react-aria/utils";
import { useNumberFieldState } from "@react-stately/numberfield";
import { cn as cn31, useClassNames as useClassNames31, useStateProps as useStateProps15 } from "@marigold/system";

// src/NumberField/StepButton.tsx
import { useRef as useRef19 } from "react";
import { useButton as useButton7 } from "@react-aria/button";
import { useHover as useHover6 } from "@react-aria/interactions";
import { mergeProps as mergeProps13 } from "@react-aria/utils";
import { cn as cn30, useStateProps as useStateProps14 } from "@marigold/system";
import { jsx as jsx62 } from "react/jsx-runtime";
var Plus = () => /* @__PURE__ */ jsx62("svg", { width: 16, height: 16, viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx62(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
  }
) });
var Minus = () => /* @__PURE__ */ jsx62("svg", { width: 16, height: 16, viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx62(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  }
) });
var StepButton = ({
  direction,
  className,
  ...props
}) => {
  const ref = useRef19(null);
  const { buttonProps, isPressed } = useButton7(
    { ...props, elementType: "div" },
    ref
  );
  const { hoverProps, isHovered } = useHover6(props);
  const stateProps = useStateProps14({
    active: isPressed,
    hover: isHovered,
    disabled: props.isDisabled
  });
  const Icon3 = direction === "up" ? Plus : Minus;
  return /* @__PURE__ */ jsx62(
    "div",
    {
      className: cn30(
        [
          "flex items-center justify-center",
          "cursor-pointer data-[disabled]:cursor-not-allowed"
        ],
        className
      ),
      ...mergeProps13(buttonProps, hoverProps),
      ...stateProps,
      children: /* @__PURE__ */ jsx62(Icon3, {})
    }
  );
};

// src/NumberField/NumberField.tsx
import { jsx as jsx63, jsxs as jsxs27 } from "react/jsx-runtime";
var NumberField = forwardRef12(
  ({
    variant,
    size,
    width,
    disabled,
    required,
    readOnly,
    error,
    hideStepper,
    ...rest
  }, ref) => {
    const props = {
      isDisabled: disabled,
      isRequired: required,
      isReadOnly: readOnly,
      validationState: error ? "invalid" : "valid",
      ...rest
    };
    const showStepper = !hideStepper;
    const { locale } = useLocale4();
    const inputRef = useObjectRef9(ref);
    const state = useNumberFieldState({ ...props, locale });
    const {
      labelProps,
      groupProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      incrementButtonProps,
      decrementButtonProps
    } = useNumberField(props, state, inputRef);
    const { hoverProps, isHovered } = useHover7({ isDisabled: disabled });
    const { focusProps, isFocused } = useFocusRing9({
      within: true,
      isTextInput: true,
      autoFocus: props.autoFocus
    });
    const stateProps = useStateProps15({
      hover: isHovered,
      focus: isFocused,
      disabled,
      error,
      readOnly,
      required
    });
    const classNames2 = useClassNames31({
      component: "NumberField",
      size,
      variant
    });
    return /* @__PURE__ */ jsx63(
      FieldBase,
      {
        label: props.label,
        labelProps,
        description: props.description,
        descriptionProps,
        error,
        errorMessage: props.errorMessage,
        errorMessageProps,
        stateProps,
        variant,
        size,
        width,
        children: /* @__PURE__ */ jsxs27(
          "div",
          {
            "data-group": true,
            className: cn31("flex items-stretch", classNames2.group),
            "data-testid": "number-field-container",
            ...mergeProps14(groupProps, focusProps, hoverProps),
            ...stateProps,
            children: [
              showStepper && /* @__PURE__ */ jsx63(
                StepButton,
                {
                  className: classNames2.stepper,
                  direction: "down",
                  ...decrementButtonProps
                }
              ),
              /* @__PURE__ */ jsx63("div", { className: "flex-1", children: /* @__PURE__ */ jsx63(
                Input,
                {
                  ref: inputRef,
                  variant,
                  size,
                  className: {
                    input: "min-w-0 items-stretch  border-none"
                  },
                  ...inputProps,
                  ...stateProps
                }
              ) }),
              showStepper && /* @__PURE__ */ jsx63(
                StepButton,
                {
                  className: classNames2.stepper,
                  direction: "up",
                  ...incrementButtonProps
                }
              )
            ]
          }
        )
      }
    );
  }
);

// src/Provider/index.ts
import { useTheme as useTheme4, ThemeProvider as ThemeProvider2 } from "@marigold/system";

// src/Provider/MarigoldProvider.tsx
import { OverlayProvider } from "@react-aria/overlays";
import {
  ThemeProvider,
  defaultTheme,
  useTheme as useTheme3
} from "@marigold/system";
import { jsx as jsx64 } from "react/jsx-runtime";
function MarigoldProvider({
  children,
  theme
}) {
  const outerTheme = useTheme3();
  const isTopLevel = outerTheme === defaultTheme;
  return /* @__PURE__ */ jsx64(ThemeProvider, { theme, children: isTopLevel ? /* @__PURE__ */ jsx64(OverlayProvider, { children }) : children });
}

// src/Radio/Radio.tsx
import {
  forwardRef as forwardRef13
} from "react";
import { useFocusRing as useFocusRing10 } from "@react-aria/focus";
import { useHover as useHover8 } from "@react-aria/interactions";
import { useRadio } from "@react-aria/radio";
import { mergeProps as mergeProps15, useObjectRef as useObjectRef10 } from "@react-aria/utils";
import {
  cn as cn33,
  useClassNames as useClassNames32,
  useStateProps as useStateProps17
} from "@marigold/system";

// src/Radio/Context.ts
import { createContext as createContext7, useContext as useContext7 } from "react";
var RadioGroupContext = createContext7(
  null
);
var useRadioGroupContext = () => useContext7(RadioGroupContext);

// src/Radio/RadioGroup.tsx
import { useRadioGroup } from "@react-aria/radio";
import { useRadioGroupState } from "@react-stately/radio";
import { cn as cn32, useStateProps as useStateProps16 } from "@marigold/system";
import { jsx as jsx65 } from "react/jsx-runtime";
var RadioGroup = ({
  children,
  orientation = "vertical",
  width,
  required,
  disabled,
  readOnly,
  error,
  ...rest
}) => {
  const props = {
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readOnly,
    validationState: error ? "invalid" : "valid",
    ...rest
  };
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, errorMessageProps, descriptionProps } = useRadioGroup(props, state);
  const stateProps = useStateProps16({
    disabled,
    readOnly,
    error,
    required
  });
  return /* @__PURE__ */ jsx65(
    FieldBase,
    {
      width,
      label: props.label,
      labelProps: { as: "span", ...labelProps },
      description: props.description,
      descriptionProps,
      error,
      errorMessage: props.errorMessage,
      errorMessageProps,
      disabled,
      stateProps,
      ...radioGroupProps,
      children: /* @__PURE__ */ jsx65(
        "div",
        {
          role: "presentation",
          "data-orientation": orientation,
          className: cn32(
            "flex items-start",
            orientation === "vertical" ? "flex-col gap-[0.5ch]" : "flex-row gap-[1.5ch]"
          ),
          children: /* @__PURE__ */ jsx65(RadioGroupContext.Provider, { value: { width, error, state }, children })
        }
      )
    }
  );
};

// src/Radio/Radio.tsx
import { jsx as jsx66, jsxs as jsxs28 } from "react/jsx-runtime";
var Dot = () => /* @__PURE__ */ jsx66("svg", { viewBox: "0 0 6 6", children: /* @__PURE__ */ jsx66("circle", { fill: "currentColor", cx: "3", cy: "3", r: "3" }) });
var Icon2 = ({ checked, className, ...props }) => /* @__PURE__ */ jsx66(
  "div",
  {
    className: cn33(
      "bg-secondary-50 flex h-4 w-4 items-center justify-center rounded-[50%] border p-1",
      className
    ),
    "aria-hidden": "true",
    ...props,
    children: checked ? /* @__PURE__ */ jsx66(Dot, {}) : null
  }
);
var Radio = forwardRef13(
  ({ width, disabled, ...props }, ref) => {
    const {
      variant,
      size,
      error,
      width: groupWidth,
      state
    } = useRadioGroupContext();
    const inputRef = useObjectRef10(ref);
    const { inputProps } = useRadio(
      { isDisabled: disabled, ...props },
      state,
      inputRef
    );
    const classNames2 = useClassNames32({
      component: "Radio",
      variant: variant || props.variant,
      size: size || props.size
    });
    const { hoverProps, isHovered } = useHover8({ isDisabled: disabled });
    const { isFocusVisible, focusProps } = useFocusRing10();
    const stateProps = useStateProps17({
      hover: isHovered,
      focus: isFocusVisible,
      checked: inputProps.checked,
      disabled: inputProps.disabled,
      readOnly: props.readOnly,
      error
    });
    return /* @__PURE__ */ jsxs28(
      "label",
      {
        className: cn33(
          "group/radio",
          "relative flex items-center gap-[1ch]",
          width || groupWidth || "w-full",
          classNames2.container
        ),
        ...mergeProps15(hoverProps, stateProps),
        children: [
          /* @__PURE__ */ jsx66(
            "input",
            {
              ref: inputRef,
              className: cn33(
                "absolute left-0 top-0 z-[1] h-full w-full opacity-[0.0001]",
                inputProps.disabled ? "cursor-not-allowed" : "cursor-pointer"
              ),
              ...mergeProps15(inputProps, focusProps)
            }
          ),
          /* @__PURE__ */ jsx66(Icon2, { checked: inputProps.checked, className: classNames2.radio }),
          /* @__PURE__ */ jsx66("div", { className: classNames2.label, children: props.children })
        ]
      }
    );
  }
);
Radio.Group = RadioGroup;

// src/Slider/Slider.tsx
import { forwardRef as forwardRef14 } from "react";
import { useNumberFormatter } from "@react-aria/i18n";
import { useSlider } from "@react-aria/slider";
import { useObjectRef as useObjectRef11 } from "@react-aria/utils";
import { useSliderState } from "@react-stately/slider";
import { cn as cn35, createVar as createVar10, useClassNames as useClassNames33, useStateProps as useStateProps19 } from "@marigold/system";

// src/Slider/Thumb.tsx
import { useEffect as useEffect2, useRef as useRef20 } from "react";
import { useFocusRing as useFocusRing11 } from "@react-aria/focus";
import { useSliderThumb } from "@react-aria/slider";
import { mergeProps as mergeProps16 } from "@react-aria/utils";
import { cn as cn34, useStateProps as useStateProps18 } from "@marigold/system";

// src/VisuallyHidden/VisuallyHidden.tsx
import { VisuallyHidden } from "@react-aria/visually-hidden";

// src/Slider/Thumb.tsx
import { jsx as jsx67 } from "react/jsx-runtime";
var Thumb = ({ state, trackRef, className, ...props }) => {
  const { disabled } = props;
  const inputRef = useRef20(null);
  const { isFocusVisible, focusProps, isFocused } = useFocusRing11();
  const focused = isFocused || isFocusVisible || state.isThumbDragging(0);
  const stateProps = useStateProps18({
    focus: focused,
    disabled
  });
  const { thumbProps, inputProps } = useSliderThumb(
    {
      index: 0,
      trackRef,
      inputRef,
      isDisabled: disabled
    },
    state
  );
  useEffect2(() => {
    state.setThumbEditable(0, !disabled);
  }, [disabled, state]);
  return /* @__PURE__ */ jsx67("div", { className: cn34("top-1/2", className), ...thumbProps, ...stateProps, children: /* @__PURE__ */ jsx67(VisuallyHidden, { children: /* @__PURE__ */ jsx67(
    "input",
    {
      type: "range",
      ref: inputRef,
      ...mergeProps16(inputProps, focusProps)
    }
  ) }) });
};

// src/Slider/Slider.tsx
import { jsx as jsx68, jsxs as jsxs29 } from "react/jsx-runtime";
var Slider = forwardRef14(
  ({ variant, size, width = "100%", ...props }, ref) => {
    const { formatOptions } = props;
    const trackRef = useObjectRef11(ref);
    const numberFormatter = useNumberFormatter(formatOptions);
    const state = useSliderState({ ...props, numberFormatter });
    const { groupProps, trackProps, labelProps, outputProps } = useSlider(
      {
        label: props.children,
        ...props
      },
      state,
      trackRef
    );
    const classNames2 = useClassNames33({
      component: "Slider",
      variant,
      size
    });
    const sliderState = useStateProps19({
      disabled: props.disabled
    });
    return /* @__PURE__ */ jsxs29(
      "div",
      {
        className: "flex w-[var(--slideWidth)] touch-none flex-col",
        style: createVar10({ slideWidth: width }),
        ...groupProps,
        children: [
          /* @__PURE__ */ jsxs29("div", { className: "flex self-stretch", children: [
            props.children && /* @__PURE__ */ jsx68("label", { className: classNames2.label, ...labelProps, children: props.children }),
            /* @__PURE__ */ jsx68(
              "output",
              {
                className: cn35(
                  "flex flex-shrink-0 flex-grow basis-auto",
                  classNames2.output
                ),
                ...outputProps,
                children: state.getThumbValueLabel(0)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs29(
            "div",
            {
              className: "h-8 w-full cursor-pointer data-[disabled]:cursor-not-allowed",
              ...trackProps,
              ...sliderState,
              ref: trackRef,
              children: [
                /* @__PURE__ */ jsx68(
                  "div",
                  {
                    className: cn35(
                      "absolute top-2/4 h-2 w-full -translate-y-1/2",
                      classNames2.track
                    )
                  }
                ),
                /* @__PURE__ */ jsx68(
                  Thumb,
                  {
                    state,
                    trackRef,
                    disabled: props.disabled,
                    className: classNames2.thumb
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);

// src/Split/Split.tsx
import { jsx as jsx69 } from "react/jsx-runtime";
var Split = (props) => /* @__PURE__ */ jsx69("div", { ...props, role: "separator", className: "grow" });

// src/Stack/Stack.tsx
import {
  alignment as alignment3,
  cn as cn36,
  gapSpace as gapSpace6
} from "@marigold/system";
import { jsx as jsx70 } from "react/jsx-runtime";
var Stack = ({
  children,
  space = 0,
  stretch = false,
  orientation,
  alignX,
  alignY,
  ...props
}) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsx70(
    "div",
    {
      className: cn36(
        "flex flex-col",
        gapSpace6[space],
        alignX && ((_b = (_a = alignment3) == null ? void 0 : _a.vertical) == null ? void 0 : _b.alignmentX[alignX]),
        alignY && ((_d = (_c = alignment3) == null ? void 0 : _c.vertical) == null ? void 0 : _d.alignmentY[alignY]),
        stretch && "h-full w-full"
      ),
      ...props,
      children
    }
  );
};

// src/Switch/Switch.tsx
import { forwardRef as forwardRef15 } from "react";
import { useFocusRing as useFocusRing12 } from "@react-aria/focus";
import { useSwitch } from "@react-aria/switch";
import { useObjectRef as useObjectRef12 } from "@react-aria/utils";
import { useToggleState as useToggleState2 } from "@react-stately/toggle";
import { cn as cn37, createVar as createVar11, useClassNames as useClassNames34, useStateProps as useStateProps20 } from "@marigold/system";
import { Fragment as Fragment6, jsx as jsx71, jsxs as jsxs30 } from "react/jsx-runtime";
var Switch = forwardRef15(
  ({
    variant,
    size,
    width = "100%",
    selected,
    disabled,
    readOnly,
    defaultChecked,
    ...rest
  }, ref) => {
    const inputRef = useObjectRef12(ref);
    const props = {
      isSelected: selected,
      isDisabled: disabled,
      isReadOnly: readOnly,
      defaultSelected: defaultChecked,
      ...rest
    };
    const state = useToggleState2(props);
    const { inputProps } = useSwitch(props, state, inputRef);
    const { isFocusVisible, focusProps } = useFocusRing12();
    const stateProps = useStateProps20({
      selected: state.isSelected,
      disabled,
      readOnly,
      focus: isFocusVisible
    });
    const classNames2 = useClassNames34({ component: "Switch", size, variant });
    return /* @__PURE__ */ jsxs30(
      "label",
      {
        className: cn37(
          "group/switch",
          "w-[var(--switchWidth)]",
          "relative flex items-center justify-between gap-[1ch]"
        ),
        style: createVar11({ switchWidth: width }),
        ...stateProps,
        children: [
          /* @__PURE__ */ jsx71(
            "input",
            {
              ref: inputRef,
              className: "absolute left-0 top-0 z-[1] h-full w-full cursor-pointer opacity-[0.0001] disabled:cursor-not-allowed",
              ...inputProps,
              ...focusProps
            }
          ),
          props.children && /* @__PURE__ */ jsx71(Fragment6, { children: props.children }),
          /* @__PURE__ */ jsx71(
            "div",
            {
              className: cn37(
                "relative h-6 flex-shrink-0 flex-grow-0 basis-12 rounded-3xl",
                classNames2.track
              ),
              children: /* @__PURE__ */ jsx71(
                "div",
                {
                  className: cn37(
                    "h-[22px] w-[22px]",
                    "cubic-bezier(.7,0,.3,1)",
                    "absolute left-0 top-px",
                    "block translate-x-[1px] rounded-full transition-all duration-100 ease-in-out will-change-transform",
                    "group-selected/switch:translate-x-[calc(47px_-_100%)]",
                    classNames2.thumb
                  )
                }
              )
            }
          )
        ]
      }
    );
  }
);

// src/Table/Table.tsx
import { useRef as useRef27 } from "react";
import { useTable } from "@react-aria/table";
import {
  TableBody as Body2,
  Cell,
  Column,
  TableHeader as Header2,
  Row,
  useTableState
} from "@react-stately/table";
import { cn as cn42, useClassNames as useClassNames36 } from "@marigold/system";

// src/Table/Context.tsx
import { createContext as createContext8, useContext as useContext8 } from "react";
var TableContext = createContext8({});
var useTableContext = () => useContext8(TableContext);

// src/Table/TableBody.tsx
import { useTableRowGroup } from "@react-aria/table";
import { jsx as jsx72 } from "react/jsx-runtime";
var TableBody = ({ children }) => {
  const { rowGroupProps } = useTableRowGroup();
  return /* @__PURE__ */ jsx72("tbody", { ...rowGroupProps, children });
};

// src/Table/TableCell.tsx
import { useRef as useRef21 } from "react";
import { useFocusRing as useFocusRing13 } from "@react-aria/focus";
import { useTableCell } from "@react-aria/table";
import { mergeProps as mergeProps17 } from "@react-aria/utils";
import { useStateProps as useStateProps21 } from "@marigold/system";
import { jsx as jsx73 } from "react/jsx-runtime";
var TableCell = ({ cell }) => {
  const ref = useRef21(null);
  const { interactive, state, classNames: classNames2 } = useTableContext();
  const disabled = state.disabledKeys.has(cell.parentKey);
  const { gridCellProps } = useTableCell(
    {
      node: cell
    },
    state,
    ref
  );
  const cellProps = interactive ? gridCellProps : {
    /**
     * Override `react-aria` handler so users can select text.
     * Solution from https://github.com/adobe/react-spectrum/issues/2585
     */
    ...gridCellProps,
    onMouseDown: (e) => e.stopPropagation(),
    onPointerDown: (e) => e.stopPropagation()
  };
  const { focusProps, isFocusVisible } = useFocusRing13();
  const stateProps = useStateProps21({ disabled, focusVisible: isFocusVisible });
  return /* @__PURE__ */ jsx73(
    "td",
    {
      ref,
      className: classNames2 == null ? void 0 : classNames2.cell,
      ...mergeProps17(cellProps, focusProps),
      ...stateProps,
      children: cell.rendered
    }
  );
};

// src/Table/TableCheckboxCell.tsx
import { useRef as useRef22 } from "react";
import { useFocusRing as useFocusRing14 } from "@react-aria/focus";
import { useTableCell as useTableCell2, useTableSelectionCheckbox } from "@react-aria/table";
import { mergeProps as mergeProps18 } from "@react-aria/utils";
import { cn as cn38, useStateProps as useStateProps22 } from "@marigold/system";

// src/Table/utils.ts
var mapCheckboxProps = ({
  checkboxProps: {
    isIndeterminate,
    isSelected,
    isDisabled,
    defaultSelected,
    ...rest
  }
}) => {
  const checkboxProps = {
    disabled: isDisabled,
    checked: isSelected,
    defaultChecked: defaultSelected,
    indeterminate: isIndeterminate,
    ...rest
  };
  return { checkboxProps };
};

// src/Table/TableCheckboxCell.tsx
import { jsx as jsx74 } from "react/jsx-runtime";
var TableCheckboxCell = ({ cell }) => {
  const ref = useRef22(null);
  const { state, classNames: classNames2 } = useTableContext();
  const disabled = state.disabledKeys.has(cell.parentKey);
  const { gridCellProps } = useTableCell2(
    {
      node: cell
    },
    state,
    ref
  );
  const { checkboxProps } = mapCheckboxProps(
    useTableSelectionCheckbox({ key: cell.parentKey }, state)
  );
  const { focusProps, isFocusVisible } = useFocusRing14();
  const stateProps = useStateProps22({ disabled, focusVisible: isFocusVisible });
  return /* @__PURE__ */ jsx74(
    "td",
    {
      ref,
      className: cn38("text-center align-middle leading-none", classNames2 == null ? void 0 : classNames2.cell),
      ...mergeProps18(gridCellProps, focusProps),
      ...stateProps,
      children: /* @__PURE__ */ jsx74(Checkbox, { ...checkboxProps })
    }
  );
};

// src/Table/TableColumnHeader.tsx
import { useRef as useRef23 } from "react";
import { useFocusRing as useFocusRing15 } from "@react-aria/focus";
import { useHover as useHover9 } from "@react-aria/interactions";
import { useTableColumnHeader } from "@react-aria/table";
import { mergeProps as mergeProps19 } from "@react-aria/utils";
import { SortDown, SortUp } from "@marigold/icons";
import { cn as cn39, useStateProps as useStateProps23 } from "@marigold/system";
import { width as twWidth2 } from "@marigold/system";
import { jsx as jsx75, jsxs as jsxs31 } from "react/jsx-runtime";
var TableColumnHeader = ({
  column,
  width = "auto"
}) => {
  var _a, _b;
  const ref = useRef23(null);
  const { state, classNames: classNames2 } = useTableContext();
  const { columnHeaderProps } = useTableColumnHeader(
    {
      node: column
    },
    state,
    ref
  );
  const { hoverProps, isHovered } = useHover9({});
  const { focusProps, isFocusVisible } = useFocusRing15();
  const stateProps = useStateProps23({
    hover: isHovered,
    focusVisible: isFocusVisible
  });
  return /* @__PURE__ */ jsxs31(
    "th",
    {
      colSpan: column.colspan,
      ref,
      className: cn39("cursor-default", twWidth2[width], classNames2 == null ? void 0 : classNames2.header),
      ...mergeProps19(columnHeaderProps, hoverProps, focusProps),
      ...stateProps,
      children: [
        column.rendered,
        column.props.allowsSorting && (((_a = state.sortDescriptor) == null ? void 0 : _a.column) === column.key ? ((_b = state.sortDescriptor) == null ? void 0 : _b.direction) === "ascending" ? /* @__PURE__ */ jsx75(SortUp, { className: "inline-block" }) : /* @__PURE__ */ jsx75(SortDown, { className: "inline-block" }) : /* @__PURE__ */ jsx75(SortDown, { className: "inline-block" }))
      ]
    }
  );
};

// src/Table/TableHeader.tsx
import { useTableRowGroup as useTableRowGroup2 } from "@react-aria/table";
import { jsx as jsx76 } from "react/jsx-runtime";
var TableHeader = ({ children }) => {
  const { rowGroupProps } = useTableRowGroup2();
  return /* @__PURE__ */ jsx76("thead", { ...rowGroupProps, children });
};

// src/Table/TableHeaderRow.tsx
import { useRef as useRef24 } from "react";
import { useTableHeaderRow } from "@react-aria/table";
import { jsx as jsx77 } from "react/jsx-runtime";
var TableHeaderRow = ({ item, children }) => {
  const { state } = useTableContext();
  const ref = useRef24(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);
  return /* @__PURE__ */ jsx77("tr", { ...rowProps, ref, children });
};

// src/Table/TableRow.tsx
import { useRef as useRef25 } from "react";
import { useFocusRing as useFocusRing16 } from "@react-aria/focus";
import { useHover as useHover10 } from "@react-aria/interactions";
import { useTableRow } from "@react-aria/table";
import { mergeProps as mergeProps20 } from "@react-aria/utils";
import { cn as cn40, useClassNames as useClassNames35, useStateProps as useStateProps24 } from "@marigold/system";
import { jsx as jsx78 } from "react/jsx-runtime";
var TableRow = ({ children, row }) => {
  const ref = useRef25(null);
  const { interactive, state, ...ctx } = useTableContext();
  const { variant, size } = row.props;
  const classNames2 = useClassNames35({
    component: "Table",
    variant: variant || ctx.variant,
    size: size || ctx.size
  });
  const { rowProps, isPressed } = useTableRow(
    {
      node: row
    },
    state,
    ref
  );
  const disabled = state.disabledKeys.has(row.key);
  const selected = state.selectionManager.isSelected(row.key);
  const { focusProps, isFocusVisible } = useFocusRing16({ within: true });
  const { hoverProps, isHovered } = useHover10({
    isDisabled: disabled || !interactive
  });
  const stateProps = useStateProps24({
    disabled,
    selected,
    hover: isHovered,
    focusVisible: isFocusVisible,
    active: isPressed
  });
  return /* @__PURE__ */ jsx78(
    "tr",
    {
      ref,
      className: cn40(
        [
          !interactive ? "cursor-text" : disabled ? "cursor-default" : "cursor-pointer"
        ],
        classNames2 == null ? void 0 : classNames2.row
      ),
      ...mergeProps20(rowProps, focusProps, hoverProps),
      ...stateProps,
      children
    }
  );
};

// src/Table/TableSelectAllCell.tsx
import { useRef as useRef26 } from "react";
import { useFocusRing as useFocusRing17 } from "@react-aria/focus";
import { useHover as useHover11 } from "@react-aria/interactions";
import {
  useTableColumnHeader as useTableColumnHeader2,
  useTableSelectAllCheckbox
} from "@react-aria/table";
import { mergeProps as mergeProps21 } from "@react-aria/utils";
import {
  cn as cn41,
  width as twWidth3,
  useStateProps as useStateProps25
} from "@marigold/system";
import { jsx as jsx79 } from "react/jsx-runtime";
var TableSelectAllCell = ({
  column,
  width = "auto"
}) => {
  const ref = useRef26(null);
  const { state, classNames: classNames2 } = useTableContext();
  const { columnHeaderProps } = useTableColumnHeader2(
    {
      node: column
    },
    state,
    ref
  );
  const { checkboxProps } = mapCheckboxProps(useTableSelectAllCheckbox(state));
  const { hoverProps, isHovered } = useHover11({});
  const { focusProps, isFocusVisible } = useFocusRing17();
  const stateProps = useStateProps25({
    hover: isHovered,
    focusVisible: isFocusVisible
  });
  return /* @__PURE__ */ jsx79(
    "th",
    {
      ref,
      className: cn41(
        twWidth3[width],
        ["text-center align-middle leading-none"],
        classNames2 == null ? void 0 : classNames2.header
      ),
      ...mergeProps21(columnHeaderProps, hoverProps, focusProps),
      ...stateProps,
      children: /* @__PURE__ */ jsx79(Checkbox, { ...checkboxProps })
    }
  );
};

// src/Table/Table.tsx
import { jsx as jsx80, jsxs as jsxs32 } from "react/jsx-runtime";
var Table = ({
  variant,
  size,
  stretch,
  selectionMode = "none",
  ...props
}) => {
  const interactive = selectionMode !== "none";
  const tableRef = useRef27(null);
  const state = useTableState({
    ...props,
    selectionMode,
    showSelectionCheckboxes: selectionMode === "multiple" && // TODO: It this necessary?
    props.selectionBehavior !== "replace"
  });
  const { gridProps } = useTable(props, state, tableRef);
  const classNames2 = useClassNames36({
    component: "Table",
    variant,
    size
  });
  const { collection } = state;
  return /* @__PURE__ */ jsx80(
    TableContext.Provider,
    {
      value: { state, interactive, classNames: classNames2, variant, size },
      children: /* @__PURE__ */ jsxs32(
        "table",
        {
          ref: tableRef,
          className: cn42(
            "group/table",
            "border-collapse overflow-auto whitespace-nowrap",
            stretch ? "table w-full" : "block",
            classNames2.table
          ),
          ...gridProps,
          children: [
            /* @__PURE__ */ jsx80(TableHeader, { children: collection.headerRows.map((headerRow) => /* @__PURE__ */ jsx80(TableHeaderRow, { item: headerRow, children: [...collection.getChildren(headerRow.key)].map(
              (column) => {
                var _a, _b, _c;
                return ((_a = column.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ jsx80(
                  TableSelectAllCell,
                  {
                    width: (_b = column.props) == null ? void 0 : _b.width,
                    column
                  },
                  column.key
                ) : /* @__PURE__ */ jsx80(
                  TableColumnHeader,
                  {
                    width: (_c = column.props) == null ? void 0 : _c.width,
                    column
                  },
                  column.key
                );
              }
            ) }, headerRow.key)) }),
            /* @__PURE__ */ jsxs32(TableBody, { children: [
              ...collection.rows.map(
                (row) => row.type === "item" && /* @__PURE__ */ jsx80(TableRow, { row, children: [...collection.getChildren(row.key)].map(
                  (cell) => {
                    var _a;
                    return ((_a = cell.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ jsx80(TableCheckboxCell, { cell }, cell.key) : /* @__PURE__ */ jsx80(TableCell, { cell }, cell.key);
                  }
                ) }, row.key)
              )
            ] })
          ]
        }
      )
    }
  );
};
Table.Body = Body2;
Table.Cell = Cell;
Table.Column = Column;
Table.Header = Header2;
Table.Row = Row;

// src/Text/Text.tsx
import {
  cn as cn43,
  createVar as createVar12,
  cursorStyle,
  fontWeight,
  get as get2,
  textAlign as textAlign2,
  textSize,
  textStyle,
  useClassNames as useClassNames37,
  useTheme as useTheme5
} from "@marigold/system";
import { jsx as jsx81 } from "react/jsx-runtime";
var Text = ({
  variant,
  size,
  color,
  align,
  cursor,
  weight,
  fontSize,
  fontStyle,
  children,
  ...props
}) => {
  const theme = useTheme5();
  const classNames2 = useClassNames37({
    component: "Text",
    variant,
    size
  });
  return /* @__PURE__ */ jsx81(
    "p",
    {
      ...props,
      className: cn43(
        classNames2,
        "text-[--color] outline-[--outline]",
        fontStyle && textStyle[fontStyle],
        align && textAlign2[align],
        cursor && cursorStyle[cursor],
        weight && fontWeight[weight],
        fontSize && textSize[fontSize]
      ),
      style: createVar12({
        color: color && theme.colors && get2(
          theme.colors,
          color.replace("-", "."),
          color
          /* fallback */
        )
      }),
      children
    }
  );
};

// src/TextArea/TextArea.tsx
import { forwardRef as forwardRef16 } from "react";
import { useFocusRing as useFocusRing18 } from "@react-aria/focus";
import { useHover as useHover12 } from "@react-aria/interactions";
import { useTextField } from "@react-aria/textfield";
import { useObjectRef as useObjectRef13 } from "@react-aria/utils";
import { useClassNames as useClassNames38, useStateProps as useStateProps26 } from "@marigold/system";
import { jsx as jsx82 } from "react/jsx-runtime";
var TextArea = forwardRef16(
  ({
    variant,
    size,
    width,
    disabled,
    required,
    readOnly,
    error,
    rows,
    ...props
  }, ref) => {
    const { label, description, errorMessage } = props;
    const textAreaRef = useObjectRef13(ref);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
      {
        inputElementType: "textarea",
        isDisabled: disabled,
        isRequired: required,
        isReadOnly: readOnly,
        validationState: error ? "invalid" : "valid",
        ...props
      },
      textAreaRef
    );
    const { hoverProps, isHovered } = useHover12({});
    const { focusProps, isFocusVisible } = useFocusRing18();
    const stateProps = useStateProps26({
      hover: isHovered,
      focus: isFocusVisible,
      disabled,
      readOnly,
      required,
      error
    });
    const classNames2 = useClassNames38({ component: "TextArea", variant, size });
    return /* @__PURE__ */ jsx82(
      FieldBase,
      {
        label,
        labelProps,
        description,
        descriptionProps,
        error,
        errorMessage,
        errorMessageProps,
        stateProps,
        variant,
        size,
        width,
        children: /* @__PURE__ */ jsx82(
          "textarea",
          {
            className: classNames2,
            ref: textAreaRef,
            rows,
            ...inputProps,
            ...focusProps,
            ...hoverProps
          }
        )
      }
    );
  }
);

// src/TextField/TextField.tsx
import { forwardRef as forwardRef17 } from "react";
import { useFocusRing as useFocusRing19 } from "@react-aria/focus";
import { useHover as useHover13 } from "@react-aria/interactions";
import { useTextField as useTextField2 } from "@react-aria/textfield";
import { mergeProps as mergeProps22, useObjectRef as useObjectRef14 } from "@react-aria/utils";
import { useStateProps as useStateProps27 } from "@marigold/system";
import { jsx as jsx83 } from "react/jsx-runtime";
var TextField = forwardRef17(
  ({ variant, size, width, disabled, required, readOnly, error, ...props }, ref) => {
    const { label, description, errorMessage, autoFocus } = props;
    const inputRef = useObjectRef14(ref);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField2(
      {
        isDisabled: disabled,
        isRequired: required,
        isReadOnly: readOnly,
        validationState: error ? "invalid" : "valid",
        ...props
      },
      inputRef
    );
    const { hoverProps, isHovered } = useHover13({});
    const { focusProps, isFocused } = useFocusRing19({
      isTextInput: true,
      autoFocus
    });
    const stateProps = useStateProps27({
      hover: isHovered,
      focus: isFocused,
      disabled,
      error,
      readOnly,
      required
    });
    return /* @__PURE__ */ jsx83(
      FieldBase,
      {
        label,
        labelProps,
        description,
        descriptionProps,
        error,
        errorMessage,
        errorMessageProps,
        stateProps,
        variant,
        size,
        width,
        children: /* @__PURE__ */ jsx83(
          Input,
          {
            ref: inputRef,
            variant,
            size,
            ...mergeProps22(focusProps, inputProps, hoverProps)
          }
        )
      }
    );
  }
);

// src/Tiles/Tiles.tsx
import { cn as cn44, createVar as createVar13, gapSpace as gapSpace7 } from "@marigold/system";
import { jsx as jsx84 } from "react/jsx-runtime";
var Tiles = ({
  space = 0,
  stretch = false,
  equalHeight = false,
  tilesWidth,
  children,
  ...props
}) => {
  let column = `min(${tilesWidth}, 100%)`;
  if (stretch) {
    column = `minmax(${column}, 1fr)`;
  }
  return /* @__PURE__ */ jsx84(
    "div",
    {
      ...props,
      className: cn44(
        "grid",
        gapSpace7[space],
        "grid-cols-[repeat(auto-fit,var(--column))]",
        equalHeight && "auto-rows-[1fr]"
      ),
      style: createVar13({ column, tilesWidth }),
      children
    }
  );
};

// src/Tooltip/Tooltip.tsx
import { useTooltip } from "@react-aria/tooltip";
import { cn as cn45, useClassNames as useClassNames39 } from "@marigold/system";

// src/Tooltip/Context.ts
import { createContext as createContext9, useContext as useContext9 } from "react";
var TooltipContext = createContext9({});
var useTooltipContext = () => useContext9(TooltipContext);

// src/Tooltip/TooltipTrigger.tsx
import { Children as Children7, useRef as useRef28 } from "react";
import { FocusableProvider } from "@react-aria/focus";
import { useOverlayPosition } from "@react-aria/overlays";
import { useTooltipTrigger } from "@react-aria/tooltip";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { jsx as jsx85, jsxs as jsxs33 } from "react/jsx-runtime";
var TooltipTrigger = ({
  disabled,
  open,
  delay = 1e3,
  placement = "top",
  children,
  ...rest
}) => {
  const [tooltipTrigger, tooltip] = Children7.toArray(children);
  const props = {
    ...rest,
    isDisabled: disabled,
    isOpen: open,
    delay,
    placement
  };
  const tooltipTriggerRef = useRef28(null);
  const overlayRef = useRef28(null);
  const state = useTooltipTriggerState(props);
  const { triggerProps, tooltipProps } = useTooltipTrigger(
    props,
    state,
    tooltipTriggerRef
  );
  const {
    overlayProps: positionProps,
    placement: overlayPlacement,
    arrowProps
  } = useOverlayPosition({
    placement: props.placement,
    targetRef: tooltipTriggerRef,
    offset: props.offset,
    crossOffset: props.crossOffset,
    isOpen: state.isOpen,
    overlayRef
  });
  return /* @__PURE__ */ jsxs33(FocusableProvider, { ref: tooltipTriggerRef, ...triggerProps, children: [
    tooltipTrigger,
    /* @__PURE__ */ jsx85(
      TooltipContext.Provider,
      {
        value: {
          state,
          overlayRef,
          arrowProps,
          placement: overlayPlacement,
          ...tooltipProps,
          ...positionProps
        },
        children: /* @__PURE__ */ jsx85(Overlay, { open: state.isOpen, children: tooltip })
      }
    )
  ] });
};

// src/Tooltip/Tooltip.tsx
import { jsx as jsx86, jsxs as jsxs34 } from "react/jsx-runtime";
var Tooltip = ({ children, variant, size }) => {
  const { arrowProps, state, overlayRef, placement, ...rest } = useTooltipContext();
  const { tooltipProps } = useTooltip({}, state);
  const classNames2 = useClassNames39({ component: "Tooltip", variant, size });
  return /* @__PURE__ */ jsxs34(
    "div",
    {
      ...tooltipProps,
      ...rest,
      ref: overlayRef,
      className: cn45("group/tooltip", classNames2.container),
      "data-placement": placement,
      children: [
        /* @__PURE__ */ jsx86("div", { children }),
        /* @__PURE__ */ jsx86(
          "div",
          {
            ...arrowProps,
            className: cn45("absolute h-0 w-0", classNames2.arrow)
          }
        )
      ]
    }
  );
};
Tooltip.Trigger = TooltipTrigger;

// src/TagGroup/index.ts
import { Item as Item6 } from "@react-stately/collections";

// src/TagGroup/TagGroup.tsx
import { useRef as useRef29 } from "react";
import { useTagGroup } from "@react-aria/tag";
import { useListState } from "@react-stately/list";
import { useStateProps as useStateProps28 } from "@marigold/system";

// src/TagGroup/Tag.tsx
import React2 from "react";
import { useFocusRing as useFocusRing20 } from "@react-aria/focus";
import { useTag } from "@react-aria/tag";
import { mergeProps as mergeProps23 } from "@react-aria/utils";
import { cn as cn46, useClassNames as useClassNames40 } from "@marigold/system";
import { jsx as jsx87, jsxs as jsxs35 } from "react/jsx-runtime";
var Tag = ({ variant, size, item, state, ...rest }) => {
  const props = {
    item,
    ...rest
  };
  let ref = React2.useRef(null);
  let { focusProps } = useFocusRing20({ within: true });
  const { rowProps, gridCellProps, allowsRemoving, removeButtonProps } = useTag(
    {
      ...props,
      item
    },
    state,
    ref
  );
  const classNames2 = useClassNames40({ component: "Tag", variant, size });
  return /* @__PURE__ */ jsx87(
    "span",
    {
      ref,
      ...mergeProps23(rowProps, focusProps),
      className: classNames2.tag,
      children: /* @__PURE__ */ jsxs35("div", { ...gridCellProps, className: classNames2.gridCell, children: [
        /* @__PURE__ */ jsx87("span", { children: item.rendered }),
        allowsRemoving && /* @__PURE__ */ jsx87(
          Button,
          {
            ...removeButtonProps,
            className: cn46("flex items-center", classNames2.closeButton),
            role: "button",
            children: /* @__PURE__ */ jsx87("svg", { viewBox: "0 0 20 20", fill: "currentColor", width: 20, height: 20, children: /* @__PURE__ */ jsx87("path", { d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" }) })
          }
        )
      ] })
    }
  );
};

// src/TagGroup/TagGroup.tsx
import { jsx as jsx88 } from "react/jsx-runtime";
import { createElement } from "react";
var TagGroup = ({
  width,
  required,
  error,
  allowsRemoving,
  ...rest
}) => {
  const props = {
    isRequired: required,
    validationState: error ? "invalid" : "valid",
    ...rest
  };
  const inputRef = useRef29(null);
  const state = useListState(props);
  const { gridProps, labelProps, descriptionProps, errorMessageProps } = useTagGroup(props, state, inputRef);
  const stateProps = useStateProps28({
    error,
    required
  });
  return /* @__PURE__ */ jsx88(
    FieldBase,
    {
      width,
      label: props.label,
      labelProps,
      description: props.description,
      descriptionProps,
      error,
      errorMessage: props.errorMessage,
      errorMessageProps,
      stateProps,
      ...gridProps,
      children: /* @__PURE__ */ jsx88(
        "div",
        {
          role: "presentation",
          ref: inputRef,
          className: "flex flex-wrap items-start gap-1",
          children: [...state.collection].map((item) => /* @__PURE__ */ createElement(
            Tag,
            {
              ...item.props,
              key: item.key,
              item,
              state,
              allowsRemoving,
              onRemove: props.onRemove
            },
            item.rendered
          ))
        }
      )
    }
  );
};

// src/TagGroup/index.ts
var Tag2 = Item6;
Tag2.Group = TagGroup;

// src/XLoader/XLoader.tsx
import { forwardRef as forwardRef18 } from "react";
import { SVG as SVG6 } from "@marigold/system";
import { jsx as jsx89, jsxs as jsxs36 } from "react/jsx-runtime";
var XLoader = forwardRef18((props, ref) => /* @__PURE__ */ jsxs36(
  SVG6,
  {
    id: "XLoader",
    xmlns: "http://www.w3.org/2000/svg",
    size: 150,
    viewBox: "0 0 150 150",
    ...props,
    ...ref,
    children: [
      /* @__PURE__ */ jsx89("path", { id: "XMLID_1_", d: "M35.3 27h26.5l54 74.1H88.7z" }),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_5_",
          d: "M124.3 12.8h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "1.0s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_18_",
          d: "M115.9 24.4h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.9s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_19_",
          d: "M107.5 35.9h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.8s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_20_",
          d: "M99.1 47.5h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.7s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_21_",
          d: "M90.7 59H90c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.6s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_22_",
          d: "M68 89.8h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.8c0 2.6-2.2 4.8-4.9 4.8z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.5s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_23_",
          d: "M59.6 101.4h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.4s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_24_",
          d: "M51.2 112.9h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.3s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_25_",
          d: "M42.8 124.5h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.2s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_26_",
          d: "M34.4 136h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.1s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx89(
        "path",
        {
          id: "XMLID_27_",
          d: "M26 147.6h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ jsx89(
            "animate",
            {
              attributeName: "opacity",
              attributeType: "XML",
              values: "1; .01; 1; 1; 1;",
              begin: "0.0s",
              dur: "2.5s",
              repeatCount: "indefinite"
            }
          )
        }
      )
    ]
  }
));

// src/Tabs/Tabs.tsx
import { useRef as useRef32 } from "react";
import { useTabList } from "@react-aria/tabs";
import { Item as Item7 } from "@react-stately/collections";
import { useTabListState } from "@react-stately/tabs";
import { cn as cn49, gapSpace as gapSpace8, useClassNames as useClassNames41 } from "@marigold/system";

// src/Tabs/Context.ts
import { createContext as createContext10, useContext as useContext10 } from "react";
var TabContext = createContext10({});
var useTabContext = () => useContext10(TabContext);

// src/Tabs/Tab.tsx
import { useRef as useRef30 } from "react";
import { useFocus, useHover as useHover14 } from "@react-aria/interactions";
import { useTab } from "@react-aria/tabs";
import { mergeProps as mergeProps24 } from "@react-aria/utils";
import { cn as cn47, useStateProps as useStateProps29 } from "@marigold/system";
import { jsx as jsx90 } from "react/jsx-runtime";
var Tab = ({ item, state }) => {
  const { key, rendered } = item;
  const ref = useRef30(null);
  const { tabProps, isSelected } = useTab({ key }, state, ref);
  const disabled = tabProps["aria-disabled"];
  const { hoverProps, isHovered } = useHover14({
    isDisabled: disabled || isSelected
  });
  const { focusProps } = useFocus({});
  const stateProps = useStateProps29({ active: isSelected, hover: isHovered });
  const { classNames: classNames2 } = useTabContext();
  return /* @__PURE__ */ jsx90(
    "div",
    {
      className: cn47(
        "flex cursor-pointer justify-center aria-disabled:cursor-not-allowed",
        classNames2.tab
      ),
      ...mergeProps24(tabProps, stateProps, focusProps, hoverProps),
      ref,
      children: rendered
    }
  );
};

// src/Tabs/TabPanel.tsx
import { useRef as useRef31 } from "react";
import { useTabPanel } from "@react-aria/tabs";
import { cn as cn48 } from "@marigold/system";
import { jsx as jsx91 } from "react/jsx-runtime";
var TabPanel = ({ state, ...props }) => {
  var _a;
  const ref = useRef31(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);
  const selectedItemProps = (_a = state.selectedItem) == null ? void 0 : _a.props;
  const { classNames: classNames2 } = useTabContext();
  return /* @__PURE__ */ jsx91("div", { className: cn48(classNames2.tabpanel), ref, ...tabPanelProps, children: selectedItemProps == null ? void 0 : selectedItemProps.children });
};

// src/Tabs/Tabs.tsx
import { jsx as jsx92, jsxs as jsxs37 } from "react/jsx-runtime";
var Tabs = ({
  space = 2,
  size = "medium",
  disabled,
  variant,
  ...rest
}) => {
  var _a;
  const ref = useRef32(null);
  const props = {
    isDisabled: disabled,
    ...rest
  };
  const state = useTabListState(props);
  const { tabListProps } = useTabList(props, state, ref);
  const classNames2 = useClassNames41({
    component: "Tabs",
    size,
    variant
  });
  return /* @__PURE__ */ jsx92(TabContext.Provider, { value: { classNames: classNames2 }, children: /* @__PURE__ */ jsxs37("div", { className: cn49(classNames2.container), children: [
    /* @__PURE__ */ jsx92(
      "div",
      {
        className: cn49("flex", gapSpace8[space], classNames2.tabs),
        ...tabListProps,
        ref,
        children: [...state.collection].map((item) => {
          return /* @__PURE__ */ jsx92(Tab, { item, state }, item.key);
        })
      }
    ),
    /* @__PURE__ */ jsx92(TabPanel, { state }, (_a = state.selectedItem) == null ? void 0 : _a.key)
  ] }) });
};
Tabs.Item = Item7;
export {
  Accordion,
  AccordionItem,
  ActionMenu,
  Aside,
  Aspect,
  Autocomplete,
  Badge,
  Body,
  Breakout,
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Card,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupContext,
  Columns,
  ComboBox,
  Container,
  DateField,
  DatePicker,
  Dialog,
  Divider,
  FieldBase,
  FieldGroup,
  FieldGroupContext,
  Footer,
  Header,
  Headline,
  Image,
  Inline,
  Input,
  Inset,
  Label,
  Link,
  List,
  MarigoldProvider,
  Menu,
  Message,
  Modal,
  NumberField,
  Overlay,
  Popover,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Split,
  Stack,
  Switch,
  Table,
  Tabs,
  Tag2 as Tag,
  Text,
  TextArea,
  TextField,
  ThemeProvider2 as ThemeProvider,
  Tiles,
  Tooltip,
  Tray,
  TrayWrapper,
  Underlay,
  VisuallyHidden,
  XLoader,
  useAsyncList,
  useCheckboxGroupContext,
  useFieldGroupContext,
  useListData,
  useTheme4 as useTheme
};
