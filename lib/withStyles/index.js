import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";

export const withStyles = incomingStyles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${isFunc(incomingStyles)
      ? props => incomingStyles(props)
      : () => incomingStyles};
  `;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : extendedComponent;
};
