(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7859],{6798:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/list",function(){return s(3688)}])},3688:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return r},title:function(){return d}});var t=s(5250),i=s(8570),r=!0,d="List";function o(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,i.ah)(),e.components),s=n.Toc,r=n.Preview,o=n.SimpleList,c=n.AppearanceTable,a=n.PropsTable,h=n.SimpleOrderedList,p=n.UnordedStackedList;return c||l("AppearanceTable",!0),r||l("Preview",!0),a||l("PropsTable",!0),o||l("SimpleList",!0),h||l("SimpleOrderedList",!0),s||l("Toc",!0),p||l("UnordedStackedList",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#apperance","title":"Apperance"},{"anchor":"#props","title":"Props"},{"anchor":"#usage-1","title":"Usage"},{"anchor":"#unordered-list","title":"Unordered list"},{"anchor":"#ordered-list","title":"Ordered list"},{"anchor":"#nested-unordered-list","title":"Nested Unordered List"}]'}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<List>"})," component is used to display an unordered or ordered list."]}),"\n",(0,t.jsxs)(n.p,{children:["The list is divided into two parts: ",(0,t.jsx)(n.code,{children:"<List>"})," and ",(0,t.jsx)(n.code,{children:"<List.Item>"}),".\nBy default, the application displays an unordered ",(0,t.jsx)(n.code,{children:"(ul)"})," list. However, this list can also be displayed as an ordered ",(0,t.jsx)(n.code,{children:"(ol)"})," list."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<List.Items>"})," in unordered lists are marked with bullets and in an ordered list are marked with numbers."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(o,{})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:(0,t.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,t.jsx)(n.h3,{id:"import",children:(0,t.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,t.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { List } from '@marigold/components';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"apperance",children:(0,t.jsx)(n.a,{href:"#apperance",children:"Apperance"})}),"\n",(0,t.jsx)(c,{component:d}),"\n",(0,t.jsx)(n.h3,{id:"props",children:(0,t.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,t.jsx)(a,{props:[{property:"as",type:"ul \u23ae ol",default:"ul",description:"Displaying a unordered or ordered list for showing Information"}]}),"\n",(0,t.jsx)(n.h2,{id:"usage-1",children:(0,t.jsx)(n.a,{href:"#usage-1",children:"Usage"})}),"\n",(0,t.jsx)(n.h3,{id:"unordered-list",children:(0,t.jsx)(n.a,{href:"#unordered-list",children:"Unordered list"})}),"\n",(0,t.jsx)(n.p,{children:"In this example you can see how to use a unordered list."}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(o,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { List } from '@marigold/components';\n\nexport const SimpleList = () => (\n  <List>\n    <List.Item>Cheese</List.Item>\n    <List.Item>Milk</List.Item>\n    <List.Item>Bread</List.Item>\n  </List>\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ordered-list",children:(0,t.jsx)(n.a,{href:"#ordered-list",children:"Ordered list"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example you can see how to use the ",(0,t.jsx)(n.code,{children:"as"})," property for an ordered list."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(h,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { List } from '@marigold/components';\n\nexport const SimpleOrderedList = () => (\n  <List as=\"ol\">\n    <List.Item>Black Tea</List.Item>\n    <List.Item>Green Tea</List.Item>\n    <List.Item>Chai Tea</List.Item>\n  </List>\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"nested-unordered-list",children:(0,t.jsx)(n.a,{href:"#nested-unordered-list",children:"Nested Unordered List"})}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to create a unordered nested list. Here for the ",(0,t.jsx)(n.code,{children:"<List>"})," is wrapped inside the ",(0,t.jsx)(n.code,{children:"<List.Item>"}),"."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(p,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { List } from '@marigold/components';\n\nexport const UnordedStackedList = () => (\n  <List>\n    <List.Item>\n      Crispy Chicken Burger\n      <List>\n        <List.Item>H\xe4hnchen Filet im Crunchy Cornflakes Mantel</List.Item>\n      </List>\n    </List.Item>\n    <List.Item>\n      Cream Cheese Chicken Burger\n      <List>\n        <List.Item>H\xe4hnchen Filet im Crunchy Cornflakes Mantel</List.Item>\n        <List.Item>Rucola</List.Item>\n        <List.Item>Frischk\xe4se</List.Item>\n      </List>\n    </List.Item>\n    <List.Item>\n      Farmer\n      <List>\n        <List.Item>Rindfleisch</List.Item>\n        <List.Item>Bacon</List.Item>\n        <List.Item>Spiegelei</List.Item>\n      </List>\n    </List.Item>\n  </List>\n);\n"})})]})}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components),s=n.wrapper;return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=6798,e(e.s=n);var n}));var n=e.O();_N_E=n}]);