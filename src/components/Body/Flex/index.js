import { compose, css, setDisplayName } from "~lib";

const Flex = compose(setDisplayName("Flex"))("div")(css`
  @media (max-width: 976px) {
    display: block;
    margin: 0 auto;
  }

  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  margin: ${({ margin }) => margin || "0px"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
`);

export default Flex;
