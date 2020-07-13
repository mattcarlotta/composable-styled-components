import {
  compose,
  css,
  setDisplayName,
  withProps,
  withStyleAttributes,
  withStyles
} from "~lib";

const BuiltWithAttributes = compose(
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
)("button")();

export default BuiltWithAttributes;
