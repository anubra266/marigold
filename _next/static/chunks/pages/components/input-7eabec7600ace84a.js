(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8367],{4007:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input",function(){return t(2865)}])},2865:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return p},title:function(){return a}});var r=t(5250),i=t(8570),p=!0,a="Input";function s(e){var n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,i.ah)(),e.components),t=n.Toc,p=n.Preview,s=n.Label,l=n.Input,d=n.AppearanceTable,c=n.PropsTable,u=n.BasicInput,h=n.DisabledInput,x=n.InputType;return d||o("AppearanceTable",!0),u||o("BasicInput",!0),h||o("DisabledInput",!0),l||o("Input",!0),x||o("InputType",!0),s||o("Label",!0),p||o("Preview",!0),c||o("PropsTable",!0),t||o("Toc",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#appearance","title":"Appearance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#standard-input","title":"Standard Input"},{"anchor":"#disabled-input","title":"Disabled Input"},{"anchor":"#input-types","title":"Input types"}]'}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"<Input>"})," component you can add a HTML ",(0,r.jsx)(n.code,{children:"<input>"})," field for different types of text to your form."]}),"\n",(0,r.jsxs)(n.p,{children:["It is a basic form of the ",(0,r.jsx)(n.a,{href:"/component/text-field/",children:(0,r.jsx)(n.code,{children:"<TextField>"})}),". It hasn't error messages, help texts or label given. It is just the plain input element."]}),"\n",(0,r.jsx)(p,{children:(0,r.jsxs)(s,{htmlFor:"input",children:[(0,r.jsx)(n.p,{children:"Give me your input:"}),(0,r.jsx)(l,{id:"input",type:"text",placeholder:"Placeholder"})]})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:(0,r.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,r.jsx)(n.h3,{id:"import",children:(0,r.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Input } from '@marigold/components';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"appearance",children:(0,r.jsx)(n.a,{href:"#appearance",children:"Appearance"})}),"\n",(0,r.jsx)(d,{component:a}),"\n",(0,r.jsx)(n.h3,{id:"props",children:(0,r.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,r.jsx)(c,{props:[{property:"type",type:"'date, datetime-local, email, month, number, password, search, submit, tel, text, time, url, week'",description:"Set the type for your input.",default:"text"},{property:"disabled",type:"boolean",description:"With this prop you can disable the input field.",default:"false"},{property:"...",type:"",description:"Yes you can use all regular attributes of `input!`",default:""}]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:(0,r.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsx)(n.h3,{id:"standard-input",children:(0,r.jsx)(n.a,{href:"#standard-input",children:"Standard Input"})}),"\n",(0,r.jsxs)(n.p,{children:["Here you can see how a simple ",(0,r.jsx)(n.code,{children:"<Input>"})," would look like and how to use it."]}),"\n",(0,r.jsx)(p,{children:(0,r.jsx)(u,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Label, Input } from \'@marigold/components\';\n\nexport const BasicInput = () => (\n  <Label htmlFor="input">\n    Give me your input:\n    <Input id="input" type="text" placeholder="Placeholder" />\n  </Label>\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"disabled-input",children:(0,r.jsx)(n.a,{href:"#disabled-input",children:"Disabled Input"})}),"\n",(0,r.jsxs)(n.p,{children:["If you want that the user can't interact anymore with the ",(0,r.jsx)(n.code,{children:"<Input>"})," you have to use the ",(0,r.jsx)(n.code,{children:"disabled"})," prop."]}),"\n",(0,r.jsx)(p,{children:(0,r.jsx)(h,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Input, Label } from \'@marigold/components\';\n\nexport const DisabledInput = () => (\n  <Label htmlFor="input2">\n    Disabled Input\n    <Input id="input2" placeholder="Disabled" disabled />\n  </Label>\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"input-types",children:(0,r.jsx)(n.a,{href:"#input-types",children:"Input types"})}),"\n",(0,r.jsx)(n.p,{children:"Here you can see how different types of the input would look like."}),"\n",(0,r.jsx)(p,{children:(0,r.jsx)(x,{})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Input, Label, Stack } from \'@marigold/components\';\n\nexport const InputType = () => (\n  <Stack space="medium">\n    <Label htmlFor="input1">\n      Password\n      <Input id="input1" type="password" />\n    </Label>\n    <Label htmlFor="input2">\n      Date\n      <Input id="input2" type="date" />\n    </Label>\n    <Label htmlFor="input3">\n      Submit\n      <Input id="input3" type="submit" />\n    </Label>\n  </Stack>\n);\n'})})]})}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components),t=n.wrapper;return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=4007,e(e.s=n);var n}));var n=e.O();_N_E=n}]);