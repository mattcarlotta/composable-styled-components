import { compose, setDisplayName } from "~lib";

const Container = compose(setDisplayName("Container"))("div")`
  padding-top: 65px;
`;

export default Container;
