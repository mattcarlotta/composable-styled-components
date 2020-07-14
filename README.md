<a target="_blank" rel="noopener noreferrer" href="https://composable-styled-components.vercel.app" >
<img src="https://raw.githubusercontent.com/mattcarlotta/composable-styled-components/master/public/composableLogo.png" alt="composableLogo.png" />
</a>

<div align="center">
A lightweight <strong>composable</strong> solution for <a href="https://github.com/styled-components/ rel="noopener noreferrer" target="_blank">styled-components</a>.
</div>

<br />

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Documentation](#documentation)

[Demo](#demo)

[License](#license)

[Third Party Resources](#third-party-resources)

## Installation

⚠️ Note: **This has not been published to npm yet**. To try out this package, see [Demo](#demo) for installation instructions.

**yarn**
```
yarn add composable-styled-components
```

**npm**
```
npm i -S composable-styled-components
```


## Usage

```js
import * as React;
import { render } from "react-dom";
import { 
  compose, 
  extend,
  setDisplayName, 
  withProps, 
  withStyles 
} from "composable-styled-components";

const Button = compose(
  setDisplayName("Button"),
  withProps({
    type: "button",
    onClick: () => alert("Button")
  })
)("button")`
  background: #1f1f1f;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  display: block;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
`;

const ExtendedButton = extend(
  setDisplayName("Extended Button"),
  withProps({ 
    onClick: () => alert("Hey!") 
  }),
  withStyles(`
    background: transparent;
    border: 1px solid #30a9dd; 
    color: #30a9ff; 
    
    &:hover { 
      border-color: #0077ff; 
      color: #0077ff; 
    }
  `)
)(Button);

const App = () => (
  <>
    <Button>
      Button
    </Button>
    <ExtendedButton>
      Extended Button
    </ExtendedButton>
  <>
);

render(<App />, document.getElementById("root"));
```

## Documentation

⚠️ Note: **Under construction**.

[Documentation](https://composable-styled-components.vercel.app/docs)

## Demo

⚠️ Note: **Under construction**.

[Demo](https://composable-styled-components.vercel.app/demo)


## License

composable-styled-components is [MIT licensed](LICENSE).

## Third Party Resources

In order to make composable-styled-components, the following packages are referenced and used within this package:

- https://github.com/styled-components/styled-components
- https://github.com/acdlite/recompose
