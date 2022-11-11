(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6572],{2008:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return r(1382)}])},1382:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return a},title:function(){return s}});var i=r(5250),t=r(8570),a=!0,s="Link";function o(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,t.ah)(),e.components),r=n.Toc,a=n.Preview,o=n.Link,l=n.AppearanceTable,h=n.PropsTable,c=n.StandardLink,p=n.DisabledLink,x=n.AnchorLink,k=n.LinkTarget;return x||d("AnchorLink",!0),l||d("AppearanceTable",!0),p||d("DisabledLink",!0),o||d("Link",!0),k||d("LinkTarget",!0),a||d("Preview",!0),h||d("PropsTable",!0),c||d("StandardLink",!0),r||d("Toc",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#apperance","title":"Apperance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#standard-link","title":"Standard Link"},{"anchor":"#link-disabled","title":"Link disabled"},{"anchor":"#anchor-link","title":"Anchor Link"},{"anchor":"#link-with-target","title":"Link with target"}]'}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<Link>"})," component creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.\nThe ",(0,i.jsx)(n.code,{children:"href"})," property is required. Additional you can set the ",(0,i.jsx)(n.code,{children:"target"})," property."]}),"\n",(0,i.jsx)(a,{children:(0,i.jsx)(o,{href:"http://www.reservix.de",target:"_blank",children:(0,i.jsx)(n.p,{children:"reservix.de"})})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:(0,i.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,i.jsx)(n.h3,{id:"import",children:(0,i.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,i.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Link } from '@marigold/components';\n"})}),"\n",(0,i.jsx)(n.h3,{id:"apperance",children:(0,i.jsx)(n.a,{href:"#apperance",children:"Apperance"})}),"\n",(0,i.jsx)(l,{component:s}),"\n",(0,i.jsx)(n.h3,{id:"props",children:(0,i.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,i.jsx)(h,{props:[{property:"as",type:"string, Component",description:"",default:"a"},{property:"href (required)",type:"string",description:"Hypertext REFerence for your link.",default:""},{property:"target",type:"_blank",description:"The response is displayed in a new window or tab.",default:""},{property:"download",type:"string",description:"The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink.",default:""},{property:"disabled",type:"boolean",description:"",default:"false"}]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:(0,i.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,i.jsx)(n.h3,{id:"standard-link",children:(0,i.jsx)(n.a,{href:"#standard-link",children:"Standard Link"})}),"\n",(0,i.jsxs)(n.p,{children:["The example shows a standard ",(0,i.jsx)(n.code,{children:"<Link>"}),"."]}),"\n",(0,i.jsx)(a,{children:(0,i.jsx)(c,{})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Link, Text } from \'@marigold/components\';\n\nexport const StandardLink = () => (\n  <Text>\n    Link something nice like\n    <Link href="#!" target="_blank">\n      Marigold\n    </Link>\n  </Text>\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"link-disabled",children:(0,i.jsx)(n.a,{href:"#link-disabled",children:"Link disabled"})}),"\n",(0,i.jsxs)(n.p,{children:["This example shows a ",(0,i.jsx)(n.code,{children:"<Link>"})," component with the prop ",(0,i.jsx)(n.code,{children:"disabled"}),"."]}),"\n",(0,i.jsx)(a,{children:(0,i.jsx)(p,{})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Link, Text } from \'@marigold/components\';\n\nexport const DisabledLink = () => (\n  <Text>\n    You can jump to\n    <Link href="http://www.reservix.de" target="_blank" disabled>\n      reservix.de\n    </Link>\n  </Text>\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"anchor-link",children:(0,i.jsx)(n.a,{href:"#anchor-link",children:"Anchor Link"})}),"\n",(0,i.jsx)(n.p,{children:"This is an example of using an anchor link on the web page. If you want to use an anchor link, you must give the target the same ID (without #) as the href property in the link"}),"\n",(0,i.jsx)(a,{children:(0,i.jsx)(x,{})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Link, Text } from '@marigold/components';\n\nexport const AnchorLink = () => (\n  <Text>\n    Jump to\n    <Link href=\"#import\">Import</Link>\n  </Text>\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"link-with-target",children:(0,i.jsx)(n.a,{href:"#link-with-target",children:"Link with target"})}),"\n",(0,i.jsxs)(n.p,{children:["An example of using the ",(0,i.jsx)(n.code,{children:"target"})," ",(0,i.jsx)(n.code,{children:"_blank"})," property. When the target is blank, the web page opens in a new tab."]}),"\n",(0,i.jsx)(a,{children:(0,i.jsx)(k,{})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Link, Text } from \'@marigold/components\';\n\nexport const LinkTarget = () => (\n  <Text>\n    Link something nice like\n    <Link href="https://github.com/marigold-ui/marigold" target="_blank">\n      Marigold\n    </Link>\n    github repositories\n  </Text>\n);\n'})})]})}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),r=n.wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=2008,e(e.s=n);var n}));var n=e.O();_N_E=n}]);