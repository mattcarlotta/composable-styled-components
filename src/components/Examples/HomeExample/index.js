import SyntaxHighlighter from "~components/Body/SyntaxHighlighter";

const exampleCode = `const Button = compose(
  setDisplayName("Button"),
  withAttributes({ type: "button" }),
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
  display: block;
  background: #1f1f1f;
  color: white;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
\`;

const SubmitButton = extend(
  setDisplayName("Submit Button"),
  withAttributes({ type: "submit" })
)(Button);


render(
  <>
    <Button>Default</Button>
    <SubmitButton>Submit</SubmitButton>
  </>
);
`;

const HomeExample = () => (
  <SyntaxHighlighter
    preStyles={{
      width: "650px",
      margin: "0 auto",
      overflowY: "auto",
      height: "500px"
    }}
  >
    {exampleCode}
  </SyntaxHighlighter>
);

export default HomeExample;
