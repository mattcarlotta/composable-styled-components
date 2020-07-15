import { compose, nest, setDisplayName } from "~lib";

const Title = compose(setDisplayName("Title"))("h1")`
  font-size: 20px;
  text-align: center;
  color: #ff6c47;
  border: 2px solid #ff6c47;
  border-radius: 4px;
`;

const Wrapper = compose(setDisplayName("Wrapper"))("section")`
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 4px;
`;

const WrapperWithTitle = nest(Wrapper, Title);

export default WrapperWithTitle;
