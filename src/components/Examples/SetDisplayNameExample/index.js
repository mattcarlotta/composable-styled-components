import { compose, setDisplayName } from "~lib";
import Preview from "~components/Body/Preview";

const NamedButton = compose(setDisplayName("NamedButton"))("button")`
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  background: #dc004e;
  border-radius: 3px;
  border: none;
  color: white;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #9a0036;
  }

  &:focus {
    outline: 0;
  }
`;

export const exampleCode = `const NamedButton = compose(
  setDisplayName("NamedButton"))
("button")\`
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  background: #dc004e;
  border-radius: 3px;
  border: none;
  color: white;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #9a0036;
  }

  &:focus {
    outline: 0;
  }
\`

render(<NamedButton />)
`;

const SetDisplayNameExample = () => (
  <Preview code={exampleCode}>
    <NamedButton>pink button</NamedButton>
  </Preview>
);

export default SetDisplayNameExample;
