import PropTypes from "prop-types";
import {
  compose,
  setDisplayName,
  withPropTypes,
  withStyleAttributes
} from "~lib";

const OutsideLink = compose(
  setDisplayName("Outside Link"),
  withStyleAttributes({
    rel: "noopener noreferrer",
    target: "_blank"
  }),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  })
)("a")`
  color: #036ef3;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #0f7ae5;
    text-decoration: underline;
  }

  &:focus {
    color: #036ef3;
    outline: none;
    border: 0;
  }
`;

export default OutsideLink;
