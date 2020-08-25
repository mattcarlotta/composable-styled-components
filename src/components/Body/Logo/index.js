import { compose, setDisplayName } from "~lib";

const Logo = compose(setDisplayName("Logo"))("div")`
  font-family: "Amoreiza", sans-serif;
  font-size: 24px;
  letter-spacing: 4px;
  color: #f1f1f1;
  font-weight: bold;
`;

export default Logo;
