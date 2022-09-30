(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6565],{9015:function(e,o,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return i(6228)}])},6228:function(e,o,i){"use strict";i.r(o),i.d(o,{__N_SSG:function(){return a},title:function(){return d}});var r=i(5250),n=i(8570),a=!0,d="Radio";function t(e){var o=Object.assign({p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,n.ah)(),e.components),i=o.Toc,a=o.Preview,t=o.SimpleRadio,l=o.AppearanceTable,p=o.PropsTable,c=o.DisabledRadio,h=o.RequiredRadio;return l||s("AppearanceTable",!0),c||s("DisabledRadio",!0),a||s("Preview",!0),p||s("PropsTable",!0),h||s("RequiredRadio",!0),t||s("SimpleRadio",!0),i||s("Toc",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#appearance","title":"Appearance"},{"anchor":"#props","title":"Props"},{"anchor":"#group-props","title":"Group Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#simple-radio","title":"Simple Radio"},{"anchor":"#disabed-radio","title":"Disabed Radio"},{"anchor":"#required-radio-with-horizontal-orientation","title":"Required radio with horizontal orientation"}]'}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"<Radio>"})," and ",(0,r.jsx)(o.code,{children:"<Radio.Group>"})," components allow users to select one option from a set of options. They are useful for presenting a list of options to users and collecting their responses."]}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"<Radio>"})," should never be used alone, there should always be at least two ",(0,r.jsx)(o.code,{children:"<Radio>"})," from which you can choose. For that the ",(0,r.jsx)(o.code,{children:"<Radio.Group>"})," should be wrapped around the ",(0,r.jsx)(o.code,{children:"<Radio>"}),". If you want one option you could use the ",(0,r.jsx)(o.a,{href:"/components/checkbox/",children:(0,r.jsx)(o.code,{children:"<Checkbox>"})})," instead."]}),"\n",(0,r.jsxs)(o.p,{children:["You can apply properties to the ",(0,r.jsx)(o.code,{children:"<Radio>"})," and the ",(0,r.jsx)(o.code,{children:"<Radio.Group>"}),"."]}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)(t,{})}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:(0,r.jsx)(o.a,{href:"#usage",children:"Usage"})}),"\n",(0,r.jsx)(o.h3,{id:"import",children:(0,r.jsx)(o.a,{href:"#import",children:"Import"})}),"\n",(0,r.jsx)(o.p,{children:"To import the component you just have to use this code below."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"import { Radio } from '@marigold/components';\n"})}),"\n",(0,r.jsx)(o.h3,{id:"appearance",children:(0,r.jsx)(o.a,{href:"#appearance",children:"Appearance"})}),"\n",(0,r.jsx)(l,{component:d}),"\n",(0,r.jsx)(o.h3,{id:"props",children:(0,r.jsx)(o.a,{href:"#props",children:"Props"})}),"\n",(0,r.jsx)(p,{props:[{property:"value",type:"string",description:"Set the value of the radio.",default:"none%"},{property:"error",type:"boolean",description:"If `true`, the radio is considered invalid and if set the `errorMessage` is shown.",default:"false"},{property:"width",type:"string",description:"Control the width of the field",default:"100%"},{property:"disabled",type:"boolean",description:"Set the radio disabled.",default:"false"}]}),"\n",(0,r.jsx)(o.h3,{id:"group-props",children:(0,r.jsx)(o.a,{href:"#group-props",children:"Group Props"})}),"\n",(0,r.jsx)(p,{props:[{property:"label",type:"string",description:"Set the label of the radio group.",default:"none"},{property:"orientation",type:"horizontal | vertical",description:"Set the radio group direction.",default:"vertical"},{property:"defaultValue",type:"string",description:"Set the default value for the radio group.",default:"none"},{property:"error",type:"boolean",description:"If `true`, the radio is considered invalid and if set the `errorMessage` is shown.",default:"false"},{property:"width",type:"string",description:"Control the width of the field",default:"100%"},{property:"readOnly",type:"boolean",description:"Set the radio group as read only.",default:"false"},{property:"required",type:"boolean",description:"Set the radio group required.",default:"false"},{property:"disabled",type:"boolean",description:"Set the radio group disabled.",default:"false"}]}),"\n",(0,r.jsx)(o.h2,{id:"examples",children:(0,r.jsx)(o.a,{href:"#examples",children:"Examples"})}),"\n",(0,r.jsxs)(o.p,{children:["In this example you can see a simple ",(0,r.jsx)(o.code,{children:"<Radio.Group>"})," within ",(0,r.jsx)(o.code,{children:"<Radio>"}),". There is also a single ",(0,r.jsx)(o.code,{children:"<Radio>"})," disabled."]}),"\n",(0,r.jsx)(o.h3,{id:"simple-radio",children:(0,r.jsx)(o.a,{href:"#simple-radio",children:"Simple Radio"})}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)(t,{})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@marigold/components\';\n\nexport const SimpleRadio = () => (\n  <Radio.Group label="Choose dessert" defaultValue="apple">\n    <Radio value="cupcake">\ud83e\uddc1 Cupcake</Radio>\n    <Radio value="ice cream">\ud83c\udf68 Ice Cream</Radio>\n    <Radio value="cookie" disabled>\n      \ud83c\udf6a Cookie (sold out)\n    </Radio>\n    <Radio value="apple">\ud83c\udf4e Apple</Radio>\n  </Radio.Group>\n);\n'})}),"\n",(0,r.jsx)(o.h3,{id:"disabed-radio",children:(0,r.jsx)(o.a,{href:"#disabed-radio",children:"Disabed Radio"})}),"\n",(0,r.jsxs)(o.p,{children:["Here you can see a complete disabled ",(0,r.jsx)(o.code,{children:"<Radio.Group>"}),". You can also just disable single ",(0,r.jsx)(o.code,{children:"<Radio>"}),"."]}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)(c,{})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@marigold/components\';\n\nexport const DisabledRadio = () => (\n  <Radio.Group label="Radio Group" disabled>\n    <Radio value="1">Option 1</Radio>\n    <Radio value="2">Option 2</Radio>\n    <Radio value="3" disabled>\n      Option 3\n    </Radio>\n    <Radio value="4">Option 4</Radio>\n  </Radio.Group>\n);\n'})}),"\n",(0,r.jsx)(o.h3,{id:"required-radio-with-horizontal-orientation",children:(0,r.jsx)(o.a,{href:"#required-radio-with-horizontal-orientation",children:"Required radio with horizontal orientation"})}),"\n",(0,r.jsxs)(o.p,{children:["In this example the ",(0,r.jsx)(o.code,{children:"<Radio.Group>"})," is required and the ",(0,r.jsx)(o.code,{children:"orientation"})," is set to ",(0,r.jsx)(o.code,{children:"horizontal"}),". With these props you can determine the direction of the ",(0,r.jsx)(o.code,{children:"<Radio>"})," options."]}),"\n",(0,r.jsx)(a,{children:(0,r.jsx)(h,{})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'import { Radio } from \'@marigold/components\';\n\nexport const RequiredRadio = () => (\n  <Radio.Group label="Radio Group" required orientation="horizontal">\n    <Radio value="1">Option 1</Radio>\n    <Radio value="2">Option 2</Radio>\n    <Radio value="3" disabled>\n      Option 3\n    </Radio>\n    <Radio value="4">Option 4</Radio>\n  </Radio.Group>\n);\n'})})]})}function s(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}o.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,n.ah)(),e.components),i=o.wrapper;return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return o=9015,e(e.s=o);var o}));var o=e.O();_N_E=o}]);