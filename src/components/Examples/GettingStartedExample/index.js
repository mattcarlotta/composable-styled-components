import { compose, nest, setDisplayName } from "~lib";
import Preview from "~components/Body/Preview";

const Wrapper = compose.section(setDisplayName("Wrapper"))`
  border: 2px solid palevioletred;
  border-radius: 4px;
  padding: 10px 20px;
`;

const Title = compose.div(setDisplayName("Title"))`
  border: 2px solid #ff6c47;
  border-radius: 4px;
  color: #ff6c47;
  font-size: 20px;
  text-align: center;
`;

const Headline = nest(Wrapper, Title);

const exampleCode = `const Wrapper = compose.section(
  setDisplayName("Wrapper")
)\`
  border: 3px solid palevioletred;
  border-radius: 4px;
  padding: 10px 20px;
\`;

const Title = compose.div(
  setDisplayName("Title")
)\`
  border: 3px solid #ff6c47;
  border-radius: 4px;
  color: #ff6c47;
  font-size: 20px;
  text-align: center;
\`

const Headline = nest(Wrapper, Title);

render(
  <Headline>
    Hello!
  </Headline> 
);`;

const GettingStartedExample = () => (
  <Preview code={exampleCode}>
    <Headline data-testid="nest-headline">Hello!</Headline>
  </Preview>
);

export default GettingStartedExample;
