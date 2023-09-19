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
  SVG: () => SVG,
  ThemeProvider: () => ThemeProvider,
  alignment: () => alignment,
  aspect: () => aspect,
  cn: () => cn,
  createVar: () => createVar,
  cursorStyle: () => cursorStyle,
  cva: () => cva,
  defaultTheme: () => defaultTheme,
  fontWeight: () => fontWeight,
  gapSpace: () => gapSpace,
  get: () => get,
  gridColsAlign: () => gridColsAlign,
  gridColumn: () => gridColumn,
  objectFit: () => objectFit,
  objectPosition: () => objectPosition,
  paddingBottom: () => paddingBottom,
  paddingLeft: () => paddingLeft,
  paddingRight: () => paddingRight,
  paddingSpace: () => paddingSpace,
  paddingSpaceX: () => paddingSpaceX,
  paddingSpaceY: () => paddingSpaceY,
  paddingTop: () => paddingTop,
  placeItems: () => placeItems,
  textAlign: () => textAlign,
  textSize: () => textSize,
  textStyle: () => textStyle,
  useClassNames: () => useClassNames,
  useResponsiveValue: () => useResponsiveValue,
  useSmallScreen: () => useSmallScreen,
  useStateProps: () => useStateProps,
  useTheme: () => useTheme,
  width: () => width
});
module.exports = __toCommonJS(src_exports);

// src/components/SVG/SVG.tsx
var import_react = __toESM(require("react"));

// src/utils.ts
var import_class_variance_authority = require("class-variance-authority");
var import_class_variance_authority2 = require("class-variance-authority");
var import_tailwind_merge = require("tailwind-merge");
var cva = (base, config) => {
  function styles(props) {
    return (0, import_tailwind_merge.twMerge)((0, import_class_variance_authority2.cva)(base, config)(props));
  }
  styles.variants = config == null ? void 0 : config.variants;
  return styles;
};
var cn = (...inputs) => (0, import_tailwind_merge.twMerge)((0, import_class_variance_authority.cx)(inputs));
var createVar = (o) => Object.fromEntries(
  Object.entries(o).map(([name, val]) => [`--${name}`, val])
);
var get = (obj, path, fallback) => {
  const key = path.split(".");
  let result = obj;
  for (let i = 0, length = key.length; i < length; i++) {
    if (!result)
      break;
    result = result[key[i]];
  }
  return result === void 0 ? fallback : result;
};

// src/components/SVG/SVG.tsx
var SVG = (0, import_react.forwardRef)(
  ({ size = 24, children, className, ...props }, ref) => /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      ...props,
      ref,
      width: `${props.width || size}px`,
      height: `${props.height || size}px`,
      className: cn("flex-none fill-current", className)
    },
    children
  )
);

// src/hooks/useTheme.tsx
var import_react2 = __toESM(require("react"));

// src/defaultTheme.ts
var defaultTheme = {
  name: "default",
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  components: {}
};

// src/hooks/useTheme.tsx
var InternalContext = (0, import_react2.createContext)(defaultTheme);
var useTheme = () => {
  const theme = (0, import_react2.useContext)(InternalContext);
  return theme;
};
function ThemeProvider({
  theme,
  children
}) {
  var _a, _b;
  return /* @__PURE__ */ import_react2.default.createElement("div", { "data-theme": theme.name, className: (_b = (_a = theme.root) == null ? void 0 : _a.call(theme)) != null ? _b : "" }, /* @__PURE__ */ import_react2.default.createElement(InternalContext.Provider, { value: theme }, children));
}

// src/hooks/useClassNames.tsx
var useClassNames = ({
  component,
  className,
  variant,
  size
}) => {
  const theme = useTheme();
  const styles = theme.components[component];
  if (!styles) {
    throw new Error(
      `Component "${component}" is missing styles in the current theme.`
    );
  }
  if (typeof styles === "function") {
    if (className !== void 0 && typeof className !== "string") {
      throw new Error(
        '"className" must be a string, when using a component without slots'
      );
    }
    return cn(styles({ variant, size, className }));
  }
  if (className !== void 0 && typeof className !== "object") {
    throw new Error(
      '"className" must be a object, when using a component with slots'
    );
  }
  return Object.fromEntries(
    Object.entries(styles).map(([slot, style]) => {
      return [
        slot,
        cn(
          style({
            variant,
            size,
            className: className && className[slot]
          })
        )
      ];
    })
  );
};

// src/hooks/useResponsiveValue.ts
var import_react3 = require("react");
var useResponsiveValue = (values, defaultIndex = 0) => {
  const theme = useTheme();
  const screens = theme.screens || defaultTheme.screens;
  if (defaultIndex < 0 || defaultIndex >= Object.keys(screens).length + 1) {
    throw new RangeError(
      `Default breakpoint index is out of bounds. Theme has ${Object.keys(screens).length + 1} breakpoints, default is ${defaultIndex}.`
    );
  }
  const [index, setIndex] = (0, import_react3.useState)(defaultIndex);
  (0, import_react3.useEffect)(() => {
    if (typeof window == "undefined")
      return;
    const getIndex = () => Object.values(screens).filter(
      (breakpoint) => window.matchMedia(`screen and (min-width: ${breakpoint})`).matches
    ).length;
    const handleResize = () => {
      const newIndex = getIndex();
      if (index !== newIndex) {
        setIndex(newIndex);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screens, index]);
  return values[index >= values.length ? values.length - 1 : index];
};

// src/hooks/useStateProps.ts
var import_react4 = require("react");
var import_react_fast_compare = __toESM(require("react-fast-compare"));
var KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
var toKebap = (val) => val.replace(KEBAB_REGEX, (match) => `-${match.toLocaleLowerCase()}`);
var useStateProps = (states) => {
  const statePropsRef = (0, import_react4.useRef)({});
  let stateProps = {};
  for (let state in states) {
    if (states[state]) {
      const key = `data-${toKebap(state)}`;
      stateProps[key] = "";
    }
  }
  if (!(0, import_react_fast_compare.default)(statePropsRef.current, stateProps)) {
    statePropsRef.current = stateProps;
  }
  return statePropsRef.current;
};

// src/hooks/useSmallScreen.ts
var import_react5 = require("react");
var useSmallScreen = () => {
  const getMatches = () => {
    if (typeof window == "undefined") {
      return false;
    }
    return window.matchMedia("(max-width: 600px)").matches;
  };
  const [matches, setMatches] = (0, import_react5.useState)(getMatches());
  const handleResize = (0, import_react5.useCallback)(() => {
    setMatches(getMatches());
  }, []);
  (0, import_react5.useEffect)(() => {
    handleResize();
    if (typeof window == "undefined")
      return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return matches;
};

// src/style-props.tsx
var width = {
  full: "w-full",
  auto: "w-auto",
  px: "w-px",
  0: "w-0",
  "0.5": "w-0.5",
  1: "w-1",
  "1.5": "w-1.5",
  2: "w-2",
  "2.5": "w-2.5",
  3: "w-3",
  "3.5": "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "3/6": "w-3/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "6/12": "w-6/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12"
};
var fontWeight = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black"
};
var textSize = {
  xs: "text-[13px]",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
};
var textStyle = {
  italic: "italic",
  normal: "not-italic"
};
var gapSpace = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
  20: "gap-20",
  24: "gap-24",
  28: "gap-28",
  32: "gap-32",
  36: "gap-36",
  40: "gap-40",
  44: "gap-44",
  48: "gap-48",
  52: "gap-52",
  56: "gap-56",
  60: "gap-60",
  64: "gap-64",
  72: "gap-72",
  80: "gap-80",
  96: "gap-96"
};
var paddingSpace = {
  0: "p-0",
  1: "p-1",
  2: "p-2",
  3: "p-3",
  4: "p-4",
  5: "p-5",
  6: "p-6",
  7: "p-7",
  8: "p-8",
  9: "p-9",
  10: "p-10",
  11: "p-11",
  12: "p-12",
  14: "p-14",
  16: "p-16",
  20: "p-20",
  24: "p-24",
  28: "p-28",
  32: "p-32",
  36: "p-36",
  40: "p-40",
  44: "p-44",
  48: "p-48",
  52: "p-52",
  56: "p-56",
  60: "p-60",
  64: "p-64",
  72: "p-72",
  80: "p-80",
  96: "p-96"
};
var paddingSpaceX = {
  0: "px-0",
  1: "px-1",
  2: "px-2",
  3: "px-3",
  4: "px-4",
  5: "px-5",
  6: "px-6",
  7: "px-7",
  8: "px-8",
  9: "px-9",
  10: "px-10",
  11: "px-11",
  12: "px-12",
  14: "px-14",
  16: "px-16",
  20: "px-20",
  24: "px-24",
  28: "px-28",
  32: "px-32",
  36: "px-36",
  40: "px-40",
  44: "px-44",
  48: "px-48",
  52: "px-52",
  56: "px-56",
  60: "px-60",
  64: "px-64",
  72: "px-72",
  80: "px-80",
  96: "px-96"
};
var paddingSpaceY = {
  0: "py-0",
  1: "py-1",
  2: "py-2",
  3: "py-3",
  4: "py-4",
  5: "py-5",
  6: "py-6",
  7: "py-7",
  8: "py-8",
  9: "py-9",
  10: "py-10",
  11: "py-11",
  12: "py-12",
  14: "py-14",
  16: "py-16",
  20: "py-20",
  24: "py-24",
  28: "py-28",
  32: "py-32",
  36: "py-36",
  40: "py-40",
  44: "py-44",
  48: "py-48",
  52: "py-52",
  56: "py-56",
  60: "py-60",
  64: "py-64",
  72: "py-72",
  80: "py-80",
  96: "py-96"
};
var paddingRight = {
  0: "pr-0",
  1: "pr-1",
  2: "pr-2",
  3: "pr-3",
  4: "pr-4",
  5: "pr-5",
  6: "pr-6",
  7: "pr-7",
  8: "pr-8",
  9: "pr-9",
  10: "pr-10",
  11: "pr-11",
  12: "pr-12",
  14: "pr-14",
  16: "pr-16",
  20: "pr-20",
  24: "pr-24",
  28: "pr-28",
  32: "pr-32",
  36: "pr-36",
  40: "pr-40",
  44: "pr-44",
  48: "pr-48",
  52: "pr-52",
  56: "pr-56",
  60: "pr-60",
  64: "pr-64",
  72: "pr-72",
  80: "pr-80",
  96: "pr-96"
};
var paddingLeft = {
  0: "pl-0",
  1: "pl-1",
  2: "pl-2",
  3: "pl-3",
  4: "pl-4",
  5: "pl-5",
  6: "pl-6",
  7: "pl-7",
  8: "pl-8",
  9: "pl-9",
  10: "pl-10",
  11: "pl-11",
  12: "pl-12",
  14: "pl-14",
  16: "pl-16",
  20: "pl-20",
  24: "pl-24",
  28: "pl-28",
  32: "pl-32",
  36: "pl-36",
  40: "pl-40",
  44: "pl-44",
  48: "pl-48",
  52: "pl-52",
  56: "pl-56",
  60: "pl-60",
  64: "pl-64",
  72: "pl-72",
  80: "pl-80",
  96: "pl-96"
};
var paddingTop = {
  0: "pt-0",
  1: "pt-1",
  2: "pt-2",
  3: "pt-3",
  4: "pt-4",
  5: "pt-5",
  6: "pt-6",
  7: "pt-7",
  8: "pt-8",
  9: "pt-9",
  10: "pt-10",
  11: "pt-11",
  12: "pt-12",
  14: "pt-14",
  16: "pt-16",
  20: "pt-20",
  24: "pt-24",
  28: "pt-28",
  32: "pt-32",
  36: "pt-36",
  40: "pt-40",
  44: "pt-44",
  48: "pt-48",
  52: "pt-52",
  56: "pt-56",
  60: "pt-60",
  64: "pt-64",
  72: "pt-72",
  80: "pt-80",
  96: "pt-96"
};
var paddingBottom = {
  0: "pb-0",
  1: "pb-1",
  2: "pb-2",
  3: "pb-3",
  4: "pb-4",
  5: "pb-5",
  6: "pb-6",
  7: "pb-7",
  8: "pb-8",
  9: "pb-9",
  10: "pb-10",
  11: "pb-11",
  12: "pb-12",
  14: "pb-14",
  16: "pb-16",
  20: "pb-20",
  24: "pb-24",
  28: "pb-28",
  32: "pb-32",
  36: "pb-36",
  40: "pb-40",
  44: "pb-44",
  48: "pb-48",
  52: "pb-52",
  56: "pb-56",
  60: "pb-60",
  64: "pb-64",
  72: "pb-72",
  80: "pb-80",
  96: "pb-96"
};
var alignment = {
  vertical: {
    alignmentX: {
      none: void 0,
      left: "items-start",
      center: "items-center",
      right: "items-end"
    },
    alignmentY: {
      none: void 0,
      top: "justify-start",
      center: "justify-center",
      bottom: "justify-end"
    }
  },
  horizontal: {
    alignmentY: {
      none: void 0,
      top: "items-start",
      center: "items-center",
      bottom: "items-end"
    },
    alignmentX: {
      none: void 0,
      left: "justify-start",
      center: "justify-center",
      right: "justify-end"
    }
  }
};
var placeItems = {
  none: void 0,
  left: "place-items-start",
  center: "place-items-center",
  right: "place-items-end"
};
var textAlign = {
  none: void 0,
  left: "text-left",
  center: "text-center",
  right: "text-right"
};
var gridColsAlign = {
  left: "grid-cols-[minmax(0,_var(--maxWidth))_1fr_1fr]",
  center: "grid-cols-[1fr_minmax(0,_var(--maxWidth))_1fr]",
  right: " grid-cols-[1fr_1fr_minmax(0,_var(--maxWidth))]"
};
var gridColumn = {
  left: "[&>*]:col-[1]",
  center: "[&>*]:col-[2]",
  right: "[&>*]:col-[3]"
};
var aspect = {
  square: "aspect-[1]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  widescreen: "aspect-[16/9]",
  ultrawide: "aspect-[18/5]",
  golden: "aspect-[1.6180/1]"
};
var objectFit = {
  contain: "object-contain",
  cover: "object-cover",
  fill: "object-fill",
  none: "unset",
  scaleDown: "object-scale-down"
};
var objectPosition = {
  none: void 0,
  bottom: "object-bottom",
  center: "object-center",
  left: "object-left",
  leftBottom: "object-left-bottom",
  leftTop: "object-left-top",
  right: "object-right",
  rightBottom: "object-right-bottom",
  rightTop: "object-right-top",
  top: "object-top"
};
var cursorStyle = {
  auto: "cursor-auto",
  default: "cursor-default",
  pointer: "cursor-pointer",
  wait: "cursor-wait",
  text: "cursor-text",
  move: "cursor-move",
  help: "cursor-help",
  notAllowed: "cursor-not-allowed",
  none: "cursor-none",
  progress: "cursor-progress",
  cell: "cursor-cell",
  crosshair: "cursor-crosshair",
  vertical: "cursor-vertical-text",
  alias: "cursor-alias",
  copy: "cursor-copy",
  noDrop: "cursor-no-drop",
  grap: "cursor-grab",
  grapping: "cursor-grapping",
  scroll: "cursor-all-scroll",
  colResize: "cursor-col-resize",
  rowResize: "cursor-row-resize",
  ewResize: "cursor-ew-resize",
  nsResize: "cursor-ns-resize",
  zoomIn: "cursor-zoom-in",
  zoomOut: "cursor-zoom-out"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SVG,
  ThemeProvider,
  alignment,
  aspect,
  cn,
  createVar,
  cursorStyle,
  cva,
  defaultTheme,
  fontWeight,
  gapSpace,
  get,
  gridColsAlign,
  gridColumn,
  objectFit,
  objectPosition,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingSpace,
  paddingSpaceX,
  paddingSpaceY,
  paddingTop,
  placeItems,
  textAlign,
  textSize,
  textStyle,
  useClassNames,
  useResponsiveValue,
  useSmallScreen,
  useStateProps,
  useTheme,
  width
});
