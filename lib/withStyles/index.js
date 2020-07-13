import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const withStyles = styles => BaseComponent => {
  const extendedComponent = styled(BaseComponent)`
    ${() => styles};
  `;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyles"))(
        extendedComponent
      )
    : extendedComponent;
};
