import PropTypes from "prop-types";
import {
  compose,
  setDisplayName,
  withPropTypes,
  withStyleAttributes
} from "~lib";

const OutsideLink = compose(
  setDisplayName("Outside Link"),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  }),
  withStyleAttributes({
    rel: "noopener noreferrer",
    target: "_blank"
  })
)("a")`
  color: #0088ff;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #03a9f3;
    text-decoration: underline;
  }

  &:focus {
    color: #0088ff;
    outline: none;
    border: 0;
  }
`;

export default OutsideLink;
