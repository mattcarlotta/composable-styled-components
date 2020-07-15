import { compose, setDisplayName } from "~lib";

const Container = compose(setDisplayName("Container"))("div")`
  padding-top: 65px;
  text-align: center;
`;

export default Container;
