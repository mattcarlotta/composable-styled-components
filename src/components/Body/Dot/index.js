import { compose, setDisplayName } from "~lib";

const ComposedDot = compose(setDisplayName("Dot"))("span")`
  margin-right: 3px;
  color: #9a9a9a;
`;

const Dot = () => <ComposedDot> • </ComposedDot>;

export default Dot;
