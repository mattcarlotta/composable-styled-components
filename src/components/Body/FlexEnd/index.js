import { compose, setDisplayName } from "~lib";

const FlexEnd = compose(setDisplayName("FlexEnd"))("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export default FlexEnd;
