import { extend, setDisplayName, withProps, withStyles } from "~lib";
import Button from "~components/Body/ExampleButton";

const ExtendedButton = extend(
  setDisplayName("Extended Button"),
  withProps({
    resize: true,
    onClick: () => alert("Extended button!")
  }),
  withStyles(
    "color: #30a9ff; background: transparent;border: 1px solid #30a9dd; &:hover { color: #0077ff; border-color: #0077ff; }"
  )
)(Button);

export default ExtendedButton;
