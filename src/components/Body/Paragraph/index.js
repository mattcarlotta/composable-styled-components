import { compose, setDisplayName } from "~lib";

const Paragraph = compose(setDisplayName("Paragraph"))("div")`
  margin-top: 5px;
  margin-bottom: 30px;
  word-wrap: normal;
  white-space: pre-wrap;
  line-height: 26px;
`;

export default Paragraph;
