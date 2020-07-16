import { compose, css, setDisplayName } from "~lib";
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

export const exampleCode =
  'const Button = compose(\n  setDisplayName("Button")\n)("button")(css`\n  cursor: pointer;\n  display: block;\n  color: white;\n  background: ${({ primary }) => \n    (primary ? "palevioletred" : "#1e87f0")\n  };\n  border: 1px solid ${({ primary }) => \n    (primary ? "palevioletred" : "#1e87f0")\n  };\n  font-size: 16px;\n  padding: 5px;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  transition: all 200ms ease-in-out;\n\n  &:hover {\n    background: ${({ primary }) => \n      (primary ? "#ca5c80" : "#0f7ae5")\n    };  \n  }\n\n  &:focus {\n    outline: 0;\n  }\n);\n\nrender(\n  <>\n    <Button>default button</Button>\n    <Button primary>primary button</Button>\n  </>\n);';

const CSSExample = () => (
  <Preview code={exampleCode}>
    <Button>default button</Button>
    <Button primary>primary button</Button>
  </Preview>
);

export default CSSExample;
