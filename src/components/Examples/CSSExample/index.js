import { compose, css, setDisplayName } from "~lib";
import Note from "~components/Body/Note";
import Preview from "~components/Body/Preview";

const Button = compose(setDisplayName("Button"))("button")(css`
  cursor: pointer;
  display: block;
  color: white;
  background: ${props => (props.primary ? "palevioletred" : "#1e87f0")};
  border: 1px solid ${props => (props.primary ? "palevioletred" : "#1e87f0")};
  font-size: 16px;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background: ${props => (props.primary ? "#ca5c80" : "#0f7ae5")};
  }

  &:focus {
    outline: 0;
  }
`);

export const exampleCode = `const Button = compose(
  setDisplayName("Button"))
("button")(CSS\`
  cursor: pointer;
  display: block;
  color: white;
  background: \$\{props => (
    props.primary 
      ? "palevioletred" 
      : "#1e87f0"
  )};
  border: 1px solid $\{props => (
    props.primary 
      ? "palevioletred" 
      : "#1e87f0"
  )};
  font-size: 16px;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background: \$\{props => (
      props.primary 
        ? "#ca5c80" 
        : "#0f7ae5"
    )};
  }

  &:focus {
    outline: 0;
  }
\`);

  render(
    <Button>default button</Button>
    <Button primary>primary button</Button>
  )
);`;

const CSSExample = () => (
  <>
    <Preview code={exampleCode}>
      <Button>default button</Button>
      <Button primary>primary button</Button>
    </Preview>
    <Note>
      Due the syntax highlighter interpolating its own css styles using the
      "css" helper function, the example above uses "CSS". This naming
      convention is used for&nbsp;
      <strong>demonstration purposes only</strong>.
    </Note>
  </>
);

export default CSSExample;
