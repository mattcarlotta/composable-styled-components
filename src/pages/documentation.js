import APITable from "~components/Body/APITable";
import Preview from "~components/Body/Preview";
import MiniTitle from "~components/Body/MiniTitle";
import Note from "~components/Body/Note";
import Paragraph from "~components/Body/Paragraph";
import Subtitle from "~components/Body/Subtitle";
import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";
import WrapperWithTitle from "~components/Body/WrapperWithTitle";
import Head from "~components/Navigation/Head";
import AnchorTitle from "~components/Navigation/AnchorTitle";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const preStyles = { margin: "0 0 20px" };

const resolutions = `{
  "resolutions": {
    "styled-components": "^5"
  }
}
`;

const exampleCode = `const Title = compose(
  setDisplayName("Title")
)("h1")\`
  font-size: 20px;
  text-align: center;
  color: #ff6c47;
  border: 3px solid #ff6c47;
  border-radius: 4px;
\`;

const Wrapper = compose(
  setDisplayName("Wrapper")
)("section")\`
  padding: 10px 20px;
  border: 3px solid palevioletred;
  border-radius: 4px;
\`;

const Headline = nest(Wrapper, Title);

render(
  <Headline>
    Hello!
  </Headline> 
);`;

const Documentation = () => (
  <>
    <Head
      title="Documentation"
      url="/documentation"
      description="Learn the basics of composable-styled-components"
      name="Documentation"
    />
    <img
      css="display:block;margin: 30px auto;width: 100%;max-width: 750px;"
      src="documentationLogo.png"
      alt="documentationLogo"
    />
    <Subtitle textalign="left">
      The motivation behind composable-styled-components is to provide a set of
      reusable functions that abstract some of the boilerplate code needed to
      create or extend a styled component. Partially utilizing&nbsp;
      <OutsideLink href="https://github.com/acdlite/recompose">
        recompose
      </OutsideLink>
      , this library uses higer-order components (HoCs) to build a
      styled-component with ease. The goal isn't to replace styled-components,
      but instead offer a DX-friendly way compose them.
    </Subtitle>
    <AnchorTitle id="installation">Installation</AnchorTitle>
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
    <AnchorTitle id="getting-started">Getting Started</AnchorTitle>
    <Paragraph>
      Just like styled-components, this package utilizes tagged template
      literals to style your components. For example, the code below creates two
      simple components, a wrapper and a title with some styles, and nests them
      together.
      <Preview code={exampleCode}>
        <WrapperWithTitle>Hello!</WrapperWithTitle>
      </Preview>
    </Paragraph>
    <AnchorTitle id="api">API</AnchorTitle>
    <Paragraph>
      The table below describes the supported <strong>function</strong>, their{" "}
      <strong>usage</strong>, <strong>description</strong> and any additional{" "}
      <strong>notes</strong>. For usage examples, please see the{" "}
      <Link nomargin nopadding href="/demonstration">
        demonstration
      </Link>
      &nbsp;page.
      <APITable />
    </Paragraph>
  </>
);

export default Documentation;
