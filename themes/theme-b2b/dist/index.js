"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Accordion: () => Accordion,
  Badge: () => Badge,
  Body: () => Body,
  Button: () => Button,
  Calendar: () => Calendar,
  Card: () => Card,
  Checkbox: () => Checkbox,
  DateField: () => DateField,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  Divider: () => Divider,
  Field: () => Field,
  Footer: () => Footer,
  Header: () => Header,
  Headline: () => Headline,
  HelpText: () => HelpText,
  Image: () => Image,
  Input: () => Input,
  Label: () => Label,
  Link: () => Link,
  List: () => List,
  ListBox: () => ListBox,
  Menu: () => Menu,
  Message: () => Message,
  NumberField: () => NumberField,
  Popover: () => Popover,
  Radio: () => Radio,
  Select: () => Select,
  Slider: () => Slider,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  Tag: () => Tag,
  Text: () => Text,
  TextArea: () => TextArea,
  Tooltip: () => Tooltip,
  Underlay: () => Underlay,
  inputBackground: () => inputBackground,
  inputBox: () => inputBox,
  inputDisabled: () => inputDisabled,
  inputError: () => inputError,
  inputFocus: () => inputFocus,
  inputHover: () => inputHover,
  inputSpacing: () => inputSpacing
});

// src/components/Accordion.styles.ts
var import_system = require("@marigold/system");
var Accordion = {
  button: (0, import_system.cva)(
    "bg-bg-surface flex w-full items-center justify-between border-none px-2 py-1 leading-normal"
  ),
  item: (0, import_system.cva)("p-2")
};

// src/components/Badge.styles.ts
var import_system2 = require("@marigold/system");
var Badge = (0, import_system2.cva)(
  "inline-flex items-center whitespace-nowrap rounded-[20px] px-2 py-[2px] text-sm",
  {
    variants: {
      variant: {
        info: "text-text-light bg-bg-info",
        dark: "text-text-light bg-bg-surface-lowered"
      }
    }
  }
);

// src/components/Body.styles.ts
var import_system3 = require("@marigold/system");
var Body = (0, import_system3.cva)("");

// src/components/Button.styles.ts
var import_system4 = require("@marigold/system");
var Button = (0, import_system4.cva)(
  [
    "rounded-sm border-none px-8 leading-[48px] outline-none",
    "focus-visible:outline-outline-focus focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1",
    "disabled:text-text-disabled disabled:bg-bg-disabled"
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-text-light bg-bg-primary",
          "data-[hover]:text-text-light data-[hover]:bg-bg-primary-hover",
          "active:hover:bg-bg-primary-active"
        ],
        secondary: [
          "text-text-light bg-bg-secondary data-[hover]:text-text-light data-[hover]:bg-bg-secondary-hover",
          "active:hover:bg-bg-secondary-active"
        ],
        ghost: [
          "border-border-dark border border-solid",
          "text-text-body",
          "hover:bg-bg-hover",
          "active:hover:bg-bg-secondary-active active:hover:text-text-light"
        ],
        text: [
          "text-text-body data-[hover]:bg-bg-hover active:hover:bg-bg-secondary-active active:hover:text-text-light"
        ],
        menu: [
          "text-text-body bg-bg-body hover:text-text-light hover:bg-bg-secondary-hover"
        ]
      },
      size: {
        small: "px-4 leading-8"
      }
    }
  }
);

// src/components/Card.styles.ts
var import_system5 = require("@marigold/system");
var Card = (0, import_system5.cva)(
  "bg-bg-surface rounded-lg p-4 drop-shadow-md",
  {
    variants: {
      size: {
        stretch: "flex-1"
      }
    }
  }
);

// src/components/Checkbox.styles.ts
var import_system6 = require("@marigold/system");
var Checkbox = {
  checkbox: (0, import_system6.cva)([
    "border-border-light group-hover/checkbox:border-border-hover rounded-sm",
    "group-focus/checkbox:outline-outline-focus group-focus/checkbox:outline group-focus/checkbox:outline-2 group-focus/checkbox:outline-offset-2",
    "group-checked/checkbox:border-border-selected group-checked/checkbox:bg-bg-selected-input group-indeterminate/checkbox:border-border-selected group-indeterminate/checkbox:bg-bg-selected-input group-checked/checkbox:text-white group-indeterminate/checkbox:text-white",
    "group-disabled/checkbox:bg-bg-disabled group-disabled/:border-border-disabled"
  ]),
  container: (0, import_system6.cva)(),
  label: (0, import_system6.cva)("group-disabled/checkbox:text-text-disabled text-sm ")
};

// src/components/DateField.styles.ts
var import_system8 = require("@marigold/system");

// src/components/Input.styles.ts
var import_system7 = require("@marigold/system");
var inputBox = "border-border-light rounded-sm border outline-none outline-offset-[-1px]";
var inputBackground = "bg-bg-surface";
var inputSpacing = "px-2";
var inputFocus = (selector = "focus") => `${selector}:border-border-focus ${selector}:outline-outline-focus`;
var inputDisabled = (selector = "disabled") => `${selector}:bg-bg-disabled ${selector}:text-text-disabled ${selector}:hover:border-border-disabled ${selector}:border-border-disabled ${selector}:cursor-not-allowed`;
var inputError = (selector = "error") => `${selector}:border-border-error ${selector}:outline-outline-error ${selector}:-outline-offset-1`;
var inputHover = (selector = "hover") => `${selector}:border-border-hover`;
var Input = {
  icon: (0, import_system7.cva)("left-2"),
  action: (0, import_system7.cva)("right-0"),
  input: (0, import_system7.cva)([
    inputBox,
    inputBackground,
    inputFocus(),
    inputDisabled(),
    inputHover(),
    inputError("group-error/field"),
    inputSpacing,
    "leading-[2]",
    "read-only:focus:border-border-light read-only:focus:outline-none",
    // Extra padding for when an icon/action is present
    "group-data-[icon]/input:pl-8"
  ])
};

// src/components/DateField.styles.ts
var DateField = {
  field: (0, import_system8.cva)([
    inputBox,
    inputBackground,
    inputDisabled("group-disabled/field"),
    inputFocus("group-focus/field"),
    inputSpacing,
    "h-[34px]",
    "group-hover/field:border-border-hover",
    "group-readonly/field:group-focus/field:border-border-light group-readonly/field:group-focus/field:outline-none",
    " group-readonly/field:bg-bg-transparent group-readonly/field:text-text-disabled"
  ]),
  segment: (0, import_system8.cva)(["rounded-sm", "focus:bg-bg-focus focus:text-white"]),
  action: (0, import_system8.cva)("")
};

// src/components/Dialog.styles.ts
var import_system9 = require("@marigold/system");
var Dialog = {
  closeButton: (0, import_system9.cva)("relative -right-6 -top-2"),
  container: (0, import_system9.cva)(
    "font-body bg-bg-surface rounded-sm px-8 pb-8 pt-4 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
  )
};

// src/components/Divider.styles.ts
var import_system10 = require("@marigold/system");
var Divider = (0, import_system10.cva)(
  "bg-bg-surface-lowered h-[1px] w-full",
  {
    variants: {
      variant: {
        bold: "h-[2px]",
        section: "bg-bg-surface-raised"
      }
    }
  }
);

// src/components/Field.styles.ts
var import_system11 = require("@marigold/system");
var Field = (0, import_system11.cva)("grid gap-y-0.5");

// src/components/Footer.styles.ts
var import_system12 = require("@marigold/system");
var Footer = (0, import_system12.cva)("");

// src/components/Header.styles.ts
var import_system13 = require("@marigold/system");
var Header = (0, import_system13.cva)("");

// src/components/Headline.styles.ts
var import_system14 = require("@marigold/system");
var Headline = (0, import_system14.cva)("", {
  variants: {
    size: {
      "level-1": "mb-6 text-5xl font-black",
      "level-2": "mb-2 mt-8 text-3xl font-black",
      "level-3": "mb-2 mt-4 text-2xl font-black",
      "level-4": "text-lg font-black",
      "level-5": "text-base font-black",
      "level-6": "text-base font-normal"
    }
  }
});

// src/components/HelpText.styles.ts
var import_system15 = require("@marigold/system");
var HelpText = {
  container: (0, import_system15.cva)("group-error/field:text-text-error text-sm leading-6"),
  icon: (0, import_system15.cva)("")
};

// src/components/Image.styles.ts
var import_system16 = require("@marigold/system");
var Image = (0, import_system16.cva)();

// src/components/Label.styles.ts
var import_system17 = require("@marigold/system");
var Label = {
  container: (0, import_system17.cva)("group-disabled/field:text-text-disabled text-sm "),
  indicator: (0, import_system17.cva)(
    "group-required/field:text-text-required group-required/field:block"
  )
};

// src/components/Link.styles.ts
var import_system18 = require("@marigold/system");
var Link = (0, import_system18.cva)(
  ["text-text-link", "hover:no-underline aria-[disabled]:cursor-not-allowed"],
  {
    variants: {
      variant: {
        menuItemLink: "text-text-hover-light hover:no-underline"
      }
    }
  }
);

// src/components/List.styles.ts
var import_system19 = require("@marigold/system");
var List = {
  ul: (0, import_system19.cva)("list-disc"),
  ol: (0, import_system19.cva)("list-decimal"),
  item: (0, import_system19.cva)()
};

// src/components/ListBox.styles.ts
var import_system20 = require("@marigold/system");
var font = "font-body text-text-body";
var ListBox = {
  container: (0, import_system20.cva)([
    "bg-bg-surface border-border-light mt-[2px] overflow-y-auto overflow-x-hidden rounded-sm border border-solid",
    "data-error:border-border-error"
  ]),
  list: (0, import_system20.cva)([
    "outline-none",
    "sm:max-h-[45vh] md:max-h-[75vh] lg:max-h-[75vh]"
  ]),
  option: (0, import_system20.cva)([
    font,
    "cursor-pointer p-2 outline-none",
    // Need to use data attributes here because `focus-visible` only works with <Select>
    "data-[focus-visible]:bg-bg-focus",
    "aria-selected:text-text-light aria-selected:bg-bg-selected-input aria-selected:data-[focus-visible]:bg-bg-selected-input",
    "aria-disabled:text-text-disabled aria-disabled:cursor-not-allowed"
  ]),
  section: (0, import_system20.cva)(
    "[&:nth-child(n+1)]:border-border-light outline-none [&:nth-child(n+1)]:border-t-[1px_solid]"
  ),
  sectionTitle: (0, import_system20.cva)("text-text-body-accent px-2 pt-2 text-sm")
};

// src/components/Menu.styles.ts
var import_system21 = require("@marigold/system");
var Menu = {
  container: (0, import_system21.cva)([
    "border-border-light rounded-sm border border-solid bg-white",
    "sm:max-h-[45vh] md:max-h-[75vh] lg:max-h-[75vh]",
    " overflow-y-auto overflow-x-hidden"
  ]),
  item: (0, import_system21.cva)("focus:bg-bg-focus cursor-pointer px-4 py-1 outline-none"),
  section: (0, import_system21.cva)("text-text-body-accent p-4 text-sm")
};

// src/components/Message.styles.ts
var import_system22 = require("@marigold/system");
var Message = {
  container: (0, import_system22.cva)(
    [
      "bg-bg-surface border-y-2 border-l-[16px] border-r-2 border-solid text-sm",
      "items-center px-4 pb-4 pt-2"
    ],
    {
      variants: {
        variant: {
          warning: "border-border-warning",
          info: "border-border-info",
          error: "border-border-error"
        }
      }
    }
  ),
  title: (0, import_system22.cva)("font-bold"),
  content: (0, import_system22.cva)("col-span-2 col-start-1"),
  icon: (0, import_system22.cva)("h-4 w-4", {
    variants: {
      variant: {
        warning: "text-text-warning",
        info: "text-text-info",
        error: "text-text-error"
      }
    }
  })
};

// src/components/NumberField.styles.ts
var import_system23 = require("@marigold/system");
var NumberField = {
  group: (0, import_system23.cva)([
    "border-border-light rounded-sm border border-solid",
    "group-hover/field:border-border-hover",
    "group-readonly/field:group-focus/field:border-border-light group-readonly/field:group-focus/field:shadow-none",
    "group-disabled/field:bg-bg-disabled group-disabled/field:text-text-disabled group-disabled/field:cursor-not-allowed "
  ]),
  stepper: (0, import_system23.cva)([
    "text-text-body w-7",
    "border-border-light border-solid first-of-type:border-r",
    "border-border-light border-solid last-of-type:border-l ",
    "outline-2 -outline-offset-1 ",
    "group-focus/field:outline-outline-focus group-focus/field:outline",
    "group-error/field:outline-outline-error group-error/field:outline"
  ])
};

// src/components/Radio.styles.ts
var import_system24 = require("@marigold/system");
var Radio = {
  container: (0, import_system24.cva)(),
  label: (0, import_system24.cva)("disabled:text-text-disabled text-sm"),
  radio: (0, import_system24.cva)([
    "border-border-light",
    "group-hover/radio:border-border-hover",
    "group-focus/radio:outline-outline-focus group-focus/radio:outline group-focus/radio:outline-2 group-focus/radio:outline-offset-2",
    "group-checked/radio:border-border-selected-input group-checked/radio:bg-bg-selected-input group-checked/radio:text-white",
    "group-disabled/radio:bg-bg-disabled group-disabled/radio:border-border-disabled"
  ])
};

// src/components/Select.styles.ts
var import_system25 = require("@marigold/system");
var Select = {
  icon: (0, import_system25.cva)(),
  select: (0, import_system25.cva)([
    inputBox,
    inputDisabled(),
    inputFocus(),
    inputError("group-error/field"),
    inputHover(),
    inputBackground,
    inputSpacing,
    "appearance-none leading-8",
    "cursor-pointer",
    "aria-expanded:bg-bg-neutral "
  ])
};

// src/components/Switch.styles.ts
var import_system26 = require("@marigold/system");
var Switch = {
  container: (0, import_system26.cva)(),
  track: (0, import_system26.cva)(
    [
      "bg-bg-surface-underlay shadow-shadow-light shadow-[0_0_0_1px]",
      "group-selected/switch:bg-bg-primary ",
      "group-disabled/switch:bg-bg-disabled  group-disabled/switch:opacity-[0.5] group-disabled/switch:shadow-[0_0_0_1px]"
    ],
    {
      variants: {
        size: {
          large: "h-12 min-w-[96px] rounded-[40px]"
        }
      }
    }
  ),
  thumb: (0, import_system26.cva)(
    [
      "bg-white",
      "group-disabled/switch:bg-bg-disabled",
      "shadow-[1px_1px_4px]"
    ],
    {
      variants: {
        size: {
          large: "group-selected/switch:translate-x-[calc(95px_-_44px)] top-0.5 h-11 w-11"
        }
      }
    }
  )
};

// src/components/Tag.styles.ts
var import_system27 = require("@marigold/system");
var Tag = {
  tag: (0, import_system27.cva)("border-border-dark flex items-center rounded-md border p-1"),
  closeButton: (0, import_system27.cva)("right-1 h-4 w-4 cursor-pointer p-0 outline-none"),
  gridCell: (0, import_system27.cva)("flex items-center justify-center gap-1")
};

// src/components/Table.styles.ts
var import_system28 = require("@marigold/system");
var Table = {
  table: (0, import_system28.cva)("border-collapse text-sm"),
  header: (0, import_system28.cva)(
    [
      "group-aria-[multiselectable]/table:[&:first-child]:w-12",
      "cursor-default border-b-[1px] p-4 text-left",
      "text-text-body border-border-light",
      "focus:outline-outline-focus"
    ],
    {
      variants: {
        variant: {
          compact: "py-2",
          expanded: "py-6"
        }
      }
    }
  ),
  row: (0, import_system28.cva)([
    "group-aria-[multiselectable]/table:[&>*:first-child]:w-12",
    "data-[hover]:bg-bg-hover-light",
    "aria-selected:bg-bg-selected",
    "focus-visible:outline-outline-focus"
  ]),
  cell: (0, import_system28.cva)(
    [
      "text-text-body border-border-light border-b-[1px] p-4",
      "focus:outline-outline-focus"
    ],
    {
      variants: {
        variant: {
          compact: "py-2",
          expanded: "py-6"
        }
      }
    }
  )
};

// src/components/Tabs.styles.ts
var import_system29 = require("@marigold/system");
var Tabs = {
  container: (0, import_system29.cva)(""),
  tabs: (0, import_system29.cva)("mb-[10px]"),
  tabpanel: (0, import_system29.cva)(""),
  tab: (0, import_system29.cva)(
    [
      "min-h-[40px]",
      "data-[hover]:text-text-body data-[hover]:border-b-border-hover data-[hover]:border-b-8 data-[hover]:border-solid",
      "aria-disabled:text-text-disabled ",
      "aria-selected:border-b-border-focus aria-selected:border-b-8 aria-selected:border-solid"
    ],
    {
      variants: {
        size: {
          small: "px-1 pb-1",
          medium: "px-2 pb-2 text-lg",
          large: "px-4 pb-4 text-2xl"
        }
      }
    }
  )
};

// src/components/Text.styles.ts
var import_system30 = require("@marigold/system");
var Text = (0, import_system30.cva)();

// src/components/TextArea.styles.ts
var import_system31 = require("@marigold/system");
var TextArea = (0, import_system31.cva)([
  inputBox,
  inputBackground,
  inputHover(),
  inputFocus(),
  inputDisabled(),
  inputError("group-error/field"),
  inputSpacing,
  "text-text-body font-body leading-8",
  "read-only:focus:border-border-light read-only:focus:shadow-none"
]);

// src/components/Underlay.styles.ts
var import_system32 = require("@marigold/system");
var Underlay = (0, import_system32.cva)("", {
  variants: {
    variant: {
      modal: " bg-bg-surface-underlay backdrop-blur-sm"
    }
  }
});

// src/components/Tooltip.styles.ts
var import_system33 = require("@marigold/system");
var Tooltip = {
  container: (0, import_system33.cva)([
    "text-sm leading-[1.125rem]",
    "border-border-info rounded-lg border border-solid",
    "bg-bg-neutral p-2",
    "placement-t:mb-2",
    "placement-b:mt-2",
    "placement-r:ml-2",
    "placement-l:mr-2"
  ]),
  arrow: (0, import_system33.cva)([
    "border-t-border-info border-[7px] border-x-transparent border-b-transparent",
    // after
    "after:border-t-bg-neutral after:border-[7px] after:border-x-transparent after:border-b-transparent",
    "after:absolute after:h-0 after:w-0",
    'after:left-[-7px] after:right-[-8.5px] after:border-solid after:border-x-transparent after:border-b-transparent after:content-[""]',
    // right
    "group-placementR/tooltip:top-1/2 group-placementR/tooltip:mt-[-7px] group-placementR/tooltip:after:mt-[-8.5px]",
    "group-placementR/tooltip:right-full group-placementR/tooltip:rotate-90",
    // left
    "group-placementL/tooltip:top-1/2 group-placementL/tooltip:mt-[-7px] group-placementL/tooltip:after:mt-[-8.5px]",
    "group-placementL/tooltip:left-full group-placementL/tooltip:rotate-[270deg]",
    // top
    "group-placementT/tooltip:ml-[-8px] group-placementT/tooltip:top-full  group-placementT/tooltip:after:mt-[-8.5px]",
    // bottom
    "group-placementB/tooltip:ml-[-8px] group-placementB/tooltip:bottom-full  group-placementB/tooltip:after:mt-[-8.5px] group-placementB/tooltip:rotate-180"
  ])
};

// src/components/Slider.styles.ts
var import_system34 = require("@marigold/system");
var Slider = {
  track: (0, import_system34.cva)([
    "rounded-lg border-none border-transparent",
    "bg-bg-neutral text-transparent"
  ]),
  thumb: (0, import_system34.cva)([
    "align-middle",
    "border-border-dark rounded-lg border-4 border-solid",
    "h-4 w-4",
    "bg-bg-surface",
    "data-[focus]:border-border-focus",
    "data-[disabled]:bg-bg-disabled data-[disabled]:border-border-disabled"
  ]),
  label: (0, import_system34.cva)("text-text-body text-base font-normal"),
  output: (0, import_system34.cva)("text-text-body text-base font-normal")
};

// src/components/Calendar.styles.ts
var import_system35 = require("@marigold/system");
var Calendar = {
  calendar: (0, import_system35.cva)("disabled:text-text-disabled bg-white"),
  calendarCell: (0, import_system35.cva)([
    "aria-disabled:text-text-disabled",
    "data-[hover]:bg-bg-primary-light",
    "group-aria-selected/cell:bg-bg-selected-input outline-none group-aria-selected/cell:font-semibold group-aria-selected/cell:text-white"
  ]),
  calendarControllers: (0, import_system35.cva)([
    " data-[hover]:bg-bg-hover data-[hover]:text-text-hover"
  ])
};

// src/components/DatePicker.styles.ts
var import_system36 = require("@marigold/system");
var DatePicker = {
  container: (0, import_system36.cva)(),
  button: (0, import_system36.cva)([
    "h-full w-9 p-0",
    "flex items-center justify-center ",
    "text-text-body/80",
    "data-[hover]:bg-bg-hover group-focus/field:bg-bg-hover group-focus/field:[&[aria-expanded=true]]:bg-bg-secondary focus-visible:border-none focus-visible:outline-0 group-focus/field:text-white data-[hover]:text-white",
    "disabled:hidden"
  ])
};

// src/components/Popover.styles.ts
var import_system37 = require("@marigold/system");
var Popover = (0, import_system37.cva)(["mt-0.5"], {
  variants: {
    variant: {
      top: ["mb-0.5"],
      bottom: ["mt-0.5"],
      right: [""],
      left: [""]
    }
  }
});

// src/root.ts
var import_system38 = require("@marigold/system");
var root = (0, import_system38.cva)(
  "font-body text-text-body bg-bg-body m-0 p-0"
);

// src/screens.ts
var screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// src/tokens.ts
var brand = {
  primary: {
    "50": "#fffaec",
    "100": "#fff4d4",
    "200": "#ffe5a7",
    "300": "#ffd170",
    "400": "#ffb136",
    "500": "#ff980f",
    "600": "#fa8005",
    "700": "#c85e06",
    "800": "#9e490e",
    "900": "#7f3d0f",
    "950": "#451d05"
  },
  secondary: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712"
  }
};
var green = {
  "50": "#f7fce9",
  "100": "#eef8cf",
  "200": "#dcf1a5",
  "300": "#c3e670",
  "400": "#a8d744",
  "500": "#8bbd26",
  "600": "#6b961a",
  "700": "#527318",
  "800": "#425b19",
  "900": "#394e19",
  "950": "#1c2a09"
};
var yellow = {
  "50": "#ffffe7",
  "100": "#feffc1",
  "200": "#fffd86",
  "300": "#fff441",
  "400": "#ffe60d",
  "500": "#eac500",
  "600": "#d19e00",
  "700": "#a67102",
  "800": "#89580a",
  "900": "#74480f",
  "950": "#442504"
};
var red = {
  "50": "#fdf3f3",
  "100": "#fce4e4",
  "200": "#f9cfcf",
  "300": "#f4adad",
  "400": "#ec7d7e",
  "500": "#dd4142",
  "600": "#cc3637",
  "700": "#ab2a2b",
  "800": "#8e2627",
  "900": "#772526",
  "950": "#400f0f"
};
var blue = {
  "50": "#eefbfd",
  "100": "#d5f2f8",
  "200": "#b0e5f1",
  "300": "#79d0e7",
  "400": "#3ab3d5",
  "500": "#1f96bb",
  "600": "#1d799d",
  "700": "#1e6280",
  "800": "#215269",
  "900": "#1f455a",
  "950": "#0f2c3d"
};
var white = "#ffff";
var black = "#000000";
var colors = {
  // Brand
  // ---------------
  brand,
  blue,
  yellow,
  green,
  red,
  white,
  black,
  // Text
  // ---------------
  text: {
    body: {
      DEFAULT: brand.secondary[700],
      accent: brand.secondary[500]
    },
    link: blue[400],
    light: brand.secondary[100],
    // State
    disabled: brand.secondary[400],
    hover: brand.secondary[800],
    // Status
    error: red[500],
    info: blue[500],
    warning: yellow[500],
    required: red[500]
  },
  // Background
  // ---------------
  bg: {
    /**
     * Should be set to either html or body element.
     */
    body: white,
    neutral: brand.secondary[200],
    primary: {
      DEFAULT: brand.primary[600],
      light: brand.primary[100],
      hover: brand.primary[400],
      active: brand.primary[700]
    },
    secondary: {
      DEFAULT: brand.secondary[700],
      hover: brand.secondary[600],
      active: brand.secondary[800]
    },
    surface: {
      /**
       * Use this for e.g. card backgrounds.
       */
      DEFAULT: white,
      /**
       * Use this when you need to separate a specific layer from
       * the surface color, e.g. table headers.
       */
      raised: brand.secondary[400],
      /**
       * Use this when you need to make a specific layer
       * to appear lower than the surface color, e.g. progress bar.
       */
      lowered: brand.secondary[700],
      underlay: brand.secondary[200]
    },
    // State
    disabled: brand.secondary[200],
    hover: { DEFAULT: brand.secondary[400], light: brand.secondary[200] },
    focus: brand.secondary[200],
    selected: {
      DEFAULT: brand.primary[100],
      input: brand.primary[600]
    },
    // Status
    info: blue[500]
  },
  // Shadow
  // ---------------
  shadow: {
    light: brand.secondary[400],
    // state
    focus: brand.primary[600],
    // status
    error: red[500],
    selected: red[700],
    disabled: brand.secondary[400]
  },
  // Border
  // ---------------
  border: {
    light: brand.secondary[400],
    dark: brand.secondary[700],
    // State
    disabled: brand.secondary[400],
    hover: brand.secondary[500],
    focus: brand.primary[600],
    selected: brand.primary[800],
    // Status
    error: red[500],
    info: blue[500],
    warning: yellow[500]
  },
  // Outline
  // ---------------
  outline: {
    dark: brand.secondary[700],
    // State
    focus: blue[400],
    // Status
    error: red[500]
  }
};

// src/theme.ts
var theme = {
  name: "b2b",
  screens,
  root,
  colors,
  components: components_exports
};

// src/index.ts
var src_default = theme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  theme
});
//# sourceMappingURL=index.js.map