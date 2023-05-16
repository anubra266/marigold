(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5239],{810:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inline",function(){return i(1202)}])},1202:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return l},title:function(){return o}});var t=i(5250),s=i(7160),l=!0,o="Inline";function r(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,s.ah)(),e.components),i=n.Toc,l=n.Preview,o=n.BasicInline,r=n.PropsTable,c=n.InlineElements,d=n.InlineSpacing,m=n.InlineNested,p=n.InlineAlignments;return o||a("BasicInline",!0),p||a("InlineAlignments",!0),c||a("InlineElements",!0),m||a("InlineNested",!0),d||a("InlineSpacing",!0),l||a("Preview",!0),r||a("PropsTable",!0),i||a("Toc",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#more-than-two-elements","title":"More than two elements"},{"anchor":"#spacing","title":"Spacing"},{"anchor":"#nested-inline","title":"Nested Inline"},{"anchor":"#different-alignment","title":"Different alignment"}]'}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<Inline>"})," is a responsive layout component. It's inlining element with space between each element. This component uses the spaces from the given theme or a responsive string."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(o,{})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:(0,t.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,t.jsx)(n.h3,{id:"import",children:(0,t.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,t.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Inline } from '@marigold/components';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"props",children:(0,t.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,t.jsx)(r,{props:[{property:"space",type:"ResponsiveStyleValue<string>",description:"Space between the Inline elements.",default:"none"},{property:"alignY",type:"`top, center, bottom` ",description:"Vertical alignment of the items inside the inline element.",default:"center"},{property:"alignX",type:"`left, center, right` ",description:"Horizontal alignment of the items inside the inline element.",default:"left"}]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:(0,t.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,t.jsx)(n.h3,{id:"more-than-two-elements",children:(0,t.jsx)(n.a,{href:"#more-than-two-elements",children:"More than two elements"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have more than two elements you can use the ",(0,t.jsx)(n.code,{children:"<Inline>"})," component. The elements are arranged according to the space required."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(c,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Inline, Text } from '@marigold/components';\nimport { Check } from '@marigold/icons';\n\nexport const InlineElements = () => (\n  <Inline space=\"small\">\n    <Check />\n    <Text>Check</Text>\n    <Text>this</Text>\n    <Text>out</Text>\n  </Inline>\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"spacing",children:(0,t.jsx)(n.a,{href:"#spacing",children:"Spacing"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<Inline>"})," component can be used to add spacing between elements.\nFor this you need the props ",(0,t.jsx)(n.code,{children:"space"})," and you can then place all components inside the ",(0,t.jsx)(n.code,{children:"<Inline>"})," element."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(d,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Inline, Text } from '@marigold/components';\n\nexport const InlineSpacing = () => (\n  <Inline space=\"large\">\n    <Text>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n      dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada,\n      massa nec ultricies efficitur, lectus ante consequat magna, a porttitor\n      massa ex ut quam.\n    </Text>\n    <Text>\n      Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus.\n      Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien\n      finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna.\n      Interdum et malesuada fames ac ante ipsum primis in faucibus.\n    </Text>\n  </Inline>\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"nested-inline",children:(0,t.jsx)(n.a,{href:"#nested-inline",children:"Nested Inline"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Inline>"})," components can also have themselves as component. This can be used to add more spacing within the elements."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(m,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Inline, Headline, Text } from \'@marigold/components\';\n\nexport const InlineNested = () => (\n  <Inline space="large">\n    <Inline space="xsmall">\n      <Headline level="2">Block #1</Headline>\n      <Text>Lorem ipsum dolor sit amet.</Text>\n    </Inline>\n    <Inline space="xsmall">\n      <Headline level="2">Bock #2</Headline>\n      <Text>Lorem ipsum dolor sit amet.</Text>\n    </Inline>\n  </Inline>\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"different-alignment",children:(0,t.jsx)(n.a,{href:"#different-alignment",children:"Different alignment"})}),"\n",(0,t.jsxs)(n.p,{children:["If elements need to be positioned differently on their x and y axis, this can be done with the ",(0,t.jsx)(n.code,{children:"<Inline>"})," component.\nIn this case one of the following props is given. Either ",(0,t.jsx)(n.code,{children:"alignX"})," or ",(0,t.jsx)(n.code,{children:"alignY"}),"."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(p,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Inline, Headline, Text } from \'@marigold/components\';\n\nexport const InlineAlignments = () => (\n  <>\n    <Inline space="medium" alignY="top">\n      <Headline level="2">Top</Headline>\n      <Text>Lorem ipsum dolor sit amet.</Text>\n    </Inline>\n    <Inline space="medium">\n      <Headline level="2">Center</Headline>\n      <Text>Lorem ipsum dolor sit amet.</Text>\n    </Inline>\n    <Inline space="medium" alignY="bottom">\n      <Headline level="2">Bottom</Headline>\n      <Text>Lorem ipsum dolor sit amet.</Text>\n    </Inline>\n  </>\n);\n'})})]})}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.ah)(),e.components),i=n.wrapper;return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=810,e(e.s=n);var n}));var n=e.O();_N_E=n}]);