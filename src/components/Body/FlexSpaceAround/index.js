import { compose, setDisplayName } from "~lib";

const FlexSpaceAround = compose.div(setDisplayName("FlexSpaceAround"))`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceAround;
