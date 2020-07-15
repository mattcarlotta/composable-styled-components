import { compose, setDisplayName } from "~lib";

const MiniTitle = compose(setDisplayName("MiniTitle"))("div")`
  margin: 10px 0 0;
  word-wrap: break-word;
  font-size: 17px;
  font-weight: bold;
`;

export default MiniTitle;
