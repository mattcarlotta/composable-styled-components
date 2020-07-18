import { compose, setDisplayName } from "~lib";
import Preview from "~components/Body/Preview";

const Button = compose(setDisplayName("Button"))("button")`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  padding: 5px;
`;

export const exampleCode = `compose(
  setDisplayName("Button")
)("button")\`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 16px;
  padding: 5px;
\`;

render(
  <Button>
    pink button
  </Button>
);`;

const ComposeExample = () => (
  <Preview code={exampleCode}>
    <Button>pink button</Button>
  </Preview>
);

export default ComposeExample;