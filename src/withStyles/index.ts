import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { ComponentType, IncomingProps } from "../types";

type WithStylesFn = (
  incomingStyles: IncomingProps
) => (BaseComponent: ComponentType) => ComponentType<any>;

export const withStyles: WithStylesFn = incomingStyles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${typeof incomingStyles === "function"
      ? props => incomingStyles(props)
      : () => incomingStyles};
  `;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : /* istanbul ignore next */ extendedComponent;
};
