react-only-when
===

[![Build & Deploy](https://github.com/uiwjs/react-only-when/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-only-when/actions/workflows/ci.yml)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-only-when)](https://www.npmjs.com/package/@uiw/react-only-when)
[![npm version](https://img.shields.io/npm/v/@uiw/react-only-when.svg)](https://www.npmjs.com/package/@uiw/react-only-when)
[![Coverage Status](https://uiwjs.github.io/react-only-when/badges.svg)](https://uiwjs.github.io/react-only-when/coverage/lcov-report/)

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

```jsx
import { If } from '@uiw/react-only-when/if'

<If condition={props.error}>
  <h1>{props.error}</h1>
</If>
```

```jsx
import { Switch, Case, Default } from '@uiw/react-only-when/switch'

<Switch>
  <Case condition={age < 6}>preschool</Case>
  <Case condition={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
```

## \<If />

React component that renders the children if the `condition` prop is `true`.

```jsx
import { If } from '@uiw/react-only-when';
// Or
import { If } from '@uiw/react-only-when/if'

<div>
  <If
    condition={props.error}
    render={() => (
      <h1>{props.error}</h1>
    )}
  />
  <If condition={props.error}>
    <h1>{props.error}</h1>
  </If>
</div>
```

Or you could just use plain JavaScript:

```jsx
<div>
  {props.error && (
    <h1>{props.error}</h1>
  )}
</div>
```

Only Example

```jsx mdx:preview&background=#fff&codePen=true
import React, { useState } from 'react';
import Only from '@uiw/react-only-when';

export default function App() {
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

## \<Switch />

```jsx
import { Switch, Case, Default } from '@uiw/react-only-when/switch'

<Switch>
  <Case condition={age < 6}>preschool</Case>
  <Case condition={age >= 6}>primary school</Case>
  <Default>you graduated</Default>
</Switch>
```

```jsx mdx:preview&background=#fff&codePen=true
import React, { useState, Fragment } from 'react';
import { Switch, Case, Default } from '@uiw/react-only-when/switch'

export default function App() {
  const [age, setAge] = useState(19)
  return (
    <Fragment>
      <input type="range" onChange={(evn) => setAge(Number(evn.target.value))} /> {age}
      <Switch>
        <Case condition={age < 6}>Preschool</Case>
        <Case condition={age >= 6 && age < 18}>Primary school</Case>
        <Case condition={age >= 18}>Went to college</Case>
        <Default>you graduated</Default>
      </Switch>
    </Fragment>
  );
}
```

## `<Only />` props

| prop name  | type | default | isRequired | description |
| ----- | ----- | ----- | ----- | ----- |
| children | react element | `null` | `true` | A single child element |
| when | bool | `false` | `true` | When true, children will rendered as is |
| hiddenMode | string | `null`   | `false` | Determines how children should be hidden |
| className  | string | `w-hidden` | `false` | This is working in combination with `hiddenMode={"css"}` |

**`hiddenMode` enum**

| hiddenMode | description |
| ----- | ----- |
| `null` | Will not render the child |
| `display` | Will render the child with `display:none` |
| `visibility` | Will render the child with `visibility:hidden` |
| `css` | Will render the child with a CSS class (you can pass it a custom `className` prop) |

## `<If />` Props

```tsx
import { ReactElement } from 'react';
import { FC, PropsWithChildren } from 'react';
export interface IfProps {
  readonly condition?: boolean;
  readonly render?: () => ReactElement;
}
export declare const If: FC<PropsWithChildren<IfProps>>;
```

## `<Switch />` `<Case />` `<Default />` Props

```tsx
import { FC, PropsWithChildren } from 'react';
export declare const Switch: FC<PropsWithChildren<{}>>;
export interface CaseProps {
  readonly condition?: boolean;
}
export declare const Case: FC<PropsWithChildren<CaseProps>>;
export declare const Default: FC<PropsWithChildren>;
```

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