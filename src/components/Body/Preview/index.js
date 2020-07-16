import PropTypes from "prop-types";
import FlexSpaceBetween from "~components/Body/FlexSpaceBetween";
import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";
import { compose, extend, setDisplayName, withStyles } from "~lib/";

const SyntaxContainer = compose(setDisplayName("Syntax Container"))("div")`
  height: 400px;
  width: 100%;
  margin-right: 10px;
`;

const OutputContainer = extend(
  setDisplayName("Output Container"),
  withStyles(`
    @media (max-width: 768px) {
      margin-top: 20px;
      height: auto;
    }
    margin-right: 0px;
  `)
)(SyntaxContainer);

const Preview = ({ children, code }) => (
  <FlexSpaceBetween style={{ marginTop: 10 }}>
    <SyntaxContainer>
      <SyntaxHighlighter preStyles={{ margin: "0 0 20px", height: "100%" }}>
        {code}
      </SyntaxHighlighter>
    </SyntaxContainer>
    <OutputContainer>{children}</OutputContainer>
  </FlexSpaceBetween>
);

Preview.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  code: PropTypes.string.isRequired
};

export default Preview;
