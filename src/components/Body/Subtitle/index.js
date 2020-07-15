import { compose, setDisplayName } from "~lib";

const Subtitle = compose(setDisplayName("Subtitle"))("p")`
  margin: 0 auto 30px;
  width: 650px;
  word-wrap: break-word;
`;

export default Subtitle;
