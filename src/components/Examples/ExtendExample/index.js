import * as React from "react";
import {
  compose,
  extend,
  setDisplayName,
  withProps,
  withStyleAttributes
} from "~lib";
import Preview from "~components/Body/Preview";

const Button = compose(
  setDisplayName("Button"),
  withStyleAttributes({ type: "button" }),
  withProps(props => ({
    ...props,
    onClick: props.type === "button" ? () => alert("Default Button") : null
  }))
)("button")`
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
`;

const SubmitButton = extend(
  setDisplayName("Submit Button"),
  withStyleAttributes({ type: "submit" })
)(Button);

const exampleCode = `const Button = compose(
  setDisplayName("Button"),
  withStyleAttributes({ type: "button" }),
  withProps(props => ({
    ...props,
    onClick: props.type === "button" 
      ? () => alert("Button") 
      : null
  })),
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
  withStyleAttributes({ type: "submit" })
)(Button);

const Example = () => {
  const handleSubmit = useCallback(e => {
    e.preventDefault();
    alert("Submit Button");
  }, []);

  return (
    <form>
      <Button>Default</Button>
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}


render(<Example />);
`;

const ExtendExample = () => {
  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
    alert("Submit Button");
  }, []);

  return (
    <Preview code={exampleCode}>
      <form onSubmit={handleSubmit}>
        <Button>Default</Button>
        <SubmitButton>Submit</SubmitButton>
      </form>
    </Preview>
  );
};

export default ExtendExample;
