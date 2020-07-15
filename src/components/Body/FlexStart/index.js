import { compose, css, setDisplayName } from "~lib";

const FlexStart = compose(setDisplayName("FlexStart"))("div")(css`
  display: flex;
  justify-content: flex-start;
  align-items: ${({ align }) => align || "center"};
  flex-direction: ${({ direction }) => direction || "row"};
  width: ${({ width }) => width || "100%"};
`);

export default FlexStart;
