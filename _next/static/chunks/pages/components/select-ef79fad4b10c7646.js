(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{3229:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return n(7801)}])},7801:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return o},title:function(){return s}});var l=n(5250),c=n(8570),o=!0,s="Select";function i(e){var t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,c.ah)(),e.components),n=t.Toc,o=t.Preview,i=t.BasicSelect,a=t.AppearanceTable,d=t.PropsTable,p=t.DefaultSelected,h=t.DisabledSelect,S=t.DisabledKeysSelect,u=t.SelectSection;return a||r("AppearanceTable",!0),i||r("BasicSelect",!0),p||r("DefaultSelected",!0),S||r("DisabledKeysSelect",!0),h||r("DisabledSelect",!0),o||r("Preview",!0),d||r("PropsTable",!0),u||r("SelectSection",!0),n||r("Toc",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#appearance","title":"Appearance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#standard-select","title":"Standard Select"},{"anchor":"#default-selected-key-uncontrolled","title":"Default selected Key (uncontrolled)"},{"anchor":"#disabled-select","title":"Disabled Select"},{"anchor":"#disabled-keys","title":"Disabled Keys"},{"anchor":"#select-with-sections","title":"Select with Sections"}]'}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"<Select>"})," is a form component to choose one option from a list. A ",(0,l.jsx)(t.code,{children:"<Select>"})," must include the ",(0,l.jsx)(t.code,{children:"<Select.Item>"}),". It can optionally include a ",(0,l.jsx)(t.code,{children:"<Select.Section>"}),", which behaves as divider between two or more category options."]}),"\n",(0,l.jsxs)(t.p,{children:["It behaves similar to the ",(0,l.jsx)(t.a,{href:"/components/menu/",children:(0,l.jsx)(t.code,{children:"<Menu>"})}),", but the use case is different. A ",(0,l.jsx)(t.code,{children:"<Select>"})," is used in forms."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(i,{})}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:(0,l.jsx)(t.a,{href:"#usage",children:"Usage"})}),"\n",(0,l.jsx)(t.h3,{id:"import",children:(0,l.jsx)(t.a,{href:"#import",children:"Import"})}),"\n",(0,l.jsx)(t.p,{children:"To import the component you just have to use this code below."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@marigold/components';\n"})}),"\n",(0,l.jsx)(t.h3,{id:"appearance",children:(0,l.jsx)(t.a,{href:"#appearance",children:"Appearance"})}),"\n",(0,l.jsx)(a,{component:s}),"\n",(0,l.jsx)(t.h3,{id:"props",children:(0,l.jsx)(t.a,{href:"#props",children:"Props"})}),"\n",(0,l.jsx)(d,{props:[{property:"label",type:"string",description:"Set a label for the select.",default:"none"},{property:"placeholder",type:"string",description:"Set the placeholder for the select.",default:"Based on OS language (en and de supported)"},{property:"disabled",type:"boolean",description:"Disables the select.",default:"false"},{property:"disabledKeys",type:"Iterable<Key>",description:"Sets selected keys disabled.",default:"none"},{property:"selectedKey",type:"Key",description:"The selected key of the select.",default:"none"},{property:"defaultSelectedKey",type:"Iterable<Key>",description:"Set a default selected key.",default:"none"},{property:"required",type:"boolean",description:"Set the select required.",default:"false"},{property:"error",type:"boolean",description:"Allow to set an error to the select.",default:"false"},{property:"errorMessage",type:"string",description:"Set the error message for the select.",default:""},{property:"width",type:"string",description:"Set the width of the select.",default:"100%"},{property:"onSelectionChange",type:"(key: Key) => any",description:"Handler that is called when the selection changes.",default:"none"}]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:(0,l.jsx)(t.a,{href:"#examples",children:"Examples"})}),"\n",(0,l.jsx)(t.h3,{id:"standard-select",children:(0,l.jsx)(t.a,{href:"#standard-select",children:"Standard Select"})}),"\n",(0,l.jsxs)(t.p,{children:["This example shows how the ",(0,l.jsx)(t.code,{children:"<Select>"})," would behave without any specific properties."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(i,{})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { Select } from \'@marigold/components\';\n\nexport const BasicSelect = () => (\n  <Select label="Favorite character" placeholder="Select your character">\n    <Select.Option>Mario</Select.Option>\n    <Select.Option>Luigi</Select.Option>\n    <Select.Option>Toad</Select.Option>\n    <Select.Option>Yoshi</Select.Option>\n    <Select.Option>Bowser</Select.Option>\n    <Select.Option>Peach</Select.Option>\n  </Select>\n);\n'})}),"\n",(0,l.jsx)(t.h3,{id:"default-selected-key-uncontrolled",children:(0,l.jsx)(t.a,{href:"#default-selected-key-uncontrolled",children:"Default selected Key (uncontrolled)"})}),"\n",(0,l.jsxs)(t.p,{children:["If you want to have a default selected item in the ",(0,l.jsx)(t.code,{children:"<Select>"})," you can set the property for it like it is in the example below."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(p,{})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { Select } from \'@marigold/components\';\n\nexport const DefaultSelected = () => (\n  <Select label="Choose Color (uncontrolled)" defaultSelectedKey="Yellow">\n    <Select.Option key="Red">Red</Select.Option>\n    <Select.Option key="Orange">Orange</Select.Option>\n    <Select.Option key="Yellow">Yellow</Select.Option>\n    <Select.Option key="Green">Green</Select.Option>\n    <Select.Option key="Blue">Blue</Select.Option>\n    <Select.Option key="Purple">Purple</Select.Option>\n  </Select>\n);\n'})}),"\n",(0,l.jsx)(t.h3,{id:"disabled-select",children:(0,l.jsx)(t.a,{href:"#disabled-select",children:"Disabled Select"})}),"\n",(0,l.jsxs)(t.p,{children:["If you want that the user can't interact with the ",(0,l.jsx)(t.code,{children:"<Select>"})," anymore you can set the ",(0,l.jsx)(t.code,{children:"disabled"})," propery."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(h,{})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { Select } from \'@marigold/components\';\n\nexport const DisabledSelect = () => (\n  <Select label="Disabled Select:" disabled placeholder="disabled Select">\n    <Select.Option>disabled Select.Option</Select.Option>\n  </Select>\n);\n'})}),"\n",(0,l.jsx)(t.h3,{id:"disabled-keys",children:(0,l.jsx)(t.a,{href:"#disabled-keys",children:"Disabled Keys"})}),"\n",(0,l.jsxs)(t.p,{children:["You can also set some keys disabled, for that you have to use the ",(0,l.jsx)(t.code,{children:"disabledKeys"})," property."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(S,{})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { Select } from \'@marigold/components\';\n\nexport const DisabledKeysSelect = () => (\n  <Select label="Favorite Color" disabledKeys={[\'Orange\', \'Yellow\']}>\n    <Select.Option key="Red">Red</Select.Option>\n    <Select.Option key="Orange">Orange</Select.Option>\n    <Select.Option key="Yellow">Yellow</Select.Option>\n    <Select.Option key="Green">Green</Select.Option>\n    <Select.Option key="Blue">Blue</Select.Option>\n    <Select.Option key="Purple">Purple</Select.Option>\n  </Select>\n);\n'})}),"\n",(0,l.jsx)(t.h3,{id:"select-with-sections",children:(0,l.jsx)(t.a,{href:"#select-with-sections",children:"Select with Sections"})}),"\n",(0,l.jsxs)(t.p,{children:["In this example you can see how to use the ",(0,l.jsx)(t.code,{children:"<Select.Section>"})," in the ",(0,l.jsx)(t.code,{children:"<Select>"})," itself. A clear line appears to separate different options."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(u,{})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { Select } from \'@marigold/components\';\n\nexport const SelectSection = () => (\n  <Select label="Choose your Fandom">\n    <Select.Section title="Fantasy">\n      <Select.Option>Harry Potter</Select.Option>\n      <Select.Option>Lord of the Rings</Select.Option>\n    </Select.Section>\n    <Select.Section title="Sci-Fi">\n      <Select.Option>Star Wars</Select.Option>\n      <Select.Option>Star Trek</Select.Option>\n    </Select.Section>\n  </Select>\n);\n'})})]})}function r(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.ah)(),e.components),n=t.wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return t=3229,e(e.s=t);var t}));var t=e.O();_N_E=t}]);