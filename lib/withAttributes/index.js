import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inProduction from "../inProduction";

export const withAttributes = incomingAttributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(
    isFunc(incomingAttributes)
      ? props => incomingAttributes(props)
      : () => incomingAttributes
  )``;

  return inProduction
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : extendedComponent;
};
