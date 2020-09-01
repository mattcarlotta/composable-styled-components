import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDev from "../inDev";

export const withStyles = incomingStyles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${isFunc(incomingStyles)
      ? props => incomingStyles(props)
      : () => incomingStyles};
  `;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
