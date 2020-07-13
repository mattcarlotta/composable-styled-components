import { compose, setDisplayName } from "~lib";

const Container = compose(setDisplayName("Container"))("div")`
  text-align: center;
  margin: 55px auto 0;
`;

export default Container;
