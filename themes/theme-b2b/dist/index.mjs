import {
  __export,
  colors,
  screens
} from "./chunk-YOYN7FV6.mjs";

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
import { cva } from "@marigold/system";
var Accordion = {
  button: cva(
    "bg-bg-surface flex w-full items-center justify-between border-none px-2 py-1 leading-normal"
  ),
  item: cva("p-2")
};

// src/components/Badge.styles.ts
import { cva as cva2 } from "@marigold/system";
var Badge = cva2(
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
import { cva as cva3 } from "@marigold/system";
var Body = cva3("");

// src/components/Button.styles.ts
import { cva as cva4 } from "@marigold/system";
var Button = cva4(
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
import { cva as cva5 } from "@marigold/system";
var Card = cva5(
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
import { cva as cva6 } from "@marigold/system";
var Checkbox = {
  checkbox: cva6([
    "border-border-light group-hover/checkbox:border-border-hover rounded-sm",
    "group-focus/checkbox:outline-outline-focus group-focus/checkbox:outline group-focus/checkbox:outline-2 group-focus/checkbox:outline-offset-2",
    "group-checked/checkbox:border-border-selected group-checked/checkbox:bg-bg-selected-input group-indeterminate/checkbox:border-border-selected group-indeterminate/checkbox:bg-bg-selected-input group-checked/checkbox:text-white group-indeterminate/checkbox:text-white",
    "group-disabled/checkbox:bg-bg-disabled group-disabled/:border-border-disabled"
  ]),
  container: cva6(),
  label: cva6("group-disabled/checkbox:text-text-disabled text-sm ")
};

// src/components/DateField.styles.ts
import { cva as cva8 } from "@marigold/system";

// src/components/Input.styles.ts
import { cva as cva7 } from "@marigold/system";
var inputBox = "border-border-light rounded-sm border outline-none outline-offset-[-1px]";
var inputBackground = "bg-bg-surface";
var inputSpacing = "px-2";
var inputFocus = (selector = "focus") => `${selector}:border-border-focus ${selector}:outline-outline-focus`;
var inputDisabled = (selector = "disabled") => `${selector}:bg-bg-disabled ${selector}:text-text-disabled ${selector}:hover:border-border-disabled ${selector}:border-border-disabled ${selector}:cursor-not-allowed`;
var inputError = (selector = "error") => `${selector}:border-border-error ${selector}:outline-outline-error ${selector}:-outline-offset-1`;
var inputHover = (selector = "hover") => `${selector}:border-border-hover`;
var Input = {
  icon: cva7("left-2"),
  action: cva7("right-0"),
  input: cva7([
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
  field: cva8([
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
  segment: cva8(["rounded-sm", "focus:bg-bg-focus focus:text-white"]),
  action: cva8("")
};

// src/components/Dialog.styles.ts
import { cva as cva9 } from "@marigold/system";
var Dialog = {
  closeButton: cva9("relative -right-6 -top-2"),
  container: cva9(
    "font-body bg-bg-surface rounded-sm px-8 pb-8 pt-4 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
  )
};

// src/components/Divider.styles.ts
import { cva as cva10 } from "@marigold/system";
var Divider = cva10(
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
import { cva as cva11 } from "@marigold/system";
var Field = cva11("grid gap-y-0.5");

// src/components/Footer.styles.ts
import { cva as cva12 } from "@marigold/system";
var Footer = cva12("");

// src/components/Header.styles.ts
import { cva as cva13 } from "@marigold/system";
var Header = cva13("");

// src/components/Headline.styles.ts
import { cva as cva14 } from "@marigold/system";
var Headline = cva14("", {
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
import { cva as cva15 } from "@marigold/system";
var HelpText = {
  container: cva15("group-error/field:text-text-error text-sm leading-6"),
  icon: cva15("")
};

// src/components/Image.styles.ts
import { cva as cva16 } from "@marigold/system";
var Image = cva16();

// src/components/Label.styles.ts
import { cva as cva17 } from "@marigold/system";
var Label = {
  container: cva17("group-disabled/field:text-text-disabled text-sm "),
  indicator: cva17(
    "group-required/field:text-text-required group-required/field:block"
  )
};

// src/components/Link.styles.ts
import { cva as cva18 } from "@marigold/system";
var Link = cva18(
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
import { cva as cva19 } from "@marigold/system";
var List = {
  ul: cva19("list-disc"),
  ol: cva19("list-decimal"),
  item: cva19()
};

// src/components/ListBox.styles.ts
import { cva as cva20 } from "@marigold/system";
var font = "font-body text-text-body";
var ListBox = {
  container: cva20([
    "bg-bg-surface border-border-light mt-[2px] overflow-y-auto overflow-x-hidden rounded-sm border border-solid",
    "data-error:border-border-error"
  ]),
  list: cva20([
    "outline-none",
    "sm:max-h-[45vh] md:max-h-[75vh] lg:max-h-[75vh]"
  ]),
  option: cva20([
    font,
    "cursor-pointer p-2 outline-none",
    // Need to use data attributes here because `focus-visible` only works with <Select>
    "data-[focus-visible]:bg-bg-focus",
    "aria-selected:text-text-light aria-selected:bg-bg-selected-input aria-selected:data-[focus-visible]:bg-bg-selected-input",
    "aria-disabled:text-text-disabled aria-disabled:cursor-not-allowed"
  ]),
  section: cva20(
    "[&:nth-child(n+1)]:border-border-light outline-none [&:nth-child(n+1)]:border-t-[1px_solid]"
  ),
  sectionTitle: cva20("text-text-body-accent px-2 pt-2 text-sm")
};

// src/components/Menu.styles.ts
import { cva as cva21 } from "@marigold/system";
var Menu = {
  container: cva21([
    "border-border-light rounded-sm border border-solid bg-white",
    "sm:max-h-[45vh] md:max-h-[75vh] lg:max-h-[75vh]",
    " overflow-y-auto overflow-x-hidden"
  ]),
  item: cva21("focus:bg-bg-focus cursor-pointer px-4 py-1 outline-none"),
  section: cva21("text-text-body-accent p-4 text-sm")
};

// src/components/Message.styles.ts
import { cva as cva22 } from "@marigold/system";
var Message = {
  container: cva22(
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
  title: cva22("font-bold"),
  content: cva22("col-span-2 col-start-1"),
  icon: cva22("h-4 w-4", {
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
import { cva as cva23 } from "@marigold/system";
var NumberField = {
  group: cva23([
    "border-border-light rounded-sm border border-solid",
    "group-hover/field:border-border-hover",
    "group-readonly/field:group-focus/field:border-border-light group-readonly/field:group-focus/field:shadow-none",
    "group-disabled/field:bg-bg-disabled group-disabled/field:text-text-disabled group-disabled/field:cursor-not-allowed "
  ]),
  stepper: cva23([
    "text-text-body w-7",
    "border-border-light border-solid first-of-type:border-r",
    "border-border-light border-solid last-of-type:border-l ",
    "outline-2 -outline-offset-1 ",
    "group-focus/field:outline-outline-focus group-focus/field:outline",
    "group-error/field:outline-outline-error group-error/field:outline"
  ])
};

// src/components/Radio.styles.ts
import { cva as cva24 } from "@marigold/system";
var Radio = {
  container: cva24(),
  label: cva24("disabled:text-text-disabled text-sm"),
  radio: cva24([
    "border-border-light",
    "group-hover/radio:border-border-hover",
    "group-focus/radio:outline-outline-focus group-focus/radio:outline group-focus/radio:outline-2 group-focus/radio:outline-offset-2",
    "group-checked/radio:border-border-selected-input group-checked/radio:bg-bg-selected-input group-checked/radio:text-white",
    "group-disabled/radio:bg-bg-disabled group-disabled/radio:border-border-disabled"
  ])
};

// src/components/Select.styles.ts
import { cva as cva25 } from "@marigold/system";
var Select = {
  icon: cva25(),
  select: cva25([
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
import { cva as cva26 } from "@marigold/system";
var Switch = {
  container: cva26(),
  track: cva26(
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
  thumb: cva26(
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
import { cva as cva27 } from "@marigold/system";
var Tag = {
  tag: cva27("border-border-dark flex items-center rounded-md border p-1"),
  closeButton: cva27("right-1 h-4 w-4 cursor-pointer p-0 outline-none"),
  gridCell: cva27("flex items-center justify-center gap-1")
};

// src/components/Table.styles.ts
import { cva as cva28 } from "@marigold/system";
var Table = {
  table: cva28("border-collapse text-sm"),
  header: cva28(
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
  row: cva28([
    "group-aria-[multiselectable]/table:[&>*:first-child]:w-12",
    "data-[hover]:bg-bg-hover-light",
    "aria-selected:bg-bg-selected",
    "focus-visible:outline-outline-focus"
  ]),
  cell: cva28(
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
import { cva as cva29 } from "@marigold/system";
var Tabs = {
  container: cva29(""),
  tabs: cva29("mb-[10px]"),
  tabpanel: cva29(""),
  tab: cva29(
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
import { cva as cva30 } from "@marigold/system";
var Text = cva30();

// src/components/TextArea.styles.ts
import { cva as cva31 } from "@marigold/system";
var TextArea = cva31([
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
import { cva as cva32 } from "@marigold/system";
var Underlay = cva32("", {
  variants: {
    variant: {
      modal: " bg-bg-surface-underlay backdrop-blur-sm"
    }
  }
});

// src/components/Tooltip.styles.ts
import { cva as cva33 } from "@marigold/system";
var Tooltip = {
  container: cva33([
    "text-sm leading-[1.125rem]",
    "border-border-info rounded-lg border border-solid",
    "bg-bg-neutral p-2",
    "placement-t:mb-2",
    "placement-b:mt-2",
    "placement-r:ml-2",
    "placement-l:mr-2"
  ]),
  arrow: cva33([
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
import { cva as cva34 } from "@marigold/system";
var Slider = {
  track: cva34([
    "rounded-lg border-none border-transparent",
    "bg-bg-neutral text-transparent"
  ]),
  thumb: cva34([
    "align-middle",
    "border-border-dark rounded-lg border-4 border-solid",
    "h-4 w-4",
    "bg-bg-surface",
    "data-[focus]:border-border-focus",
    "data-[disabled]:bg-bg-disabled data-[disabled]:border-border-disabled"
  ]),
  label: cva34("text-text-body text-base font-normal"),
  output: cva34("text-text-body text-base font-normal")
};

// src/components/Calendar.styles.ts
import { cva as cva35 } from "@marigold/system";
var Calendar = {
  calendar: cva35("disabled:text-text-disabled bg-white"),
  calendarCell: cva35([
    "aria-disabled:text-text-disabled",
    "data-[hover]:bg-bg-primary-light",
    "group-aria-selected/cell:bg-bg-selected-input outline-none group-aria-selected/cell:font-semibold group-aria-selected/cell:text-white"
  ]),
  calendarControllers: cva35([
    " data-[hover]:bg-bg-hover data-[hover]:text-text-hover"
  ])
};

// src/components/DatePicker.styles.ts
import { cva as cva36 } from "@marigold/system";
var DatePicker = {
  container: cva36(),
  button: cva36([
    "h-full w-9 p-0",
    "flex items-center justify-center ",
    "text-text-body/80",
    "data-[hover]:bg-bg-hover group-focus/field:bg-bg-hover group-focus/field:[&[aria-expanded=true]]:bg-bg-secondary focus-visible:border-none focus-visible:outline-0 group-focus/field:text-white data-[hover]:text-white",
    "disabled:hidden"
  ])
};

// src/components/Popover.styles.ts
import { cva as cva37 } from "@marigold/system";
var Popover = cva37(["mt-0.5"], {
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
import { cva as cva38 } from "@marigold/system";
var root = cva38(
  "font-body text-text-body bg-bg-body m-0 p-0"
);

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
export {
  src_default as default,
  theme
};
//# sourceMappingURL=index.mjs.map