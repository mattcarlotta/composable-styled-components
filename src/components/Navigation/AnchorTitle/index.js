import PropTypes from "prop-types";
import { GoLink } from "react-icons/go";
import {
  compose,
  setDisplayName,
  withPropTypes,
  withStyleAttributes
} from "~lib";
import Link from "~components/Navigation/Link";

const Anchor = compose(
  setDisplayName("Anchor"),
  withStyleAttributes(props => ({
    id: props.id
  })),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
      .isRequired,
    id: PropTypes.string.isRequired
  })
)("h1")`
  margin-top: 75px;
  margin-bottom: 20px;
  letter-spacing: 2px;

  a {
    opacity: 0;
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

const AnchorTitle = ({ ariaLabel, id, children }) => (
  <Anchor id={id}>
    {children}
    <Link ariaLabel={`${ariaLabel} anchor`} nomargin href={`#${id}`}>
      <GoLink style={{ fontSize: 18 }} />
    </Link>
  </Anchor>
);

AnchorTitle.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default AnchorTitle;
