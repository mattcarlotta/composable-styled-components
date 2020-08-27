import { compose, setDisplayName } from "~lib";

const Center = compose.div(setDisplayName("Center"))`
  text-align: center;
`;

export default Center;
