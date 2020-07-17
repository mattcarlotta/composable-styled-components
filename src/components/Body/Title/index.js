import { compose, setDisplayName } from "~lib";

const Title = compose(setDisplayName("Title"))("h1")`
  font-family: "Amoreiza", sans-serif;
  text-transform: uppercase;
  letter-spacing: 15px;
  text-align: center;
  font-size: 68px;
  margin-bottom: 10px;
`;

export default Title;
