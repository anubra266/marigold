(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{7864:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return i(2933)}])},2933:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return o},title:function(){return s}});var r=i(5250),t=i(8570),o=!0,s="Divider";function a(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,t.ah)(),e.components),i=n.Toc,o=n.Preview,a=n.DividerText,c=n.AppearanceTable,h=n.PropsTable,l=n.DividerSection,p=n.DividerBold;return c||d("AppearanceTable",!0),p||d("DividerBold",!0),l||d("DividerSection",!0),a||d("DividerText",!0),o||d("Preview",!0),h||d("PropsTable",!0),i||d("Toc",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#appearance","title":"Appearance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#divider-between-text","title":"Divider between Text"},{"anchor":"#section-divider-variant","title":"Section Divider variant"},{"anchor":"#bold-divider-variant","title":"Bold Divider variant"}]'}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"<Divider>"})," is a visual separator between two groups of content,\ne.g. groups of menu items or sections of a page."]}),"\n",(0,r.jsxs)(n.p,{children:["It has two specific variants given, ",(0,r.jsx)(n.code,{children:"bold"})," and ",(0,r.jsx)(n.code,{children:"section"}),". You can view some examples further down the page."]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(a,{})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:(0,r.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,r.jsx)(n.h3,{id:"import",children:(0,r.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,r.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Divider } from '@marigold/components';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"appearance",children:(0,r.jsx)(n.a,{href:"#appearance",children:"Appearance"})}),"\n",(0,r.jsx)(c,{component:s}),"\n",(0,r.jsx)(n.h3,{id:"props",children:(0,r.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:(0,r.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsx)(n.h3,{id:"divider-between-text",children:(0,r.jsx)(n.a,{href:"#divider-between-text",children:"Divider between Text"})}),"\n",(0,r.jsxs)(n.p,{children:["This shows the default behavior of the ",(0,r.jsx)(n.code,{children:"<Divider>"}),"."]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(a,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Divider, Text } from '@marigold/components';\n\nexport const DividerText = () => (\n  <>\n    <Text>Dark Side</Text>\n    <Divider />\n    <Text>Bright Side</Text>\n  </>\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"section-divider-variant",children:(0,r.jsx)(n.a,{href:"#section-divider-variant",children:"Section Divider variant"})}),"\n",(0,r.jsxs)(n.p,{children:["The Example shows the ",(0,r.jsx)(n.code,{children:'variant="section"'})," of the ",(0,r.jsx)(n.code,{children:"<Divider>"})," component. It can be used when you want to seperate some sections like e.g. ",(0,r.jsx)(n.code,{children:"<Menu.Items>"}),". It has a lighter color than the default."]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(l,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Divider, Menu } from \'@marigold/components\';\n\nexport const DividerSection = () => (\n  <Menu aria-label="Only a Menu">\n    <Menu.Item key={1}>\n      Item 1\n      <Divider variant="section" />\n    </Menu.Item>\n    <Menu.Item key={2}>\n      Item 2\n      <Divider variant="section" />\n    </Menu.Item>\n    <Menu.Item key={3}>Item 3</Menu.Item>\n  </Menu>\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"bold-divider-variant",children:(0,r.jsx)(n.a,{href:"#bold-divider-variant",children:"Bold Divider variant"})}),"\n",(0,r.jsxs)(n.p,{children:["The other variant which you can use is the ",(0,r.jsx)(n.code,{children:"bold"})," one. This is a stronger line than the other variant and should be used if you want a striking seperator."]}),"\n",(0,r.jsx)(o,{children:(0,r.jsx)(p,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box, Divider } from '@marigold/components';\n\nexport const DividerBold = () => (\n  <>\n    <Box>Up</Box>\n    <Divider variant=\"bold\" />\n    <Box>Down</Box>\n  </>\n);\n"})})]})}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),i=n.wrapper;return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=7864,e(e.s=n);var n}));var n=e.O();_N_E=n}]);