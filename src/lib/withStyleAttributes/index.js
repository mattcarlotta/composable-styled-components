import styled from "styled-components";
import { setDisplayName, wrapDisplayName } from "~lib";

export const withStyleAttributes = attributes => BaseComponent => {
  const extendedComponent = styled(BaseComponent).attrs(attributes)``;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withStyleAttributes"))(
        extendedComponent
      )
    : extendedComponent;
};
