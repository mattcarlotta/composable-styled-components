import { compose, css, setDisplayName } from "~lib";
import Note from "~components/Body/Note";
import Preview from "~components/Body/Preview";

const Button = compose(setDisplayName("Button"))("button")(css`
  background: ${props => (props.primary ? "palevioletred" : "#1e87f0")};
  border: 1px solid ${props => (props.primary ? "palevioletred" : "#1e87f0")};
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: 5px;
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
  border-radius: 3px;
  cursor: pointer;
  color: white;
  display: block;
  font-size: 16px;
  padding: 5px;
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
      Due to the syntax highlighter used on this page interpolating its own css
      styles using the "css" helper function, the example above uses "CSS" as a
      workaround. This naming convention is only used for&nbsp;
      <strong>demonstration purposes</strong>.
    </Note>
  </>
);

export default CSSExample;
