import { compose, setDisplayName } from "~lib";
import Note from "~components/Body/Note";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";

const CustomTable = compose(setDisplayName("Table"))("table")` 
  width: 100%;
  word-break: normal;
  overflow-x: auto;
  margin: 20px 0;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Th = compose(setDisplayName("Th"))("th")`
  color: rgba(0, 0, 0, 0.87);
  padding: 10px;
  font-weight: bold;
  line-height: 26px;
  white-space: pre;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const Td = compose(setDisplayName("Td"))("td")`
  @media (max-width: 976px) {
    max-width: 125px;
    min-width: 125px;
    width: auto !important;
    overflow-x: auto;
    white-space: pre;
  }

  color: rgba(0, 0, 0, 0.87);
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  letter-spacing: 1px;
`;

const headers = ["Property", "Usage", "Description", "Notes"];
const supportedFunctions = [
  {
    property: (
      <>
        <Link
          ariaLabel="compose"
          dark
          nomargin
          nopadding
          href="/demonstrations#compose"
        >
          compose
        </Link>
        &nbsp;(&#8224;&#8224;)
      </>
    ),
    usage:
      "fn(...fns)('element')`\n  ...styles \n`;\nfn(...fns)('element')(css`\n  ...styles \n`);",
    description:
      "Composes an HTML element string with functions and styles to create a styled-component.",
    notes:
      "Accepts three arguments: First argument is a list of functions seperated by commas, the second argument requires an HTML Element as a string, and the third argument can either be a template literal or interpolated css."
  },
  {
    property: (
      <>
        <Link
          ariaLabel="css"
          dark
          nomargin
          nopadding
          href="/demonstrations#css"
        >
          css
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage:
      "fn`\n  property: ${prop => 'string'};\n  property: ${prop => 'string'};\n  ...etc\n`;",
    description: "Interpolates CSS styles that require passed in props.",
    notes:
      "Accepts a template literal with interpolated functions. The interopolated function must be a child of a CSS property and the function must return a string."
  },
  {
    property: (
      <>
        <Link
          ariaLabel="extend"
          dark
          nomargin
          nopadding
          href="/demonstrations#extend"
        >
          extend
        </Link>
        &nbsp;(&#8224;)
      </>
    ),
    usage: "fn(...fns)(node);",
    description: "Extends a node.",
    notes:
      "First argument accepts a list of functions seperated by commas and the second argument requires a node."
  },
  {
    property: (
      <>
        <Link
          ariaLabel="nest"
          dark
          nomargin
          nopadding
          href="/demonstrations#nest"
        >
          nest
        </Link>
        &nbsp;(&#8224;,&#8224;&#8224;)
      </>
    ),
    usage: "fn(...nodes);",
    description: "Nests nodes from left to right.",
    notes:
      "Accepts nodes separated by commas. Each node wraps any successive nodes to the right."
  },
  {
    property: (
      <Link
        ariaLabel="Set Display Name"
        dark
        nomargin
        nopadding
        href="/demonstrations#setDisplayName"
      >
        setDisplayName
      </Link>
    ),
    usage: "fn('string');",
    description: "Sets the display name of the node.",
    notes: (
      <>
        Attributes a display name to the component when viewed within the
        'Components' tab. Requires the&nbsp;
        <OutsideLink href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html">
          React Dev Tools
        </OutsideLink>
        &nbsp;browser extension.
      </>
    )
  },
  {
    property: (
      <Link
        ariaLabel="With Attributes"
        dark
        nomargin
        nopadding
        href="/demonstrations#withAttributes"
      >
        withAttributes
      </Link>
    ),
    usage: "fn({ ...props }); \nfn(props => ({ ...props }));",
    description: (
      <>
        Creates or appends&nbsp;
        <OutsideLink href="https://styled-components.com/docs/faqs#when-to-use-attrs">
          HTML attributes
        </OutsideLink>
        .
      </>
    ),
    notes:
      "Accepts an object of properties or a function that return properties."
  },
  {
    property: (
      <Link
        ariaLabel="With Default Props"
        dark
        nomargin
        nopadding
        href="/demonstrations#withDefaultProps"
      >
        withDefaultProps
      </Link>
    ),
    usage: "fn({ ...props });",
    description: "Establishes default props.",
    notes: "Accepts an object of properties."
  },
  {
    property: (
      <Link
        ariaLabel="With Props"
        dark
        nomargin
        nopadding
        href="/demonstrations#withProps"
      >
        withProps
      </Link>
    ),
    usage: "fn({ ...props }); \nfn(props => ({ ...props }));",
    description: "Creates or appends additional props.",
    notes:
      "Accepts an object of properties or a function that return properties."
  },
  {
    property: (
      <Link
        ariaLabel="With Prop Types"
        dark
        nomargin
        nopadding
        href="/demonstrations#withPropTypes"
      >
        withPropTypes
      </Link>
    ),
    usage: "fn({ ...props });",
    description: "Establishes prop types.",
    notes: (
      <>
        Requires&nbsp;
        <OutsideLink href="https://github.com/facebook/prop-types">
          PropTypes
        </OutsideLink>
        &nbsp;package.
      </>
    )
  },
  {
    property: (
      <Link
        ariaLabel="withStyles"
        dark
        nomargin
        nopadding
        href="/demonstrations#withStyles"
      >
        withStyles
      </Link>
    ),
    usage:
      "fn({ ...props }); \nfn(props => ({ ...props })); \nfn(css`\n  property: ${prop => 'string'};\n  property: ${prop => 'string'};\n  ...etc\n`);",
    description: "Creates or appends styles.",
    notes:
      "Accepts an object of properties, a function that returns an object of properties, or the 'css' helper function."
  }
];

const APITable = () => (
  <>
    <div css="overflow-x: auto;margin-right: auto;margin-left: auto;">
      <CustomTable>
        <thead>
          <tr>
            {headers.map(head => (
              <Th key={head}>{head}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {supportedFunctions.map(
            ({ property, usage, description, notes }, index) => (
              <tr
                css={`
                  background: ${!Boolean(index % 2)
                    ? "#dcdcdc"
                    : "transparent"};
                `}
                key={index}
              >
                <Td>{property}</Td>
                <Td style={{ width: 300 }}>{usage}</Td>
                <Td style={{ width: 150 }}>{description}</Td>
                <Td>{notes}</Td>
              </tr>
            )
          )}
        </tbody>
      </CustomTable>
    </div>
    <Note>
      Any functions with a dagger (&#8224;) should not be used within the&nbsp;
      <strong>first</strong>&nbsp;nor&nbsp;<strong>second</strong>&nbsp;argument
      to&nbsp;<strong>compose</strong>&nbsp;and any functions with a double
      dagger (&#8224;&#8224;) should not be used as any arguments to&nbsp;
      <strong>extend</strong>.
    </Note>
  </>
);

export default APITable;
