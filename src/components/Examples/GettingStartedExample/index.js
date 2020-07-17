import { compose, nest, setDisplayName } from "~lib";
import Preview from "~components/Body/Preview";

const Wrapper = compose(setDisplayName("Wrapper"))("section")`
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 4px;
`;

const Title = compose(setDisplayName("Title"))("h1")`
  font-size: 20px;
  text-align: center;
  color: #ff6c47;
  border: 2px solid #ff6c47;
  border-radius: 4px;
`;

const Headline = nest(Wrapper, Title);

const exampleCode = `const Wrapper = compose(
  setDisplayName("Wrapper")
)("section")\`
  padding: 10px 20px;
  border: 3px solid palevioletred;
  border-radius: 4px;
\`;

const Title = compose(
  setDisplayName("Title")
)("h1")\`
  font-size: 20px;
  text-align: center;
  color: #ff6c47;
  border: 3px solid #ff6c47;
  border-radius: 4px;
\`

const Headline = nest(Wrapper, Title);

render(
  <Headline>
    Hello!
  </Headline> 
);`;

const GettingStartedExample = () => (
  <Preview code={exampleCode}>
    <Headline>Hello!</Headline>
  </Preview>
);

export default GettingStartedExample;
