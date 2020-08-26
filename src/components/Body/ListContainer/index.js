import { compose, setDisplayName } from "~lib";

const ListContainer = compose.div(setDisplayName("ListContainer"))`
  border-bottom: 1px solid #adc2dd;
`;

export default ListContainer;
