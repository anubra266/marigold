(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6958],{6159:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts/layouts",function(){return o(4855)}])},4855:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return s},title:function(){return a}});var t=o(5250),i=o(8570),s=!0,a="Layouts";function r(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",em:"em",blockquote:"blockquote",ul:"ul",li:"li"},(0,i.ah)(),e.components),o=n.Toc,s=n.LayoutsDemo;return s||l("LayoutsDemo",!0),o||l("Toc",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{selector:"#toc",items:'[{"anchor":"#atomic-layouts","title":"Atomic Layouts"},{"anchor":"#isolating-layouts","title":"Isolating Layouts"},{"anchor":"#layout-components","title":"Layout Components"}]'}),"\n",(0,t.jsx)(n.p,{children:"Having a comprehensive collection of reusable components for common tasks (like buttons, cards and form fields) is great but it's not enough to build a whole application. An essential part is missing: components to build layout for application pages."}),"\n",(0,t.jsxs)(n.p,{children:["A typically solution is to provide a ",(0,t.jsx)(n.code,{children:"<Flex>"})," or ",(0,t.jsx)(n.code,{children:"<Grid>"})," component for creating arbitrary layouts. However, in order to use those components efficiently developers need to have an intimate knowledge of ",(0,t.jsx)(n.code,{children:"flex-box"})," and ",(0,t.jsx)(n.code,{children:"grid"}),", including all their related properties."]}),"\n",(0,t.jsx)(n.p,{children:"Although this gives app developers incredible freedom, it will also leave the burden on them to research and implement necessary layout patterns, while at the same time make them reusable and responsive."}),"\n",(0,t.jsx)(n.h2,{id:"atomic-layouts",children:(0,t.jsx)(n.a,{href:"#atomic-layouts",children:"Atomic Layouts"})}),"\n",(0,t.jsxs)(n.p,{children:["Because layout patterns are such an essential part of building great applications, Marigold comes with a set of ",(0,t.jsx)(n.em,{children:"layout components"})," that will cover almost, if not all, necessary patterns."]}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.p,{children:"The majority of layouts used on the web are not that unique. They often can be broken down into just a handful of layout patterns, which then can be combined to achieve more complex layout structures."}),"\n",(0,t.jsx)(n.p,{children:"Each of Marigold's layout components is build to do one layout pattern well. Like all Marigold's component, they are composable so that they can be combined until the desired layout is achieved. This makes it possible to build more complex layouts from just the given set of atomic layout components."}),"\n",(0,t.jsx)(n.h2,{id:"isolating-layouts",children:(0,t.jsx)(n.a,{href:"#isolating-layouts",children:"Isolating Layouts"})}),"\n",(0,t.jsxs)(n.p,{children:["The move to ",(0,t.jsx)(n.a,{href:"https://www.componentdriven.org/",children:"component-based development"})," has enabled a ton of incredible improvements when it comes to building digital user interfaces. It changed the way how we think about building applications entirely. In combination with the principles from ",(0,t.jsx)(n.a,{href:"https://atomicdesign.bradfrost.com/",children:"Atomic Design"})," we are no longer building applications page by page. Instead we are focusing on constructing applications by using reusable pieces of UI (a.k.a. components). This not only improves the overall user experience and quality, it also boosts the velocity and convenience of development with which digital products get build."]}),"\n",(0,t.jsxs)(n.p,{children:["A majority of the CSS layout patterns unfortunately predate this way of developing applications and as a result breaks the ",(0,t.jsx)(n.a,{href:"https://addyosmani.com/first/",children:"modularity and composition assumptions of components"}),". CSS properties like ",(0,t.jsx)(n.code,{children:"margin"}),", ",(0,t.jsx)(n.code,{children:"flex-direction"})," or ",(0,t.jsx)(n.code,{children:"align-self"})," that affect, or are affected by, elements outside of a component boundary will cause them to not appear as intended. Because of this, some people go as far as ",(0,t.jsx)(n.a,{href:"https://mxstbr.com/thoughts/margin/",children:"considering margin as harmful"})," and advice against its usage."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u201cComponents shouldn't contain surrounding whitespace\u201d"}),"\n",(0,t.jsx)(n.p,{children:"\u2014 Mark Dalgleish, Rethinking Design Practices"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To avoid unexpected behavior and layout shifts, Marigold follows this principle. Managing whitespace, as well as positioning and arranging components is reserved for Marigold's layout components. This approach ensures that components are as composable as possible while keeping white space predictable."}),"\n",(0,t.jsx)(n.h2,{id:"layout-components",children:(0,t.jsx)(n.a,{href:"#layout-components",children:"Layout Components"})}),"\n",(0,t.jsx)(n.p,{children:"The components listed below can be nested within each other any number of times to create a wide variety of common layouts. Being familiar with these components is an essential part of working effectively with Marigold."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/aside",children:"Aside"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/aspect",children:"Aspect"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/box",children:"Box"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/breakout",children:"Breakout"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/center",children:"Center"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/columns",children:"Columns"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/container",children:"Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/divider",children:"Divider"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/inline",children:"Inline"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/split",children:"Split"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/stack",children:"Stack"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../components/tiles",children:"Tiles"})}),"\n"]})]})}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components),o=n.wrapper;return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=6159,e(e.s=n);var n}));var n=e.O();_N_E=n}]);