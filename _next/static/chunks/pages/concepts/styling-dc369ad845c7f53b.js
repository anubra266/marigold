(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3672],{6769:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts/styling",function(){return o(8712)}])},8712:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return r},title:function(){return i}});var s=o(5250),t=o(7160),r=!0,i="Styling";function l(e){var n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",em:"em",code:"code",h3:"h3",pre:"pre"},(0,t.ah)(),e.components),o=n.Toc,r=n.Table,i=n.Preview,l=n.TokensDemo,d=n.SimpleStyling;return i||a("Preview",!0),d||a("SimpleStyling",!0),r||a("Table",!0),r.Body||a("Table.Body",!0),r.Cell||a("Table.Cell",!0),r.Column||a("Table.Column",!0),r.Header||a("Table.Header",!0),r.Row||a("Table.Row",!0),o||a("Toc",!0),l||a("TokensDemo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{selector:"#toc",items:'[{"anchor":"#theme-specification","title":"Theme Specification"},{"anchor":"#tokens","title":"Tokens"},{"anchor":"#breakpoints","title":"Breakpoints"},{"anchor":"#root-styles","title":"Root (Styles)"},{"anchor":"#component-styles","title":"Component Styles"},{"anchor":"#responsive-styles","title":"Responsive Styles"},{"anchor":"#styling-components","title":"Styling Components"},{"anchor":"#using-the-usecomponentstyles-hook","title":"Using the \\"useComponentStyles\\" hook"}]'}),"\n",(0,s.jsx)(n.p,{children:"Marigold strictly separates the logic of components from their appearance. By default, every component comes with only basic styling that mostly serves to normalize the appearance between browsers. The main concern of a component is to manage its logic and accessibility features associated with its use case."}),"\n",(0,s.jsx)(n.p,{children:'To give components a certain appearance, we use what are called "themes." Themes are the other half of the equation, as they contain all design tokens and define which styles are applied to a certain component.'}),"\n",(0,s.jsx)(n.p,{children:"This separation enables styling of components to extend beyond just changing design tokens. With Marigold themes, full control over the CSS of each component is allowed, enabling them to be perfectly adjusted and fitted to a corporate identity."}),"\n",(0,s.jsxs)(n.p,{children:["The upcoming sections will explain how themes are constructed, and how design tokens can be used to style components. To learn more about how to apply an existing theme in Marigold, visit the ",(0,s.jsx)(n.a,{href:"/introduction/theming/",children:"theming page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"theme-specification",children:(0,s.jsx)(n.a,{href:"#theme-specification",children:"Theme Specification"})}),"\n",(0,s.jsxs)(n.p,{children:["Marigold's themes are based on the ",(0,s.jsx)(n.a,{href:"https://styled-system.com/theme-specification/",children:"Styled System Theme Specification"}),". This ensures that themes created for Marigold are suitable for white-label applications and general-purpose theming."]}),"\n",(0,s.jsx)(n.p,{children:"The theme is represented as a plain object (JSON) and consists of the following data types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Tokens:"})," plain objects or arrays of values that for related CSS properties"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Breakpoints:"})," array of values (preferably using the ",(0,s.jsx)(n.code,{children:"em"})," unit) that define the breakpoints for responsvie style values"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Root:"})," plain object that contains styles with are applied to the root of an app using Marigold"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Component styles:"})," a collection of styles for each Marigold component"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tokens",children:(0,s.jsx)(n.a,{href:"#tokens",children:"Tokens"})}),"\n",(0,s.jsx)(n.p,{children:"The theme object is made up of the following tokens (i.e. property-specific objects) for use in CSS styles."}),"\n",(0,s.jsxs)(r,{variant:"lines","aria-label":"List of theme tokens",children:[(0,s.jsxs)(r.Header,{children:[(0,s.jsx)(r.Column,{children:"Token Name"}),(0,s.jsx)(r.Column,{children:"CSS Properties"})]}),(0,s.jsxs)(r.Body,{children:[(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"colors"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"color, background, background-color, border-color, caret-color,\ncolumn-rule-color, outline-color, text-decoration-color,\nborder-top-color, border-bottom-color, border-left-color,\nborder-right-color, border-block-color, border-block-end-color,\nborder-block-start-color, border-inline-color, border-inline-end-color,\nborder-inline-start-color, fill, stroke"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"space"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"margin, margin-top, margin-right, margin-bottom, margin-left,\nmargin-block, margin-block-end, margin-block-start, margin-inline,\nmargin-inline-end, margin-inline-start, padding, padding-top,\npadding-right, padding-bottom, padding-left, padding-block,\npadding-block-end, padding-block-start, padding-inline,\npadding-inline-end, padding-inline-start, scroll-margin,\nscroll-margin-top, scroll-margin-right, scroll-margin-bottom,\nscroll-margin-left, scroll-padding, scroll-padding-top,\nscroll-padding-right, scroll-padding-bottom, scroll-padding-left, inset,\ninset-block, inset-block-end, inset-block-start, inset-inline,\ninset-inline-end, inset-inline-start, top, right, bottom, left,\ngrid-gap, grid-column-gap, grid-row-gap, gap, column-gap, row-gap"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"fonts"})}),(0,s.jsx)(r.Cell,{children:"font-family"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"fontSizes"})}),(0,s.jsx)(r.Cell,{children:"font-size"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"fontWeights"})}),(0,s.jsx)(r.Cell,{children:"font-weight"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"letterSpacings"})}),(0,s.jsx)(r.Cell,{children:"letter-spacing"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"lineHeights"})}),(0,s.jsx)(r.Cell,{children:"line-height"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"sizes"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"width, min-width, max-width, height, min-height, max-height, flex-basis,\nblock-size, inline-size, max-block-size, max-inline-size,\nmin-block-size, min-inline-size, column-width"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"borders"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"border, border-top, border-right, border-bottom, border-left,\nborder-block, border-block-end, border-block-start, border-inline,\nborder-inline-end, border-inline-start"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"borderStyles"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"border-style, border-top-style, border-bottom-style, border-left-style,\nborder-right-style, border-block-end-style, border-block-start-style,\nborder-block-style, border-inline-end-style, border-inline-start-style,\nborder-inline-style"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"borderWidths"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"border-width, border-top-width, border-bottom-width, border-left-width,\nborder-right-width, border-block-end-width, border-block-start-width,\nborder-block-width, border-inline-end-width, border-inline-start-width,\nborder-inline-width, column-rule-width"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"radii"})}),(0,s.jsx)(r.Cell,{children:(0,s.jsx)(n.p,{children:"border-radius, border-top-right-radius, border-top-left-radius,\nborder-bottom-right-radius, border-bottom-left-radius,\nborder-end-end-radius, border-end-start-radius, border-start-end-radius,\nborder-start-start-radius"})})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"shadows"})}),(0,s.jsx)(r.Cell,{children:"box-shadow, text-shadow"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"zIndices"})}),(0,s.jsx)(r.Cell,{children:"z-index"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"opacities"})}),(0,s.jsx)(r.Cell,{children:"opacity"})]}),(0,s.jsxs)(r.Row,{children:[(0,s.jsx)(r.Cell,{children:(0,s.jsx)("strong",{children:"transitions"})}),(0,s.jsx)(r.Cell,{children:"transition"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Tokens should be preferred when writing CSS styles. Below you can see how tokens from a theme are used to style a component. The ",(0,s.jsx)(n.code,{children:"<Box>"})," uses the token values and Marigold will take care to replace the tokens with their corresponding value."]}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)(l,{})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  Aside,\n  Box,\n  Inset,\n  MarigoldProvider,\n  Radio,\n} from '@marigold/components';\n\nexport const TokensDemo = () => {\n  const theme = {\n    colors: {\n      red: '#f87171',\n      blue: '#93c5fd',\n      green: '#86efac',\n    },\n    space: {\n      none: 0,\n      small: 8,\n      large: 32,\n    },\n    sizes: {\n      none: 0,\n      medium: 120,\n      large: 240,\n    },\n    radii: {\n      none: 0,\n      medium: 20,\n    },\n  };\n\n  const [currentColor, setColor] = useState(theme.colors.blue);\n\n  return (\n    <Aside space=\"small\" sideWidth=\"10em\">\n      <Radio.Group\n        label=\"Select Background:\"\n        value={currentColor}\n        onChange={setColor}\n      >\n        {Object.entries(theme.colors).map(([color, value]) => (\n          <Radio key={value} value={value}>\n            {color}\n          </Radio>\n        ))}\n      </Radio.Group>\n      <Inset space=\"none\">\n        <MarigoldProvider theme={theme} selector=\"#token-demo\">\n          <Box\n            css={{\n              background: currentColor,\n              width: 'large',\n              height: 'medium',\n              borderRadius: 'medium',\n            }}\n          />\n        </MarigoldProvider>\n      </Inset>\n    </Aside>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"breakpoints",children:(0,s.jsx)(n.a,{href:"#breakpoints",children:"Breakpoints"})}),"\n",(0,s.jsxs)(n.p,{children:["Breakpoints can be used to apply ",(0,s.jsx)(n.a,{href:"#responsive-styles",children:"responsive styles"}),". Each breakpoint should be a string that includes a CSS length unit, or a string that includes a CSS media query. String values that include a CSS length unit will be used to generate a mobile-first media query (i.e. a ",(0,s.jsx)(n.code,{children:"min-width"})," media query)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const theme = {\n  breakpoints: [\n    '40em',\n    '@media (min-width: 56em) and (orientation: landscape)',\n    '64em',\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"root-styles",children:(0,s.jsx)(n.a,{href:"#root-styles",children:"Root (Styles)"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"root"})," property of the theme object can be used when global styles have to be applied, including normalization of ",(0,s.jsx)(n.code,{children:"body"})," and ",(0,s.jsx)(n.code,{children:"html"}),". Styles can use tokens from the theme and arbitrary CSS selectors can be used."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const theme = {\n  colors: {\n    background: '#e2e8f0',\n    text: '#0f172a',\n  },\n  fonts: {\n    body: ' ui-sans-serif, system-ui, \"Segoe UI\", Roboto, Arial, sans-serif',\n  },\n  root: {\n    body: {\n      margin: 0,\n      padding: 0,\n      fontFamily: 'body',\n      color: 'text',\n      bg: 'background',\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"component-styles",children:(0,s.jsx)(n.a,{href:"#component-styles",children:"Component Styles"})}),"\n",(0,s.jsxs)(n.p,{children:["Writing component styles in a maintainable way, especially over the life of a growing and changing project is a challenging task. To adress this, we use a approach inspired by ",(0,s.jsx)(n.a,{href:"https://chakra-ui.com/",children:"Chakra UI"})," that allows us to use a consistent API to describe component styling, while beeing easy to understand and maintain."]}),"\n",(0,s.jsx)(n.p,{children:"Each component style consists of the following sections:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"base"}),": a default style for the component that is always applied"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variant"}),": a component can have different visual appearances (e.g. primary, secondary, ...) that will override the ",(0,s.jsx)(n.code,{children:"base"})," styles"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"size"}),": a component can have differenz sizes (e.g. small, medium, large) that will override the ",(0,s.jsx)(n.code,{children:"base"})," styles"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Some components only consist of one functional unit to fulfill their purpose. For example, to create a button you only need a ",(0,s.jsx)(n.code,{children:"<button>"})," element. However, there are component that are composed of multiple parts. Using a cell (",(0,s.jsx)(n.code,{children:"<td>"}),") outside of a table (",(0,s.jsx)(n.code,{children:"<table>"}),") does neither make any sense nor is it valid HTML."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Button>Click me!</Button>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Table>\n  <Table.Header>\n    <Table.Column>Name</Table.Column>\n    <Table.Column>Firstname</Table.Column>\n  </Table.Header>\n  <Table.Body>\n    <Table.Row>\n      <Table.Cell>Potter</Table.Cell>\n      <Table.Cell>Harry</Table.Cell>\n    </Table.Row>\n    <Table.Row>\n      <Table.Cell>Malfoy</Table.Cell>\n      <Table.Cell>Draco</Table.Cell>\n    </Table.Row>\n  </Table.Body>\n</Table>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This means that even ",(0,s.jsx)(n.a,{href:"https://atomicdesign.bradfrost.com/chapter-2",children:"atomic components"})," can be made up of multiple (smaller) parts. An atom only describes the smallest possible functional unit that can not be broken down further without losing its meaning. In React this is commonly referred to as a composite component. For this reason, Marigold's component styles allow to specify the appearance of each part inside the ",(0,s.jsx)(n.code,{children:"base"}),", ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"})," sections."]}),"\n",(0,s.jsxs)(n.p,{children:['The full breakdown of how styling a component works and how they work together with themes, can be found in the "',(0,s.jsx)(n.a,{href:"#theming-components",children:"Theming Components"}),'" section down below.']}),"\n",(0,s.jsx)(n.h2,{id:"responsive-styles",children:(0,s.jsx)(n.a,{href:"#responsive-styles",children:"Responsive Styles"})}),"\n",(0,s.jsx)(n.p,{children:"Marigold, like Styled System, includes a shorthand syntax for writing mobile-first responsive styles using arrays as values. This is useful when you want to change a single property across multiple breakpoints without needing to write verbose media query syntax. Responsive styles can be used whenever you specify a CSS rule and, of course, tokens can be used too."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Component"})," in the following example uses responsive styles for its ",(0,s.jsx)(n.code,{children:"width"}),". With responsive arrays, the 0-th element maps to all breakpoints, and the n-th element maps to the (n - 1)-th breakpoint. This means:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The default width is 100%"}),"\n",(0,s.jsxs)(n.li,{children:["At the 0th breakpoint & larger, width is ",(0,s.jsx)(n.code,{children:"large"})," (",(0,s.jsx)(n.code,{children:"theme.sizes.large"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["At the 1st breakpoint & larger, width is ",(0,s.jsx)(n.code,{children:"small"})," (",(0,s.jsx)(n.code,{children:"theme.sizes.small"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"export const Component = () => (\n  <Box\n    css={{\n      width: ['100%', 'large', 'small'],\n    }}\n  >\n    I am a reposnsive Box!\n  </Box>\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to skip a breakpoint, you can use ",(0,s.jsx)(n.code,{children:"null"})," as placeholder value. This is useful if you want to set a value for only the largest breakpoint, for example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"export const Component = () => (\n  <Box\n    css={{\n      width: ['100%', null, 'small'],\n    }}\n  >\n    I am a reposnsive Box!\n  </Box>\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"styling-components",children:(0,s.jsx)(n.a,{href:"#styling-components",children:"Styling Components"})}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned before, Marigold uses a specific format to define the appearancesce of components. It consists of the ",(0,s.jsx)(n.code,{children:"base"}),", ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"})," (see ",(0,s.jsx)(n.a,{href:"#component-styles",children:"Component Styles"}),"). The most basic API for styling a component looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Single part styles for a <Button>\nexport const Button = {\n  // Styles for the default appearance\n  base: {},\n  // Styles for the visual style variations\n  variant: {},\n  // Styles for the size variations\n  size: {},\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Following this format you can style Marigold's component (with the exception of ",(0,s.jsx)(n.a,{href:"/concepts/layouts/",children:"layout components"}),"). Styles will be scoped to the component. They will not leak into any other component."]}),"\n",(0,s.jsxs)(n.p,{children:["As you can see in the following example styling the ",(0,s.jsx)(n.code,{children:"<Button>"})," component, the ",(0,s.jsx)(n.code,{children:"base"})," styles are always applied. ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"})," can be added via the corresponding props of the ",(0,s.jsx)(n.code,{children:"<Button>"}),". Adding these two props is optional, since every component has at least one base appearance."]}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)(d,{})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport {\n  Button,\n  Center,\n  Columns,\n  MarigoldProvider,\n  Radio,\n  Stack,\n} from '@marigold/components';\n\nexport const SimpleStyling = () => {\n  const theme = {\n    colors: {\n      primary: '#93c5fd',\n      secondary: '#bfdbfe',\n      ghost: '#e2e8f0',\n      text: '#1c1917',\n    },\n    space: {\n      none: 0,\n      small: 8,\n      medium: 16,\n      large: 32,\n    },\n    radii: {\n      none: 0,\n      button: 20,\n    },\n    components: {\n      Button: {\n        base: {\n          color: 'text',\n          bg: 'ghost', // <-- bg is a shorthand for background\n          borderRadius: 'button',\n          // These values should usually also use tokens!\n          fontSize: 14,\n          fontWeight: 'bold',\n          textTransform: 'uppercase',\n          border: 'none',\n        },\n        variant: {\n          primary: {\n            bg: 'primary',\n          },\n          secondary: {\n            bg: 'secondary',\n          },\n        },\n        size: {\n          regular: {\n            py: 'small', // <-- py is a shorthand for paddingTop + paddintBottom\n            px: 'medium', // <-- px is a shorthand for paddingLeft + paddintRight\n          },\n          large: {\n            py: 'medium', // <-- py is a shorthand for paddingTop + paddintBottom\n            px: 'large', // <-- px is a shorthand for paddingLeft + paddintRight\n          },\n        },\n      },\n    },\n  };\n\n  const [variant, setVariant] = useState('');\n  const [size, setSize] = useState('regular');\n\n  return (\n    <Columns columns={[1, 1, 1]} collapseAt=\"25em\">\n      <Radio.Group\n        label=\"Select Variant:\"\n        value={variant}\n        onChange={setVariant}\n      >\n        <Radio value=\"\">none</Radio>\n        <Radio value=\"primary\">primary</Radio>\n        <Radio value=\"secondary\">secondary</Radio>\n      </Radio.Group>\n      <Radio.Group label=\"Select Size:\" value={size} onChange={setSize}>\n        <Radio value=\"regular\">regular</Radio>\n        <Radio value=\"large\">large</Radio>\n      </Radio.Group>\n      <Stack alignY=\"center\" stretch>\n        <Center>\n          <MarigoldProvider theme={theme} selector=\"#simple-styling-demo\">\n            <Button variant={variant} size={size}>\n              Submit\n            </Button>\n          </MarigoldProvider>\n        </Center>\n      </Stack>\n    </Columns>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"There are components which are more complex than a button, a table for example. They consist of more than one part. Every table has cells, rows, a body for example. With some additional parts like a header."}),"\n",(0,s.jsxs)(n.p,{children:["Marigold's styling solution also allows to handle styling of complex component, which internally have more than one part. Similar to a single part component, the format uses ",(0,s.jsx)(n.code,{children:"base"}),", ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"}),". The parts of a component (",(0,s.jsx)(n.code,{children:"header"}),", ",(0,s.jsx)(n.code,{children:"row"}),", ",(0,s.jsx)(n.code,{children:"cell"}),") are the child props of ",(0,s.jsx)(n.code,{children:"base"}),", ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"}),". Styling is then applied like with a single component. The parts will always have their base style and in addition, can have a ",(0,s.jsx)(n.code,{children:"variant"})," and/or a ",(0,s.jsx)(n.code,{children:"size"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"variant"})," and ",(0,s.jsx)(n.code,{children:"size"})," props are usually added on the top most component (",(0,s.jsx)(n.code,{children:"<Table>"}),") and will then be passed down to their children. For example, if you want collapsed rows add the variant to the table, ",(0,s.jsx)(n.code,{children:'<Table variant="collapse">'}),". These composite components usually share variants and sizes between parts so that the different parts work well together."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// Single multi part styles for a <Table>\nexport const Table = {\n  // Styles for the default appearance\n  base: {\n    // <Table.Header>\n    header: {},\n    // <Table.Row>\n    row: {},\n    // <Table.Cell>\n    cell: {},\n  },\n  // Styles for the visual style variations\n  variant: {\n    head: {},\n    row: {},\n    cell: {\n      // <Table.Cell variant="collapsed">\n      collapsed: {},\n    },\n  },\n  // Styles for the size variations\n  size: {\n    head: {\n      // <Table.Header size="large">\n      large: {},\n    },\n    row: {},\n    cell: {},\n  },\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-the-usecomponentstyles-hook",children:(0,s.jsx)(n.a,{href:"#using-the-usecomponentstyles-hook",children:'Using the "useComponentStyles" hook'})}),"\n",(0,s.jsxs)(n.p,{children:["Since we use a unified API, Marigold has a hook to simplify the consumption and application of component styles called ",(0,s.jsx)(n.code,{children:"useComponentStyles"}),". Passing in the component name, variant and size will return the computed styles for the specified component. For applying the styles the ",(0,s.jsx)(n.code,{children:"<Box>"})," in conjunction with its ",(0,s.jsx)(n.code,{children:"css"})," prop can be used."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { ReactNode } from 'react';\nimport { Box, useComponentStyles } from '@marigold/system';\n\ninterface CardProps {\n  variant?: string;\n  size?: string;\n  children?: ReactNode;\n}\n\nconst Card = ({ variant, size, children }: CardProps) => {\n  // Get styles for a component based on component name, variant + size.\n  const styles = useComponentStyles('Card', { variant, size });\n  // Pass the computed styles into the `css` prop\n  return <Box css={styles}>{children}</Box>;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Components with multiple parts can be handled by the ",(0,s.jsx)(n.code,{children:"useComponentStyles"})," too. Parts can be specified in the third parameter, like shown in the example below. Insteas of a single styles object, the ",(0,s.jsx)(n.code,{children:"useComponentStyles"})," hook will return an object with all parts which then can be passed to the composite component parts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"/**\n *  styles = {\n *    table: CSSObject,\n *    header: CSSObject,\n *    row: CSSObject,\n *    cell: CSSObject,\n *  }\n */\nconst styles = useComponentStyles(\n  'Card',\n  { variant, size },\n  { parts: ['table', 'header', 'row', 'cell'] }\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generating these styles once will lead to less runtime overhead. They can be passed down via context or prop drilling."})]})}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),o=n.wrapper;return o?(0,s.jsx)(o,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=6769,e(e.s=n);var n}));var n=e.O();_N_E=n}]);