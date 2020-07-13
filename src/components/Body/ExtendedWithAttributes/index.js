import { extend, setDisplayName, withProps, withStyleAttributes } from "~lib";
import Button from "~components/Body/Button";

const ExtendedWithAttributes = extend(
  setDisplayName("Extended With Attributes"),
  withProps({
    resize: true,
    onClick: () => alert("Extended with attributes")
  }),
  withStyleAttributes(props => ({
    size: props.resize ? "30px" : "12px"
  }))
)(Button);

export default ExtendedWithAttributes;
