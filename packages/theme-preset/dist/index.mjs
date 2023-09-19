// src/create-preset.ts
import deepmerge from "deepmerge";
import plugin from "tailwindcss/plugin";
import { defaultTheme } from "@marigold/system";
var createPreset = (name, config) => deepmerge(
  {
    important: `[data-theme="${name}"]`,
    content: ["./node_modules/@marigold/components/dist/**/*.js"],
    theme: {
      extends: {
        defaultTheme
      }
    },
    plugins: [
      // Grouping
      plugin(({ matchVariant, e }) => {
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
      plugin(({ addVariant }) => {
        addVariant("aria-enabled", ["&:not([aria-disabled=true])"]);
      })
    ]
  },
  config
);
export {
  createPreset
};
//# sourceMappingURL=index.mjs.map