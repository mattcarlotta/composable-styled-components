import { css, extend, setDisplayName, withProps, withStyles } from "~lib";
import Button from "~components/Body/ExampleButton";

const InterpolatedButton = extend(
  setDisplayName("Interpolated Button"),
  withProps({
    resize: false,
    onClick: null
  }),
  withStyles(
    css`
      color: ${props => (props.resize ? "pink" : "limegreen")};
      background: darkred;
      font-size: 16px;

      &:hover {
        color: ${props => (props.resize ? "red" : "darkgrey")};
      }
    `
  )
)(Button);

export default InterpolatedButton;
