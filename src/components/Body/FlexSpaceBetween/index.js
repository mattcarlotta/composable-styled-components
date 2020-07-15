import { compose, setDisplayName } from "~lib";

const FlexSpaceBetween = compose(setDisplayName("FlexSpaceBetween"))("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceBetween;
