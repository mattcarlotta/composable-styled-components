import { compose, setDisplayName } from "~lib";

const Minititle = compose(setDisplayName("Minititle"))("div")`
  margin-top: 5px;
  margin-bottom: 30px;
  word-wrap: normal;
  white-space: pre-wrap;
  line-height: 26px;
`;

export default Minititle;
