import Note from "~components/Body/Note";
import ComposeExample from "~components/Examples/ComposeExample";
import CSSExample from "~components/Examples/CSSExample";
import ExtendExample from "~components/Examples/ExtendExample";
import GettingStartedExample from "~components/Examples/GettingStartedExample";
import SetDisplayNameExample from "~components/Examples/SetDisplayNameExample";
import WithAttributesExample from "~components/Examples/WithAttributesExample";
import WithDefaultPropsExample from "~components/Examples/WithDefaultPropsExample";
import Paragraph from "~components/Body/Paragraph";
import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import Head from "~components/Navigation/Head";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

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
      A named export helper function from the styled-components package that
      interpolates styles from props.
      <CSSExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Extend" id="extend">
      extend
    </AnchorTitle>
    <Paragraph>
      A factory function to extend a styled-component.
      <ExtendExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Nest" id="nest">
      nest
    </AnchorTitle>
    <Paragraph>
      A factory function that nests each node from the left with any successive
      nodes to the right.
      <GettingStartedExample />
    </Paragraph>
    <AnchorTitle ariaLabel="Set Display Name" id="setDisplayName">
      setDisplayName
    </AnchorTitle>
    <Paragraph>
      A composable function that sets the display name of a component.
      <SetDisplayNameExample />
      <Note>
        The display name will not be applied to the class name! Instead, in
        order to view the display name, you must have&nbsp;
        <OutsideLink href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html">
          React Dev Tools
        </OutsideLink>
        &nbsp;installed, open your browser console and select the "Components"
        tab. For example:
        <br />
        <img
          css="width: 100%;max-width: 629px;"
          src="/setDisplayNameExample.png"
          alt="setDisplayNameExample.png"
        />
      </Note>
    </Paragraph>
    <AnchorTitle ariaLabel="With Attributes" id="withAttributes">
      withAttributes
    </AnchorTitle>
    <Paragraph>
      A composable function that adds DOM-specific attributes to the node.
      <WithAttributesExample />
    </Paragraph>
    <AnchorTitle ariaLabel="With Default Props" id="withDefaultProps">
      withDefaultProps
    </AnchorTitle>
    <Paragraph>
      A composable function that attributes default props to the node.
      <WithDefaultPropsExample />
    </Paragraph>
  </>
);

export default Demonstrations;
