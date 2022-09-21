(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{4486:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return o(1496)}])},1496:function(e,n,o){"use strict";o.r(n),o.d(n,{__N_SSG:function(){return s},title:function(){return t}});var c=o(5250),r=o(8570),s=!0,t="Checkbox";function a(e){var n=Object.assign({p:"p",code:"code",pre:"pre",h2:"h2",a:"a",h3:"h3"},(0,r.ah)(),e.components),o=n.Toc,s=n.Preview,a=n.CheckboxDemo,i=n.AppearanceTable,l=n.PropsTable,d=n.CheckboxDisabledDemo,p=n.Checkbox,x=n.CheckboxGroupoDemo;return i||h("AppearanceTable",!0),p||h("Checkbox",!0),a||h("CheckboxDemo",!0),d||h("CheckboxDisabledDemo",!0),x||h("CheckboxGroupoDemo",!0),s||h("Preview",!0),l||h("PropsTable",!0),o||h("Toc",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#apperance","title":"Apperance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#checkbox-disabled","title":"Checkbox disabled"},{"anchor":"#indeterminate-checkbox","title":"Indeterminate Checkbox"},{"anchor":"#group-checkboxes","title":"Group checkboxes"}]'}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Checkbox"})," component allows users to select one or more options from a set of options. In order to group multiple checkboxes, use the ",(0,c.jsx)(n.code,{children:"CheckboxGroup"})," component."]}),"\n",(0,c.jsx)(s,{children:(0,c.jsx)(a,{})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Checkbox, CheckboxGroup } from '@marigold/components';\n"})}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:(0,c.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,c.jsx)(n.h3,{id:"apperance",children:(0,c.jsx)(n.a,{href:"#apperance",children:"Apperance"})}),"\n",(0,c.jsx)(i,{component:t}),"\n",(0,c.jsx)(n.h3,{id:"props",children:(0,c.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,c.jsx)(l,{props:[{property:"error",type:"boolean",description:"If `true`, the checkbox is considered invalid and if set the `errorMessage` is shown instead of the `description`.",default:"false"},{property:"width",type:"string",description:"Control the width of the field.",default:"100%"},{property:"...",type:"string",description:"You can use all native attributes of `input`"}]}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:(0,c.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,c.jsx)(n.h3,{id:"checkbox-disabled",children:(0,c.jsx)(n.a,{href:"#checkbox-disabled",children:"Checkbox disabled"})}),"\n",(0,c.jsx)(s,{children:(0,c.jsx)(d,{})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"import { Checkbox, Stack } from '@marigold/components';\n\nexport const CheckboxDisabledDemo = () => (\n  <Stack space=\"small\">\n    <Checkbox disabled>Disabled</Checkbox>\n    <Checkbox checked disabled>\n      Checked and disabled\n    </Checkbox>\n  </Stack>\n);\n"})}),"\n",(0,c.jsx)(n.h3,{id:"indeterminate-checkbox",children:(0,c.jsx)(n.a,{href:"#indeterminate-checkbox",children:"Indeterminate Checkbox"})}),"\n",(0,c.jsx)(n.p,{children:"Use indeterminate state when it represents both selected and not selected values."}),"\n",(0,c.jsx)(s,{children:(0,c.jsx)(p,{defaultChecked:!0,indeterminate:!0,children:(0,c.jsx)(n.p,{children:"Select all"})})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"<Checkbox defaultChecked indeterminate>\n  Select all\n</Checkbox>\n"})}),"\n",(0,c.jsx)(n.h3,{id:"group-checkboxes",children:(0,c.jsx)(n.a,{href:"#group-checkboxes",children:"Group checkboxes"})}),"\n",(0,c.jsx)(s,{children:(0,c.jsx)(x,{})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox, CheckboxGroup } from \'@marigold/components\';\n\nexport const CheckboxGroupoDemo = () => {\n  const [selected, setSelected] = useState<string[]>([]);\n  return (\n    <>\n      <CheckboxGroup label="Choose your toppings:" onChange={setSelected}>\n        <Checkbox value="ham">\ud83d\udc16 Ham</Checkbox>\n        <Checkbox value="beef" disabled>\n          \ud83d\udc04 Beef (out of stock)\n        </Checkbox>\n        <Checkbox value="tuna">\ud83d\udc1f Tuna</Checkbox>\n        <Checkbox value="tomatos">\ud83c\udf45 Tomatos</Checkbox>\n        <Checkbox value="onions">\ud83e\uddc5 Onions</Checkbox>\n        <Checkbox value="pineapple">\ud83c\udf4d Pineapple</Checkbox>\n      </CheckboxGroup>\n      <hr />\n      <pre>Selected values: {selected.join(\', \')}</pre>\n    </>\n  );\n};\n'})})]})}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components),o=n.wrapper;return o?(0,c.jsx)(o,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=4486,e(e.s=n);var n}));var n=e.O();_N_E=n}]);