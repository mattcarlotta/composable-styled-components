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

const ComposedButton = compose(
  setDisplayName("Composed Button"),
  withProps({
    resize: true,
    onClick: () => alert("Hey!")
  }),
  withStyles(
    "color: #30a9ff; background: transparent;border: 1px solid #30a9dd; &:hover { color: #0077ff; border-color: #0077ff; }"
  )
)(Button);

const ComposedInterpolatedButton = compose(
  setDisplayName("Composed Interpolated Button"),
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

const ComposedWithAttributes = compose(
  setDisplayName("Composed With Attributes"),
  withProps({
    resize: true
  }),
  withStyleAttributes(props => ({
    size: props.resize ? "25px" : "12px"
  }))
)(Button);

const BuiltWithAttributes = build(
  setDisplayName("Built With Attributes"),
  withProps({
    type: "button",
    onClick: () => alert("Built with attributes")
  }),
  withProps({
    primary: true
  }),
  withStyleAttributes(props => ({
    color: props.primary ? "#fff" : "#000",
    background: props.primary ? "#188fff" : "#fff",
    size: props.primary ? "45px" : "14"
  })),
  withStyles(css`
    display: block;
    cursor: pointer;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    font-size: ${({ size }) => size};
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
    <ComposedButton>Composed Button</ComposedButton>
    <ComposedInterpolatedButton>
      Composed Interpolated Button
    </ComposedInterpolatedButton>
    <ComposedInterpolatedButton resize onClick={() => alert("Angry!")}>
      Composed Interpolated Button with Props
    </ComposedInterpolatedButton>
    <ComposedWithAttributes>Composed With Attributes</ComposedWithAttributes>
    <BuiltWithAttributes>Built With Attributes</BuiltWithAttributes>
  </div>
);

render(<App />, document.getElementById("root"));
