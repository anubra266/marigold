(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5850],{2391:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider",function(){return r(3154)}])},3154:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return o},title:function(){return a}});var l=r(5250),t=r(8570),o=!0,a="Slider";function i(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,t.ah)(),e.components),r=n.Toc,o=n.Preview,i=n.Slider,s=n.AppearanceTable,c=n.PropsTable,h=n.WidthSlider,p=n.DisabledSlider,u=n.StepSlider,x=n.MaxValueSlider,m=n.ControlledSlider,j=n.UncontrolledSlider,f=n.CurrencySlider;return s||d("AppearanceTable",!0),m||d("ControlledSlider",!0),f||d("CurrencySlider",!0),p||d("DisabledSlider",!0),x||d("MaxValueSlider",!0),o||d("Preview",!0),c||d("PropsTable",!0),i||d("Slider",!0),u||d("StepSlider",!0),r||d("Toc",!0),j||d("UncontrolledSlider",!0),h||d("WidthSlider",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#import","title":"Import"},{"anchor":"#apperance","title":"Apperance"},{"anchor":"#props","title":"Props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#width","title":"Width"},{"anchor":"#disabled","title":"Disabled"},{"anchor":"#step","title":"Step"},{"anchor":"#max-value","title":"Max value"},{"anchor":"#value-controlled","title":"Value (controlled)"},{"anchor":"#default-value-uncontrolled","title":"Default Value (uncontrolled)"},{"anchor":"#format-options","title":"Format Options"}]'}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"<Slider>"})," is a form component that allows users to quickly select a value within a range. They should be used when the upper and lower bounds of the range are known and static."]}),"\n",(0,l.jsx)(n.p,{children:"For accessibility reasons you can use the left and right arrow keys on your keyboard to select a value."}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(i,{formatOptions:{style:"percent"},step:.01,maxValue:1,defaultValue:[.5],width:300,children:(0,l.jsx)(n.p,{children:"Marigold Completition"})})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:(0,l.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,l.jsx)(n.h3,{id:"import",children:(0,l.jsx)(n.a,{href:"#import",children:"Import"})}),"\n",(0,l.jsx)(n.p,{children:"To import the component you just have to use this code below."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n"})}),"\n",(0,l.jsx)(n.h3,{id:"apperance",children:(0,l.jsx)(n.a,{href:"#apperance",children:"Apperance"})}),"\n",(0,l.jsx)(s,{component:a}),"\n",(0,l.jsx)(n.h3,{id:"props",children:(0,l.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,l.jsx)(c,{props:[{property:"disabled",type:"boolean",description:"If true, the slider is disabled.",default:"false"},{property:"value",type:"number[]",description:"The slider's value (controlled).",default:"none"},{property:"defaultValue",type:"number[]",description:"The slider's default value (uncontrolled).",default:"none"},{property:"maxValue",type:"number",description:"The slider's maximum value.",default:"100"},{property:"step",type:"number",description:"The slider's step value.",default:"none"},{property:"formatOptions",type:"Intl.NumberFormatOptions\t",description:"Set the format for the slider. E.g. percent",default:"none"},{property:"width",type:"string",description:"Control the width of the field",default:"100%"},{property:"...",type:"",description:"Yes you can use all regular attributes of input type = range!",default:""}]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:(0,l.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,l.jsx)(n.h3,{id:"width",children:(0,l.jsx)(n.a,{href:"#width",children:"Width"})}),"\n",(0,l.jsxs)(n.p,{children:["Here you can see a ",(0,l.jsx)(n.code,{children:"<Slider>"})," with a smaller width than the default."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(h,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:'import { Slider } from \'@marigold/components\';\n\nexport const WidthSlider = () => (\n  <Slider width="180px" aria-label="width">\n    Example\n  </Slider>\n);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"disabled",children:(0,l.jsx)(n.a,{href:"#disabled",children:"Disabled"})}),"\n",(0,l.jsxs)(n.p,{children:["You can also disable the ",(0,l.jsx)(n.code,{children:"<Slider>"})," if you want user not to select a value."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(p,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n\nexport const DisabledSlider = () => <Slider disabled>Example</Slider>;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"step",children:(0,l.jsx)(n.a,{href:"#step",children:"Step"})}),"\n",(0,l.jsxs)(n.p,{children:["This example shows how to use the ",(0,l.jsx)(n.code,{children:"step"})," property. The value is set in steps of 10."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(u,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n\nexport const StepSlider = () => <Slider step={10}>Example</Slider>;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"max-value",children:(0,l.jsx)(n.a,{href:"#max-value",children:"Max value"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to use a other ",(0,l.jsx)(n.code,{children:"maxValue"})," than 100. You can set the property and change it to the value you want."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(x,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n\nexport const MaxValueSlider = () => (\n  <Slider aria-label=\"maxValue\" maxValue={50}>\n    Example\n  </Slider>\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"value-controlled",children:(0,l.jsx)(n.a,{href:"#value-controlled",children:"Value (controlled)"})}),"\n",(0,l.jsxs)(n.p,{children:["This example shows how to build a controlled ",(0,l.jsx)(n.code,{children:"<Slider>"}),". The ",(0,l.jsx)(n.code,{children:"value"})," prop together with the ",(0,l.jsx)(n.code,{children:"onChange"}),' prop are used to update and set the current value. The default value in the example is set to "75", if you manually change the value it will be updated. If you want an uncontrolled ',(0,l.jsx)(n.code,{children:"<Slider>"})," see the next example."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(m,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import React, { useState } from 'react';\nimport { Slider } from '@marigold/components';\n\nexport const ControlledSlider = () => {\n  const [value, setValue] = useState<number[] | number>(75);\n  return (\n    <Slider value={value} onChange={setValue}>\n      Example\n    </Slider>\n  );\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"default-value-uncontrolled",children:(0,l.jsx)(n.a,{href:"#default-value-uncontrolled",children:"Default Value (uncontrolled)"})}),"\n",(0,l.jsxs)(n.p,{children:["If you just set the ",(0,l.jsx)(n.code,{children:"defaultValue"})," property, your ",(0,l.jsx)(n.code,{children:"<Slider>"})," will be uncontrolled. In this case you don't have an ",(0,l.jsx)(n.code,{children:"onChange"})," event. If you want a controlled ",(0,l.jsx)(n.code,{children:"<Slider>"})," see the example above."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(j,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n\nexport const UncontrolledSlider = () => (\n  <Slider defaultValue={[25]}>Example</Slider>\n);\n"})}),"\n",(0,l.jsx)(n.h3,{id:"format-options",children:(0,l.jsx)(n.a,{href:"#format-options",children:"Format Options"})}),"\n",(0,l.jsxs)(n.p,{children:["In this example you can see which format the ",(0,l.jsx)(n.code,{children:"<Slider>"})," can have. You can use all NumberFormatOptions for that."]}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(f,{})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { Slider } from '@marigold/components';\n\nexport const CurrencySlider = () => (\n  <>\n    <Slider formatOptions={{ style: 'currency', currency: 'EUR' }}>\n      Price\n    </Slider>\n    <Slider formatOptions={{ style: 'percent' }} step={0.01} maxValue={1}>\n      Percent\n    </Slider>\n  </>\n);\n"})})]})}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),r=n.wrapper;return r?(0,l.jsx)(r,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=2391,e(e.s=n);var n}));var n=e.O();_N_E=n}]);