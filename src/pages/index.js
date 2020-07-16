import { FaGithub } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import Button from "~components/Body/Button";
import Subtitle from "~components/Body/Subtitle";
import HomeExample from "~components/Examples/HomeExample";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const exampeCode = `const Button = compose(
  setDisplayName("Button"),
  withStyleAttributes({ type: "button" }),
  withProps(props => ({
    ...props,
    onClick: props.type === "button" 
      ? () => alert("Button") 
      : null
  })),
  withPropTypes({
    className: PropTypes.string,
    children: PropTypes.oneOfType(
      [PropTypes.node, PropTypes.string]
    ).isRequired,
    onClick: PropTypes.func
  })
)("button")\`
  cursor: pointer;
  background: #1f1f1f;
  color: white;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px auto;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
\`;

const SubmitButton = extend(
  setDisplayName("Submit Button"),
  withStyleAttributes({ type: "submit" })
)(Button);
`;

const iconStyle = { position: "relative", top: 2, marginRight: 8 };

const App = () => (
  <div css="text-align: center;">
    <Head title="Home" />
    <img
      css="display:block;margin: 20px auto; width: 775px;user-select: none;"
      src="composableLogo.png"
      alt="composableLogo"
    />
    <Subtitle>
      A lightweight composable wrapper for&nbsp;
      <OutsideLink href="https://styled-components.com/">
        styled-components
      </OutsideLink>
      .
    </Subtitle>
    <div css="margin-bottom: 20px;">
      <OutsideLink href="https://github.com/mattcarlotta/composable-styled-components">
        <Button margin="0 20px;">
          <FaGithub style={iconStyle} />
          Github
        </Button>
      </OutsideLink>
      <Link hover={false} light href="/documentation">
        <Button>
          <GiBookmark style={iconStyle} />
          Documentation
        </Button>
      </Link>
    </div>
    <HomeExample />
  </div>
);

export default App;
