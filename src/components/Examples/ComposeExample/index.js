import { compose, setDisplayName } from "~lib";
import Preview from "~components/Body/Preview";

const Button = compose(setDisplayName("Button"))("button")`
  font-size: 16px;
  padding: 5px;
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

export const exampleCode = `compose(
  setDisplayName("Button")
)("button")\`
  font-size: 16px;
  padding: 5px;
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
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
