react-only-when
===

A declarative component for conditional rendering. Copy [`react-only-when`](https://github.com/sag1v/react-only-when), let it support TypeScript.

## Quick Start

```bash
$ npm install --save @uiw/react-only-when
```

## Usage

```jsx
import Only from '@uiw/react-only-when'
 
<Only when={true}>
  <h1>Here I Am</h1>
</Only>
```

## Example

```jsx
import React from 'react';
import Only from '@uiw/react-only-when';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <Only when={show}>
        <h1>Here I Am</h1>
      </Only>
    </div>
  )
}
```

## props

| prop name  | type | default | isRequired | description |
| ----- | ----- | ----- | ----- | ----- |
| children | react element | `null` | `true` | A single child element |
| when | bool | `false` | `true` | When true, children will rendered as is |
| hiddenMode | string | `null`   | `false` | Determines how children should be hidden |
| className  | string | `r-o_hidden` | `false` | This is working in combination with `hiddenMode={"css"}` |

### hiddenMode enum

| hiddenMode | description |
| ----- | ----- |
| `null` | Will not render the child |
| `display` | Will render the child with `display:none` |
| `visibility` | Will render the child with `visibility:hidden` |
| `css` | Will render the child with a CSS class (you can pass it a custom `className` prop) |


## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## License

MIT © [`sag1v`](https://github.com/sag1v) & [`uiwjs`](https://github.com/uiwjs)