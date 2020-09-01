import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDev from "../inDev";
import { CSSProperties, FC } from "../types";

export const withAttributes = incomingAttributes => (BaseComponent: FC) => {
  const extendedComponent = styled(BaseComponent).attrs(
    isFunc(incomingAttributes)
      ? props => incomingAttributes(props)
      : () => incomingAttributes
  )``;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
