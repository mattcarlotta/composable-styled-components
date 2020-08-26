import { compose, css, setDisplayName, withStyles } from "~lib";
import Note from "~components/Body/Note";
import Preview from "~components/Body/Preview";

const Button = compose.button(
  setDisplayName("Button"),
  withStyles(css`
    background: ${props => (props.primary ? "palevioletred" : "#1e87f0")};
    border: 1px solid ${props => (props.primary ? "palevioletred" : "#1e87f0")};

    &:hover {
      background: ${props => (props.primary ? "#ca5c80" : "#0f7ae5")};
    }

    &:focus {
      outline: 0;
    }
  `)
)`
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;
`;

export const exampleCode = `const Button = compose.button(
  setDisplayName("Button"))
  withStyles(CSS\`
    background: $\{props => \n      props.primary \n        ? "palevioletred"\n        : "#1e87f0"\n    };
    border: 1px solid \$\{props => \n      props.primary \n        ? "palevioletred"\n        : "#1e87f0"\n    };

    &:hover {
      background: \$\{props => \n        props.primary \n          ? "#ca5c80" \n          : "#0f7ae5"\n      };
    }

    &:focus {
      outline: 0;
    }
\`)\`
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;
\`;

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
