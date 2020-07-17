import { compose, setDisplayName, withAttributes } from "~lib";
import Preview from "~components/Body/Preview";

const Input = compose(
  setDisplayName("Input"),
  withAttributes({
    type: "password",
    placeholder: "Enter password..."
  })
)("input")`
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding-left: 10px;
  transition: all 300ms ease-in-out;

  ::placeholder {
    color: #bbb;
  }

  &:hover {
    border-color: #0f7ae5;
  }

  &:focus {
    outline: 0;
    border-color: #1e87f0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  }
`;

const exampleCode = `compose(
  setDisplayName("Input"),
  withAttributes({
    type: "password",
    placeholder: "Enter password..."
  })
)("input")\`
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 14px;
  line-height: 38px;
  margin-bottom: 10px;
  padding-left: 10px;
  transition: all 300ms ease-in-out;

  ::placeholder {
    color: #bbb;
  }

  &:hover {
    border-color: #0f7ae5;
  }

  &:focus {
    outline: 0;
    border-color: #1e87f0;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  }
\`;

render(<Input/>);`;

const WithAttributesExample = () => (
  <Preview code={exampleCode}>
    <Input />
  </Preview>
);

export default WithAttributesExample;
