import { compose, setDisplayName } from "~lib";

const Subtitle = compose.p(setDisplayName("Subtitle"))`
  margin-bottom: 30px;
  word-wrap: break-word;
  font-size: 16px;
  text-align: ${({ textalign }) => textalign || "center"};
`;

export default Subtitle;
