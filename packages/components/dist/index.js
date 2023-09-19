"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  AccordionItem: () => AccordionItem,
  ActionMenu: () => ActionMenu,
  Aside: () => Aside,
  Aspect: () => Aspect,
  Autocomplete: () => Autocomplete,
  Badge: () => Badge,
  Body: () => Body,
  Breakout: () => Breakout,
  Button: () => Button,
  Calendar: () => Calendar,
  CalendarCell: () => CalendarCell,
  CalendarGrid: () => CalendarGrid,
  Card: () => Card,
  Center: () => Center,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  CheckboxGroupContext: () => CheckboxGroupContext,
  Columns: () => Columns,
  ComboBox: () => ComboBox,
  Container: () => Container,
  DateField: () => DateField,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  Divider: () => Divider,
  FieldBase: () => FieldBase,
  FieldGroup: () => FieldGroup,
  FieldGroupContext: () => FieldGroupContext,
  Footer: () => Footer,
  Header: () => Header,
  Headline: () => Headline,
  Image: () => Image,
  Inline: () => Inline,
  Input: () => Input,
  Inset: () => Inset,
  Label: () => Label,
  Link: () => Link,
  List: () => List,
  MarigoldProvider: () => MarigoldProvider,
  Menu: () => Menu,
  Message: () => Message,
  Modal: () => Modal,
  NumberField: () => NumberField,
  Overlay: () => Overlay,
  Popover: () => Popover,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  Select: () => Select,
  Slider: () => Slider,
  Split: () => Split,
  Stack: () => Stack,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  Tag: () => Tag2,
  Text: () => Text,
  TextArea: () => TextArea,
  TextField: () => TextField,
  ThemeProvider: () => import_system52.ThemeProvider,
  Tiles: () => Tiles,
  Tooltip: () => Tooltip,
  Tray: () => Tray,
  TrayWrapper: () => TrayWrapper,
  Underlay: () => Underlay,
  VisuallyHidden: () => import_visually_hidden.VisuallyHidden,
  XLoader: () => XLoader,
  useAsyncList: () => import_data.useAsyncList,
  useCheckboxGroupContext: () => useCheckboxGroupContext,
  useFieldGroupContext: () => useFieldGroupContext,
  useListData: () => import_data.useListData,
  useTheme: () => import_system52.useTheme
});
module.exports = __toCommonJS(src_exports);

// src/hooks.ts
var import_data = require("@react-stately/data");

// src/Accordion/Accordion.tsx
var import_react5 = require("react");
var import_accordion = require("@react-aria/accordion");
var import_collections = require("@react-stately/collections");
var import_tree = require("@react-stately/tree");

// src/Accordion/AccordionItem.tsx
var import_react4 = require("react");
var import_focus2 = require("@react-aria/focus");
var import_utils5 = require("@react-aria/utils");
var import_system4 = require("@marigold/system");

// src/Button/Button.tsx
var import_react = require("react");
var import_button = require("@react-aria/button");
var import_focus = require("@react-aria/focus");
var import_interactions = require("@react-aria/interactions");
var import_utils = require("@react-aria/utils");
var import_system = require("@marigold/system");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    const buttonRef = (0, import_utils.useObjectRef)(ref);
    const { hoverProps, isHovered } = (0, import_interactions.useHover)({ isDisabled: disabled });
    const { isFocusVisible, focusProps } = (0, import_focus.useFocusRing)({
      autoFocus: props.autoFocus
    });
    const { buttonProps, isPressed } = (0, import_button.useButton)(
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
    const classNames2 = (0, import_system.useClassNames)({
      component: "Button",
      variant,
      size,
      className
    });
    const stateProps = (0, import_system.useStateProps)({
      active: isPressed,
      focusVisible: isFocusVisible,
      hover: isHovered
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Component,
      {
        ...(0, import_utils.mergeProps)(buttonProps, focusProps, hoverProps, props),
        ...stateProps,
        ref: buttonRef,
        className: (0, import_system.cn)(
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
var import_react2 = require("react");
var import_system2 = require("@marigold/system");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ChevronUp = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_system2.SVG, { className, ...props, viewBox: "0 0 24 24", ref, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5.97563 16.8506L12 10.8394L18.0244 16.8506L19.875 15L12 7.125L4.125 15L5.97563 16.8506Z" }) })
);

// src/Chevron/ChevronDown.tsx
var import_react3 = require("react");
var import_system3 = require("@marigold/system");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ChevronDown = (0, import_react3.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_system3.SVG, { className, ...props, viewBox: "0 0 24 24", ref, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.97563 7.125L12 13.1363L18.0244 7.125L19.875 8.97563L12 16.8506L4.125 8.97563L5.97563 7.125Z" }) })
);

// src/Accordion/useAccordionItem.ts
var import_button2 = require("@react-aria/button");
var import_selection = require("@react-aria/selection");
var import_utils2 = require("@react-aria/utils");
var import_utils3 = require("@react-aria/utils");
var import_utils4 = require("@react-aria/utils");
function isNonContiguousSelectionModifier(e) {
  return (0, import_utils3.isAppleDevice)() ? e.altKey : e.ctrlKey;
}
function isCtrlKeyPressed(e) {
  if ((0, import_utils4.isMac)()) {
    return e.metaKey;
  }
  return e.ctrlKey;
}
function useAccordionItem(props, state, ref) {
  let { item } = props;
  let key = item.key;
  let manager = state.selectionManager;
  let buttonId = (0, import_utils2.useId)();
  let regionId = (0, import_utils2.useId)();
  let isDisabled = state.disabledKeys.has(item.key);
  let { itemProps } = (0, import_selection.useSelectableItem)({
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
  let { buttonProps } = (0, import_button2.useButton)(
    (0, import_utils2.mergeProps)(itemProps, {
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var AccordionItem = ({
  item,
  state,
  title,
  variant,
  size,
  ...props
}) => {
  const ref = (0, import_react4.useRef)(null);
  const defaultExpanded = state.expandedKeys.has(
    item.key.toString().replace(".$", "")
  );
  const expanded = state.selectionManager.isSelected(item.key);
  (0, import_react4.useEffect)(() => {
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
  const { isFocusVisible, focusProps } = (0, import_focus2.useFocusRing)();
  const stateProps = (0, import_system4.useStateProps)({
    focus: isFocusVisible,
    expanded: defaultExpanded || expanded
  });
  const classNames2 = (0, import_system4.useClassNames)({ component: "Accordion", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_focus2.FocusRing, { within: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      Button,
      {
        className: classNames2.button,
        ...(0, import_utils5.mergeProps)(buttonProps, stateProps, props),
        ref,
        "aria-label": item.textValue,
        children: [
          title,
          !expanded ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronUp, { className: "h3 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronDown, { className: "h3 w-6" })
        ]
      }
    ) }),
    expanded || defaultExpanded ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        ...(0, import_utils5.mergeProps)(regionProps, focusProps, stateProps),
        className: classNames2.item,
        children: item.props.children
      }
    ) : null
  ] });
};

// src/Accordion/Accordion.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Accordion = ({ children, ...props }) => {
  const ownProps = {
    ...props,
    // we have to do this because JSX childs are not supported
    children: import_react5.Children.toArray(children).map((child) => {
      if (!(0, import_react5.isValidElement)(child)) {
        return child;
      }
      return (0, import_react5.cloneElement)(child, {
        hasChildItems: false,
        ...child.props
      });
    })
  };
  const ref = (0, import_react5.useRef)(null);
  const state = (0, import_tree.useTreeState)({
    selectionMode: "single",
    ...ownProps
  });
  const { accordionProps } = (0, import_accordion.useAccordion)(
    { ...ownProps, children },
    state,
    ref
  );
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ...accordionProps, ref, children: [...state.collection].map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
Accordion.Item = import_collections.Item;

// src/Aside/Aside.tsx
var import_react6 = require("react");
var import_system5 = require("@marigold/system");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const [left, right] = import_react6.Children.toArray(children);
  const vars = {
    aside: (0, import_system5.createVar)({ sideWidth }),
    content: (0, import_system5.createVar)({ wrap })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: (0, import_system5.cn)(
        "flex flex-wrap",
        import_system5.gapSpace[space],
        !stretch && "items-start"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            className: classNames[side === "left" ? "aside" : "content"],
            style: vars[side === "left" ? "aside" : "content"],
            children: left
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_system6 = require("@marigold/system");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Aspect = ({
  ratio = "square",
  maxWidth,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  "div",
  {
    className: (0, import_system6.cn)("overflow-hidden", import_system6.aspect[ratio], "max-w-[var(--maxWidth)]"),
    style: (0, import_system6.createVar)({ maxWidth }),
    children
  }
);

// src/Autocomplete/Autocomplete.tsx
var import_react17 = require("react");
var import_autocomplete = require("@react-aria/autocomplete");
var import_i18n = require("@react-aria/i18n");
var import_collections2 = require("@react-stately/collections");
var import_combobox = require("@react-stately/combobox");

// src/FieldBase/FieldBase.tsx
var import_system9 = require("@marigold/system");

// src/HelpText/HelpText.tsx
var import_system7 = require("@marigold/system");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const classNames2 = (0, import_system7.useClassNames)({
    component: "HelpText",
    variant,
    size,
    className
  });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...props,
      ...hasErrorMessage ? errorMessageProps : descriptionProps,
      className: (0, import_system7.cn)("flex items-center gap-1", classNames2.container),
      children: hasErrorMessage ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_system7.SVG,
          {
            className: (0, import_system7.cn)("h-4 w-4", classNames2.icon),
            viewBox: "0 0 24 24",
            role: "presentation",
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M2.25 20.3097H21.75L12 3.46875L2.25 20.3097ZM12.8864 17.2606H11.1136V15.4879H12.8864V17.2606ZM12.8864 13.7151H11.1136V10.1697H12.8864V13.7151Z" })
          }
        ),
        errorMessage
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: description })
    }
  );
};

// src/Label/Label.tsx
var import_system8 = require("@marigold/system");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Label = ({
  as = "label",
  children,
  variant,
  size,
  labelWidth,
  ...props
}) => {
  const Component = as;
  const classNames2 = (0, import_system8.useClassNames)({ component: "Label", size, variant });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    Component,
    {
      ...props,
      className: (0, import_system8.cn)(classNames2.container, "flex w-[var(--labelWidth)]"),
      style: (0, import_system8.createVar)({ labelWidth }),
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_system8.SVG,
          {
            viewBox: "0 0 24 24",
            role: "presentation",
            size: 16,
            className: (0, import_system8.cn)("hidden", classNames2.indicator),
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M10.8 3.84003H13.2V9.85259L18.1543 7.01815L19.3461 9.10132L14.3584 11.9549L19.3371 14.7999L18.1463 16.8836L13.2 14.0572V20.16H10.8V13.9907L5.76116 16.8735L4.56935 14.7903L9.5232 11.9561L4.56 9.12003L5.75073 7.03624L10.8 9.92154V3.84003Z" })
          }
        )
      ]
    }
  );
};

// src/FieldBase/FieldGroup.tsx
var import_react7 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var FieldGroupContext = (0, import_react7.createContext)({});
var useFieldGroupContext = () => (0, import_react7.useContext)(FieldGroupContext);
var FieldGroup = ({ labelWidth, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FieldGroupContext.Provider, { value: { labelWidth }, children });
};

// src/FieldBase/FieldBase.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const classNames2 = (0, import_system9.useClassNames)({
    component: "Field",
    variant,
    size
  });
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      ...props,
      ...stateProps,
      className: (0, import_system9.cn)("group/field", import_system9.width[width], classNames2),
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
        hasHelpText && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_react8 = require("react");
var import_system10 = require("@marigold/system");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Input = (0, import_react8.forwardRef)(
  ({
    type = "text",
    icon,
    action,
    variant,
    size,
    className,
    ...props
  }, ref) => {
    const classNames2 = (0, import_system10.useClassNames)({
      component: "Input",
      variant,
      size,
      className
    });
    const inputIcon = icon ? (0, import_react8.cloneElement)(icon, {
      className: (0, import_system10.cn)(
        "pointer-events-none absolute",
        classNames2.icon,
        icon.props.className
      ),
      ...icon.props
    }) : null;
    const inputAction = action && !props.readOnly ? (0, import_react8.cloneElement)(action, {
      className: (0, import_system10.cn)(
        "absolute",
        classNames2.action,
        action.props.className
      ),
      ...action.props
    }) : null;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      "div",
      {
        className: "group/input relative flex items-center",
        "data-icon": icon && "",
        "data-action": action && "",
        children: [
          inputIcon,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            "input",
            {
              ...props,
              className: (0, import_system10.cn)(
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
var import_react11 = require("react");
var import_listbox3 = require("@react-aria/listbox");
var import_utils7 = require("@react-aria/utils");
var import_system12 = require("@marigold/system");

// src/ListBox/Context.ts
var import_react9 = require("react");
var ListBoxContext = (0, import_react9.createContext)({});
var useListBoxContext = () => (0, import_react9.useContext)(ListBoxContext);

// src/ListBox/ListBoxOption.tsx
var import_react10 = require("react");
var import_listbox = require("@react-aria/listbox");
var import_utils6 = require("@react-aria/utils");
var import_system11 = require("@marigold/system");
var import_jsx_runtime13 = require("react/jsx-runtime");
var ListBoxOption = ({ item, state }) => {
  const ref = (0, import_react10.useRef)(null);
  const { optionProps, isSelected, isDisabled, isFocused } = (0, import_listbox.useOption)(
    {
      key: item.key
    },
    state,
    ref
  );
  const { onPointerUp, ...props } = optionProps;
  const { classNames: classNames2 } = useListBoxContext();
  const stateProps = (0, import_system11.useStateProps)({
    selected: isSelected,
    disabled: isDisabled,
    focusVisible: isFocused
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "li",
    {
      ref,
      className: classNames2.option,
      ...(0, import_utils6.mergeProps)(props, { onPointerDown: onPointerUp }, { ...stateProps }),
      children: item.props.children
    }
  );
};

// src/ListBox/ListBoxSection.tsx
var import_listbox2 = require("@react-aria/listbox");
var import_jsx_runtime14 = require("react/jsx-runtime");
var ListBoxSection = ({ section, state }) => {
  const { classNames: classNames2 } = useListBoxContext();
  const { itemProps, headingProps, groupProps } = (0, import_listbox2.useListBoxSection)({
    heading: section.rendered,
    "aria-label": section["aria-label"]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { className: classNames2.section, ...itemProps, children: [
    section.rendered && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: classNames2.sectionTitle, ...headingProps, children: section.rendered }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: classNames2.list, ...groupProps, children: [...section.props.children].map((node) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ListBoxOption, { item: node, state }, node.key)) })
  ] });
};

// src/ListBox/ListBox.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var ListBox = (0, import_react11.forwardRef)(
  ({ state, variant, size, ...props }, ref) => {
    const innerRef = (0, import_utils7.useObjectRef)(ref);
    const { listBoxProps } = (0, import_listbox3.useListBox)(props, state, innerRef);
    const classNames2 = (0, import_system12.useClassNames)({ component: "ListBox", variant, size });
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ListBoxContext.Provider, { value: { classNames: classNames2 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: classNames2.container, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "ul",
      {
        className: (0, import_system12.cn)(
          "overflow-y-auto sm:max-h-[75vh] lg:max-h-[45vh]",
          classNames2.list
        ),
        ref: innerRef,
        ...listBoxProps,
        children: [...state.collection].map(
          (item) => item.type === "section" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ListBoxSection, { section: item, state }, item.key) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ListBoxOption, { item, state }, item.key)
        )
      }
    ) }) });
  }
);

// src/Overlay/Modal.tsx
var import_react12 = require("react");
var import_focus3 = require("@react-aria/focus");
var import_overlays = require("@react-aria/overlays");
var import_utils8 = require("@react-aria/utils");

// src/Overlay/Underlay.tsx
var import_system13 = require("@marigold/system");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Underlay = ({ size, variant, ...props }) => {
  const classNames2 = (0, import_system13.useClassNames)({ component: "Underlay", size, variant });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: (0, import_system13.cn)("fixed inset-0 z-40", classNames2), ...props });
};

// src/Overlay/Modal.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Modal = (0, import_react12.forwardRef)(
  ({ children, open, dismissable, keyboardDismissable, onClose, ...props }, ref) => {
    const modalRef = (0, import_utils8.useObjectRef)(ref);
    const { overlayProps, underlayProps } = (0, import_overlays.useOverlay)(
      {
        isOpen: open,
        onClose,
        isDismissable: dismissable,
        isKeyboardDismissDisabled: !keyboardDismissable
      },
      modalRef
    );
    (0, import_overlays.usePreventScroll)();
    const { modalProps } = (0, import_overlays.useModal)({});
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_focus3.FocusScope, { contain: true, restoreFocus: true, autoFocus: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Underlay, { ...underlayProps, variant: "modal" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "div",
        {
          className: "pointer-none fixed inset-0 z-50 flex items-center justify-center",
          ref: modalRef,
          ...(0, import_utils8.mergeProps)(props, overlayProps, modalProps),
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { style: { pointerEvents: "auto" }, children })
        }
      )
    ] });
  }
);

// src/Overlay/Overlay.tsx
var import_react13 = require("react");
var import_overlays2 = require("@react-aria/overlays");
var import_system14 = require("@marigold/system");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Overlay = ({ children, container, open }) => {
  const nodeRef = (0, import_react13.useRef)(null);
  const theme = (0, import_system14.useTheme)();
  let mountOverlay = open;
  if (!mountOverlay) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_overlays2.Overlay, { portalContainer: container, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_react14 = require("react");
var import_focus4 = require("@react-aria/focus");
var import_overlays3 = require("@react-aria/overlays");
var import_system15 = require("@marigold/system");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Popover = (0, import_react14.forwardRef)(
  (props, ref) => {
    const fallbackRef = (0, import_react14.useRef)(null);
    const popoverRef = ref || fallbackRef;
    let { children, state, ...otherProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Overlay, { open: state.isOpen, ...otherProps, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PopoverWrapper, { ref: popoverRef, ...props, children }) });
  }
);
var PopoverWrapper = (0, import_react14.forwardRef)(
  ({
    children,
    isNonModal,
    state,
    keyboardDismissDisabled,
    ...props
  }, ref) => {
    const { popoverProps, underlayProps, placement } = (0, import_overlays3.usePopover)(
      {
        ...props,
        isNonModal,
        isKeyboardDismissDisabled: keyboardDismissDisabled,
        popoverRef: ref,
        placement: "bottom left"
      },
      state
    );
    const classNames2 = (0, import_system15.useClassNames)({
      component: "Popover",
      variant: placement
    });
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_focus4.FocusScope, { restoreFocus: true, children: [
      !isNonModal && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Underlay, { ...underlayProps }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
            !isNonModal && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_overlays3.DismissButton, { onDismiss: state.close }),
            children,
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_overlays3.DismissButton, { onDismiss: state.close })
          ]
        }
      )
    ] });
  }
);

// src/Overlay/Tray.tsx
var import_react15 = require("react");
var import_focus5 = require("@react-aria/focus");
var import_overlays4 = require("@react-aria/overlays");
var import_utils9 = require("@react-aria/utils");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Tray = (0, import_react15.forwardRef)(
  ({ state, children, ...props }, ref) => {
    const trayRef = (0, import_utils9.useObjectRef)(ref);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Overlay, { open: state.isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TrayWrapper, { state, ...props, ref: trayRef, children }) });
  }
);
var TrayWrapper = (0, import_react15.forwardRef)(
  ({ children, state, ...props }, ref) => {
    let { modalProps, underlayProps } = (0, import_overlays4.useModalOverlay)(
      {
        ...props,
        isDismissable: true
      },
      state,
      ref
    );
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_focus5.FocusScope, { contain: true, restoreFocus: true, autoFocus: true, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Underlay, { ...underlayProps, variant: "modal", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        ...modalProps,
        ref,
        className: "absolute bottom-0 w-full",
        "data-testid": "tray",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_overlays4.DismissButton, { onDismiss: state.close }),
          children,
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_overlays4.DismissButton, { onDismiss: state.close })
        ]
      }
    ) }) });
  }
);

// src/Autocomplete/ClearButton.tsx
var import_react16 = require("react");
var import_button3 = require("@react-aria/button");
var import_focus6 = require("@react-aria/focus");
var import_interactions2 = require("@react-aria/interactions");
var import_utils10 = require("@react-aria/utils");
var import_system16 = require("@marigold/system");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const buttonRef = (0, import_react16.useRef)(null);
  const { hoverProps, isHovered } = (0, import_interactions2.useHover)({ isDisabled: disabled });
  const { isFocusVisible, focusProps } = (0, import_focus6.useFocusRing)({
    autoFocus: props.autoFocus
  });
  const { buttonProps, isPressed } = (0, import_button3.useButton)(
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
  const stateProps = (0, import_system16.useStateProps)({
    active: isPressed,
    focusVisible: isFocusVisible,
    hover: isHovered
  });
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "button",
    {
      ...(0, import_utils10.mergeProps)(buttonProps, focusProps, hoverProps, props),
      ...stateProps,
      ref: buttonRef,
      className: (0, import_system16.cn)(
        "cursor-pointer appearance-none border-none p-0 pr-1",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          width: 20,
          height: 20,
          children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
        }
      )
    }
  );
};

// src/Autocomplete/Autocomplete.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var SearchIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: 24,
    height: 24,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M16.1865 14.5142H15.3057L14.9936 14.2131C16.0862 12.9421 16.744 11.292 16.744 9.497C16.744 5.49443 13.4996 2.25 9.497 2.25C5.49443 2.25 2.25 5.49443 2.25 9.497C2.25 13.4996 5.49443 16.744 9.497 16.744C11.292 16.744 12.9421 16.0862 14.2131 14.9936L14.5142 15.3057V16.1865L20.0888 21.75L21.75 20.0888L16.1865 14.5142ZM9.49701 14.5142C6.72085 14.5142 4.47986 12.2732 4.47986 9.49701C4.47986 6.72085 6.72085 4.47986 9.49701 4.47986C12.2732 4.47986 14.5142 6.72085 14.5142 9.49701C14.5142 12.2732 12.2732 14.5142 9.49701 14.5142Z" })
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
  const { contains } = (0, import_i18n.useFilter)({ sensitivity: "base" });
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
  const state = (0, import_combobox.useComboBoxState)({
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
  const inputRef = (0, import_react17.useRef)(null);
  const listBoxRef = (0, import_react17.useRef)(null);
  const popoverRef = (0, import_react17.useRef)(null);
  const { inputProps, listBoxProps, labelProps, clearButtonProps } = (0, import_autocomplete.useSearchAutocomplete)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      FieldBase,
      {
        label: props.label,
        labelProps,
        description: props.description,
        error,
        errorMessage: props.errorMessage,
        disabled,
        width,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          Input,
          {
            ...inputProps,
            ref: inputRef,
            icon: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SearchIcon, {}),
            action: state.inputValue !== "" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Popover,
      {
        state,
        ref: popoverRef,
        triggerRef: inputRef,
        scrollRef: listBoxRef,
        isNonModal: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ListBox, { ref: listBoxRef, state, ...listBoxProps })
      }
    )
  ] });
};
Autocomplete.Item = import_collections2.Item;

// src/ComboBox/ComboBox.tsx
var import_react18 = __toESM(require("react"));
var import_button4 = require("@react-aria/button");
var import_combobox2 = require("@react-aria/combobox");
var import_i18n2 = require("@react-aria/i18n");
var import_collections3 = require("@react-stately/collections");
var import_combobox3 = require("@react-stately/combobox");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  const { contains } = (0, import_i18n2.useFilter)({ sensitivity: "base" });
  const state = (0, import_combobox3.useComboBoxState)({ ...props, defaultFilter: contains });
  const buttonRef = import_react18.default.useRef(null);
  const inputRef = import_react18.default.useRef(null);
  const listBoxRef = import_react18.default.useRef(null);
  const popoverRef = import_react18.default.useRef(null);
  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps
  } = (0, import_combobox2.useComboBox)(
    { ...props, inputRef, buttonRef, listBoxRef, popoverRef },
    state
  );
  const errorMessageProps = { "aria-invalid": error };
  const { buttonProps } = (0, import_button4.useButton)(triggerProps, buttonRef);
  const { label, description, errorMessage } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      FieldBase,
      {
        label,
        labelProps,
        description,
        error,
        errorMessage,
        errorMessageProps,
        width,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          Input,
          {
            ...inputProps,
            ref: inputRef,
            action: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
              Button,
              {
                className: "absolute right-2 h-4 w-4 border-none bg-transparent p-0",
                ref: buttonRef,
                ...buttonProps,
                children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ChevronDown, { className: "h-4 w-4" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Popover,
      {
        state,
        ref: popoverRef,
        triggerRef: inputRef,
        scrollRef: listBoxRef,
        isNonModal: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ListBox, { ref: listBoxRef, state, ...listBoxProps })
      }
    )
  ] });
};
ComboBox.Item = import_collections3.Item;

// src/Badge/Badge.tsx
var import_system17 = require("@marigold/system");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Badge = ({ variant, size, children, ...props }) => {
  const classNames2 = (0, import_system17.useClassNames)({ component: "Badge", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { ...props, className: classNames2, children });
};

// src/Breakout/Breakout.tsx
var import_system18 = require("@marigold/system");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Breakout = ({
  height,
  children,
  orientation,
  alignX = "left",
  alignY = "center",
  ...props
}) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      className: (0, import_system18.cn)(
        "col-start-[1_!important] col-end-[-1_!important] w-full",
        alignX && ((_b = (_a = import_system18.alignment) == null ? void 0 : _a.horizontal) == null ? void 0 : _b.alignmentX[alignX]),
        alignY && ((_d = (_c = import_system18.alignment) == null ? void 0 : _c.horizontal) == null ? void 0 : _d.alignmentY[alignY]),
        alignX || alignY ? "flex" : "block",
        "h-[--height]"
      ),
      style: (0, import_system18.createVar)({ height }),
      ...props,
      children
    }
  );
};

// src/Body/Body.tsx
var import_system19 = require("@marigold/system");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Body = ({ children, variant, size, ...props }) => {
  const classNames2 = (0, import_system19.useClassNames)({ component: "Body", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("section", { ...props, className: classNames2, children });
};

// src/Card/Card.tsx
var import_system20 = require("@marigold/system");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  const classNames2 = (0, import_system20.useClassNames)({ component: "Card", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      ...props,
      className: (0, import_system20.cn)(
        "flex flex-col",
        classNames2,
        import_system20.gapSpace[space],
        import_system20.paddingSpace !== void 0 && import_system20.paddingSpace[p],
        import_system20.paddingSpaceX !== void 0 && import_system20.paddingSpaceX[px],
        import_system20.paddingSpaceY !== void 0 && import_system20.paddingSpaceY[py],
        import_system20.paddingRight !== void 0 && import_system20.paddingRight[pr],
        import_system20.paddingLeft !== void 0 && import_system20.paddingLeft[pl],
        import_system20.paddingBottom !== void 0 && import_system20.paddingBottom[pb],
        import_system20.paddingTop !== void 0 && import_system20.paddingTop[pt]
      ),
      children
    }
  );
};

// src/Center/Center.tsx
var import_system21 = require("@marigold/system");
var import_jsx_runtime28 = require("react/jsx-runtime");
var Center = ({
  maxWidth = "100%",
  space = 0,
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "div",
    {
      className: (0, import_system21.cn)(
        "me-[auto] ms-[auto] box-content flex flex-col items-center justify-center",
        import_system21.gapSpace[space],
        "max-w-[--maxWidth]"
      ),
      style: (0, import_system21.createVar)({ maxWidth }),
      ...props,
      children
    }
  );
};

// src/Checkbox/Checkbox.tsx
var import_react20 = require("react");
var import_checkbox3 = require("@react-aria/checkbox");
var import_focus7 = require("@react-aria/focus");
var import_interactions3 = require("@react-aria/interactions");
var import_utils11 = require("@react-aria/utils");
var import_toggle = require("@react-stately/toggle");
var import_system24 = require("@marigold/system");

// src/Checkbox/CheckboxField.tsx
var import_system22 = require("@marigold/system");
var import_jsx_runtime29 = require("react/jsx-runtime");
var CheckboxField = ({ children, labelWidth }) => {
  const classNames2 = (0, import_system22.useClassNames)({ component: "Field" });
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: classNames2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "w-[--labelWidth]", style: (0, import_system22.createVar)({ labelWidth }) }),
    children
  ] });
};

// src/Checkbox/CheckboxGroup.tsx
var import_react19 = require("react");
var import_checkbox = require("@react-aria/checkbox");
var import_checkbox2 = require("@react-stately/checkbox");
var import_system23 = require("@marigold/system");
var import_jsx_runtime30 = require("react/jsx-runtime");
var CheckboxGroupContext = (0, import_react19.createContext)(
  null
);
var useCheckboxGroupContext = () => (0, import_react19.useContext)(CheckboxGroupContext);
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
  const state = (0, import_checkbox2.useCheckboxGroupState)(props);
  const { groupProps, labelProps, descriptionProps, errorMessageProps } = (0, import_checkbox.useCheckboxGroup)(props, state);
  const stateProps = (0, import_system23.useStateProps)({
    disabled,
    readOnly,
    error
  });
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { role: "presentation", className: "flex flex-col items-start", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CheckboxGroupContext.Provider, { value: { error, ...state }, children }) })
    }
  );
};

// src/Checkbox/Checkbox.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var CheckMark = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("svg", { viewBox: "0 0 12 10", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "path",
  {
    fill: "currentColor",
    stroke: "none",
    d: "M11.915 1.548 10.367 0 4.045 6.315 1.557 3.827 0 5.373l4.045 4.046 7.87-7.871Z"
  }
) });
var IndeterminateMark = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("svg", { width: "12", height: "3", viewBox: "0 0 12 3", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "path",
  {
    fill: "currentColor",
    stroke: "none",
    d: "M11.5 2.04018H0.5V0.46875H11.5V2.04018Z"
  }
) });
var Icon = ({ className, checked, indeterminate, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "div",
    {
      "aria-hidden": "true",
      className: (0, import_system24.cn)(
        "flex shrink-0 grow-0 basis-4 items-center justify-center",
        "h-4 w-4 p-px",
        "bg-white",
        "rounded-[3px] border border-solid border-black",
        className
      ),
      ...props,
      children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(IndeterminateMark, {}) : checked ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CheckMark, {}) : null
    }
  );
};
var Checkbox = (0, import_react20.forwardRef)(
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
    const inputRef = (0, import_utils11.useObjectRef)(ref);
    const checkboxProps = {
      isIndeterminate: indeterminate,
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
      validationState: error ? "invalid" : "valid"
    };
    const groupState = useCheckboxGroupContext();
    const { inputProps } = groupState ? (0, import_checkbox3.useCheckboxGroupItem)(
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
    ) : (0, import_checkbox3.useCheckbox)(
      {
        isSelected: checked,
        defaultSelected: defaultChecked,
        ...checkboxProps,
        ...props
      },
      (0, import_toggle.useToggleState)({
        isSelected: checked,
        defaultSelected: defaultChecked,
        isReadOnly: readOnly,
        ...props
      }),
      inputRef
    );
    const classNames2 = (0, import_system24.useClassNames)({ component: "Checkbox", variant, size });
    const { hoverProps, isHovered } = (0, import_interactions3.useHover)({
      isDisabled: inputProps.disabled
    });
    const { labelWidth } = useFieldGroupContext();
    const { isFocusVisible, focusProps } = (0, import_focus7.useFocusRing)();
    const stateProps = (0, import_system24.useStateProps)({
      hover: isHovered,
      focus: isFocusVisible,
      checked: inputProps.checked,
      disabled: inputProps.disabled,
      error: (groupState == null ? void 0 : groupState.error) || error,
      readOnly,
      indeterminate
    });
    const component = /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "label",
      {
        className: (0, import_system24.cn)(
          "group/checkbox relative flex items-center gap-[1ch]",
          classNames2.container
        ),
        ...hoverProps,
        ...stateProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            "input",
            {
              ref: inputRef,
              className: "z-1 absolute left-0 top-0 h-full w-full cursor-pointer opacity-[0.0001] group-disabled/checkbox:cursor-not-allowed",
              ...inputProps,
              ...focusProps
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
            Icon,
            {
              checked: inputProps.checked,
              indeterminate,
              className: classNames2.checkbox
            }
          ),
          props.children && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: classNames2.label, children: props.children })
        ]
      }
    );
    return !groupState && labelWidth ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CheckboxField, { labelWidth, children: component }) : component;
  }
);

// src/Columns/Columns.tsx
var import_react21 = require("react");
var import_system25 = require("@marigold/system");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Columns = ({
  space = 0,
  columns,
  collapseAt = "0em",
  stretch,
  children,
  ...props
}) => {
  if (import_react21.Children.count(children) !== columns.length) {
    throw new Error(
      `Columns: expected ${columns.length} children, got ${import_react21.Children.count(
        children
      )}`
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: (0, import_system25.cn)(
        "flex flex-wrap items-stretch",
        stretch && "h-full",
        import_system25.gapSpace[space]
      ),
      ...props,
      children: import_react21.Children.map(children, (child, idx) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "div",
        {
          className: (0, import_system25.cn)(
            "grow-[--columnSize] basis-[calc((var(--collapseAt)_-_100%)_*_999)]"
          ),
          style: (0, import_system25.createVar)({ collapseAt, columnSize: columns[idx] }),
          children: (0, import_react21.isValidElement)(child) ? (0, import_react21.cloneElement)(child) : child
        }
      ))
    }
  );
};

// src/Container/Container.tsx
var import_system26 = require("@marigold/system");
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    "div",
    {
      className: (0, import_system26.cn)(
        "grid",
        import_system26.placeItems[alignItems],
        import_system26.gridColsAlign[align],
        import_system26.gridColumn[align]
      ),
      style: (0, import_system26.createVar)({ maxWidth }),
      ...props,
      children
    }
  );
};

// src/Dialog/Dialog.tsx
var import_react24 = require("react");
var import_button5 = require("@react-aria/button");
var import_dialog = require("@react-aria/dialog");
var import_system29 = require("@marigold/system");

// src/Header/Header.tsx
var import_system27 = require("@marigold/system");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Header = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  const classNames2 = (0, import_system27.useClassNames)({
    component: "Header",
    variant,
    size,
    className
  });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("header", { ...props, className: (0, import_system27.cn)(classNames2), children });
};

// src/Headline/Headline.tsx
var import_system28 = require("@marigold/system");
var import_jsx_runtime35 = require("react/jsx-runtime");
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
  const theme = (0, import_system28.useTheme)();
  const classNames2 = (0, import_system28.useClassNames)({
    component: "Headline",
    variant,
    size: size != null ? size : `level-${level}`
  });
  const Component = as;
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    Component,
    {
      ...props,
      className: (0, import_system28.cn)(classNames2, "text-[--color]", import_system28.textAlign[align]),
      style: (0, import_system28.createVar)({
        color: color && theme.colors && (0, import_system28.get)(
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
var import_react22 = require("react");
var DialogContext = (0, import_react22.createContext)({});
var useDialogContext = () => (0, import_react22.useContext)(DialogContext);

// src/Dialog/DialogController.tsx
var import_overlays5 = require("@react-stately/overlays");
var import_jsx_runtime36 = require("react/jsx-runtime");
var DialogController = ({
  children,
  dismissable = true,
  keyboardDismissable = true,
  open,
  onOpenChange
}) => {
  const state = (0, import_overlays5.useOverlayTriggerState)({
    isOpen: open,
    onOpenChange
  });
  const ctx = { open: state.isOpen, close: state.close };
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(DialogContext.Provider, { value: ctx, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Overlay, { open: state.isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var import_react23 = require("react");
var import_interactions4 = require("@react-aria/interactions");
var import_overlays6 = require("@react-stately/overlays");
var import_jsx_runtime37 = require("react/jsx-runtime");
var DialogTrigger = ({
  children,
  dismissable = true,
  keyboardDismissable = true
}) => {
  const [dialogTrigger, dialog] = import_react23.Children.toArray(children);
  const dialogTriggerRef = (0, import_react23.useRef)(null);
  const state = (0, import_overlays6.useOverlayTriggerState)({});
  const ctx = { open: state.isOpen, close: state.close };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(DialogContext.Provider, { value: ctx, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      import_interactions4.PressResponder,
      {
        ref: dialogTriggerRef,
        isPressed: state.isOpen,
        onPress: state.toggle,
        children: dialogTrigger
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Overlay, { open: state.isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
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
var import_jsx_runtime38 = require("react/jsx-runtime");
var CloseButton = ({ className }) => {
  const ref = (0, import_react24.useRef)(null);
  const { close } = useDialogContext();
  const { buttonProps } = (0, import_button5.useButton)(
    {
      onPress: () => close == null ? void 0 : close()
    },
    ref
  );
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    "button",
    {
      className: (0, import_system29.cn)(
        "h-4 w-4 cursor-pointer border-none p-0 leading-normal outline-0",
        className
      ),
      ref,
      ...buttonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("svg", { viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
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
  const childs = import_react24.Children.toArray(children);
  const titleIndex = childs.findIndex(
    (child) => (0, import_react24.isValidElement)(child) && (child.type === Header || child.type === Headline)
  );
  if (titleIndex < 0) {
    console.warn(
      "No child in <Dialog> found that can act as title for accessibility. Please add a <Header> or <Headline> as direct child."
    );
    return children;
  }
  const titleChild = (0, import_react24.cloneElement)(
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
  const ref = (0, import_react24.useRef)(null);
  const { close } = useDialogContext();
  const { dialogProps, titleProps } = (0, import_dialog.useDialog)(props, ref);
  const classNames2 = (0, import_system29.useClassNames)({ component: "Dialog", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: classNames2.container, ...dialogProps, children: [
    closeButton && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CloseButton, { className: classNames2.closeButton }),
    typeof children === "function" ? children({ close, titleProps }) : props["aria-labelledby"] ? children : addTitleProps(children, titleProps)
  ] });
};
Dialog.Trigger = DialogTrigger;
Dialog.Controller = DialogController;

// src/Divider/Divider.tsx
var import_separator = require("@react-aria/separator");
var import_system30 = require("@marigold/system");
var import_jsx_runtime39 = require("react/jsx-runtime");
var Divider = ({ variant, ...props }) => {
  const { separatorProps } = (0, import_separator.useSeparator)(props);
  const classNames2 = (0, import_system30.useClassNames)({ component: "Divider", variant });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: classNames2, ...props, ...separatorProps });
};

// src/Footer/Footer.tsx
var import_system31 = require("@marigold/system");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Footer = ({ children, variant, size, ...props }) => {
  const classNames2 = (0, import_system31.useClassNames)({ component: "Footer", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("footer", { ...props, className: classNames2, children });
};

// src/Image/Image.tsx
var import_system32 = require("@marigold/system");
var import_jsx_runtime41 = require("react/jsx-runtime");
var Image = ({
  variant,
  size,
  fit = "none",
  position = "none",
  ...props
}) => {
  const classNames2 = (0, import_system32.useClassNames)({ component: "Image", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "img",
    {
      ...props,
      alt: props.alt,
      className: (0, import_system32.cn)(
        fit !== "none" && "h-full w-full",
        classNames2,
        import_system32.objectFit[fit],
        import_system32.objectPosition[position]
      )
    }
  );
};

// src/Inline/Inline.tsx
var import_system33 = require("@marigold/system");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Inline = ({
  space = 0,
  orientation,
  alignX = ((_a) => (_a = orientation == null ? void 0 : orientation.horizontal) == null ? void 0 : _a.alignX)(),
  alignY = ((_b) => (_b = orientation == null ? void 0 : orientation.horizontal) == null ? void 0 : _b.alignY)(),
  children,
  ...props
}) => {
  var _a2, _b2, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "div",
    {
      className: (0, import_system33.cn)(
        "flex flex-wrap",
        import_system33.gapSpace[space],
        alignX && ((_b2 = (_a2 = import_system33.alignment) == null ? void 0 : _a2.horizontal) == null ? void 0 : _b2.alignmentX[alignX]),
        alignY && ((_d = (_c = import_system33.alignment) == null ? void 0 : _c.horizontal) == null ? void 0 : _d.alignmentY[alignY])
      ),
      ...props,
      children
    }
  );
};

// src/DateField/DateField.tsx
var import_date = require("@internationalized/date");
var import_react26 = require("react");
var import_datepicker2 = require("@react-aria/datepicker");
var import_focus9 = require("@react-aria/focus");
var import_i18n3 = require("@react-aria/i18n");
var import_interactions5 = require("@react-aria/interactions");
var import_utils13 = require("@react-aria/utils");
var import_datepicker3 = require("@react-stately/datepicker");
var import_system35 = require("@marigold/system");

// src/DateField/DateSegment.tsx
var import_react25 = require("react");
var import_datepicker = require("@react-aria/datepicker");
var import_focus8 = require("@react-aria/focus");
var import_utils12 = require("@react-aria/utils");
var import_system34 = require("@marigold/system");
var import_jsx_runtime43 = require("react/jsx-runtime");
var DateSegment = ({
  className,
  segment,
  state,
  isPrevPlaceholder
}) => {
  const ref = (0, import_react25.useRef)(null);
  const { segmentProps } = (0, import_datepicker.useDateSegment)(segment, state, ref);
  const { focusProps, isFocused } = (0, import_focus8.useFocusRing)({
    within: true,
    isTextInput: true
  });
  const stateProps = (0, import_system34.useStateProps)({
    disabled: state.isDisabled,
    focusVisible: isFocused
  });
  const { isPlaceholder, placeholder, text, type, maxValue } = segment;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
    "div",
    {
      ...(0, import_utils12.mergeProps)(segmentProps, stateProps, focusProps),
      ref,
      className: (0, import_system34.cn)(
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
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "span",
          {
            "aria-hidden": "true",
            className: (0, import_system34.cn)(
              isPlaceholder ? "visible block" : "invisible hidden",
              "pointer-events-none w-full text-center"
            ),
            children: isPlaceholder && (placeholder == null ? void 0 : placeholder.toUpperCase())
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: isPlaceholder ? "" : type === "month" || type === "day" ? Number(text) < 10 ? "0" + text : text : text })
      ]
    }
  );
};

// src/DateField/DateField.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
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
  const { locale } = (0, import_i18n3.useLocale)();
  const props = {
    isDisabled: disabled,
    isReadOnly: readOnly,
    isRequired: required,
    ...res
  };
  const { label, description } = props;
  const state = (0, import_datepicker3.useDateFieldState)({
    ...props,
    locale,
    createCalendar: import_date.createCalendar
  });
  const ref = (0, import_react26.useRef)(null);
  const { fieldProps, labelProps, descriptionProps } = (0, import_datepicker2.useDateField)(
    props,
    state,
    ref
  );
  const classNames2 = (0, import_system35.useClassNames)({ component: "DateField", variant, size });
  const { focusProps, isFocused } = (0, import_focus9.useFocusRing)({
    within: true,
    isTextInput: true,
    autoFocus: props.autoFocus
  });
  const { hoverProps, isHovered } = (0, import_interactions5.useHover)({ isDisabled: disabled });
  const stateProps = (0, import_system35.useStateProps)({
    hover: isHovered,
    error,
    readOnly,
    disabled,
    required,
    focus: isFocused || isPressed
  });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
        "div",
        {
          ...(0, import_utils13.mergeProps)(fieldProps, focusProps, stateProps, hoverProps),
          className: (0, import_system35.cn)(
            "relative flex flex-row flex-nowrap",
            "cursor-text aria-disabled:cursor-not-allowed",
            classNames2.field
          ),
          "data-testid": "date-field",
          ref: triggerRef,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { ref, className: "flex basis-full items-center", children: state.segments.map((segment, i) => {
              var _a;
              return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
            action ? action : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              "svg",
              {
                "data-testid": "action",
                className: (0, import_system35.cn)(classNames2.action),
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("path", { d: "M20.0906 19.2V6.6C20.0906 5.61 19.2806 4.8 18.2906 4.8H17.3906V3H15.5906V4.8H8.39062V3H6.59062V4.8H5.69063C4.69163 4.8 3.89962 5.61 3.89962 6.6L3.89062 19.2C3.89062 20.19 4.69163 21 5.69063 21H18.2906C19.2806 21 20.0906 20.19 20.0906 19.2ZM9.29062 11.1001H7.49061V12.9001H9.29062V11.1001ZM5.69062 8.40009H18.2906V6.60008H5.69062V8.40009ZM18.2906 10.2V19.2H5.69062V10.2H18.2906ZM14.6906 12.9001H16.4906V11.1001H14.6906V12.9001ZM12.8906 12.9001H11.0906V11.1001H12.8906V12.9001Z" })
              }
            ) })
          ]
        }
      )
    }
  );
};

// src/Calendar/Calendar.tsx
var import_date3 = require("@internationalized/date");
var import_react30 = require("react");
var import_calendar3 = require("@react-aria/calendar");
var import_i18n9 = require("@react-aria/i18n");
var import_calendar4 = require("@react-stately/calendar");
var import_icons = require("@marigold/icons");
var import_system38 = require("@marigold/system");

// src/Calendar/CalendarGrid.tsx
var import_date2 = require("@internationalized/date");
var import_react28 = require("react");
var import_calendar2 = require("@react-aria/calendar");
var import_i18n4 = require("@react-aria/i18n");
var import_i18n5 = require("@react-aria/i18n");

// src/Calendar/CalendarCell.tsx
var import_react27 = require("react");
var import_calendar = require("@react-aria/calendar");
var import_interactions6 = require("@react-aria/interactions");
var import_utils14 = require("@react-aria/utils");
var import_system36 = require("@marigold/system");
var import_jsx_runtime45 = require("react/jsx-runtime");
var CalendarCell = (props) => {
  const ref = (0, import_react27.useRef)(null);
  const { state } = props;
  let { cellProps, buttonProps, formattedDate, isOutsideVisibleRange } = (0, import_calendar.useCalendarCell)(props, state, ref);
  const classNames2 = (0, import_system36.useClassNames)({
    component: "Calendar"
  });
  const isDisabled = cellProps["aria-disabled"];
  const { hoverProps, isHovered } = (0, import_interactions6.useHover)({
    isDisabled: isDisabled || cellProps["aria-selected"]
  });
  const stateProps = (0, import_system36.useStateProps)({
    disabled: isDisabled,
    hover: isHovered,
    selected: cellProps["aria-selected"]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("td", { className: "group/cell", ...cellProps, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      className: (0, import_system36.cn)(
        "flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full p-[5.3px] text-sm font-normal aria-disabled:cursor-default",
        classNames2.calendarCell
      ),
      hidden: isOutsideVisibleRange,
      ref,
      ...(0, import_utils14.mergeProps)(buttonProps, stateProps, hoverProps),
      children: formattedDate
    }
  ) });
};

// src/Calendar/CalendarGrid.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var CalendarGrid = ({ state, ...props }) => {
  const { locale } = (0, import_i18n4.useLocale)();
  const { gridProps, headerProps } = (0, import_calendar2.useCalendarGrid)(props, state);
  const numberOfWeeksInMonth = (0, import_date2.getWeeksInMonth)(
    state.visibleRange.start,
    locale
  );
  const dayFormatter = (0, import_i18n5.useDateFormatter)({
    weekday: "short",
    timeZone: state.timeZone
  });
  const weekDays = (0, import_react28.useMemo)(() => {
    const weekStart = (0, import_date2.startOfWeek)((0, import_date2.today)(state.timeZone), locale);
    return [...new Array(7).keys()].map((index) => {
      const date = weekStart.add({ days: index });
      const dateDay = date.toDate(state.timeZone);
      return dayFormatter.format(dateDay);
    });
  }, [locale, state.timeZone, dayFormatter]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    "table",
    {
      className: "w-full border-spacing-[6px]",
      ...gridProps,
      cellPadding: "8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("thead", { ...headerProps, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("tr", { children: weekDays.map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("th", { style: { fontWeight: "bolder" }, children: day.substring(0, 2) }, index)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("tbody", { children: [...new Array(numberOfWeeksInMonth).keys()].map((weekIndex) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("tr", { children: state.getDatesInWeek(weekIndex).map(
          (date, i) => date ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            CalendarCell,
            {
              date,
              state
            },
            i
          ) : /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("td", {}, i)
        ) }, weekIndex)) })
      ]
    }
  );
};

// src/Calendar/MonthDropdown.tsx
var import_i18n7 = require("@react-aria/i18n");

// src/Select/Select.tsx
var import_react29 = require("react");
var import_button6 = require("@react-aria/button");
var import_focus10 = require("@react-aria/focus");
var import_i18n6 = require("@react-aria/i18n");
var import_select = require("@react-aria/select");
var import_utils15 = require("@react-aria/utils");
var import_collections4 = require("@react-stately/collections");
var import_select2 = require("@react-stately/select");
var import_system37 = require("@marigold/system");

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
var import_jsx_runtime47 = require("react/jsx-runtime");
var Select = (0, import_react29.forwardRef)(
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
    const formatMessage = (0, import_i18n6.useLocalizedStringFormatter)(messages);
    const props = {
      isOpen: open,
      isDisabled: disabled,
      isRequired: required,
      validationState: error ? "invalid" : "valid",
      placeholder: rest.placeholder || formatMessage.format("placeholder"),
      onSelectionChange: onChange,
      ...rest
    };
    const buttonRef = (0, import_utils15.useObjectRef)(ref);
    const listboxRef = (0, import_react29.useRef)(null);
    const state = (0, import_select2.useSelectState)(props);
    const {
      labelProps,
      triggerProps,
      valueProps,
      menuProps,
      descriptionProps,
      errorMessageProps
    } = (0, import_select.useSelect)(props, state, buttonRef);
    const { buttonProps } = (0, import_button6.useButton)(
      { isDisabled: disabled, ...triggerProps },
      buttonRef
    );
    const { focusProps, isFocusVisible } = (0, import_focus10.useFocusRing)();
    const classNames2 = (0, import_system37.useClassNames)({ component: "Select", variant, size });
    const isSmallScreen = (0, import_system37.useSmallScreen)();
    const stateProps = (0, import_system37.useStateProps)({
      disabled,
      error,
      focusVisible: isFocusVisible,
      expanded: state.isOpen,
      required
    });
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            import_select.HiddenSelect,
            {
              state,
              triggerRef: buttonRef,
              label: props.label,
              name: props.name,
              isDisabled: disabled
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
            "button",
            {
              className: (0, import_system37.cn)(
                "flex w-full items-center justify-between gap-1",
                classNames2.select
              ),
              ref: buttonRef,
              ...(0, import_utils15.mergeProps)(buttonProps, focusProps),
              ...stateProps,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "overflow-hidden whitespace-nowrap", ...valueProps, children: state.selectedItem ? state.selectedItem.rendered : props.placeholder }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ChevronDown, { className: "h-4 w-4" })
              ]
            }
          ),
          isSmallScreen ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Tray, { state, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            ListBox,
            {
              ref: listboxRef,
              state,
              variant,
              size,
              ...menuProps
            }
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Popover, { state, triggerRef: buttonRef, scrollRef: listboxRef, children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
Select.Option = import_collections4.Item;
Select.Section = import_collections4.Section;

// src/Calendar/MonthDropdown.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var MonthDropdown = ({ state }) => {
  let months = [];
  let formatter = (0, import_i18n7.useDateFormatter)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    Select,
    {
      "aria-label": "Month",
      onChange,
      selectedKey: String(state.focusedDate.month),
      "data-testid": "month",
      disabled: state.isDisabled,
      children: months.map((month, i) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Select.Option, { children: month.substring(0, 3) }, i + 1))
    }
  );
};
var MonthDropdown_default = MonthDropdown;

// src/Calendar/YearDropdown.tsx
var import_i18n8 = require("@react-aria/i18n");
var import_jsx_runtime49 = require("react/jsx-runtime");
var YearDropdown = ({ state }) => {
  const years = [];
  let formatter = (0, import_i18n8.useDateFormatter)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    Select,
    {
      "aria-label": "Year",
      selectedKey: "20",
      onChange,
      "data-testid": "year",
      disabled: state.isDisabled,
      children: years.map((year, i) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Select.Option, { children: year.formatted }, i))
    }
  );
};
var YearDropdown_default = YearDropdown;

// src/Calendar/Calendar.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var Calendar = ({
  disabled,
  readOnly,
  size,
  variant,
  ...rest
}) => {
  const { locale } = (0, import_i18n9.useLocale)();
  const props = {
    isDisabled: disabled,
    isReadOnly: readOnly,
    ...rest
  };
  const state = (0, import_calendar4.useCalendarState)({
    ...props,
    locale,
    createCalendar: import_date3.createCalendar
  });
  const ref = (0, import_react30.useRef)(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = (0, import_calendar3.useCalendar)(
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
  const calendarState = (0, import_system38.useStateProps)({
    disabled: state.isDisabled,
    focusVisible: state.isFocused
  });
  const classNames2 = (0, import_system38.useClassNames)({ component: "Calendar" });
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    "div",
    {
      tabIndex: -1,
      className: (0, import_system38.cn)(
        "flex w-[360px] flex-col rounded-sm p-4 shadow-[0_4px_4px_rgba(165,165,165,0.25)]",
        classNames2.calendar
      ),
      ...calendarProps,
      ...calendarState,
      ref,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "mb-4 flex items-center gap-[60px]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex min-w-[170px] gap-[9px] [&_div]:flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(MonthDropdown_default, { state }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(YearDropdown_default, { state })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "flex w-full flex-nowrap justify-end gap-[10px] [&_button:disabled]:cursor-not-allowed [&_button]:px-2 [&_button]:py-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
              Button,
              {
                className: classNames2.calendarControllers,
                ...prevPropsRest,
                disabled: prevIsDisabled,
                children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_icons.ChevronLeft, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
              Button,
              {
                className: classNames2.calendarControllers,
                ...nextPropsRest,
                disabled: nextIsDisabled,
                children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_icons.ChevronRight, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CalendarGrid, { state })
      ]
    }
  );
};

// src/DatePicker/DatePicker.tsx
var import_react31 = require("react");
var import_datepicker4 = require("@react-aria/datepicker");
var import_utils16 = require("@react-aria/utils");
var import_datepicker5 = require("@react-stately/datepicker");
var import_system39 = require("@marigold/system");
var import_jsx_runtime51 = require("react/jsx-runtime");
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
  const state = (0, import_datepicker5.useDatePickerState)({
    shouldCloseOnSelect,
    ...props
  });
  const ref = (0, import_react31.useRef)(null);
  const stateProps = (0, import_system39.useStateProps)({
    focus: state.isOpen
  });
  const { groupProps, fieldProps, buttonProps, calendarProps } = (0, import_datepicker4.useDatePicker)(
    props,
    state,
    ref
  );
  const { isDisabled, errorMessage, description, label } = props;
  const classNames2 = (0, import_system39.useClassNames)({
    component: "DatePicker",
    size,
    variant
  });
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "flex w-full min-w-[300px]", ...groupProps, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
        action: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: classNames2.container, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
          Button,
          {
            ...(0, import_utils16.mergeProps)(buttonProps, stateProps),
            className: (0, import_system39.cn)("absolute right-0 top-0", classNames2.button),
            disabled: isDisabled,
            children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("path", { d: "M20.0906 19.2V6.6C20.0906 5.61 19.2806 4.8 18.2906 4.8H17.3906V3H15.5906V4.8H8.39062V3H6.59062V4.8H5.69063C4.69163 4.8 3.89962 5.61 3.89962 6.6L3.89062 19.2C3.89062 20.19 4.69163 21 5.69063 21H18.2906C19.2806 21 20.0906 20.19 20.0906 19.2ZM9.29062 11.1001H7.49061V12.9001H9.29062V11.1001ZM5.69062 8.40009H18.2906V6.60008H5.69062V8.40009ZM18.2906 10.2V19.2H5.69062V10.2H18.2906ZM14.6906 12.9001H16.4906V11.1001H14.6906V12.9001ZM12.8906 12.9001H11.0906V11.1001H12.8906V12.9001Z" })
              }
            )
          }
        ) })
      }
    ) }),
    state.isOpen && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Popover, { triggerRef: ref, state, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(Calendar, { disabled, ...calendarProps }) })
  ] });
};

// src/Inset/Inset.tsx
var import_system40 = require("@marigold/system");
var import_jsx_runtime52 = require("react/jsx-runtime");
var Inset = ({ space, spaceX, spaceY, children }) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
  "div",
  {
    className: (0, import_system40.cn)(
      space && import_system40.paddingSpace[space],
      !space && spaceX && import_system40.paddingSpaceX[spaceX],
      !space && spaceY && import_system40.paddingSpaceY[spaceY]
    ),
    children
  }
);

// src/Link/Link.tsx
var import_react32 = require("react");
var import_link = require("@react-aria/link");
var import_utils17 = require("@react-aria/utils");
var import_system41 = require("@marigold/system");
var import_jsx_runtime53 = require("react/jsx-runtime");
var Link = (0, import_react32.forwardRef)(
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
    const linkRef = (0, import_utils17.useObjectRef)(ref);
    const { linkProps } = (0, import_link.useLink)(
      {
        ...props,
        elementType: typeof as === "string" ? as : "span",
        isDisabled: disabled
      },
      linkRef
    );
    const Component = as;
    const classNames2 = (0, import_system41.useClassNames)({
      component: "Link",
      variant,
      size,
      className
    });
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
var import_system42 = require("@marigold/system");

// src/List/Context.ts
var import_react33 = require("react");
var ListContext = (0, import_react33.createContext)({});
var useListContext = () => (0, import_react33.useContext)(ListContext);

// src/List/ListItem.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var ListItem = ({ children, ...props }) => {
  const { classNames: classNames2 } = useListContext();
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("li", { ...props, className: classNames2, children });
};

// src/List/List.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var List = ({
  as = "ul",
  children,
  variant,
  size,
  ...props
}) => {
  const Component = as;
  const classNames2 = (0, import_system42.useClassNames)({ component: "List", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Component, { ...props, className: classNames2[as], children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ListContext.Provider, { value: { classNames: classNames2.item }, children }) });
};
List.Item = ListItem;

// src/Menu/Menu.tsx
var import_react37 = require("react");
var import_menu5 = require("@react-aria/menu");
var import_utils20 = require("@react-aria/utils");
var import_collections5 = require("@react-stately/collections");
var import_tree2 = require("@react-stately/tree");
var import_system46 = require("@marigold/system");

// src/Menu/Context.ts
var import_react34 = require("react");
var MenuContext = (0, import_react34.createContext)({});
var useMenuContext = () => (0, import_react34.useContext)(MenuContext);

// src/Menu/MenuItem.tsx
var import_react35 = require("react");
var import_focus11 = require("@react-aria/focus");
var import_menu = require("@react-aria/menu");
var import_utils18 = require("@react-aria/utils");
var import_system43 = require("@marigold/system");
var import_jsx_runtime56 = require("react/jsx-runtime");
var MenuItem = ({
  item,
  state,
  onAction,
  className
}) => {
  const ref = (0, import_react35.useRef)(null);
  const { onClose } = useMenuContext();
  const { menuItemProps } = (0, import_menu.useMenuItem)(
    {
      key: item.key,
      onAction,
      onClose
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = (0, import_focus11.useFocusRing)();
  const stateProps = (0, import_system43.useStateProps)({
    focus: isFocusVisible
  });
  const { onPointerUp, ...props } = menuItemProps;
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    "li",
    {
      ref,
      className,
      ...(0, import_utils18.mergeProps)(
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
var import_menu2 = require("@react-aria/menu");
var import_system44 = require("@marigold/system");
var import_jsx_runtime57 = require("react/jsx-runtime");
var MenuSection = ({ onAction, item, state }) => {
  let { itemProps, headingProps, groupProps } = (0, import_menu2.useMenuSection)({
    heading: item.rendered,
    "aria-label": item["aria-label"]
  });
  const className = (0, import_system44.useClassNames)({ component: "Menu" });
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(import_jsx_runtime57.Fragment, { children: [
    item.key !== state.collection.getFirstKey() && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Divider, { variant: "section" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("li", { ...itemProps, children: [
      item.rendered && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { ...headingProps, className: className.section, children: item.rendered }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("ul", { ...groupProps, className: "pb-1", children: [...item.props.children].map((node) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
var import_react36 = require("react");
var import_interactions7 = require("@react-aria/interactions");
var import_menu3 = require("@react-aria/menu");
var import_utils19 = require("@react-aria/utils");
var import_menu4 = require("@react-stately/menu");
var import_system45 = require("@marigold/system");
var import_jsx_runtime58 = require("react/jsx-runtime");
var MenuTrigger = ({
  disabled,
  open,
  onOpenChange,
  children
}) => {
  const [menuTrigger, menu] = import_react36.Children.toArray(children);
  const menuTriggerRef = (0, import_react36.useRef)(null);
  const menuRef = (0, import_utils19.useObjectRef)();
  const state = (0, import_menu4.useMenuTriggerState)({
    isOpen: open,
    onOpenChange
  });
  const { menuTriggerProps, menuProps } = (0, import_menu3.useMenuTrigger)(
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
  const isSmallScreen = (0, import_system45.useSmallScreen)();
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(MenuContext.Provider, { value: menuContext, children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
      import_interactions7.PressResponder,
      {
        ...menuTriggerProps,
        ref: menuTriggerRef,
        isPressed: state.isOpen,
        children: menuTrigger
      }
    ),
    isSmallScreen ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Tray, { state, children: menu }) : /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Popover, { triggerRef: menuTriggerRef, scrollRef: menuRef, state, children: menu })
  ] });
};

// src/Menu/Menu.tsx
var import_jsx_runtime59 = require("react/jsx-runtime");
var Menu = ({ variant, size, ...props }) => {
  const { ref: scrollRef, ...menuContext } = useMenuContext();
  const ownProps = { ...props, ...menuContext };
  const ref = (0, import_react37.useRef)(null);
  const state = (0, import_tree2.useTreeState)({ ...ownProps, selectionMode: "none" });
  const { menuProps } = (0, import_menu5.useMenu)(ownProps, state, ref);
  (0, import_utils20.useSyncRef)({ ref: scrollRef }, ref);
  const classNames2 = (0, import_system46.useClassNames)({ component: "Menu", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("ul", { ref, className: classNames2.container, ...menuProps, children: [...state.collection].map((item) => {
    if (item.type === "section") {
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        MenuSection_default,
        {
          item,
          state,
          onAction: props.onAction
        },
        item.key
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
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
Menu.Item = import_collections5.Item;
Menu.Section = import_collections5.Section;

// src/Menu/ActionMenu.tsx
var import_system47 = require("@marigold/system");
var import_jsx_runtime60 = require("react/jsx-runtime");
var ActionMenu = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(Menu.Trigger, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Button, { variant: "menu", size: "small", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_system47.SVG, { viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("path", { d: "M12.0117 7.47656C13.2557 7.47656 14.2734 6.45879 14.2734 5.21484C14.2734 3.9709 13.2557 2.95312 12.0117 2.95312C10.7678 2.95312 9.75 3.9709 9.75 5.21484C9.75 6.45879 10.7678 7.47656 12.0117 7.47656ZM12.0117 9.73828C10.7678 9.73828 9.75 10.7561 9.75 12C9.75 13.2439 10.7678 14.2617 12.0117 14.2617C13.2557 14.2617 14.2734 13.2439 14.2734 12C14.2734 10.7561 13.2557 9.73828 12.0117 9.73828ZM12.0117 16.5234C10.7678 16.5234 9.75 17.5412 9.75 18.7852C9.75 20.0291 10.7678 21.0469 12.0117 21.0469C13.2557 21.0469 14.2734 20.0291 14.2734 18.7852C14.2734 17.5412 13.2557 16.5234 12.0117 16.5234Z" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Menu, { ...props })
  ] });
};

// src/Message/Message.tsx
var import_system48 = require("@marigold/system");
var import_jsx_runtime61 = require("react/jsx-runtime");
var icons = {
  info: () => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd"
        }
      )
    }
  ),
  warning: () => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd"
        }
      )
    }
  ),
  error: () => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
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
  const classNames2 = (0, import_system48.useClassNames)({ component: "Message", variant, size });
  const Icon3 = icons[variant];
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
    "div",
    {
      className: (0, import_system48.cn)(
        "grid auto-rows-min grid-cols-[min-content_auto] gap-1",
        classNames2.container
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: (0, import_system48.cn)("col-span-1 h-5 w-5 self-center", classNames2.icon), children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(Icon3, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "div",
          {
            className: (0, import_system48.cn)("col-start-2 row-start-1 self-center", classNames2.title),
            children: messageTitle
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: (0, import_system48.cn)("col-start-2", classNames2.content), children })
      ]
    }
  );
};

// src/NumberField/NumberField.tsx
var import_react39 = require("react");
var import_focus12 = require("@react-aria/focus");
var import_i18n10 = require("@react-aria/i18n");
var import_interactions9 = require("@react-aria/interactions");
var import_numberfield = require("@react-aria/numberfield");
var import_utils22 = require("@react-aria/utils");
var import_numberfield2 = require("@react-stately/numberfield");
var import_system50 = require("@marigold/system");

// src/NumberField/StepButton.tsx
var import_react38 = require("react");
var import_button7 = require("@react-aria/button");
var import_interactions8 = require("@react-aria/interactions");
var import_utils21 = require("@react-aria/utils");
var import_system49 = require("@marigold/system");
var import_jsx_runtime62 = require("react/jsx-runtime");
var Plus = () => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
  }
) });
var Minus = () => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
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
  const ref = (0, import_react38.useRef)(null);
  const { buttonProps, isPressed } = (0, import_button7.useButton)(
    { ...props, elementType: "div" },
    ref
  );
  const { hoverProps, isHovered } = (0, import_interactions8.useHover)(props);
  const stateProps = (0, import_system49.useStateProps)({
    active: isPressed,
    hover: isHovered,
    disabled: props.isDisabled
  });
  const Icon3 = direction === "up" ? Plus : Minus;
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    "div",
    {
      className: (0, import_system49.cn)(
        [
          "flex items-center justify-center",
          "cursor-pointer data-[disabled]:cursor-not-allowed"
        ],
        className
      ),
      ...(0, import_utils21.mergeProps)(buttonProps, hoverProps),
      ...stateProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Icon3, {})
    }
  );
};

// src/NumberField/NumberField.tsx
var import_jsx_runtime63 = require("react/jsx-runtime");
var NumberField = (0, import_react39.forwardRef)(
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
    const { locale } = (0, import_i18n10.useLocale)();
    const inputRef = (0, import_utils22.useObjectRef)(ref);
    const state = (0, import_numberfield2.useNumberFieldState)({ ...props, locale });
    const {
      labelProps,
      groupProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      incrementButtonProps,
      decrementButtonProps
    } = (0, import_numberfield.useNumberField)(props, state, inputRef);
    const { hoverProps, isHovered } = (0, import_interactions9.useHover)({ isDisabled: disabled });
    const { focusProps, isFocused } = (0, import_focus12.useFocusRing)({
      within: true,
      isTextInput: true,
      autoFocus: props.autoFocus
    });
    const stateProps = (0, import_system50.useStateProps)({
      hover: isHovered,
      focus: isFocused,
      disabled,
      error,
      readOnly,
      required
    });
    const classNames2 = (0, import_system50.useClassNames)({
      component: "NumberField",
      size,
      variant
    });
    return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
          "div",
          {
            "data-group": true,
            className: (0, import_system50.cn)("flex items-stretch", classNames2.group),
            "data-testid": "number-field-container",
            ...(0, import_utils22.mergeProps)(groupProps, focusProps, hoverProps),
            ...stateProps,
            children: [
              showStepper && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
                StepButton,
                {
                  className: classNames2.stepper,
                  direction: "down",
                  ...decrementButtonProps
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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
              showStepper && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
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
var import_system52 = require("@marigold/system");

// src/Provider/MarigoldProvider.tsx
var import_overlays7 = require("@react-aria/overlays");
var import_system51 = require("@marigold/system");
var import_jsx_runtime64 = require("react/jsx-runtime");
function MarigoldProvider({
  children,
  theme
}) {
  const outerTheme = (0, import_system51.useTheme)();
  const isTopLevel = outerTheme === import_system51.defaultTheme;
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_system51.ThemeProvider, { theme, children: isTopLevel ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_overlays7.OverlayProvider, { children }) : children });
}

// src/Radio/Radio.tsx
var import_react41 = require("react");
var import_focus13 = require("@react-aria/focus");
var import_interactions10 = require("@react-aria/interactions");
var import_radio3 = require("@react-aria/radio");
var import_utils23 = require("@react-aria/utils");
var import_system54 = require("@marigold/system");

// src/Radio/Context.ts
var import_react40 = require("react");
var RadioGroupContext = (0, import_react40.createContext)(
  null
);
var useRadioGroupContext = () => (0, import_react40.useContext)(RadioGroupContext);

// src/Radio/RadioGroup.tsx
var import_radio = require("@react-aria/radio");
var import_radio2 = require("@react-stately/radio");
var import_system53 = require("@marigold/system");
var import_jsx_runtime65 = require("react/jsx-runtime");
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
  const state = (0, import_radio2.useRadioGroupState)(props);
  const { radioGroupProps, labelProps, errorMessageProps, descriptionProps } = (0, import_radio.useRadioGroup)(props, state);
  const stateProps = (0, import_system53.useStateProps)({
    disabled,
    readOnly,
    error,
    required
  });
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
        "div",
        {
          role: "presentation",
          "data-orientation": orientation,
          className: (0, import_system53.cn)(
            "flex items-start",
            orientation === "vertical" ? "flex-col gap-[0.5ch]" : "flex-row gap-[1.5ch]"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(RadioGroupContext.Provider, { value: { width, error, state }, children })
        }
      )
    }
  );
};

// src/Radio/Radio.tsx
var import_jsx_runtime66 = require("react/jsx-runtime");
var Dot = () => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("svg", { viewBox: "0 0 6 6", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("circle", { fill: "currentColor", cx: "3", cy: "3", r: "3" }) });
var Icon2 = ({ checked, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
  "div",
  {
    className: (0, import_system54.cn)(
      "bg-secondary-50 flex h-4 w-4 items-center justify-center rounded-[50%] border p-1",
      className
    ),
    "aria-hidden": "true",
    ...props,
    children: checked ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Dot, {}) : null
  }
);
var Radio = (0, import_react41.forwardRef)(
  ({ width, disabled, ...props }, ref) => {
    const {
      variant,
      size,
      error,
      width: groupWidth,
      state
    } = useRadioGroupContext();
    const inputRef = (0, import_utils23.useObjectRef)(ref);
    const { inputProps } = (0, import_radio3.useRadio)(
      { isDisabled: disabled, ...props },
      state,
      inputRef
    );
    const classNames2 = (0, import_system54.useClassNames)({
      component: "Radio",
      variant: variant || props.variant,
      size: size || props.size
    });
    const { hoverProps, isHovered } = (0, import_interactions10.useHover)({ isDisabled: disabled });
    const { isFocusVisible, focusProps } = (0, import_focus13.useFocusRing)();
    const stateProps = (0, import_system54.useStateProps)({
      hover: isHovered,
      focus: isFocusVisible,
      checked: inputProps.checked,
      disabled: inputProps.disabled,
      readOnly: props.readOnly,
      error
    });
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
      "label",
      {
        className: (0, import_system54.cn)(
          "group/radio",
          "relative flex items-center gap-[1ch]",
          width || groupWidth || "w-full",
          classNames2.container
        ),
        ...(0, import_utils23.mergeProps)(hoverProps, stateProps),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
            "input",
            {
              ref: inputRef,
              className: (0, import_system54.cn)(
                "absolute left-0 top-0 z-[1] h-full w-full opacity-[0.0001]",
                inputProps.disabled ? "cursor-not-allowed" : "cursor-pointer"
              ),
              ...(0, import_utils23.mergeProps)(inputProps, focusProps)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(Icon2, { checked: inputProps.checked, className: classNames2.radio }),
          /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { className: classNames2.label, children: props.children })
        ]
      }
    );
  }
);
Radio.Group = RadioGroup;

// src/Slider/Slider.tsx
var import_react43 = require("react");
var import_i18n11 = require("@react-aria/i18n");
var import_slider2 = require("@react-aria/slider");
var import_utils25 = require("@react-aria/utils");
var import_slider3 = require("@react-stately/slider");
var import_system56 = require("@marigold/system");

// src/Slider/Thumb.tsx
var import_react42 = require("react");
var import_focus14 = require("@react-aria/focus");
var import_slider = require("@react-aria/slider");
var import_utils24 = require("@react-aria/utils");
var import_system55 = require("@marigold/system");

// src/VisuallyHidden/VisuallyHidden.tsx
var import_visually_hidden = require("@react-aria/visually-hidden");

// src/Slider/Thumb.tsx
var import_jsx_runtime67 = require("react/jsx-runtime");
var Thumb = ({ state, trackRef, className, ...props }) => {
  const { disabled } = props;
  const inputRef = (0, import_react42.useRef)(null);
  const { isFocusVisible, focusProps, isFocused } = (0, import_focus14.useFocusRing)();
  const focused = isFocused || isFocusVisible || state.isThumbDragging(0);
  const stateProps = (0, import_system55.useStateProps)({
    focus: focused,
    disabled
  });
  const { thumbProps, inputProps } = (0, import_slider.useSliderThumb)(
    {
      index: 0,
      trackRef,
      inputRef,
      isDisabled: disabled
    },
    state
  );
  (0, import_react42.useEffect)(() => {
    state.setThumbEditable(0, !disabled);
  }, [disabled, state]);
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: (0, import_system55.cn)("top-1/2", className), ...thumbProps, ...stateProps, children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_visually_hidden.VisuallyHidden, { children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
    "input",
    {
      type: "range",
      ref: inputRef,
      ...(0, import_utils24.mergeProps)(inputProps, focusProps)
    }
  ) }) });
};

// src/Slider/Slider.tsx
var import_jsx_runtime68 = require("react/jsx-runtime");
var Slider = (0, import_react43.forwardRef)(
  ({ variant, size, width = "100%", ...props }, ref) => {
    const { formatOptions } = props;
    const trackRef = (0, import_utils25.useObjectRef)(ref);
    const numberFormatter = (0, import_i18n11.useNumberFormatter)(formatOptions);
    const state = (0, import_slider3.useSliderState)({ ...props, numberFormatter });
    const { groupProps, trackProps, labelProps, outputProps } = (0, import_slider2.useSlider)(
      {
        label: props.children,
        ...props
      },
      state,
      trackRef
    );
    const classNames2 = (0, import_system56.useClassNames)({
      component: "Slider",
      variant,
      size
    });
    const sliderState = (0, import_system56.useStateProps)({
      disabled: props.disabled
    });
    return /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
      "div",
      {
        className: "flex w-[var(--slideWidth)] touch-none flex-col",
        style: (0, import_system56.createVar)({ slideWidth: width }),
        ...groupProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "flex self-stretch", children: [
            props.children && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("label", { className: classNames2.label, ...labelProps, children: props.children }),
            /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
              "output",
              {
                className: (0, import_system56.cn)(
                  "flex flex-shrink-0 flex-grow basis-auto",
                  classNames2.output
                ),
                ...outputProps,
                children: state.getThumbValueLabel(0)
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(
            "div",
            {
              className: "h-8 w-full cursor-pointer data-[disabled]:cursor-not-allowed",
              ...trackProps,
              ...sliderState,
              ref: trackRef,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
                  "div",
                  {
                    className: (0, import_system56.cn)(
                      "absolute top-2/4 h-2 w-full -translate-y-1/2",
                      classNames2.track
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
var import_jsx_runtime69 = require("react/jsx-runtime");
var Split = (props) => /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { ...props, role: "separator", className: "grow" });

// src/Stack/Stack.tsx
var import_system57 = require("@marigold/system");
var import_jsx_runtime70 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
    "div",
    {
      className: (0, import_system57.cn)(
        "flex flex-col",
        import_system57.gapSpace[space],
        alignX && ((_b = (_a = import_system57.alignment) == null ? void 0 : _a.vertical) == null ? void 0 : _b.alignmentX[alignX]),
        alignY && ((_d = (_c = import_system57.alignment) == null ? void 0 : _c.vertical) == null ? void 0 : _d.alignmentY[alignY]),
        stretch && "h-full w-full"
      ),
      ...props,
      children
    }
  );
};

// src/Switch/Switch.tsx
var import_react44 = require("react");
var import_focus15 = require("@react-aria/focus");
var import_switch = require("@react-aria/switch");
var import_utils26 = require("@react-aria/utils");
var import_toggle2 = require("@react-stately/toggle");
var import_system58 = require("@marigold/system");
var import_jsx_runtime71 = require("react/jsx-runtime");
var Switch = (0, import_react44.forwardRef)(
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
    const inputRef = (0, import_utils26.useObjectRef)(ref);
    const props = {
      isSelected: selected,
      isDisabled: disabled,
      isReadOnly: readOnly,
      defaultSelected: defaultChecked,
      ...rest
    };
    const state = (0, import_toggle2.useToggleState)(props);
    const { inputProps } = (0, import_switch.useSwitch)(props, state, inputRef);
    const { isFocusVisible, focusProps } = (0, import_focus15.useFocusRing)();
    const stateProps = (0, import_system58.useStateProps)({
      selected: state.isSelected,
      disabled,
      readOnly,
      focus: isFocusVisible
    });
    const classNames2 = (0, import_system58.useClassNames)({ component: "Switch", size, variant });
    return /* @__PURE__ */ (0, import_jsx_runtime71.jsxs)(
      "label",
      {
        className: (0, import_system58.cn)(
          "group/switch",
          "w-[var(--switchWidth)]",
          "relative flex items-center justify-between gap-[1ch]"
        ),
        style: (0, import_system58.createVar)({ switchWidth: width }),
        ...stateProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            "input",
            {
              ref: inputRef,
              className: "absolute left-0 top-0 z-[1] h-full w-full cursor-pointer opacity-[0.0001] disabled:cursor-not-allowed",
              ...inputProps,
              ...focusProps
            }
          ),
          props.children && /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(import_jsx_runtime71.Fragment, { children: props.children }),
          /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
            "div",
            {
              className: (0, import_system58.cn)(
                "relative h-6 flex-shrink-0 flex-grow-0 basis-12 rounded-3xl",
                classNames2.track
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
                "div",
                {
                  className: (0, import_system58.cn)(
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
var import_react52 = require("react");
var import_table9 = require("@react-aria/table");
var import_table10 = require("@react-stately/table");
var import_system65 = require("@marigold/system");

// src/Table/Context.tsx
var import_react45 = require("react");
var TableContext = (0, import_react45.createContext)({});
var useTableContext = () => (0, import_react45.useContext)(TableContext);

// src/Table/TableBody.tsx
var import_table = require("@react-aria/table");
var import_jsx_runtime72 = require("react/jsx-runtime");
var TableBody = ({ children }) => {
  const { rowGroupProps } = (0, import_table.useTableRowGroup)();
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)("tbody", { ...rowGroupProps, children });
};

// src/Table/TableCell.tsx
var import_react46 = require("react");
var import_focus16 = require("@react-aria/focus");
var import_table2 = require("@react-aria/table");
var import_utils27 = require("@react-aria/utils");
var import_system59 = require("@marigold/system");
var import_jsx_runtime73 = require("react/jsx-runtime");
var TableCell = ({ cell }) => {
  const ref = (0, import_react46.useRef)(null);
  const { interactive, state, classNames: classNames2 } = useTableContext();
  const disabled = state.disabledKeys.has(cell.parentKey);
  const { gridCellProps } = (0, import_table2.useTableCell)(
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
  const { focusProps, isFocusVisible } = (0, import_focus16.useFocusRing)();
  const stateProps = (0, import_system59.useStateProps)({ disabled, focusVisible: isFocusVisible });
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    "td",
    {
      ref,
      className: classNames2 == null ? void 0 : classNames2.cell,
      ...(0, import_utils27.mergeProps)(cellProps, focusProps),
      ...stateProps,
      children: cell.rendered
    }
  );
};

// src/Table/TableCheckboxCell.tsx
var import_react47 = require("react");
var import_focus17 = require("@react-aria/focus");
var import_table3 = require("@react-aria/table");
var import_utils28 = require("@react-aria/utils");
var import_system60 = require("@marigold/system");

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
var import_jsx_runtime74 = require("react/jsx-runtime");
var TableCheckboxCell = ({ cell }) => {
  const ref = (0, import_react47.useRef)(null);
  const { state, classNames: classNames2 } = useTableContext();
  const disabled = state.disabledKeys.has(cell.parentKey);
  const { gridCellProps } = (0, import_table3.useTableCell)(
    {
      node: cell
    },
    state,
    ref
  );
  const { checkboxProps } = mapCheckboxProps(
    (0, import_table3.useTableSelectionCheckbox)({ key: cell.parentKey }, state)
  );
  const { focusProps, isFocusVisible } = (0, import_focus17.useFocusRing)();
  const stateProps = (0, import_system60.useStateProps)({ disabled, focusVisible: isFocusVisible });
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    "td",
    {
      ref,
      className: (0, import_system60.cn)("text-center align-middle leading-none", classNames2 == null ? void 0 : classNames2.cell),
      ...(0, import_utils28.mergeProps)(gridCellProps, focusProps),
      ...stateProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(Checkbox, { ...checkboxProps })
    }
  );
};

// src/Table/TableColumnHeader.tsx
var import_react48 = require("react");
var import_focus18 = require("@react-aria/focus");
var import_interactions11 = require("@react-aria/interactions");
var import_table4 = require("@react-aria/table");
var import_utils30 = require("@react-aria/utils");
var import_icons2 = require("@marigold/icons");
var import_system61 = require("@marigold/system");
var import_system62 = require("@marigold/system");
var import_jsx_runtime75 = require("react/jsx-runtime");
var TableColumnHeader = ({
  column,
  width = "auto"
}) => {
  var _a, _b;
  const ref = (0, import_react48.useRef)(null);
  const { state, classNames: classNames2 } = useTableContext();
  const { columnHeaderProps } = (0, import_table4.useTableColumnHeader)(
    {
      node: column
    },
    state,
    ref
  );
  const { hoverProps, isHovered } = (0, import_interactions11.useHover)({});
  const { focusProps, isFocusVisible } = (0, import_focus18.useFocusRing)();
  const stateProps = (0, import_system61.useStateProps)({
    hover: isHovered,
    focusVisible: isFocusVisible
  });
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsxs)(
    "th",
    {
      colSpan: column.colspan,
      ref,
      className: (0, import_system61.cn)("cursor-default", import_system62.width[width], classNames2 == null ? void 0 : classNames2.header),
      ...(0, import_utils30.mergeProps)(columnHeaderProps, hoverProps, focusProps),
      ...stateProps,
      children: [
        column.rendered,
        column.props.allowsSorting && (((_a = state.sortDescriptor) == null ? void 0 : _a.column) === column.key ? ((_b = state.sortDescriptor) == null ? void 0 : _b.direction) === "ascending" ? /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_icons2.SortUp, { className: "inline-block" }) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_icons2.SortDown, { className: "inline-block" }) : /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_icons2.SortDown, { className: "inline-block" }))
      ]
    }
  );
};

// src/Table/TableHeader.tsx
var import_table5 = require("@react-aria/table");
var import_jsx_runtime76 = require("react/jsx-runtime");
var TableHeader = ({ children }) => {
  const { rowGroupProps } = (0, import_table5.useTableRowGroup)();
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("thead", { ...rowGroupProps, children });
};

// src/Table/TableHeaderRow.tsx
var import_react49 = require("react");
var import_table6 = require("@react-aria/table");
var import_jsx_runtime77 = require("react/jsx-runtime");
var TableHeaderRow = ({ item, children }) => {
  const { state } = useTableContext();
  const ref = (0, import_react49.useRef)(null);
  const { rowProps } = (0, import_table6.useTableHeaderRow)({ node: item }, state, ref);
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("tr", { ...rowProps, ref, children });
};

// src/Table/TableRow.tsx
var import_react50 = require("react");
var import_focus19 = require("@react-aria/focus");
var import_interactions12 = require("@react-aria/interactions");
var import_table7 = require("@react-aria/table");
var import_utils31 = require("@react-aria/utils");
var import_system63 = require("@marigold/system");
var import_jsx_runtime78 = require("react/jsx-runtime");
var TableRow = ({ children, row }) => {
  const ref = (0, import_react50.useRef)(null);
  const { interactive, state, ...ctx } = useTableContext();
  const { variant, size } = row.props;
  const classNames2 = (0, import_system63.useClassNames)({
    component: "Table",
    variant: variant || ctx.variant,
    size: size || ctx.size
  });
  const { rowProps, isPressed } = (0, import_table7.useTableRow)(
    {
      node: row
    },
    state,
    ref
  );
  const disabled = state.disabledKeys.has(row.key);
  const selected = state.selectionManager.isSelected(row.key);
  const { focusProps, isFocusVisible } = (0, import_focus19.useFocusRing)({ within: true });
  const { hoverProps, isHovered } = (0, import_interactions12.useHover)({
    isDisabled: disabled || !interactive
  });
  const stateProps = (0, import_system63.useStateProps)({
    disabled,
    selected,
    hover: isHovered,
    focusVisible: isFocusVisible,
    active: isPressed
  });
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    "tr",
    {
      ref,
      className: (0, import_system63.cn)(
        [
          !interactive ? "cursor-text" : disabled ? "cursor-default" : "cursor-pointer"
        ],
        classNames2 == null ? void 0 : classNames2.row
      ),
      ...(0, import_utils31.mergeProps)(rowProps, focusProps, hoverProps),
      ...stateProps,
      children
    }
  );
};

// src/Table/TableSelectAllCell.tsx
var import_react51 = require("react");
var import_focus20 = require("@react-aria/focus");
var import_interactions13 = require("@react-aria/interactions");
var import_table8 = require("@react-aria/table");
var import_utils32 = require("@react-aria/utils");
var import_system64 = require("@marigold/system");
var import_jsx_runtime79 = require("react/jsx-runtime");
var TableSelectAllCell = ({
  column,
  width = "auto"
}) => {
  const ref = (0, import_react51.useRef)(null);
  const { state, classNames: classNames2 } = useTableContext();
  const { columnHeaderProps } = (0, import_table8.useTableColumnHeader)(
    {
      node: column
    },
    state,
    ref
  );
  const { checkboxProps } = mapCheckboxProps((0, import_table8.useTableSelectAllCheckbox)(state));
  const { hoverProps, isHovered } = (0, import_interactions13.useHover)({});
  const { focusProps, isFocusVisible } = (0, import_focus20.useFocusRing)();
  const stateProps = (0, import_system64.useStateProps)({
    hover: isHovered,
    focusVisible: isFocusVisible
  });
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    "th",
    {
      ref,
      className: (0, import_system64.cn)(
        import_system64.width[width],
        ["text-center align-middle leading-none"],
        classNames2 == null ? void 0 : classNames2.header
      ),
      ...(0, import_utils32.mergeProps)(columnHeaderProps, hoverProps, focusProps),
      ...stateProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(Checkbox, { ...checkboxProps })
    }
  );
};

// src/Table/Table.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
var Table = ({
  variant,
  size,
  stretch,
  selectionMode = "none",
  ...props
}) => {
  const interactive = selectionMode !== "none";
  const tableRef = (0, import_react52.useRef)(null);
  const state = (0, import_table10.useTableState)({
    ...props,
    selectionMode,
    showSelectionCheckboxes: selectionMode === "multiple" && // TODO: It this necessary?
    props.selectionBehavior !== "replace"
  });
  const { gridProps } = (0, import_table9.useTable)(props, state, tableRef);
  const classNames2 = (0, import_system65.useClassNames)({
    component: "Table",
    variant,
    size
  });
  const { collection } = state;
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
    TableContext.Provider,
    {
      value: { state, interactive, classNames: classNames2, variant, size },
      children: /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
        "table",
        {
          ref: tableRef,
          className: (0, import_system65.cn)(
            "group/table",
            "border-collapse overflow-auto whitespace-nowrap",
            stretch ? "table w-full" : "block",
            classNames2.table
          ),
          ...gridProps,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TableHeader, { children: collection.headerRows.map((headerRow) => /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TableHeaderRow, { item: headerRow, children: [...collection.getChildren(headerRow.key)].map(
              (column) => {
                var _a, _b, _c;
                return ((_a = column.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                  TableSelectAllCell,
                  {
                    width: (_b = column.props) == null ? void 0 : _b.width,
                    column
                  },
                  column.key
                ) : /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
                  TableColumnHeader,
                  {
                    width: (_c = column.props) == null ? void 0 : _c.width,
                    column
                  },
                  column.key
                );
              }
            ) }, headerRow.key)) }),
            /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(TableBody, { children: [
              ...collection.rows.map(
                (row) => row.type === "item" && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TableRow, { row, children: [...collection.getChildren(row.key)].map(
                  (cell) => {
                    var _a;
                    return ((_a = cell.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TableCheckboxCell, { cell }, cell.key) : /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TableCell, { cell }, cell.key);
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
Table.Body = import_table10.TableBody;
Table.Cell = import_table10.Cell;
Table.Column = import_table10.Column;
Table.Header = import_table10.TableHeader;
Table.Row = import_table10.Row;

// src/Text/Text.tsx
var import_system66 = require("@marigold/system");
var import_jsx_runtime81 = require("react/jsx-runtime");
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
  const theme = (0, import_system66.useTheme)();
  const classNames2 = (0, import_system66.useClassNames)({
    component: "Text",
    variant,
    size
  });
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    "p",
    {
      ...props,
      className: (0, import_system66.cn)(
        classNames2,
        "text-[--color] outline-[--outline]",
        fontStyle && import_system66.textStyle[fontStyle],
        align && import_system66.textAlign[align],
        cursor && import_system66.cursorStyle[cursor],
        weight && import_system66.fontWeight[weight],
        fontSize && import_system66.textSize[fontSize]
      ),
      style: (0, import_system66.createVar)({
        color: color && theme.colors && (0, import_system66.get)(
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
var import_react53 = require("react");
var import_focus21 = require("@react-aria/focus");
var import_interactions14 = require("@react-aria/interactions");
var import_textfield = require("@react-aria/textfield");
var import_utils34 = require("@react-aria/utils");
var import_system67 = require("@marigold/system");
var import_jsx_runtime82 = require("react/jsx-runtime");
var TextArea = (0, import_react53.forwardRef)(
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
    const textAreaRef = (0, import_utils34.useObjectRef)(ref);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = (0, import_textfield.useTextField)(
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
    const { hoverProps, isHovered } = (0, import_interactions14.useHover)({});
    const { focusProps, isFocusVisible } = (0, import_focus21.useFocusRing)();
    const stateProps = (0, import_system67.useStateProps)({
      hover: isHovered,
      focus: isFocusVisible,
      disabled,
      readOnly,
      required,
      error
    });
    const classNames2 = (0, import_system67.useClassNames)({ component: "TextArea", variant, size });
    return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
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
var import_react54 = require("react");
var import_focus22 = require("@react-aria/focus");
var import_interactions15 = require("@react-aria/interactions");
var import_textfield2 = require("@react-aria/textfield");
var import_utils35 = require("@react-aria/utils");
var import_system68 = require("@marigold/system");
var import_jsx_runtime83 = require("react/jsx-runtime");
var TextField = (0, import_react54.forwardRef)(
  ({ variant, size, width, disabled, required, readOnly, error, ...props }, ref) => {
    const { label, description, errorMessage, autoFocus } = props;
    const inputRef = (0, import_utils35.useObjectRef)(ref);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } = (0, import_textfield2.useTextField)(
      {
        isDisabled: disabled,
        isRequired: required,
        isReadOnly: readOnly,
        validationState: error ? "invalid" : "valid",
        ...props
      },
      inputRef
    );
    const { hoverProps, isHovered } = (0, import_interactions15.useHover)({});
    const { focusProps, isFocused } = (0, import_focus22.useFocusRing)({
      isTextInput: true,
      autoFocus
    });
    const stateProps = (0, import_system68.useStateProps)({
      hover: isHovered,
      focus: isFocused,
      disabled,
      error,
      readOnly,
      required
    });
    return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
          Input,
          {
            ref: inputRef,
            variant,
            size,
            ...(0, import_utils35.mergeProps)(focusProps, inputProps, hoverProps)
          }
        )
      }
    );
  }
);

// src/Tiles/Tiles.tsx
var import_system69 = require("@marigold/system");
var import_jsx_runtime84 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
    "div",
    {
      ...props,
      className: (0, import_system69.cn)(
        "grid",
        import_system69.gapSpace[space],
        "grid-cols-[repeat(auto-fit,var(--column))]",
        equalHeight && "auto-rows-[1fr]"
      ),
      style: (0, import_system69.createVar)({ column, tilesWidth }),
      children
    }
  );
};

// src/Tooltip/Tooltip.tsx
var import_tooltip3 = require("@react-aria/tooltip");
var import_system70 = require("@marigold/system");

// src/Tooltip/Context.ts
var import_react55 = require("react");
var TooltipContext = (0, import_react55.createContext)({});
var useTooltipContext = () => (0, import_react55.useContext)(TooltipContext);

// src/Tooltip/TooltipTrigger.tsx
var import_react56 = require("react");
var import_focus23 = require("@react-aria/focus");
var import_overlays8 = require("@react-aria/overlays");
var import_tooltip = require("@react-aria/tooltip");
var import_tooltip2 = require("@react-stately/tooltip");
var import_jsx_runtime85 = require("react/jsx-runtime");
var TooltipTrigger = ({
  disabled,
  open,
  delay = 1e3,
  placement = "top",
  children,
  ...rest
}) => {
  const [tooltipTrigger, tooltip] = import_react56.Children.toArray(children);
  const props = {
    ...rest,
    isDisabled: disabled,
    isOpen: open,
    delay,
    placement
  };
  const tooltipTriggerRef = (0, import_react56.useRef)(null);
  const overlayRef = (0, import_react56.useRef)(null);
  const state = (0, import_tooltip2.useTooltipTriggerState)(props);
  const { triggerProps, tooltipProps } = (0, import_tooltip.useTooltipTrigger)(
    props,
    state,
    tooltipTriggerRef
  );
  const {
    overlayProps: positionProps,
    placement: overlayPlacement,
    arrowProps
  } = (0, import_overlays8.useOverlayPosition)({
    placement: props.placement,
    targetRef: tooltipTriggerRef,
    offset: props.offset,
    crossOffset: props.crossOffset,
    isOpen: state.isOpen,
    overlayRef
  });
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(import_focus23.FocusableProvider, { ref: tooltipTriggerRef, ...triggerProps, children: [
    tooltipTrigger,
    /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(Overlay, { open: state.isOpen, children: tooltip })
      }
    )
  ] });
};

// src/Tooltip/Tooltip.tsx
var import_jsx_runtime86 = require("react/jsx-runtime");
var Tooltip = ({ children, variant, size }) => {
  const { arrowProps, state, overlayRef, placement, ...rest } = useTooltipContext();
  const { tooltipProps } = (0, import_tooltip3.useTooltip)({}, state);
  const classNames2 = (0, import_system70.useClassNames)({ component: "Tooltip", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsxs)(
    "div",
    {
      ...tooltipProps,
      ...rest,
      ref: overlayRef,
      className: (0, import_system70.cn)("group/tooltip", classNames2.container),
      "data-placement": placement,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
          "div",
          {
            ...arrowProps,
            className: (0, import_system70.cn)("absolute h-0 w-0", classNames2.arrow)
          }
        )
      ]
    }
  );
};
Tooltip.Trigger = TooltipTrigger;

// src/TagGroup/index.ts
var import_collections6 = require("@react-stately/collections");

// src/TagGroup/TagGroup.tsx
var import_react58 = require("react");
var import_tag2 = require("@react-aria/tag");
var import_list = require("@react-stately/list");
var import_system72 = require("@marigold/system");

// src/TagGroup/Tag.tsx
var import_react57 = __toESM(require("react"));
var import_focus24 = require("@react-aria/focus");
var import_tag = require("@react-aria/tag");
var import_utils36 = require("@react-aria/utils");
var import_system71 = require("@marigold/system");
var import_jsx_runtime87 = require("react/jsx-runtime");
var Tag = ({ variant, size, item, state, ...rest }) => {
  const props = {
    item,
    ...rest
  };
  let ref = import_react57.default.useRef(null);
  let { focusProps } = (0, import_focus24.useFocusRing)({ within: true });
  const { rowProps, gridCellProps, allowsRemoving, removeButtonProps } = (0, import_tag.useTag)(
    {
      ...props,
      item
    },
    state,
    ref
  );
  const classNames2 = (0, import_system71.useClassNames)({ component: "Tag", variant, size });
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    "span",
    {
      ref,
      ...(0, import_utils36.mergeProps)(rowProps, focusProps),
      className: classNames2.tag,
      children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { ...gridCellProps, className: classNames2.gridCell, children: [
        /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("span", { children: item.rendered }),
        allowsRemoving && /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
          Button,
          {
            ...removeButtonProps,
            className: (0, import_system71.cn)("flex items-center", classNames2.closeButton),
            role: "button",
            children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("svg", { viewBox: "0 0 20 20", fill: "currentColor", width: 20, height: 20, children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("path", { d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" }) })
          }
        )
      ] })
    }
  );
};

// src/TagGroup/TagGroup.tsx
var import_jsx_runtime88 = require("react/jsx-runtime");
var import_react59 = require("react");
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
  const inputRef = (0, import_react58.useRef)(null);
  const state = (0, import_list.useListState)(props);
  const { gridProps, labelProps, descriptionProps, errorMessageProps } = (0, import_tag2.useTagGroup)(props, state, inputRef);
  const stateProps = (0, import_system72.useStateProps)({
    error,
    required
  });
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
        "div",
        {
          role: "presentation",
          ref: inputRef,
          className: "flex flex-wrap items-start gap-1",
          children: [...state.collection].map((item) => /* @__PURE__ */ (0, import_react59.createElement)(
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
var Tag2 = import_collections6.Item;
Tag2.Group = TagGroup;

// src/XLoader/XLoader.tsx
var import_react60 = require("react");
var import_system73 = require("@marigold/system");
var import_jsx_runtime89 = require("react/jsx-runtime");
var XLoader = (0, import_react60.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)(
  import_system73.SVG,
  {
    id: "XLoader",
    xmlns: "http://www.w3.org/2000/svg",
    size: 150,
    viewBox: "0 0 150 150",
    ...props,
    ...ref,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("path", { id: "XMLID_1_", d: "M35.3 27h26.5l54 74.1H88.7z" }),
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_5_",
          d: "M124.3 12.8h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_18_",
          d: "M115.9 24.4h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_19_",
          d: "M107.5 35.9h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_20_",
          d: "M99.1 47.5h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_21_",
          d: "M90.7 59H90c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_22_",
          d: "M68 89.8h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.8c0 2.6-2.2 4.8-4.9 4.8z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_23_",
          d: "M59.6 101.4h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c0 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_24_",
          d: "M51.2 112.9h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_25_",
          d: "M42.8 124.5h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_26_",
          d: "M34.4 136h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.7-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
        "path",
        {
          id: "XMLID_27_",
          d: "M26 147.6h-.7c-2.7 0-4.9-2.2-4.9-4.9v-.7c0-2.7 2.2-4.9 4.9-4.9h.7c2.7 0 4.9 2.2 4.9 4.9v.7c-.1 2.8-2.2 4.9-4.9 4.9z",
          children: /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
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
var import_react64 = require("react");
var import_tabs3 = require("@react-aria/tabs");
var import_collections7 = require("@react-stately/collections");
var import_tabs4 = require("@react-stately/tabs");
var import_system76 = require("@marigold/system");

// src/Tabs/Context.ts
var import_react61 = require("react");
var TabContext = (0, import_react61.createContext)({});
var useTabContext = () => (0, import_react61.useContext)(TabContext);

// src/Tabs/Tab.tsx
var import_react62 = require("react");
var import_interactions16 = require("@react-aria/interactions");
var import_tabs = require("@react-aria/tabs");
var import_utils37 = require("@react-aria/utils");
var import_system74 = require("@marigold/system");
var import_jsx_runtime90 = require("react/jsx-runtime");
var Tab = ({ item, state }) => {
  const { key, rendered } = item;
  const ref = (0, import_react62.useRef)(null);
  const { tabProps, isSelected } = (0, import_tabs.useTab)({ key }, state, ref);
  const disabled = tabProps["aria-disabled"];
  const { hoverProps, isHovered } = (0, import_interactions16.useHover)({
    isDisabled: disabled || isSelected
  });
  const { focusProps } = (0, import_interactions16.useFocus)({});
  const stateProps = (0, import_system74.useStateProps)({ active: isSelected, hover: isHovered });
  const { classNames: classNames2 } = useTabContext();
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
    "div",
    {
      className: (0, import_system74.cn)(
        "flex cursor-pointer justify-center aria-disabled:cursor-not-allowed",
        classNames2.tab
      ),
      ...(0, import_utils37.mergeProps)(tabProps, stateProps, focusProps, hoverProps),
      ref,
      children: rendered
    }
  );
};

// src/Tabs/TabPanel.tsx
var import_react63 = require("react");
var import_tabs2 = require("@react-aria/tabs");
var import_system75 = require("@marigold/system");
var import_jsx_runtime91 = require("react/jsx-runtime");
var TabPanel = ({ state, ...props }) => {
  var _a;
  const ref = (0, import_react63.useRef)(null);
  const { tabPanelProps } = (0, import_tabs2.useTabPanel)(props, state, ref);
  const selectedItemProps = (_a = state.selectedItem) == null ? void 0 : _a.props;
  const { classNames: classNames2 } = useTabContext();
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: (0, import_system75.cn)(classNames2.tabpanel), ref, ...tabPanelProps, children: selectedItemProps == null ? void 0 : selectedItemProps.children });
};

// src/Tabs/Tabs.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
var Tabs = ({
  space = 2,
  size = "medium",
  disabled,
  variant,
  ...rest
}) => {
  var _a;
  const ref = (0, import_react64.useRef)(null);
  const props = {
    isDisabled: disabled,
    ...rest
  };
  const state = (0, import_tabs4.useTabListState)(props);
  const { tabListProps } = (0, import_tabs3.useTabList)(props, state, ref);
  const classNames2 = (0, import_system76.useClassNames)({
    component: "Tabs",
    size,
    variant
  });
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(TabContext.Provider, { value: { classNames: classNames2 }, children: /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)("div", { className: (0, import_system76.cn)(classNames2.container), children: [
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
      "div",
      {
        className: (0, import_system76.cn)("flex", import_system76.gapSpace[space], classNames2.tabs),
        ...tabListProps,
        ref,
        children: [...state.collection].map((item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(Tab, { item, state }, item.key);
        })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(TabPanel, { state }, (_a = state.selectedItem) == null ? void 0 : _a.key)
  ] }) });
};
Tabs.Item = import_collections7.Item;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  Tag,
  Text,
  TextArea,
  TextField,
  ThemeProvider,
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
  useTheme
});
