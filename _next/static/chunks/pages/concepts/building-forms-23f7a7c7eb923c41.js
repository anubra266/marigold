(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7247],{8121:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/concepts/building-forms",function(){return r(9760)}])},9760:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i},title:function(){return a}});var t=r(5250),o=r(7160),i=!0,a="Building Forms";function l(e){var n=Object.assign({h2:"h2",a:"a",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3"},(0,o.ah)(),e.components),r=n.Toc,i=n.Preview,a=n.LayoutForms,l=n.ErrorValidation,d=n.InteractionDemo,c=n.SubmitForm,m=n.SubmitFormWithReactHookForm;return l||s("ErrorValidation",!0),d||s("InteractionDemo",!0),a||s("LayoutForms",!0),i||s("Preview",!0),c||s("SubmitForm",!0),m||s("SubmitFormWithReactHookForm",!0),r||s("Toc",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{selector:"#toc",items:'[{"anchor":"#marigold-form-components","title":"Marigold Form Components"},{"anchor":"#how-to-layout-a-form","title":"How to layout a form?"},{"anchor":"#controlled-or-uncontrolled-components","title":"Controlled or uncontrolled Components?"},{"anchor":"#interactive-forms","title":"Interactive Forms"},{"anchor":"#error-handling","title":"Error Handling"},{"anchor":"#logical-interaction","title":"Logical Interaction"},{"anchor":"#submitting-a-form","title":"Submitting a form"},{"anchor":"#handling-complex-forms-and-form-state","title":"Handling complex forms and form state"},{"anchor":"#how-to-do-validation-and-error-signaling","title":"How to do validation and error signaling"}]'}),"\n",(0,t.jsx)(n.h2,{id:"marigold-form-components",children:(0,t.jsx)(n.a,{href:"#marigold-form-components",children:"Marigold Form Components"})}),"\n",(0,t.jsx)(n.p,{children:"Form components are individual elements that make up a form, such as text fields, checkboxes, radio buttons, select fields, text areas and buttons. They allow user input, selection and actions."}),"\n",(0,t.jsx)(n.p,{children:"Marigold has a set of form components that you can use to build your form."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/autocomplete",children:"Autocomplete"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/button",children:"Button"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/checkbox",children:"Checkbox"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/number-field",children:"NumberField"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/radio",children:"Radio"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/select",children:"Select"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/slider",children:"Slider"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/switch",children:"Switch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/text-area",children:"TextArea"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/components/text-field",children:"TextField"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-layout-a-form",children:(0,t.jsx)(n.a,{href:"#how-to-layout-a-form",children:"How to layout a form?"})}),"\n",(0,t.jsx)(n.p,{children:"A form layout should be structured in a logical and easy-to-understand manner.\nThis typically includes grouping related fields together, using clear and concise labels for each field, and providing clear instructions for filling out the form. Additionally, it is important to consider the overall layout of the form, including the use of white space and the placement of buttons and other elements.\nAccessibility best practices should be followed, such as providing clear, descriptive labels and ensuring that form fields are appropriately labeled and structured for screen readers."}),"\n",(0,t.jsxs)(n.p,{children:["Here you can see how to layout a classic form with Marigold's ",(0,t.jsx)(n.code,{children:"<TextField>"})," and ",(0,t.jsx)(n.code,{children:"<Select>"})," components."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to see more examples of forms with Marigold, check out our recipes: ",(0,t.jsx)(n.a,{href:"/recipes/form-recipes",children:" Marigold Form Recipes"})]}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)(a,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import {\n  Button,\n  Checkbox,\n  Columns,\n  FieldGroup,\n  Headline,\n  Select,\n  Stack,\n  TextField,\n} from \'@marigold/components\';\n\nexport const LayoutForms = () => (\n  <FieldGroup labelWidth="medium">\n    <Headline level="2">Account Registration</Headline>\n    <Stack space="medium">\n      <Columns columns={[2, 2]} space="medium">\n        <TextField\n          label="Firstname:"\n          required\n          description="Please enter your first name."\n          placeholder="Firstname"\n        />\n        <TextField\n          label="Name:"\n          required\n          description="Please enter your name."\n          placeholder="Name"\n        />\n      </Columns>\n      <Stack space="medium">\n        <TextField\n          label="Phone:"\n          required\n          placeholder="Phone"\n          type="tel"\n          description="Please enter your phone number."\n        />\n        <TextField\n          label="E-Mail:"\n          description="Please enter your E-Mail adress."\n          placeholder="E-Mail"\n          required\n        />\n        <Select label="Country:" description="Please select your country.">\n          <Select.Option key={\'germany\'}>Germany</Select.Option>\n          <Select.Option key={\'austria\'}>Austria</Select.Option>\n          <Select.Option key={\'switzerland\'}>Switzerland</Select.Option>\n        </Select>\n        <Checkbox>Agree to the terms</Checkbox>\n      </Stack>\n    </Stack>\n    <Stack alignX="right">\n      <Button variant="primary" size="small" type="submit">\n        Submit\n      </Button>\n    </Stack>\n  </FieldGroup>\n);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"controlled-or-uncontrolled-components",children:(0,t.jsx)(n.a,{href:"#controlled-or-uncontrolled-components",children:"Controlled or uncontrolled Components?"})}),"\n",(0,t.jsxs)(n.p,{children:["In React, there are two main types of form components: controlled and uncontrolled.\nControlled components are controlled via React state (e.g. ",(0,t.jsx)(n.code,{children:"useState"}),"). Any changes to the value will update the state variable. This happens when the user interacts with a component and an event handler is called, ",(0,t.jsx)(n.code,{children:"onChange"})," for example.\nUncontrolled components don't use any state to update. You can use props like ",(0,t.jsx)(n.code,{children:"defaultValue"})," or ",(0,t.jsx)(n.code,{children:"defaultChecked"})," to set their initial value."]}),"\n",(0,t.jsxs)(n.p,{children:["When the state or props change, React will automatically re-render the component with its new data. This is called ",(0,t.jsx)(n.a,{href:"https://www.joshwcomeau.com/react/data-binding/",children:"data-binding"}),". Components recive data from its parents component and update their output in response to changes in that data by using state and props, this allows to have a dynamic and reactive user interface."]}),"\n",(0,t.jsx)(n.h2,{id:"interactive-forms",children:(0,t.jsx)(n.a,{href:"#interactive-forms",children:"Interactive Forms"})}),"\n",(0,t.jsx)(n.p,{children:"Interactve forms can have several features like error validation, real-time feedback (password-stregth indicator), logic (hide fields if a several field is checked etc.) or autocomplete.\nAll these features help to make interactive fields more user friendly and more efficient."}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:(0,t.jsx)(n.a,{href:"#error-handling",children:"Error Handling"})}),"\n",(0,t.jsxs)(n.p,{children:["Marigold's form components comes with the ",(0,t.jsx)(n.code,{children:"error"})," prop. You can use it to show or hide the error message (",(0,t.jsx)(n.code,{children:"errorMessage"}),"). If no error is present the field will display a help text (",(0,t.jsx)(n.code,{children:"description"}),"), if given, instead."]}),"\n",(0,t.jsx)(n.p,{children:"In this example below you can have an example on how to check if the E-Mail adress is correctly filled.\nTry out and type something!"}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)(l,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport {\n  Button,\n  Checkbox,\n  Columns,\n  FieldGroup,\n  Headline,\n  Select,\n  Stack,\n  TextField,\n} from \'@marigold/components\';\n\nexport const ErrorValidation = () => {\n  const [value, setValue] = useState(\'\');\n  return (\n    <FieldGroup labelWidth="medium">\n      <Headline level="2">Account Registration</Headline>\n      <Stack space="medium">\n        <Columns columns={[2, 2]} space="medium">\n          <TextField\n            label="Firstname:"\n            required\n            description="Please enter your first name."\n            placeholder="Firstname"\n            disabled\n          />\n          <TextField\n            label="Name:"\n            required\n            description="Please enter your name."\n            placeholder="Name"\n            disabled\n          />\n        </Columns>\n        <Stack space="medium">\n          <TextField\n            label="Phone:"\n            required\n            disabled\n            placeholder="Phone"\n            type="tel"\n            description="Please enter your phone number."\n          />\n          <TextField\n            label="E-Mail:"\n            description="Please enter your E-Mail adress."\n            placeholder="E-Mail"\n            required\n            onChange={e => setValue(e)}\n            error={\n              value.length > 0 && !/^\\S+@\\S+\\.\\S+$/.test(value) ? true : false\n            }\n            errorMessage="The field is required. Please enter a valid E-Mail adress."\n          />\n          <Select\n            label="Country:"\n            disabled\n            description="Please select your country."\n          >\n            <Select.Option key={\'germany\'} textValue={\'germany\'}>\n              Germany\n            </Select.Option>\n            <Select.Option key={\'austria\'} textValue={\'austria\'}>\n              Austria\n            </Select.Option>\n            <Select.Option key={\'switzerland\'} textValue={\'switzerland\'}>\n              Switzerland\n            </Select.Option>\n          </Select>\n          <Checkbox disabled>Agree to the terms</Checkbox>\n        </Stack>\n      </Stack>\n      <Stack alignX="right">\n        <Button variant="primary" size="small" type="submit" disabled>\n          Submit\n        </Button>\n      </Stack>\n    </FieldGroup>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"logical-interaction",children:(0,t.jsx)(n.a,{href:"#logical-interaction",children:"Logical Interaction"})}),"\n",(0,t.jsxs)(n.p,{children:["You can have interactive forms which contains logical aspects. In this example you can interact with the ",(0,t.jsx)(n.code,{children:"<Select>"})," and a new component ",(0,t.jsx)(n.code,{children:"<Checkbox>"})," will appear. You can try out and switch the value of the select field."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)(d,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport {\n  Button,\n  Checkbox,\n  Columns,\n  FieldGroup,\n  Headline,\n  Select,\n  Stack,\n  TextField,\n} from \'@marigold/components\';\n\nexport const InteractionDemo = () => {\n  const [value] = useState(\'\');\n  const [selected, setSelected] = useState<string | number>(\'\');\n  return (\n    <FieldGroup labelWidth="medium">\n      <Headline level="2">Account Registration</Headline>\n      <Stack space="medium">\n        <Columns columns={[2, 2]} space="medium">\n          <TextField\n            label="Firstname:"\n            required\n            description="Please enter your first name."\n            placeholder="Firstname"\n            disabled\n          />\n          <TextField\n            label="Name:"\n            required\n            description="Please enter your name."\n            placeholder="Name"\n            disabled\n          />\n        </Columns>\n        <Stack space="medium">\n          <TextField\n            label="Phone:"\n            required\n            disabled\n            placeholder="Phone"\n            description="Please enter your phone number."\n            type="tel"\n          />\n          <TextField\n            label="E-Mail:"\n            description="Please enter your E-Mail adress."\n            placeholder="E-Mail"\n            required\n            disabled\n            error={\n              value.length > 0 && !/^\\S+@\\S+\\.\\S+$/.test(value) ? true : false\n            }\n            errorMessage="The field is required. Please enter a valid E-Mail adress."\n          />\n          <Select\n            label="Country:"\n            description="Please select your country."\n            onChange={setSelected}\n          >\n            <Select.Option key={\'none\'}>Select an option...</Select.Option>\n            <Select.Option key={\'germany\'}>Germany</Select.Option>\n            <Select.Option key={\'austria\'}>Austria</Select.Option>\n            <Select.Option key={\'switzerland\'}>Switzerland</Select.Option>\n          </Select>\n          {selected !== \'\' && selected !== \'none\' && (\n            <Checkbox>Agree to the terms</Checkbox>\n          )}\n        </Stack>\n      </Stack>\n      <Stack alignX="right">\n        <Button variant="primary" size="small" type="submit" disabled>\n          Submit\n        </Button>\n      </Stack>\n    </FieldGroup>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"submitting-a-form",children:(0,t.jsx)(n.a,{href:"#submitting-a-form",children:"Submitting a form"})}),"\n",(0,t.jsx)(n.p,{children:"In this example you can see how a form with all its fields can be submitted. The submitted data will be displayed in an alert message."}),"\n",(0,t.jsxs)(n.p,{children:["For validating the form we are using ",(0,t.jsx)(n.a,{href:"https://zod.dev/",children:(0,t.jsx)(n.code,{children:"zod"})}),". It is a library for building schemas, which can be used to validate inputs. It is especially useful when you have more complex validation rules."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)(c,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { FormEventHandler, useState } from \'react\';\nimport { z } from \'zod\';\nimport { zfd } from \'zod-form-data\';\nimport {\n  Button,\n  Checkbox,\n  Columns,\n  FieldGroup,\n  Headline,\n  Select,\n  Stack,\n  TextField,\n} from \'@marigold/components\';\n\nexport const SubmitForm = () => {\n  const schemaData = z.object({\n    firstname: z.string().min(1),\n    name: z.string().min(1),\n    phone: z.string().min(6),\n    mail: z.string().email(),\n    country: z.string(),\n    terms: zfd.checkbox(),\n  });\n\n  const [error, setError] = useState<string[]>([]);\n  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {\n    e.preventDefault();\n    const errorList: Array<any> = [];\n    const formData = new FormData(e.target as HTMLFormElement);\n    const data = Object.fromEntries(formData);\n    const validatedForm = schemaData.safeParse(data);\n\n    if (!validatedForm.success) {\n      validatedForm.error.issues.map(e => {\n        return errorList.push(e.path.toString());\n      });\n      setError(errorList);\n    } else {\n      alert(JSON.stringify(data));\n    }\n  };\n\n  return (\n    <FieldGroup labelWidth="medium">\n      <Headline level="2">Account Registration</Headline>\n      <form onSubmit={handleSubmit}>\n        <Stack space="medium">\n          <Columns columns={[2, 2]} space="medium">\n            <TextField\n              name="firstname"\n              label="Firstname:"\n              required\n              description="Please enter your first name."\n              placeholder="Firstname"\n              error={error.includes(\'firstname\')}\n              errorMessage="The field is required. Please enter your firstname."\n            />\n            <TextField\n              name="name"\n              label="Name:"\n              required\n              description="Please enter your name."\n              placeholder="Name"\n              error={error.includes(\'name\')}\n              errorMessage="The field is required. Please enter your name."\n            />\n          </Columns>\n          <Stack space="medium">\n            <TextField\n              name="phone"\n              label="Phone:"\n              required\n              placeholder="Phone"\n              type="tel"\n              description="Please enter your phone number."\n              error={error.includes(\'phone\')}\n              errorMessage="The field is required. Please enter a valid phone number."\n            />\n            <TextField\n              label="E-Mail:"\n              description="Please enter your E-Mail adress"\n              placeholder="E-Mail"\n              name="mail"\n              required\n              error={error.includes(\'mail\')}\n              errorMessage="The field is required. Please enter a valid E-Mail adress."\n            />\n            <Select\n              name="country"\n              label="Country:"\n              description="Please select your country."\n            >\n              <Select.Option key={\'none\'}>Select an option...</Select.Option>\n              <Select.Option key={\'germany\'}>Germany</Select.Option>\n              <Select.Option key={\'austria\'}>Austria</Select.Option>\n              <Select.Option key={\'switzerland\'}>Switzerland</Select.Option>\n            </Select>\n            <Checkbox name="terms">Agree to the terms</Checkbox>\n          </Stack>\n        </Stack>\n        <Stack alignX="right">\n          <Button variant="primary" size="small" type="submit">\n            Submit\n          </Button>\n        </Stack>\n      </form>\n    </FieldGroup>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h2,{id:"handling-complex-forms-and-form-state",children:(0,t.jsx)(n.a,{href:"#handling-complex-forms-and-form-state",children:"Handling complex forms and form state"})}),"\n",(0,t.jsxs)(n.p,{children:["You can simplify form handling in your React components and avoid repetitive tasks such as manually updating the form state, validating user inputs, and handling form submissions.\nWe decided to use ",(0,t.jsx)(n.code,{children:"react-form-hook"})," for this because its reducing re-renders caused by state updates, you don't have much to configure and supports integrating UI libraries.\nFor the later we use the ",(0,t.jsx)(n.code,{children:"<Controller>"})," component from ",(0,t.jsx)(n.code,{children:"react-hook-form"}),", which must be wrapped around each Marigold component that should submits data."]}),"\n",(0,t.jsxs)(n.p,{children:["In the formular we have used ",(0,t.jsx)(n.code,{children:"<TextField>"}),", ",(0,t.jsx)(n.code,{children:"<Select>"})," and ",(0,t.jsx)(n.code,{children:"<Checkbox>"})," components. These components are wrapped around with the ",(0,t.jsx)(n.code,{children:"<Controller>"})," component from ",(0,t.jsx)(n.code,{children:"react-hook-form"}),". The ",(0,t.jsx)(n.code,{children:"<Controller>"})," component acts as a bridge between the form element and the ",(0,t.jsx)(n.code,{children:"react-hook-form"})," state management. It updates the ",(0,t.jsx)(n.code,{children:"react-hook-form"})," state whenever the value of the form element changes."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsx)(m,{})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useForm, SubmitHandler, Controller } from \'react-hook-form\';\n\nimport {\n  Button,\n  FieldGroup,\n  Select,\n  Stack,\n  TextField,\n  Headline,\n  Columns,\n  Checkbox,\n} from \'@marigold/components\';\n\ninterface IFormInputs {\n  firstName: string;\n  name: string;\n  phone: string;\n  mail: string;\n  country: string | number;\n  terms: boolean;\n}\nexport const SubmitFormWithReactHookForm = () => {\n  const {\n    control,\n    handleSubmit,\n    formState: { isValid },\n  } = useForm({\n    mode: \'onChange\',\n    defaultValues: {\n      firstName: \'\',\n      name: \'\',\n      phone: \'\',\n      mail: \'\',\n      country: \'\',\n      terms: false,\n    },\n  });\n\n  const onSubmit: SubmitHandler<IFormInputs> = data => {\n    alert(JSON.stringify(data));\n  };\n\n  return (\n    <FieldGroup labelWidth="medium">\n      <Headline level="2">Account Registration</Headline>\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <Stack space="medium">\n          <Columns columns={[2, 2]} space="medium">\n            <Controller\n              name="firstName"\n              control={control}\n              rules={{ required: true }}\n              render={({ field }) => (\n                <TextField\n                  {...field}\n                  label="Firstname:"\n                  required\n                  description="Please enter your first name."\n                  placeholder="Firstname"\n                  error={field.value.length < 0 ? true : false}\n                  errorMessage="The field is required. Please enter your firstname."\n                />\n              )}\n            />\n            <Controller\n              name="name"\n              control={control}\n              rules={{ required: true }}\n              render={({ field }) => (\n                <TextField\n                  {...field}\n                  label="Name:"\n                  required\n                  description="Please enter your name."\n                  placeholder="Name"\n                  error={field.value.length < 0 ? true : false}\n                  errorMessage="The field is required. Please enter your name."\n                />\n              )}\n            />\n          </Columns>\n          <Stack space="medium">\n            <Controller\n              name="phone"\n              control={control}\n              rules={{\n                required: true,\n                min: 6,\n              }}\n              render={({ field }) => (\n                <TextField\n                  {...field}\n                  label="Phone:"\n                  required\n                  placeholder="Phone"\n                  type="tel"\n                  description="Please enter your phone number."\n                  error={!/^[0-9]*$/.test(field.value) ? true : false}\n                  errorMessage="The field is required. Please enter a valid phone number."\n                />\n              )}\n            />\n            <Controller\n              name="mail"\n              control={control}\n              rules={{ required: true }}\n              render={({ field }) => (\n                <TextField\n                  {...field}\n                  label="E-Mail:"\n                  description="Please enter your E-Mail adress."\n                  placeholder="E-Mail"\n                  required\n                  error={\n                    field.value.length > 0 &&\n                    !/^\\S+@\\S+\\.\\S+$/.test(field.value)\n                      ? true\n                      : false\n                  }\n                  errorMessage="The field is required. Please enter a valid E-Mail adress."\n                />\n              )}\n            />\n            <Controller\n              name="country"\n              control={control}\n              render={({ field }) => (\n                <Select\n                  {...field}\n                  label="Country:"\n                  description="Please select your country."\n                >\n                  <Select.Option key={\'none\'}>\n                    Select an option...\n                  </Select.Option>\n                  <Select.Option key={\'germany\'}>Germany</Select.Option>\n                  <Select.Option key={\'austria\'}>Austria</Select.Option>\n                  <Select.Option key={\'switzerland\'}>Switzerland</Select.Option>\n                </Select>\n              )}\n            />\n            <Controller\n              name="terms"\n              control={control}\n              render={({ field }) => (\n                <Checkbox defaultChecked={field.value}>\n                  Agree to the terms\n                </Checkbox>\n              )}\n            />\n          </Stack>\n        </Stack>\n        <Stack alignX="right">\n          <Button\n            variant="primary"\n            size="small"\n            type="submit"\n            disabled={!isValid}\n          >\n            Submit\n          </Button>\n        </Stack>\n      </form>\n    </FieldGroup>\n  );\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-do-validation-and-error-signaling",children:(0,t.jsx)(n.a,{href:"#how-to-do-validation-and-error-signaling",children:"How to do validation and error signaling"})}),"\n",(0,t.jsxs)(n.p,{children:["Some fields are required and throw error messages if you don't fill them out.\nFor this to work, ",(0,t.jsx)(n.code,{children:"react-hook-form"})," has a property ",(0,t.jsx)(n.code,{children:"formState"}),", which contains the boolean ",(0,t.jsx)(n.code,{children:"isValid"}),". This prop is set to ",(0,t.jsx)(n.code,{children:"true"})," if the form doesn't have errors. ",(0,t.jsx)(n.code,{children:"isValid"})," will always observe the entire form to validate."]}),"\n",(0,t.jsxs)(n.p,{children:["We don't explicit need to use a ",(0,t.jsx)(n.code,{children:"onChange"})," event, instead of using useState and set a value we used directly ",(0,t.jsx)(n.code,{children:"defaultValue"}),". With that the component is a uncontrolled component, it never gets undefined or null."]}),"\n",(0,t.jsxs)(n.p,{children:["There are ",(0,t.jsx)(n.code,{children:"rules"})," that can be applied on the components to trigger the validation, e.g. ",(0,t.jsx)(n.code,{children:"required: true"}),". Our Marigold form components already have error properties and error messages build in. Now it should be combined. In the ",(0,t.jsx)(n.code,{children:"handleSubmit"})," function we check if the recived data is valid, if that isn't the case we give the error value to the component and display the error message."]})]})}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components),r=n.wrapper;return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=8121,e(e.s=n);var n}));var n=e.O();_N_E=n}]);