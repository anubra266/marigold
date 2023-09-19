import {
  __export,
  colors,
  screens
} from "./chunk-YGIXVJQS.mjs";

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
  inputBox: () => inputBox,
  inputHeight: () => inputHeight,
  inputSpacing: () => inputSpacing
});

// src/components/Accordion.styles.ts
import { cva } from "@marigold/system";
var Accordion = {
  button: cva([
    "bg-bg-surface w-full justify-between border-none px-2 py-1",
    "font-bold leading-[1.125]"
  ]),
  item: cva("p-2")
};

// src/components/Badge.styles.ts
import { cva as cva2 } from "@marigold/system";
var Badge = cva2(
  "text-xxsmall inline-flex whitespace-nowrap rounded-3xl px-2 py-0.5 align-middle",
  {
    variants: {
      variant: {
        info: "text-text-light bg-bg-info"
      }
    }
  }
);

// src/components/Body.styles.ts
import { cva as cva3 } from "@marigold/system";
var Body = cva3("m-0 flex-1");

// src/components/Button.styles.ts
import { cva as cva4 } from "@marigold/system";
var Button = cva4(
  [
    "border-border-dark bg-bg-neutral text-text-dark ease-ease-out h-6 cursor-pointer rounded-sm border px-4 py-0 text-sm leading-6 transition-all duration-200 disabled:cursor-none",
    "disabled:border-border-disabled disabled:bg-bg-disabled disabled:text-text-disabled disabled:cursor-not-allowed",
    "outline-outline-focus outline-2 outline-offset-1 focus-visible:outline",
    "hover:bg-bg-hover-light"
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-border-primary bg-bg-primary  text-text-light",
          "hover:bg-bg-primary-hover hover:border-border-primary-hover "
        ],
        link: [
          "text-text-primary-light border-none bg-transparent",
          "hover:bg-transparent hover:underline"
        ],
        text: ["border-none bg-transparent", "hover:bg-bg-hover-light"]
      },
      size: {
        small: "py-1"
      }
    }
  }
);

// src/components/Calendar.styles.ts
import { cva as cva5 } from "@marigold/system";
var Calendar = {
  calendar: cva5("disabled:text-text-disabled bg-white"),
  calendarCell: cva5([
    "aria-disabled:text-text-disabled",
    "hover:bg-bg-hover-light",
    "group-aria-selected/cell:bg-bg-selected outline-none group-aria-selected/cell:font-semibold group-aria-selected/cell:text-white"
  ]),
  calendarControllers: cva5()
};

// src/components/Card.styles.ts
import { cva as cva6 } from "@marigold/system";
var Card = cva6(
  "bg-bg-surface relative max-w-[270px] rounded p-1 shadow-[1px_2px_3px]",
  {
    variants: {
      variant: {
        hovering: "cursor-pointer hover:shadow-[1px_3px_5px]"
      },
      size: {
        small: "min-h-[100px]"
      }
    }
  }
);

// src/components/Checkbox.styles.ts
import { cva as cva7 } from "@marigold/system";
var Checkbox = {
  container: cva7([], {
    variants: {
      size: {
        small: "py-1"
      }
    }
  }),
  label: cva7("group-disabled/checkbox:text-text-disabled leading-none"),
  checkbox: cva7([
    "border-border-light rounded-[2] bg-white p-0.5",
    "group-hover/checkbox:border-border-hover",
    "group-checked/checkbox:border-border-selected group-checked/checkbox:bg-bg-selected group-checked/checkbox:text-text-light",
    "group-disabled/checkbox:border-border-disabled group-disabled/checkbox:bg-bg-disabled",
    "group-indeterminate/checkbox:border-border-selected group-indeterminate/checkbox:bg-bg-selected group-indeterminate/checkbox:text-text-light"
  ])
};

// src/components/DateField.styles.ts
import { cva as cva9 } from "@marigold/system";

// src/components/Input.styles.ts
import { cva as cva8 } from "@marigold/system";
var inputHeight = "h-[22px]";
var inputBox = "border rounded-sm border-input-border bg-white";
var inputSpacing = "px-1";
var Input = {
  input: cva8([
    inputBox,
    inputHeight,
    inputSpacing,
    "[&[type=file]]:leading-[16px]",
    "leading-[22px]",
    "focus:outline-outline-focus -outline-offset-1 focus:outline focus:outline-2",
    "disabled:bg-bg-disabled disabled:border-border-disabled disabled:text-text-disabled",
    "read-only:border-transparent read-only:bg-transparent",
    // Extra padding for when an icon/action is present
    "group-data-[icon]/input:pl-5",
    "group-data-[action]/input:pr-4"
  ]),
  icon: cva8("left-0.5 h-4 w-4"),
  action: cva8([inputHeight, "right-0 w-4"])
};

// src/components/DateField.styles.ts
var DateField = {
  field: cva9([
    inputBox,
    inputHeight,
    inputSpacing,
    " group-disabled/field:bg-bg-disabled group-disabled/field:border-border-disabled group-disabled/field:text-text-disabled",
    " group-readonly/field:bg-bg-transparent group-readonly/field:text-text-disabled"
  ]),
  segment: cva9(["rounded-sm", "focus:bg-bg-focus focus:text-text-focus"]),
  action: cva9("pr-2")
};

// src/components/DatePicker.styles.ts
import { cva as cva10 } from "@marigold/system";
var DatePicker = {
  container: cva10(),
  button: cva10([
    `right-1 h-5 w-5`,
    "p-0 pb-0.5",
    "text-text-primary/80 hover:text-text-primary border-none bg-transparent",
    "disabled:hidden",
    "-outline-offset-1"
  ])
};

// src/components/Dialog.styles.ts
import { cva as cva11 } from "@marigold/system";
var Dialog = {
  container: cva11("bg-bg-surface rounded-sm px-8 pb-8 pt-4", {
    variants: {
      size: {
        medium: "w-[600px]"
      }
    }
  }),
  closeButton: cva11([
    "relative right-[-24px] top-[-8px] h-6 w-6",
    "bg-bg-primary text-text-light",
    "border-border-primary rounded-sm border",
    "hover:bg-bg-primary-hover"
  ])
};

// src/components/Divider.styles.ts
import { cva as cva12 } from "@marigold/system";
var Divider = cva12(
  "bg-bg-surface-lowered h-px w-full",
  {
    variants: {
      variant: {
        bold: "h-[2px]"
      }
    }
  }
);

// src/components/Field.styles.ts
import { cva as cva13 } from "@marigold/system";
var Field = cva13(
  "grid grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] items-baseline gap-x-2 gap-y-0.5"
);

// src/components/Footer.styles.ts
import { cva as cva14 } from "@marigold/system";
var Footer = cva14("pt-2");

// src/components/Header.styles.ts
import { cva as cva15 } from "@marigold/system";
var Header = cva15({});

// src/components/Headline.styles.ts
import { cva as cva16 } from "@marigold/system";
var Headline = cva16("font-black", {
  variants: {
    size: {
      "level-1": "text-[2rem]",
      "level-2": "mb-6 text-2xl",
      "level-3": "text-xl",
      "level-4": "text-lg",
      "level-5": "text-base",
      "level-6": "text-[13px] uppercase"
    }
  }
});

// src/components/HelpText.styles.ts
import { cva as cva17 } from "@marigold/system";
var HelpText = {
  container: cva17("group-error/field:text-text-error"),
  icon: cva17("h-4 w-4")
};

// src/components/Image.styles.ts
import { cva as cva18 } from "@marigold/system";
var Image = cva18({});

// src/components/Label.styles.ts
import { cva as cva19 } from "@marigold/system";
var Label = {
  container: cva19([
    "leading-6",
    // align label with input
    "row-span-2 justify-end",
    "group-error/field:text-text-error group-required/field:font-bold"
  ]),
  indicator: cva19()
};

// src/components/Link.styles.ts
import { cva as cva20 } from "@marigold/system";
var Link = cva20(
  [
    "text-text-primary",
    "hover:underline  hover:visited:cursor-pointer aria-disabled:cursor-not-allowed"
  ],
  {
    variants: {
      variant: {
        menuItemLink: "text-text-primary  hover:no-underline",
        content: "hover:no-underline"
      }
    }
  }
);

// src/components/List.styles.ts
import { cva as cva21 } from "@marigold/system";
var List = {
  ol: cva21("list-decimal"),
  ul: cva21("list-disc"),
  item: cva21()
};

// src/components/ListBox.styles.ts
import { cva as cva22 } from "@marigold/system";
var font = "font-body text-[13px] text-root-body";
var ListBox = {
  container: cva22("border-input-border rounded-sm border bg-white"),
  list: cva22(""),
  option: cva22([
    font,
    "cursor-pointer px-1.5 py-0.5 outline-none [li_&]:px-5",
    // Need to use data attributes here because `focus-visible` only works with <Select>
    "data-[focus-visible]:text-text-light data-[focus-visible]:bg-highlight",
    "aria-enabled:hover:text-text-light aria-enabled:hover:bg-highlight",
    "aria-selected:text-text-light aria-selected:bg-highlight",
    "aria-disabled:text-text-disabled aria-disabled:cursor-not-allowed"
  ]),
  section: cva22("[&:nth-child(n+2)]:pt-2"),
  sectionTitle: cva22([font, "px-1.5 font-bold"])
};

// src/components/Menu.styles.ts
import { cva as cva23 } from "@marigold/system";
var Menu = {
  container: cva23([
    "bg-bg-surface list-none break-words rounded-[2pxs] border p-0",
    "sm:max-h-[75ch] md:max-h-[75vh] lg:max-h-[45vh]",
    "overflow-y-auto overflow-x-hidden"
  ]),
  item: cva23([
    "cursor-pointer p-1 focus:outline-0",
    "hover:text-text-light hover:bg-highlight"
  ]),
  section: cva23("text-text-dark px-1 py-4 text-xs font-normal")
};

// src/components/Message.styles.ts
import { cva as cva24 } from "@marigold/system";
var Message = {
  container: cva24("bg-bg-surface border border-solid px-4 py-2 text-[13px]", {
    variants: {
      variant: {
        warning: "border-border-warning",
        error: "border-border-error",
        info: "border-border-info"
      }
    }
  }),
  title: cva24("font-bold", {
    variants: {
      variant: {
        warning: "text-text-warning",
        error: "text-text-error",
        info: "text-text-info"
      }
    }
  }),
  icon: cva24("hidden"),
  content: cva24("leading-4", {
    variants: {
      variant: {
        warning: "text-text-warning",
        error: "text-text-error",
        info: "text-text-info"
      }
    }
  })
};

// src/components/NumberField.ts
import { cva as cva25 } from "@marigold/system";
var NumberField = {
  group: cva25(),
  stepper: cva25()
};

// src/components/Radio.styles.ts
import { cva as cva26 } from "@marigold/system";
var Radio = {
  container: cva26("disabled:text-text-disabled "),
  radio: cva26([
    "border-border-light bg-white",
    "group-focus/radio:outline-outline-focus group-focus/radio:outline group-focus/radio:outline-offset-[3px]",
    "group-hover/radio:border-border-hover",
    "group-checked/radio:text-text-light group-checked/radio:bg-bg-selected checked:border-border-selected",
    "group-disabled/radio:bg-bg-disabled group-disabled/radio:border-border-disabled"
  ]),
  label: cva26()
};

// src/components/Select.styles.ts
import { cva as cva27 } from "@marigold/system";
var Select = {
  select: cva27([inputBox, inputHeight, inputSpacing]),
  icon: cva27()
};

// src/components/Slider.styles.ts
import { cva as cva28 } from "@marigold/system";
var Slider = {
  track: cva28([
    "rounded-lg border-none border-transparent",
    "bg-bg-neutral text-transparent"
  ]),
  thumb: cva28([
    "align-middle",
    "border-border-dark rounded-lg border-4 border-solid",
    "h-4 w-4",
    "bg-bg-surface",
    "data-[focus]:border-border-focus",
    "data-[disabled]:bg-bg-disabled-dark data-[disabled]:border-border-disabled"
  ]),
  label: cva28("text-text-primary text-base font-normal"),
  output: cva28("text-text-primary text-base font-normal")
};

// src/components/Switch.styles.ts
import { cva as cva29 } from "@marigold/system";
var Switch = {
  container: cva29(),
  track: cva29(
    [
      "bg-bg-surface-raised shadow-[0_0_0_1px]",
      "group-selected/switch:bg-bg-primary group-selected/switch:shadow-[#ae440a]",
      "group-disabled/switch:bg-bg-disabled group-disabled/switch:opacity-[0.5] group-disabled/switch:shadow-[0_0_0_1px] "
    ],
    {
      variants: {
        size: {
          large: "h-[48] w-[96] rounded-[40]"
        }
      }
    }
  ),
  thumb: cva29(
    [
      "bg-white",
      "group-disabled/switch:bg-bg-disabled",
      "shadow-[1px_1px_4px]"
    ],
    {
      variants: {
        size: {
          large: "top-2 h-[44] w-[44]"
        }
      }
    }
  )
};

// src/components/Table.styles.ts
import { cva as cva30 } from "@marigold/system";
var Table = {
  table: cva30("border-collapse", {
    variants: {
      variant: {
        linedTable: ["border-collapse"],
        borderedTable: ["border-collapse"]
      }
    }
  }),
  header: cva30(
    [
      "group-aria-[multiselectable]/table:[&:first-child]:w-12",
      "border-border-white border-x px-2",
      "bg-bg-surface-lowered text-text-light",
      "odd:bg-bg-surface-raised",
      "focus:outline-outline-focus"
    ],
    {
      variants: {
        variant: {
          linedTable: "text-text-primary border-border-neutral border-x-0 border-b bg-transparent px-2 odd:bg-transparent",
          borderedTable: [
            "border-border-neutral border",
            "text-text-primary bg-transparent px-2 odd:bg-transparent"
          ]
        }
      }
    }
  ),
  row: cva30([
    "group-aria-[multiselectable]/table:[&>*:first-child]:w-12",
    "hover:bg-bg-hover-neutral selected:bg-bg-selected focus:outline-outline-focus",
    {
      variants: {
        variant: {
          linedTable: ["border-border-neutral border-b"],
          borderedTable: ["border-border-neutral border"]
        }
      }
    }
  ]),
  cell: cva30(["text-text-primary p-2", "focus:outline-outline-focus"], {
    variants: {
      variant: {
        borderedTable: ["border-border-neutral border"]
      }
    }
  })
};

// src/components/Tabs.styles.ts
import { cva as cva31 } from "@marigold/system";
var Tabs = {
  container: cva31(""),
  tabpanel: cva31(""),
  tabs: cva31("mb-[10px]"),
  tab: cva31(
    [
      "min-h-[40px]",
      "hover:text-text-hover-light hover:border-b-border-hover hover:border-b-8 hover:border-solid",
      "aria-disabled:text-text-disabled aria-disabled:hover:border-none",
      "aria-selected:border-b-border-primary aria-selected:border-b-8 aria-selected:border-solid "
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

// src/components/Tag.styles.ts
import { cva as cva32 } from "@marigold/system";
var Tag = {
  tag: cva32([
    "border-border-primary bg-bg-surface flex items-center rounded border",
    "px-1 py-[2px]"
  ]),
  gridCell: cva32("flex items-center gap-1"),
  closeButton: cva32(
    "h-4 w-4 cursor-pointer border-none bg-transparent p-0 leading-normal outline-0"
  )
};

// src/components/Text.styles.ts
import { cva as cva33 } from "@marigold/system";
var Text = cva33("", {
  variants: {
    variant: {
      bold: ["font-bold"],
      muted: ["text-text-disabled"]
    }
  }
});

// src/components/TextArea.styles.ts
import { cva as cva34 } from "@marigold/system";
var TextArea = cva34([
  "border-border-neutral rounded-sm border bg-white",
  "p-0.5",
  "focus:outline-outline-focus -outline-offset-1 focus:outline focus:outline-2",
  "disabled:bg-bg-disabled"
]);

// src/components/Tooltip.styles.ts
import { cva as cva35 } from "@marigold/system";
var Tooltip = {
  container: cva35("text-body"),
  arrow: cva35("border-solid border-x-transparent border-b-transparent")
};

// src/components/Underlay.styles.ts
import { cva as cva36 } from "@marigold/system";
var Underlay = cva36("", {
  variants: {
    variant: {
      modal: ["bg-bg-surface-underlay backdrop-blur-sm"]
    }
  }
});

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
  "font-body text-text-primary bg-bg-body text-[13px]"
);

// src/theme.ts
var theme = {
  name: "core",
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