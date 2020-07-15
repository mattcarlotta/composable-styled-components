import { compose, setDisplayName } from "~lib";

const FlexSpaceEvenly = compose(setDisplayName("FlexSpaceEvenly"))("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceEvenly;
