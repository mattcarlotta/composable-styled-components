import { compose, css, setDisplayName, withProps } from "~lib";

const ExampleButton = compose(
  setDisplayName("Example Button"),
  withProps({
    type: "button",
    onClick: () => alert("Button")
  })
)("button")(css`
  cursor: pointer;
  display: block;
  background: #1f1f1f;
  color: white;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${({ size }) => size || "14px"};
  text-decoration: none;
  margin: 10px auto;

  &:hover {
    color: #ebebeb;
  }

  &:focus {
    outline: 0;
  }
`);

export default ExampleButton;
