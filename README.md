# composable-styled-components

A lightweight **composable** solution for [styled-components](https://github.com/styled-components/styled-components).

[Installation](#installation)

[Usage](#usage)

[Demo](#demo)

[Advanced Usage](#advanced-usage)

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

## Demo

**yarn**
```
cd ~/Desktop
git clone git@github.com:mattcarlotta/composable-styled-components.git
cd composable-styled-components
yarn && yarn demo
```

**npm**
```
cd ~/Desktop
git clone git@github.com:mattcarlotta/composable-styled-components.git
cd composable-styled-components
npm i && npm run demo
```

This demo contains a development webpack configuration, therefore files within the [demo/src](demo/src) can be altered/changed and saved to update the browser window.

## Advanced Usage

coming soon.

## License

composable-styled-components is [MIT licensed](LICENSE).

## Third Party Resources

In order to make composable-styled-components, the following packages are referenced and used within this package:

- https://github.com/styled-components/styled-components
- https://github.com/acdlite/recompose
