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
  createPreset: () => createPreset
});
module.exports = __toCommonJS(src_exports);

// src/create-preset.ts
var import_deepmerge = __toESM(require("deepmerge"));
var import_plugin = __toESM(require("tailwindcss/plugin"));
var import_system = require("@marigold/system");
var createPreset = (name, config) => (0, import_deepmerge.default)(
  {
    important: `[data-theme="${name}"]`,
    content: ["./node_modules/@marigold/components/dist/**/*.js"],
    theme: {
      extends: {
        defaultTheme: import_system.defaultTheme
      }
    },
    plugins: [
      // Grouping
      (0, import_plugin.default)(({ matchVariant, e }) => {
        matchVariant(
          "group",
          (value, { modifier }) => modifier ? `:merge(.group\\/${e(modifier)})[data-${value}] &` : `:merge(.group)[data-${value}] &`,
          {
            values: {
              focus: "focus",
              hover: "hover",
              error: "error",
              readonly: "read-only",
              required: "required",
              selected: "selected",
              checked: "checked",
              indeterminate: "indeterminate",
              disabled: "disabled",
              placementL: 'placement="left"',
              placementR: 'placement="right"',
              placementT: 'placement="top"',
              placementB: 'placement="bottom"'
            }
          }
        );
        matchVariant(
          "placement",
          (value) => {
            return `&[data-placement=${value}]`;
          },
          {
            values: {
              t: "top",
              r: "right",
              b: "bottom",
              l: "left"
            }
          }
        );
      }),
      // Aria Variants
      (0, import_plugin.default)(({ addVariant }) => {
        addVariant("aria-enabled", ["&:not([aria-disabled=true])"]);
      })
    ]
  },
  config
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPreset
});
//# sourceMappingURL=index.js.map