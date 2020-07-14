import { FaGithub } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import Button from "~components/Body/Button";
import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const exampeCode = `const Button = compose(
  setDisplayName("Button"),
  withStyleAttributes({ type: "button" })
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
\`;`;

const iconStyle = { position: "relative", top: 2, marginRight: 8 };

const App = () => (
  <div css="text-align: center;">
    <Head title="Home" />
    <img
      css="display:block;margin: 0 auto;width: 1500px;"
      src="composableLogo.png"
      alt="composableLogo"
    />
    <p css="margin-top: 0;margin-bottom: 30px;">
      A lightweight composable wrapper for&nbsp;
      <OutsideLink href="https://styled-components.com/">
        styled-components
      </OutsideLink>
      .
    </p>
    <div css="margin-bottom: 20px;">
      <OutsideLink href="https://github.com/mattcarlotta/composable-styled-components">
        <Button margin="0 20px;">
          <FaGithub style={iconStyle} />
          Github
        </Button>
      </OutsideLink>
      <Link light href="/docs" asHref="/docs">
        <Button>
          <GiBookmark style={iconStyle} />
          Documentation
        </Button>
      </Link>
    </div>
    <div css="width: 625px;text-align: left;margin: 0 auto;">
      <SyntaxHighlighter>{exampeCode}</SyntaxHighlighter>
    </div>
  </div>
);

export default App;
