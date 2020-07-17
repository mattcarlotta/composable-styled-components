import { compose, setDisplayName, withDefaultProps } from "~lib";
import Preview from "~components/Body/Preview";

const Button = compose(
  setDisplayName("Button"),
  withDefaultProps({
    children: "Hello",
    onClick: () => alert("Hello")
  })
)("button")`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #888;
  border-radius: 0;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 100ms ease-in-out;
  transition-property: color,background-color,border-color;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #888;
  }
`;

const exampleCode = `const Button = compose(
  setDisplayName("Button"),
  withDefaultProps({
    children: "Hello",
    onClick: () => alert("Hello")
  })
)("button")\`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #888;
  border-radius: 0;
  display: block;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 100ms ease-in-out;
  transition-property: color,background-color,border-color;

  &:hover {
    border-color: #555;
  }

  &:focus {
    outline: 0;
    border-color: #888;
  }
\`;

render(
  <>
    <Button/>
    <Button onClick={() => alert("Goodbye")}>
      With passed in props
    </Button>
  </>
);`;

const WithDefaultPropsExample = () => (
  <Preview code={exampleCode}>
    <Button />
    <Button onClick={() => alert("Goodbye")}>Goodbye</Button>
  </Preview>
);

export default WithDefaultPropsExample;
