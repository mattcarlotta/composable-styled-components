import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { ComponentType, IncomingProps } from "../types";

type WithAttributesFn = (
  incomingStyles: IncomingProps
) => (BaseComponent: ComponentType) => ComponentType<any>;

export const withAttributes: WithAttributesFn = incomingAttributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(
    typeof incomingAttributes === "function"
      ? props => incomingAttributes(props)
      : () => incomingAttributes
  )``;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
