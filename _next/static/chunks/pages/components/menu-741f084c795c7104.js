(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7456],{4960:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/menu",function(){return t(2539)}])},2539:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},title:function(){return s}});var o=t(5250),r=t(8570),i=!0,s="Menu";function a(e){var n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",h3:"h3",pre:"pre"},(0,r.ah)(),e.components),t=n.Toc,i=n.Preview,a=n.Button,l=n.Menu,u=n.AppearanceTable,d=n.PropsTable,h=n.BasicActionMenu,p=n.MenuDisabled,m=n.KebabMenu,x=n.OpenMenuRemotely,g=n.OpenDialogFromMenu;return u||c("AppearanceTable",!0),h||c("BasicActionMenu",!0),a||c("Button",!0),m||c("KebabMenu",!0),l||c("Menu",!0),l.Item||c("Menu.Item",!0),l.Trigger||c("Menu.Trigger",!0),p||c("MenuDisabled",!0),g||c("OpenDialogFromMenu",!0),x||c("OpenMenuRemotely",!0),i||c("Preview",!0),d||c("PropsTable",!0),t||c("Toc",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{selector:"#toc",items:'[{"anchor":"#usage","title":"Usage"},{"anchor":"#apperance","title":"Apperance"},{"anchor":"#props","title":"Props"},{"anchor":"#trigger-props","title":"Trigger props"},{"anchor":"#examples","title":"Examples"},{"anchor":"#simple-menu-with-action","title":"Simple Menu with Action"},{"anchor":"#disabled-menu","title":"Disabled Menu"},{"anchor":"#actionmenu","title":"ActionMenu"},{"anchor":"#menu-with-onopenchange-property","title":"Menu with onOpenChange property"},{"anchor":"#menu-item-opens-dialog","title":"Menu item opens Dialog"}]'}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"<Menu>"})," component allows you to define a menu element. It's useful when you want a list with options or actions."]}),"\n",(0,o.jsxs)(n.p,{children:["It is structured in three parts: ",(0,o.jsx)(n.code,{children:"<Menu.Trigger>"}),", ",(0,o.jsx)(n.code,{children:"<Menu>"})," and ",(0,o.jsx)(n.code,{children:"<Menu.Item>"}),". And there is a simple ",(0,o.jsx)(n.code,{children:"<Button>"})," necessary for handling the menu trigger."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want create a variant, you can style different parts of the ",(0,o.jsx)(n.code,{children:"<Menu>"})," separate, there is the ",(0,o.jsx)(n.code,{children:"container"})," part and the ",(0,o.jsx)(n.code,{children:"item"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["There is also a new Component called ",(0,o.jsx)(n.code,{children:"<ActionMenu>"})," which you can use if you want to take some actions. You can have a look on how it works in the examples. It works quiet similar to the normal ",(0,o.jsx)(n.code,{children:"<Menu>"})," component. All you have to add are the ",(0,o.jsx)(n.code,{children:"<Menu.Item>"}),"s."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsxs)(l.Trigger,{children:[(0,o.jsx)(a,{variant:"menu",size:"small",children:(0,o.jsx)(n.p,{children:"Choose Menu"})}),(0,o.jsxs)(l,{children:[(0,o.jsx)(l.Item,{children:"\ud83c\udf54 Burger"},"burger"),"\n",(0,o.jsx)(l.Item,{children:"\ud83c\udf55 Pizza"},"pizza"),"\n",(0,o.jsx)(l.Item,{children:"\ud83e\udd57 Salad"},"salad"),"\n",(0,o.jsx)(l.Item,{children:"\ud83c\udf5f Fries"},"fries")]})]})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:(0,o.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,o.jsx)(n.h3,{id:"apperance",children:(0,o.jsx)(n.a,{href:"#apperance",children:"Apperance"})}),"\n",(0,o.jsx)(u,{component:s}),"\n",(0,o.jsx)(n.h3,{id:"props",children:(0,o.jsx)(n.a,{href:"#props",children:"Props"})}),"\n",(0,o.jsx)(d,{props:[{property:"onAction",type:"(key: Key) => void",description:"Handler that should call an action.",default:"none"}]}),"\n",(0,o.jsx)(n.h3,{id:"trigger-props",children:(0,o.jsx)(n.a,{href:"#trigger-props",children:"Trigger props"})}),"\n",(0,o.jsx)(d,{props:[{property:"disabled",type:"boolean",description:"Disables the complete menu.",default:"false"},{property:"open",type:"boolean",description:"Set the open state of the menu.",default:"false"},{property:"onOpenChange",type:"() => void",description:"Handler that is called when the overlay's open state changes.",default:"none"}]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:(0,o.jsx)(n.a,{href:"#examples",children:"Examples"})}),"\n",(0,o.jsx)(n.h3,{id:"simple-menu-with-action",children:(0,o.jsx)(n.a,{href:"#simple-menu-with-action",children:"Simple Menu with Action"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example you can see a simple ",(0,o.jsx)(n.code,{children:"<Menu>"})," with some items to select. After selection an action can be applied."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)(h,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import React from \'react\';\nimport { Button, Menu } from \'@marigold/components\';\n\nexport const BasicActionMenu = () => {\n  return (\n    <Menu.Trigger>\n      <Button variant="menu" size="small">\n        Menu\n      </Button>\n      <Menu onAction={action => alert(`Your action: ${action}`)}>\n        <Menu.Item key="edit">Open in editor</Menu.Item>\n        <Menu.Item key="settings">Settings</Menu.Item>\n        <Menu.Item key="delete">Delete</Menu.Item>\n      </Menu>\n    </Menu.Trigger>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"disabled-menu",children:(0,o.jsx)(n.a,{href:"#disabled-menu",children:"Disabled Menu"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example the ",(0,o.jsx)(n.code,{children:"<Menu.Trigger>"})," has set its prop ",(0,o.jsx)(n.code,{children:"disabled"}),". So you can't interact with the ",(0,o.jsx)(n.code,{children:"<Menu>"})," anymore."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)(p,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Button, Menu } from \'@marigold/components\';\n\nexport const MenuDisabled = () => {\n  return (\n    <Menu.Trigger disabled>\n      <Button variant="menu" size="small">\n        Choose Menu\n      </Button>\n      <Menu>\n        <Menu.Item key="burger">\ud83c\udf54 Burger</Menu.Item>\n        <Menu.Item key="pizza">\ud83c\udf55 Pizza</Menu.Item>\n        <Menu.Item key="salad">\ud83e\udd57 Salad</Menu.Item>\n        <Menu.Item key="fries">\ud83c\udf5f Fries</Menu.Item>\n      </Menu>\n    </Menu.Trigger>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"actionmenu",children:(0,o.jsx)(n.a,{href:"#actionmenu",children:"ActionMenu"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, an ",(0,o.jsx)(n.code,{children:"Icon"})," has been inserted into the ",(0,o.jsx)(n.code,{children:"Button"})," to serve as a kebab menu.\nAs shown here, any type of icon can be used within the menu and there are no restrictions.\nIt is very similar to the normal ",(0,o.jsx)(n.code,{children:"<Menu>"})," component."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)(m,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { ActionMenu, Menu } from \'@marigold/components\';\nimport React from \'react\';\n\nexport const KebabMenu = () => {\n  return (\n    <ActionMenu onAction={action => alert(`Action: ${action}`)}>\n      <Menu.Item key="edit">Open in editor</Menu.Item>\n      <Menu.Item key="settings">Settings</Menu.Item>\n      <Menu.Item key="delete">Delete</Menu.Item>\n    </ActionMenu>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"menu-with-onopenchange-property",children:(0,o.jsx)(n.a,{href:"#menu-with-onopenchange-property",children:"Menu with onOpenChange property"})}),"\n",(0,o.jsxs)(n.p,{children:["Here you can see how the properties ",(0,o.jsx)(n.code,{children:"open"})," and ",(0,o.jsx)(n.code,{children:"onOpenChange"})," are used together with a ",(0,o.jsx)(n.code,{children:"<Button>"}),". A function handles the state for the menu. You just can open the ",(0,o.jsx)(n.code,{children:"<Menu>"})," with the external ",(0,o.jsx)(n.code,{children:"<Button>"})," component, not with the menu button.\nA common use Case is also to open the ",(0,o.jsx)(n.code,{children:"<Menu>"})," with the keyboard."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)(x,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Menu, Button, Stack } from \'@marigold/components\';\nimport { useState } from \'react\';\n\nexport const OpenMenuRemotely = () => {\n  const [open, setOpen] = useState(false);\n  const handleAction = () => {\n    setOpen(!open);\n  };\n\n  return (\n    <Stack space="medium">\n      <Button variant="primary" onPress={() => setOpen(!open)}>\n        Open Menu with me\n      </Button>\n      <hr />\n      <Menu.Trigger open={open}>\n        <Button variant="menu" size="small">\n          Menu\n        </Button>\n        <Menu onAction={handleAction}>\n          <Menu.Item key="one">Settings</Menu.Item>\n          <Menu.Item key="two">Preferences</Menu.Item>\n          <Menu.Item key="three">Save</Menu.Item>\n        </Menu>\n      </Menu.Trigger>\n    </Stack>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"menu-item-opens-dialog",children:(0,o.jsx)(n.a,{href:"#menu-item-opens-dialog",children:"Menu item opens Dialog"})}),"\n",(0,o.jsxs)(n.p,{children:["This Example shows how to open a ",(0,o.jsx)(n.a,{href:"/components/dialog/",children:(0,o.jsx)(n.code,{children:"<Dialog>"})})," from a ",(0,o.jsx)(n.code,{children:"<Menu.Item>"}),".\nFor that you have not to use a ",(0,o.jsx)(n.code,{children:"<Dialog.Trigger>"}),", instead use our ",(0,o.jsx)(n.code,{children:"<Dialog.Controller>"}),". With that you don't have to use a ",(0,o.jsx)(n.code,{children:"<Button>"})," to trigger the dialog."]}),"\n",(0,o.jsx)(i,{children:(0,o.jsx)(g,{})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport {\n  Body,\n  Button,\n  Dialog,\n  Footer,\n  Header,\n  Headline,\n  Inline,\n  Menu,\n  Stack,\n  Text,\n} from \'@marigold/components\';\n\nexport const OpenDialogFromMenu = () => {\n  const [open, setDialogOpen] = useState(false);\n  const handleAction = (action: \'save\' | \'delete\') => {\n    switch (action) {\n      case \'save\':\n        alert(\'saved!\');\n        break;\n      case \'delete\':\n        setDialogOpen(true);\n        break;\n      default:\n        throw new Error(`Unhandled action "${action}"!`);\n    }\n  };\n\n  return (\n    <>\n      <Menu.Trigger>\n        <Button variant="menu" size="small">\n          Settings\n        </Button>\n        <Menu onAction={handleAction}>\n          <Menu.Item key="save">Save</Menu.Item>\n          <Menu.Item key="delete">Delete</Menu.Item>\n        </Menu>\n      </Menu.Trigger>\n      <Dialog.Controller open={open} onOpenChange={setDialogOpen}>\n        <Dialog closeButton>\n          {({ close, titleProps }) => (\n            <Stack space="medium">\n              <Header>\n                <Headline {...titleProps}>Confirm delete</Headline>\n              </Header>\n              <Body>\n                <Text>Do you really wanna delete this?</Text>\n              </Body>\n              <Footer>\n                <Inline space="medium">\n                  <Button size="small" variant="ghost" onPress={close}>\n                    Cancel\n                  </Button>\n                  <Button size="small" variant="primary" onPress={close}>\n                    Delete\n                  </Button>\n                </Inline>\n              </Footer>\n            </Stack>\n          )}\n        </Dialog>\n      </Dialog.Controller>\n    </>\n  );\n};\n'})})]})}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components),t=n.wrapper;return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],(function(){return n=4960,e(e.s=n);var n}));var n=e.O();_N_E=n}]);