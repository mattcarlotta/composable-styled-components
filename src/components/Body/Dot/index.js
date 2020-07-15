import { compose, setDisplayName } from "~lib";

const ComposedDot = compose(setDisplayName("Dot"))("span")`
  color: #9a9a9a;
`;

const Dot = () => <ComposedDot>&nbsp;&#9900;&nbsp;</ComposedDot>;

export default Dot;
