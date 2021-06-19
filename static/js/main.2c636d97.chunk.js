(this["webpackJsonp@uiw/react-only-when"]=this["webpackJsonp@uiw/react-only-when"]||[]).push([[0],{532:function(n,e,t){},533:function(n,e,t){"use strict";t.r(e);var i=t(124),s=t.n(i),o=t(132),l=t(131),c=t.p+"static/media/logo.3931a054.svg",a=t(72),r=t(1),d=t.n(r),h=t(9),u=t.n(h),p=t(22),m=t.n(p),b=["style"];function w(n){var e=n.children,t=n.when,i=n.hiddenMode,s=n.className,o=d.a.Children.only(e),l=o.props,c=l.style,a=m()(l,b),r=u()({},a),h=i&&"null"!==i;return h&&("css"===i?r.className="".concat(r.className||""," ").concat(s||"").trim():r.style=u()(u()(u()({},c),"display"===i&&{display:"none"}),"visibility"===i&&{visibility:"hidden"})),t?o:h?d.a.cloneElement(o,r):null}var j=t(0);function y(n){var e=n.hiddenMode,t=n.value,i=n.onChange;return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",value:e,name:"hiddenMode",checked:e===t,onChange:i})," ",t]})}var g=function(){var n=Object(r.useState)(!0),e=Object(a.a)(n,2),t=e[0],i=e[1],s=Object(r.useState)("null"),o=Object(a.a)(s,2),l=o[0],c=o[1];return Object(j.jsxs)("div",{style:{padding:10,backgroundColor:"rgb(0 0 0 / 17%)",minWidth:360,borderRadius:5},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:t,onChange:function(n){return i(n.target.checked)}})," when=","".concat(t)]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{hiddenMode:l,value:"null",onChange:function(){return c("null")}}),Object(j.jsx)(y,{hiddenMode:l,value:"display",onChange:function(){return c("display")}}),Object(j.jsx)(y,{hiddenMode:l,value:"visibility",onChange:function(){return c("visibility")}}),Object(j.jsx)(y,{hiddenMode:l,value:"css",onChange:function(){return c("css")}})]}),Object(j.jsx)(w,{when:t,hiddenMode:l,className:"css"===l?"w-only-hidden":"",children:Object(j.jsx)("h1",{children:"Here I Am"})})]})};t(532);s.a.render(Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l.a,{fixed:!0,target:"__blank",href:"https://github.com/uiwjs/react-only-when"}),Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:c,className:"App-logo",alt:"logo"}),Object(j.jsx)("p",{children:"A declarative component for conditional rendering."}),Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})]}),Object(j.jsx)(o.a,{source:"react-only-when\n===\n\n[![Build & Deploy](https://github.com/uiwjs/react-only-when/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-only-when/actions/workflows/ci.yml) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-only-when)](https://www.npmjs.com/package/@uiw/react-only-when) [![npm version](https://img.shields.io/npm/v/@uiw/react-md-editor.svg)](https://www.npmjs.com/package/@uiw/react-md-editor) [![Coverage Status](https://coveralls.io/repos/github/uiwjs/react-only-when/badge.svg?branch=main)](https://coveralls.io/github/uiwjs/react-only-when?branch=main)\n\nA declarative component for conditional rendering. Copy [`react-only-when`](https://github.com/sag1v/react-only-when), let it support TypeScript.\n\n## Quick Start\n\n```bash\n$ npm install --save @uiw/react-only-when\n```\n\n## Usage\n\n```jsx\nimport Only from '@uiw/react-only-when'\n \n<Only when={true}>\n  <h1>Here I Am</h1>\n</Only>\n```\n\n## Example\n\n```jsx\nimport React from 'react';\nimport Only from '@uiw/react-only-when';\n\nfunction App() {\n  const [show, setShow] = useState(true)\n  return (\n    <div className=\"app\">\n      <button onClick={() => setShow(!show)}>Toggle</button>\n      <Only when={show}>\n        <h1>Here I Am</h1>\n      </Only>\n    </div>\n  )\n}\n```\n\n## props\n\n| prop name  | type | default | isRequired | description |\n| ----- | ----- | ----- | ----- | ----- |\n| children | react element | `null` | `true` | A single child element |\n| when | bool | `false` | `true` | When true, children will rendered as is |\n| hiddenMode | string | `null`   | `false` | Determines how children should be hidden |\n| className  | string | `r-o_hidden` | `false` | This is working in combination with `hiddenMode={\"css\"}` |\n\n### hiddenMode enum\n\n| hiddenMode | description |\n| ----- | ----- |\n| `null` | Will not render the child |\n| `display` | Will render the child with `display:none` |\n| `visibility` | Will render the child with `visibility:hidden` |\n| `css` | Will render the child with a CSS class (you can pass it a custom `className` prop) |\n\n\n## Development\n\nRuns the project in development mode.  \n\n```bash\n# Step 1, run first, listen to the component compile and output the .js file\n# listen for compilation output type .d.ts file\nnpm run watch\n# Step 2, development mode, listen to compile preview website instance\nnpm run start\n```\n\n**production**\n\nBuilds the app for production to the build folder.\n\n```bash\nnpm run build\n```\n\nThe build is minified and the filenames include the hashes.\nYour app is ready to be deployed!\n\n\n## License\n\nMIT \xa9 [`sag1v`](https://github.com/sag1v) & [`uiwjs`](https://github.com/uiwjs)",className:"info"})]}),document.getElementById("root"))}},[[533,1,2]]]);
//# sourceMappingURL=main.2c636d97.chunk.js.map