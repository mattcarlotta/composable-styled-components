import { compose, setDisplayName } from "~lib";

const Container = compose(setDisplayName("Container"))("div")`
  width: 100%;
  max-width: 850px;
  margin: 0 auto 40px;
  padding-top: 65px;
`;

export default Container;
