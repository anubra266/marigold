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
  inputBox: () => inputBox,
  inputHeight: () => inputHeight,
  inputSpacing: () => inputSpacing
});

// src/components/Accordion.styles.ts
var import_system = require("@marigold/system");
var Accordion = {
  button: (0, import_system.cva)([
    "bg-bg-surface w-full justify-between border-none px-2 py-1",
    "font-bold leading-[1.125]"
  ]),
  item: (0, import_system.cva)("p-2")
};

// src/components/Badge.styles.ts
var import_system2 = require("@marigold/system");
var Badge = (0, import_system2.cva)(
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
var import_system3 = require("@marigold/system");
var Body = (0, import_system3.cva)("m-0 flex-1");

// src/components/Button.styles.ts
var import_system4 = require("@marigold/system");
var Button = (0, import_system4.cva)(
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
var import_system5 = require("@marigold/system");
var Calendar = {
  calendar: (0, import_system5.cva)("disabled:text-text-disabled bg-white"),
  calendarCell: (0, import_system5.cva)([
    "aria-disabled:text-text-disabled",
    "hover:bg-bg-hover-light",
    "group-aria-selected/cell:bg-bg-selected outline-none group-aria-selected/cell:font-semibold group-aria-selected/cell:text-white"
  ]),
  calendarControllers: (0, import_system5.cva)()
};

// src/components/Card.styles.ts
var import_system6 = require("@marigold/system");
var Card = (0, import_system6.cva)(
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
var import_system7 = require("@marigold/system");
var Checkbox = {
  container: (0, import_system7.cva)([], {
    variants: {
      size: {
        small: "py-1"
      }
    }
  }),
  label: (0, import_system7.cva)("group-disabled/checkbox:text-text-disabled leading-none"),
  checkbox: (0, import_system7.cva)([
    "border-border-light rounded-[2] bg-white p-0.5",
    "group-hover/checkbox:border-border-hover",
    "group-checked/checkbox:border-border-selected group-checked/checkbox:bg-bg-selected group-checked/checkbox:text-text-light",
    "group-disabled/checkbox:border-border-disabled group-disabled/checkbox:bg-bg-disabled",
    "group-indeterminate/checkbox:border-border-selected group-indeterminate/checkbox:bg-bg-selected group-indeterminate/checkbox:text-text-light"
  ])
};

// src/components/DateField.styles.ts
var import_system9 = require("@marigold/system");

// src/components/Input.styles.ts
var import_system8 = require("@marigold/system");
var inputHeight = "h-[22px]";
var inputBox = "border rounded-sm border-input-border bg-white";
var inputSpacing = "px-1";
var Input = {
  input: (0, import_system8.cva)([
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
  icon: (0, import_system8.cva)("left-0.5 h-4 w-4"),
  action: (0, import_system8.cva)([inputHeight, "right-0 w-4"])
};

// src/components/DateField.styles.ts
var DateField = {
  field: (0, import_system9.cva)([
    inputBox,
    inputHeight,
    inputSpacing,
    " group-disabled/field:bg-bg-disabled group-disabled/field:border-border-disabled group-disabled/field:text-text-disabled",
    " group-readonly/field:bg-bg-transparent group-readonly/field:text-text-disabled"
  ]),
  segment: (0, import_system9.cva)(["rounded-sm", "focus:bg-bg-focus focus:text-text-focus"]),
  action: (0, import_system9.cva)("pr-2")
};

// src/components/DatePicker.styles.ts
var import_system10 = require("@marigold/system");
var DatePicker = {
  container: (0, import_system10.cva)(),
  button: (0, import_system10.cva)([
    `right-1 h-5 w-5`,
    "p-0 pb-0.5",
    "text-text-primary/80 hover:text-text-primary border-none bg-transparent",
    "disabled:hidden",
    "-outline-offset-1"
  ])
};

// src/components/Dialog.styles.ts
var import_system11 = require("@marigold/system");
var Dialog = {
  container: (0, import_system11.cva)("bg-bg-surface rounded-sm px-8 pb-8 pt-4", {
    variants: {
      size: {
        medium: "w-[600px]"
      }
    }
  }),
  closeButton: (0, import_system11.cva)([
    "relative right-[-24px] top-[-8px] h-6 w-6",
    "bg-bg-primary text-text-light",
    "border-border-primary rounded-sm border",
    "hover:bg-bg-primary-hover"
  ])
};

// src/components/Divider.styles.ts
var import_system12 = require("@marigold/system");
var Divider = (0, import_system12.cva)(
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
var import_system13 = require("@marigold/system");
var Field = (0, import_system13.cva)(
  "grid grid-cols-[min-content_1fr] grid-rows-[min-content_min-content] items-baseline gap-x-2 gap-y-0.5"
);

// src/components/Footer.styles.ts
var import_system14 = require("@marigold/system");
var Footer = (0, import_system14.cva)("pt-2");

// src/components/Header.styles.ts
var import_system15 = require("@marigold/system");
var Header = (0, import_system15.cva)({});

// src/components/Headline.styles.ts
var import_system16 = require("@marigold/system");
var Headline = (0, import_system16.cva)("font-black", {
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
var import_system17 = require("@marigold/system");
var HelpText = {
  container: (0, import_system17.cva)("group-error/field:text-text-error"),
  icon: (0, import_system17.cva)("h-4 w-4")
};

// src/components/Image.styles.ts
var import_system18 = require("@marigold/system");
var Image = (0, import_system18.cva)({});

// src/components/Label.styles.ts
var import_system19 = require("@marigold/system");
var Label = {
  container: (0, import_system19.cva)([
    "leading-6",
    // align label with input
    "row-span-2 justify-end",
    "group-error/field:text-text-error group-required/field:font-bold"
  ]),
  indicator: (0, import_system19.cva)()
};

// src/components/Link.styles.ts
var import_system20 = require("@marigold/system");
var Link = (0, import_system20.cva)(
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
var import_system21 = require("@marigold/system");
var List = {
  ol: (0, import_system21.cva)("list-decimal"),
  ul: (0, import_system21.cva)("list-disc"),
  item: (0, import_system21.cva)()
};

// src/components/ListBox.styles.ts
var import_system22 = require("@marigold/system");
var font = "font-body text-[13px] text-root-body";
var ListBox = {
  container: (0, import_system22.cva)("border-input-border rounded-sm border bg-white"),
  list: (0, import_system22.cva)(""),
  option: (0, import_system22.cva)([
    font,
    "cursor-pointer px-1.5 py-0.5 outline-none [li_&]:px-5",
    // Need to use data attributes here because `focus-visible` only works with <Select>
    "data-[focus-visible]:text-text-light data-[focus-visible]:bg-highlight",
    "aria-enabled:hover:text-text-light aria-enabled:hover:bg-highlight",
    "aria-selected:text-text-light aria-selected:bg-highlight",
    "aria-disabled:text-text-disabled aria-disabled:cursor-not-allowed"
  ]),
  section: (0, import_system22.cva)("[&:nth-child(n+2)]:pt-2"),
  sectionTitle: (0, import_system22.cva)([font, "px-1.5 font-bold"])
};

// src/components/Menu.styles.ts
var import_system23 = require("@marigold/system");
var Menu = {
  container: (0, import_system23.cva)([
    "bg-bg-surface list-none break-words rounded-[2pxs] border p-0",
    "sm:max-h-[75ch] md:max-h-[75vh] lg:max-h-[45vh]",
    "overflow-y-auto overflow-x-hidden"
  ]),
  item: (0, import_system23.cva)([
    "cursor-pointer p-1 focus:outline-0",
    "hover:text-text-light hover:bg-highlight"
  ]),
  section: (0, import_system23.cva)("text-text-dark px-1 py-4 text-xs font-normal")
};

// src/components/Message.styles.ts
var import_system24 = require("@marigold/system");
var Message = {
  container: (0, import_system24.cva)("bg-bg-surface border border-solid px-4 py-2 text-[13px]", {
    variants: {
      variant: {
        warning: "border-border-warning",
        error: "border-border-error",
        info: "border-border-info"
      }
    }
  }),
  title: (0, import_system24.cva)("font-bold", {
    variants: {
      variant: {
        warning: "text-text-warning",
        error: "text-text-error",
        info: "text-text-info"
      }
    }
  }),
  icon: (0, import_system24.cva)("hidden"),
  content: (0, import_system24.cva)("leading-4", {
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
var import_system25 = require("@marigold/system");
var NumberField = {
  group: (0, import_system25.cva)(),
  stepper: (0, import_system25.cva)()
};

// src/components/Radio.styles.ts
var import_system26 = require("@marigold/system");
var Radio = {
  container: (0, import_system26.cva)("disabled:text-text-disabled "),
  radio: (0, import_system26.cva)([
    "border-border-light bg-white",
    "group-focus/radio:outline-outline-focus group-focus/radio:outline group-focus/radio:outline-offset-[3px]",
    "group-hover/radio:border-border-hover",
    "group-checked/radio:text-text-light group-checked/radio:bg-bg-selected checked:border-border-selected",
    "group-disabled/radio:bg-bg-disabled group-disabled/radio:border-border-disabled"
  ]),
  label: (0, import_system26.cva)()
};

// src/components/Select.styles.ts
var import_system27 = require("@marigold/system");
var Select = {
  select: (0, import_system27.cva)([inputBox, inputHeight, inputSpacing]),
  icon: (0, import_system27.cva)()
};

// src/components/Slider.styles.ts
var import_system28 = require("@marigold/system");
var Slider = {
  track: (0, import_system28.cva)([
    "rounded-lg border-none border-transparent",
    "bg-bg-neutral text-transparent"
  ]),
  thumb: (0, import_system28.cva)([
    "align-middle",
    "border-border-dark rounded-lg border-4 border-solid",
    "h-4 w-4",
    "bg-bg-surface",
    "data-[focus]:border-border-focus",
    "data-[disabled]:bg-bg-disabled-dark data-[disabled]:border-border-disabled"
  ]),
  label: (0, import_system28.cva)("text-text-primary text-base font-normal"),
  output: (0, import_system28.cva)("text-text-primary text-base font-normal")
};

// src/components/Switch.styles.ts
var import_system29 = require("@marigold/system");
var Switch = {
  container: (0, import_system29.cva)(),
  track: (0, import_system29.cva)(
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
  thumb: (0, import_system29.cva)(
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
var import_system30 = require("@marigold/system");
var Table = {
  table: (0, import_system30.cva)("border-collapse", {
    variants: {
      variant: {
        linedTable: ["border-collapse"],
        borderedTable: ["border-collapse"]
      }
    }
  }),
  header: (0, import_system30.cva)(
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
  row: (0, import_system30.cva)([
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
  cell: (0, import_system30.cva)(["text-text-primary p-2", "focus:outline-outline-focus"], {
    variants: {
      variant: {
        borderedTable: ["border-border-neutral border"]
      }
    }
  })
};

// src/components/Tabs.styles.ts
var import_system31 = require("@marigold/system");
var Tabs = {
  container: (0, import_system31.cva)(""),
  tabpanel: (0, import_system31.cva)(""),
  tabs: (0, import_system31.cva)("mb-[10px]"),
  tab: (0, import_system31.cva)(
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
var import_system32 = require("@marigold/system");
var Tag = {
  tag: (0, import_system32.cva)([
    "border-border-primary bg-bg-surface flex items-center rounded border",
    "px-1 py-[2px]"
  ]),
  gridCell: (0, import_system32.cva)("flex items-center gap-1"),
  closeButton: (0, import_system32.cva)(
    "h-4 w-4 cursor-pointer border-none bg-transparent p-0 leading-normal outline-0"
  )
};

// src/components/Text.styles.ts
var import_system33 = require("@marigold/system");
var Text = (0, import_system33.cva)("", {
  variants: {
    variant: {
      bold: ["font-bold"],
      muted: ["text-text-disabled"]
    }
  }
});

// src/components/TextArea.styles.ts
var import_system34 = require("@marigold/system");
var TextArea = (0, import_system34.cva)([
  "border-border-neutral rounded-sm border bg-white",
  "p-0.5",
  "focus:outline-outline-focus -outline-offset-1 focus:outline focus:outline-2",
  "disabled:bg-bg-disabled"
]);

// src/components/Tooltip.styles.ts
var import_system35 = require("@marigold/system");
var Tooltip = {
  container: (0, import_system35.cva)("text-body"),
  arrow: (0, import_system35.cva)("border-solid border-x-transparent border-b-transparent")
};

// src/components/Underlay.styles.ts
var import_system36 = require("@marigold/system");
var Underlay = (0, import_system36.cva)("", {
  variants: {
    variant: {
      modal: ["bg-bg-surface-underlay backdrop-blur-sm"]
    }
  }
});

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
  "font-body text-text-primary bg-bg-body text-[13px]"
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
    500: "#f8ac67",
    600: "#fa8005",
    700: "#a50000",
    800: "#990000",
    900: "#511e04"
  },
  secondary: {
    50: "#ffffff",
    100: "#f7f5f2",
    200: "#e3e3e3",
    300: "#e7e4e0",
    350: "#cfcfcf",
    400: "#cecac3",
    500: "#a9a9a9",
    600: "#8a8782",
    650: "#808080",
    700: "#6f6b64",
    800: "#4b4b4b",
    900: "#3d3d3d"
  }
};
var colors = {
  // Brand
  // ---------------
  brand,
  // Text
  // ---------------
  text: {
    primary: {
      DEFAULT: brand.primary[900],
      light: brand.primary[800]
    },
    dark: "#111",
    light: brand.secondary[50],
    // State
    focus: brand.secondary[50],
    hover: {
      DEFAULT: brand.secondary[50],
      light: brand.secondary[800]
    },
    disabled: "#cccccc",
    // Status
    error: "#f33",
    info: "#008",
    warning: "#d80"
  },
  // Background
  // ---------------
  bg: {
    /**
     * Should be set to either html or body element.
     */
    body: "#f7f5f2",
    surface: {
      /**
       * Use this for e.g. card backgrounds.
       */
      DEFAULT: "#fafaf8",
      /**
       * Use this when you need to separate a specific layer from
       * the surface color, e.g. table headers.
       */
      raised: brand.secondary[500],
      /**
       * Use this when you need to make a specific layer
       * to appear lower than the surface color, e.g. progress bar.
       */
      lowered: "#808080",
      underlay: "rgba(61, 61, 61, .3)"
    },
    primary: {
      DEFAULT: brand.primary[600],
      // Use this hover when a primary background is hovered
      hover: brand.primary[500]
    },
    neutral: brand.secondary[200],
    // State
    focus: "#3875d7",
    hover: {
      DEFAULT: brand.secondary[900],
      light: brand.secondary[100]
    },
    disabled: {
      DEFAULT: brand.secondary[50],
      dark: "#cccccc"
    },
    selected: "#3ab3d5",
    // Status
    info: "#008"
  },
  // Border
  // ---------------
  border: {
    primary: {
      DEFAULT: brand.primary[600],
      // Use this hover when a primary border is hovered
      hover: brand.primary[500]
    },
    dark: "#4b4b4b",
    neutral: "#aaa",
    light: "#cfcfcf",
    white: "#fff",
    // State
    // ---------------
    disabled: "#cccccc",
    selected: "#3ab3d5",
    focus: "#3875d7",
    hover: "#8d8d8d",
    // Status
    error: "#f33",
    info: "#008",
    warning: "#d80"
  },
  // Outline
  // ---------------
  outline: {
    primary: brand.primary[600],
    focus: "#3875d7"
  }
};

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  theme
});
//# sourceMappingURL=index.js.map