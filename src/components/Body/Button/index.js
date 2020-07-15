/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import {
  compose,
  css,
  setDisplayName,
  withDefaultProps,
  withPropTypes
} from "~lib";

const ComposedButton = compose(
  setDisplayName("Button"),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onFocus: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseOver: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    type: PropTypes.string
  }),
  withDefaultProps({
    disabled: false,
    type: "button",
    onClick: () => {}
  })
)("button")(css`
  height: ${({ height }) => height || "100%"};
  text-align: ${({ align }) => align || "center"};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: ${({ texttransform }) => texttransform || "uppercase"};
  letter-spacing: ${({ letterspacing }) => letterspacing || "1.5px"};
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "12px 18px"};
  font-weight: ${({ weight }) => weight || "normal"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  border-radius: ${({ radius }) => radius || "4px"};
  ${({ margin, centered }) =>
    centered
      ? "margin: 0 auto; display: block;"
      : margin
      ? `margin: ${margin};`
      : undefined};
  ${props => {
    if (props.disabled)
      return "border:1px solid #ebebeb;background-color:#ebebeb;color:#bbb;";
    if (props.tertiary)
      return "border:1px solid #ddd;background-color:transparent;color:#ddd;";
    if (props.primary)
      return "border:1px solid #188fff;background-color:#188fff;color:#fff;";
    if (props.danger)
      return "border:1px solid #f0506e;background-color:transparent;color:#f0506e;";
    if (props.link)
      return "border: 0;background-color:transparent;color:#000000a6;";
    return "border:1px solid #222;background-color:#222;color:#03a9f3;";
  }};

  &:hover {
    ${props => {
      if (props.disabled)
        return "border-color:#ebebeb;background-color:#ebebeb;";
      if (props.tertiary) return "border-color:#fff;color:#fff;";
      if (props.primary)
        return "border-color:#0f7ae5;background-color:#0f7ae5;";
      if (props.danger)
        return "border-color:#ee395b;background-color:transparent;color:#ee395b;";
      if (props.link) return "color:#40a9ff;";
      return "border-color:#222;background-color:#222;color:#eee;";
    }};
  }
`);

const Button = React.forwardRef((props, ref) => (
  <ComposedButton {...props} ref={ref}>
    {props.children}
  </ComposedButton>
));

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  type: PropTypes.string
};

export default Button;
