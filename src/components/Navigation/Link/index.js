import PropTypes from "prop-types";
import Link from "next/link";
import {
  css,
  extend,
  setDisplayName,
  withDefaultProps,
  withPropTypes,
  withStyles
} from "~lib";

const LinkComponent = ({
  asHref,
  className,
  children,
  dataTest,
  href,
  style,
  target
}) => (
  <Link href={href} as={asHref} passHref>
    <a data-test={dataTest} style={style} className={className} target={target}>
      {children}
    </a>
  </Link>
);

LinkComponent.propTypes = {
  asHref: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  dataTest: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  stopPropagation: PropTypes.bool,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  target: PropTypes.string
};

const CustomLink = extend(
  setDisplayName("Link"),
  withDefaultProps({
    href: "",
    asHref: "",
    onClick: () => {}
  }),
  withPropTypes({
    asHref: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    dataTest: PropTypes.string,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    stopPropagation: PropTypes.bool,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    target: PropTypes.string
  }),
  withStyles(css`
    color: ${({ light }) => (light ? "#03a9f3" : "#000000a6")};
    white-space: nowrap;
    text-decoration: none;
    text-transform: ${({ texttransform }) => texttransform || "none"};
    margin: ${({ margin, nomargin }) =>
      nomargin ? "0px" : margin || "0 10px"};
    transition: all 0.2s ease-in-out;
    padding: ${({ nopadding }) => (nopadding ? "0" : "4px 8px")};
    border-radius: 2px;
    cursor: pointer;
    ${({ active }) =>
      active &&
      `
      color: #eee;
      background-color: #0f7ae5;
    `};

    &:hover {
      color: ${({ nohover, light }) =>
        !nohover && light ? "#eee" : "#03a9f3"};
      background-color: ${({ nohover, light }) =>
        !nohover && light ? "#0f7ae5" : "transparent"};
    }

    &:focus {
      color: ${({ light }) => (light ? "#eee" : "#000000a6")};
      outline: none;
      border: 0;
    }
  `)
)(LinkComponent);

export default CustomLink;
