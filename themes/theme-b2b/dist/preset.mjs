import {
  colors,
  screens
} from "./chunk-YOYN7FV6.mjs";

// src/preset.ts
import { createPreset } from "@marigold/theme-preset";
var preset = createPreset("b2b", {
  content: [
    "./node_modules/@marigold/theme-b2b/dist/*.js",
    "./node_modules/@marigold/system/dist/*.js",
    "./node_modules/@marigold/components/dist/*.js"
  ],
  theme: {
    extend: {
      screens,
      fontFamily: {
        body: ["Inter, sans-serif"],
        heading: ['"Inter Black, sans-serif"']
      },
      colors,
      transitionTimingFunction: {
        "ease-out": "ease-out"
      }
    }
  }
});
export {
  preset
};
//# sourceMappingURL=preset.mjs.map