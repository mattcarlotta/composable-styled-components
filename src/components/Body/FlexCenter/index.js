import { compose, css, setDisplayName } from "~lib";

const FlexCenter = compose(setDisplayName("FlexCenter"))("div")`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "100%"};
  ${({ floating }) =>
    floating ? "top: 0;left: 0;position: absolute;" : undefined};
`;

export default FlexCenter;
