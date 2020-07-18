import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inProduction from "../inProduction";

export const withStyles = incomingStyles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${isFunc(incomingStyles)
      ? props => incomingStyles(props)
      : () => incomingStyles};
  `;

  return inProduction
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : extendedComponent;
};
