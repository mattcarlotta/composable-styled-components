import { compose, setDisplayName } from "~lib";

const Container = compose(setDisplayName("Container"))("div")`
  @media (min-width: 1000px) {
    margin: 0 auto 40px;
    padding-left: 0;
    padding-right: 0;
    max-width: 1000px;
  }

  width: 100%;
  padding-top: 65px;
  padding-left: 20px;
  padding-right: 20px;
`;

export default Container;
