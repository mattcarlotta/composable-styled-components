import { css, compose, setDisplayName } from "~lib";

const Subtitle = compose(setDisplayName("Subtitle"))("p")(css`
  margin-bottom: 30px;
  word-wrap: break-word;
  font-size: 16px;
  text-align: ${({ textalign }) => textalign || "center"};
`);

export default Subtitle;
