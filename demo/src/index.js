import React from "react";
import { render } from "react-dom";
import {
  build,
  compose,
  css,
  setDisplayName,
  withProps,
  withStyleAttributes,
  withStyles
} from "../../src";
import "./styles/index.scss";

const Button = build(
  setDisplayName("Button"),
  withProps({
    type: "button",
    onClick: () => alert("Button")
  })
)("button")(css`
  cursor: pointer;
  display: block;
  background: #1f1f1f;
  color: white;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${({ size }) => size || "14px"};
  text-decoration: none;
  margin: 10px auto;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
`);

const A = compose(
  setDisplayName("Composed A"),
  withProps({
    resize: true,
    onClick: () => alert("Hey!")
  }),
  withStyles(
    "color: #30a9ff; background: transparent;border: 1px solid #30a9dd; &:hover { color: #0077ff; border-color: #0077ff; }"
  )
)(Button);

const B = compose(
  setDisplayName("Composed B"),
  withProps({
    resize: false,
    onClick: null
  }),
  withStyles(
    css`
      color: ${props => (props.resize ? "pink" : "limegreen")};
      background: darkred;

      &:hover {
        color: ${props => (props.resize ? "red" : "darkgrey")};
      }
    `
  )
)(Button);

const C = compose(
  setDisplayName("Composed C"),
  withProps({
    resize: true
  }),
  withStyleAttributes(props => ({
    size: props.resize ? "25px" : "12px"
  }))
)(Button);

const D = build(
  setDisplayName("Button D"),
  withProps({
    type: "button",
    onClick: () => alert("Built with attributes")
  }),
  withProps({
    primary: true
  }),
  withStyleAttributes(props => ({
    color: props.primary ? "#fff" : "#000",
    background: props.primary ? "#188fff" : "#fff"
  })),
  withStyles(css`
    display: block;
    cursor: pointer;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    border: 0;
    margin: 5px;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    margin: 0 auto;

    &:hover {
      color: #ebebeb;
    }

    &:focus {
      outline: 0;
    }
  `)
)("button")``;

const App = () => (
  <div className="container">
    <h1>Composable Styled Components</h1>
    <Button>Button</Button>
    <A>Hey</A>
    <B>No Action</B>
    <B resize onClick={() => alert("Angry!")}>
      Angry
    </B>
    <C>Composed with attributes</C>
    <D>Built with attributes</D>
  </div>
);

render(<App />, document.getElementById("root"));
