(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9129],{2715:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts/css-in-js",function(){return s(9171)}])},9171:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return r},title:function(){return o}});var i=s(5250),t=s(8570),r=!0,o="CSS-in-JS";function a(e){var n=Object.assign({h2:"h2",a:"a",p:"p",h3:"h3",strong:"strong",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components),s=n.Toc;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Toc",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{selector:"#toc",items:'[{"anchor":"#whats-css-in-js","title":"What\'s CSS-in-JS?"},{"anchor":"#why-do-we-use-css-in-js","title":"Why do we use CSS-in-JS?"},{"anchor":"#scoped-css","title":"Scoped CSS"},{"anchor":"#no-inline-styles","title":"No inline styles"},{"anchor":"#server-side-rendering","title":"Server-Side-Rendering"},{"anchor":"#the-classname-property","title":"The className property"},{"anchor":"#what-is-css-in-js-not","title":"What is CSS-in-JS not?"}]'}),"\n",(0,i.jsx)(n.h2,{id:"whats-css-in-js",children:(0,i.jsx)(n.a,{href:"#whats-css-in-js",children:"What's CSS-in-JS?"})}),"\n",(0,i.jsxs)(n.p,{children:["CSS-in-JS follows the principle of putting your CSS styles directly into your components instead of stylesheets.\nYou can write CSS in JavaScript syntax and take full advantage of the JS ecosystem.\nMarigold uses the CSS-in-JS library called ",(0,i.jsx)(n.a,{href:"https://emotion.sh/docs/introduction",children:"Emotion"}),".\nCSS-in-JS is actually a JavaScript library that bundles every JavaScript component with all associated CSS rules and dependencies."]}),"\n",(0,i.jsx)(n.h2,{id:"why-do-we-use-css-in-js",children:(0,i.jsx)(n.a,{href:"#why-do-we-use-css-in-js",children:"Why do we use CSS-in-JS?"})}),"\n",(0,i.jsx)(n.h3,{id:"scoped-css",children:(0,i.jsx)(n.a,{href:"#scoped-css",children:"Scoped CSS"})}),"\n",(0,i.jsx)(n.p,{children:"All CSS-in-JS libraries automatically generate unique names for CSS classes.\nStyles applied in Marigold components are applied only to that component.\nStyling outside the component is completely unaffected.\nThis prevents CSS classnames from colliding and reduces the effort required to find a suitable classname."}),"\n",(0,i.jsx)(n.h3,{id:"no-inline-styles",children:(0,i.jsx)(n.a,{href:"#no-inline-styles",children:"No inline styles"})}),"\n",(0,i.jsxs)(n.p,{children:["With CSS-in-JS, no styles are assigned within the HTML. We do ",(0,i.jsx)(n.strong,{children:"not"})," use style props like ",(0,i.jsx)(n.code,{children:"<div style={{ padding: '8px' }}>"}),".\nThis gives us the following advantages: Responsive designs, which are not possible with inline styles, can be used with CSS-in-JS.\nAlso, pseudo-classes, pseudo-elements and media queries can be used.\nIn addition, inline styles are generally considered less performant than classnames."]}),"\n",(0,i.jsx)(n.h3,{id:"server-side-rendering",children:(0,i.jsx)(n.a,{href:"#server-side-rendering",children:"Server-Side-Rendering"})}),"\n",(0,i.jsxs)(n.p,{children:["The Marigold Design System is created using ",(0,i.jsx)(n.a,{href:"https://www.gatsbyjs.com/",children:"Gatsby"})," and supports SSR.\nDuring SSR, only the styles required to render the initial view are added to the HTML document. Dynamic styles are removed to reduce the amount of code.\nThis has a positive impact on performance, since no separate CSS file needs to be retrieved from the server to block the rendering process."]}),"\n",(0,i.jsx)(n.h3,{id:"the-classname-property",children:(0,i.jsx)(n.a,{href:"#the-classname-property",children:"The className property"})}),"\n",(0,i.jsxs)(n.p,{children:["Marigold theme styles are applied with a classname. Emotion outputs the classnames as a string, which can then be assigned to HTML elements like this:\n",(0,i.jsx)(n.code,{children:"<button class='css-ase7ea css-1nt0tt7'>"}),".\nThe principle is to first define styles and then apply them to the component that is to be styled."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-css-in-js-not",children:(0,i.jsx)(n.a,{href:"#what-is-css-in-js-not",children:"What is CSS-in-JS not?"})}),"\n",(0,i.jsx)(n.p,{children:"CSS-in-JS does not obviate the need to understand the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"How styles are applied to the DOM"}),"\n",(0,i.jsx)(n.li,{children:"How inheritance works"}),"\n",(0,i.jsx)(n.li,{children:"How CSS properties work"}),"\n",(0,i.jsx)(n.li,{children:"How CSS layout works"}),"\n"]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),s=n.wrapper;return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=2715,e(e.s=n);var n}));var n=e.O();_N_E=n}]);