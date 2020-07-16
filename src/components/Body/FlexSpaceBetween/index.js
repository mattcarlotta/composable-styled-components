import { compose, setDisplayName } from "~lib";

const FlexSpaceBetween = compose(setDisplayName("FlexSpaceBetween"))("div")`
  @media (max-width: 768px) {
    display: block;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export default FlexSpaceBetween;
