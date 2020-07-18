import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";

export const withAttributes = incomingAttributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(
    isFunc(incomingAttributes)
      ? props => incomingAttributes(props)
      : () => incomingAttributes
  )``;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : extendedComponent;
};
