# composable-styled-components

A lightweight **composable** solution for [styled-components](https://github.com/styled-components/styled-components).

[Installation](#installation)

[Usage](#usage)

[Demo](#demo)

[Advanced Usage](#advanced-usage)

[License](#license)

[Third Party Resources](#third-party-resources)

## Installation

```
npm i composable-styled-components
```

or

```
yarn add composable-styled-components
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

const ComposedButton = extend(
  setDisplayName("Composed Button"),
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
    <ComposedButton>
      ComposedButton
    </ComposedButton>
  <>
);

render(<App />, document.getElementById("root"));
```

## Demo

```
npm i && npm run demo
```

or

```
yarn && yarn demo
```

## Advanced Usage

coming soon.

## License

composable-styled-components is [MIT licensed](LICENSE).

## Third Party Resources

In order to make composable-styled-components, the following packages are referenced and used within this package:

- https://github.com/styled-components/styled-components
- https://github.com/acdlite/recompose
