(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3340],{9434:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/columns",function(){return o(1847)}])},1847:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return l},title:function(){return c}});var t=o(5250),s=o(8570),l=!0,c="Columns";function a(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,s.ah)(),e.components),o=n.Toc,l=n.Preview,c=n.BasicColumns,a=n.PropsTable,h=n.SpaceColumns,i=n.CollapseColumns,d=n.PageLayoutColumns,p=n.StretchColumns,m=n.StretchColumnsSwitch;return c||r("BasicColumns",!0),i||r("CollapseColumns",!0),d||r("PageLayoutColumns",!0),l||r("Preview",!0),a||r("PropsTable",!0),h||r("SpaceColumns",!0),p||r("StretchColumns",!0),m||r("StretchColumnsSwitch",!0),o||r("Toc",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#columns-and-a-space-between-them","title":"Columns and a space between them"},{"anchor":"#columns-collapsing-at-a-certain-width","title":"Columns collapsing at a certain width"},{"anchor":"#page-layout","title":"Page layout"},{"anchor":"#stretch-to-height-of-parent","title":"Stretch to Height of Parent"}]'}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<Columns>"})," is a responsive layout component, with sized columns in one row.\nWith the ",(0,t.jsx)(n.code,{children:"<Columns>"})," component you can set an array of numbers the size of the children. The columns array length and the count of children must be the same. You can add space between the columns und set a ",(0,t.jsx)(n.code,{children:"collapseAt"})," prop to collapse the columns at a certain width."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(c,{})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:(0,t.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,t.jsx)(n.h3,{id:"import",children:(0,t.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,t.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Columns } from '@marigold/components';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"props",children:(0,t.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,t.jsx)(a,{props:[{property:"columns (required)",description:"An array of numbers to set the size of the children. The columns array length and the count of children must be the same.",type:"number[]",default:""},{property:"space",description:"Space between the columns.",type:"ResponsiveStyleValue<string>",default:"none"},{property:"collapseAt",description:'Collapse children into a vertical layout at given width. Note that `collapseAt` is based on the total element width, and not the window width. With a default value of "0em" columns will not collapse by default.',type:"string | number",default:"0em"},{property:"stretch",description:"Stretch to height of parent container.",type:"boolean",default:"false"}]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.h3,{id:"columns-and-a-space-between-them",children:(0,t.jsx)(n.a,{href:"#columns-and-a-space-between-them",children:"Columns and a space between them"})}),"\n",(0,t.jsxs)(n.p,{children:["The example shows how to use the ",(0,t.jsx)(n.code,{children:"space"})," prop. It defines the gap between the contents."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(h,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box, Columns } from \'@marigold/components\';\n\nexport const SpaceColumns = () => (\n  <Columns space="xsmall" columns={[2, 8, 2]} collapseAt="25em">\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="100px" />\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="100px" />\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="100px" />\n  </Columns>\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"columns-collapsing-at-a-certain-width",children:(0,t.jsx)(n.a,{href:"#columns-collapsing-at-a-certain-width",children:"Columns collapsing at a certain width"})}),"\n",(0,t.jsxs)(n.p,{children:["The example show how the ",(0,t.jsx)(n.code,{children:"collapseAt"})," prop is to use. If you resize the window of your browser you can see that the columns are collapsing or expanding. Please note that the collapsing or expanding starting in a small range of the ",(0,t.jsx)(n.code,{children:"collapseAt"})," value."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(i,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box, Columns } from \'@marigold/components\';\n\nexport const CollapseColumns = () => (\n  <Columns collapseAt="25em" space="xsmall" columns={[2, 10]}>\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="100px" />\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="100px" />\n  </Columns>\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"page-layout",children:(0,t.jsx)(n.a,{href:"#page-layout",children:"Page layout"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a page layout with three columns and collapse or expanding at ",(0,t.jsx)(n.code,{children:"25em"})]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(d,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Box, Columns } from \'@marigold/components\';\n\nexport const PageLayoutColumns = () => (\n  <Columns space="xsmall" columns={[2, 8, 2]} collapseAt="25em">\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="250px" p="xsmall">\n      Left Sidebar\n    </Box>\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="250px" p="xsmall">\n      Main Content\n    </Box>\n    <Box border="1px solid #ced4da" bg="#e9ecef" height="250px" p="xsmall">\n      Right Sidebar\n    </Box>\n  </Columns>\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"stretch-to-height-of-parent",children:(0,t.jsx)(n.a,{href:"#stretch-to-height-of-parent",children:"Stretch to Height of Parent"})}),"\n",(0,t.jsxs)(n.p,{children:["By using the ",(0,t.jsx)(n.code,{children:"stretch"})," prop you can make the container to take full width. Note that this is usually not necessary since the columns will expand with their children anyway."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(p,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Columns, Stack } from \'@marigold/components\';\nimport { Block } from \'~/components\';\n\nexport const StretchColumns = () => (\n  <Block>\n    <Stack space="medium">\n      <Block height={500}>\n        <Columns columns={[4, 4, 4]} space="small" stretch>\n          <Block height="100%">I have a height set to 100%!</Block>\n          <Block>I space myself</Block>\n          <Block height={200}>I have a height set to 200px.</Block>\n        </Columns>\n      </Block>\n      <Columns columns={[2, 1]} space="small">\n        <Block>\n          Columns will stretch if they get longer, like a regular CSS element.\n        </Block>\n        <Block>I am here too!</Block>\n      </Columns>\n    </Stack>\n  </Block>\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here is another interactive example on how to use the ",(0,t.jsx)(n.code,{children:"stretch"})," prop. Note that there has to be a parent of the columns that sets a ",(0,t.jsx)(n.code,{children:"height"}),". Otherwhise setting the height in a column to ",(0,t.jsx)(n.code,{children:"100%"})," will not have any effect."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(m,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Box, Columns, Stack, Switch } from \'@marigold/components\';\n\nexport const StretchColumnsSwitch = () => {\n  const [stretch, setStretch] = useState(false);\n\n  return (\n    <Stack space="medium">\n      <Box css={{ p: 8, borderRadius: 12, bg: \'#e9ecef\' }}>\n        <Switch onChange={() => setStretch(!stretch)}>Toggle stretch</Switch>\n      </Box>\n      <Box css={{ height: 300, bg: \'#adb5bd\' }}>\n        <Columns columns={[1, 1, 1]} stretch={stretch}>\n          <Box border="1px solid #495057" bg="#e9ecef" height="150px" />\n          <Box border="1px solid #495057" bg="#e9ecef" height="150px" />\n          <Box border="1px solid #495057" bg="#e9ecef" height="100%" p={8}>\n            I will grow, if you set <code>stretch</code> prop on the{\' \'}\n            <code>Columns</code>!\n          </Box>\n        </Columns>\n      </Box>\n    </Stack>\n  );\n};\n'})})]})}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.ah)(),e.components),o=n.wrapper;return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=9434,e(e.s=n);var n}));var n=e.O();_N_E=n}]);