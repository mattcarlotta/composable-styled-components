import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const withAttributes = attributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(attributes)``;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withAttributes"))(
        extendedComponent
      )
    : extendedComponent;
};
