import { compose, setDisplayName } from "~lib";

const FlexSpaceEvenly = compose.div(setDisplayName("FlexSpaceEvenly"))`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceEvenly;
