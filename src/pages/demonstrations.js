// import Note from "~components/Body/Note";
import ComposeExample from "~components/Examples/ComposeExample";
import CSSExample from "~components/Examples/CSSExample";
import ExtendExample from "~components/Examples/ExtendExample";
import Paragraph from "~components/Body/Paragraph";
import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";

const Demonstrations = () => (
  <>
    <Head
      title="Demonstrations"
      url="/demonstrations"
      description="Learn how to use composable-styled-components"
      name="Demonstrations"
    />
    <Title>Demonstrations</Title>
    <Subtitle>
      From simple to complex, this page aims to cover the&nbsp;
      <Link ariaLabel="api" dark nomargin nopadding href="/documentation#api">
        API
      </Link>
      &nbsp;functions and their usage.
    </Subtitle>
    <AnchorTitle ariaLabel="Compose" id="compose">
      compose
    </AnchorTitle>
    <Paragraph>
      The default export of composable-styled-components that is a factory
      function to initially build a styled-component.
      <ComposeExample />
    </Paragraph>
    <AnchorTitle ariaLabel="CSS" id="css">
      css
    </AnchorTitle>
    <Paragraph>
      A named export function from the styled-components package that
      interpolates styles from props.
      <CSSExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Extend" id="extend">
      extend
    </AnchorTitle>
    <Paragraph>
      A named export from composable-styled-components that is a factory
      function to extend a styled-component.
      <ExtendExample />
    </Paragraph>
  </>
);

export default Demonstrations;
