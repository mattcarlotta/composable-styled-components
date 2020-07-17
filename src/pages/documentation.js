import APITable from "~components/Body/APITable";
import MiniTitle from "~components/Body/MiniTitle";
import Note from "~components/Body/Note";
import Paragraph from "~components/Body/Paragraph";
import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";
import WrapperWithTitleExample from "~components/Examples/WrapperWithTitleExample";
import Head from "~components/Navigation/Head";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import OutsideLink from "~components/Navigation/OutsideLink";

const preStyles = { margin: "0 0 20px" };

const resolutions = `{
  "resolutions": {
    "styled-components": "^5"
  }
}`;

const Documentation = () => (
  <>
    <Head
      title="Documentation"
      url="/documentation"
      description="Learn the basics of composable-styled-components"
      name="Documentation"
    />
    <Title>Documentation</Title>
    <Subtitle textalign="left">
      The motivation behind composable-styled-components is to provide a set of
      reusable functions that abstract some of the boilerplate code needed to
      create or extend a styled component. Partially utilizing&nbsp;
      <OutsideLink href="https://github.com/acdlite/recompose">
        recompose
      </OutsideLink>
      , this library uses higer-order components (HoCs) to build a
      styled-component with ease. The goal isn't to replace styled-components,
      but instead offer a DX-friendly way to compose them.
    </Subtitle>
    <AnchorTitle ariaLabel="Installation" id="installation">
      Installation
    </AnchorTitle>
    <Paragraph>
      You can install composable-styled-components with either one of these
      package managers:
      <MiniTitle>npm</MiniTitle>
      <SyntaxHighlighter preStyles={preStyles}>
        npm install composable-styled-components --save
      </SyntaxHighlighter>
      <MiniTitle>yarn (recommended)</MiniTitle>
      <SyntaxHighlighter preStyles={preStyles}>
        yarn add composable-styled-components
      </SyntaxHighlighter>
      <Note>
        If you use a package manager like yarn that supports the "resolutions"
        package.json field, then it's highly recommended that you add an entry
        to it as well corresponding to the major version range. This helps avoid
        problems from multiple versions of styled-components being installed in
        your project.
      </Note>
      <SyntaxHighlighter>{resolutions}</SyntaxHighlighter>
    </Paragraph>
    <AnchorTitle ariaLabel="Getting Started" id="getting-started">
      Getting Started
    </AnchorTitle>
    <Paragraph>
      Just like styled-components, this package utilizes tagged template
      literals to style your components. For example, the code below creates two
      simple components, a wrapper and a title, and nests them together.
      <WrapperWithTitleExample />
    </Paragraph>
    <AnchorTitle ariaLabel="API" id="api">
      API
    </AnchorTitle>
    <Paragraph>
      The table below covers the named exports offered from
      composabled-styled-components. If you wish to see usage examples of the
      function(s), then click the link under the <strong>Property</strong>{" "}
      column.
      <APITable />
    </Paragraph>
  </>
);

export default Documentation;
