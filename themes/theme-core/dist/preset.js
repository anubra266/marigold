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

// src/preset.ts
var preset_exports = {};
__export(preset_exports, {
  preset: () => preset
});
module.exports = __toCommonJS(preset_exports);
var import_theme_preset = require("@marigold/theme-preset");

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

// src/preset.ts
var preset = (0, import_theme_preset.createPreset)("core", {
  corePlugins: {
    preflight: false
  },
  content: [
    "./node_modules/@marigold/theme-core/dist/**/*.js",
    "./node_modules/@marigold/system/dist/*.js",
    "./node_modules/@marigold/components/dist/*.js"
  ],
  theme: {
    extend: {
      screens,
      fontFamily: {
        body: "Arial, Helvetica, sans-serif"
      },
      fontSize: {
        body: "13px"
      },
      colors,
      transitionTimingFunction: {
        "ease-out": "ease-out"
      },
      // TODO: Remove gradient
      backgroundImage: {
        highlight: "linear-gradient(#3875d7 20%, #2a62bc 90%)"
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  preset
});
//# sourceMappingURL=preset.js.map