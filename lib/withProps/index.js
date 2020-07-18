import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inProduction from "../inProduction";

export const withProps = incomingProps => BaseComponent => {
  const extraProps = isFunc(BaseComponent) ? BaseComponent().props : {};

  const hoc = mapProps(props => ({
    ...(isFunc(incomingProps)
      ? incomingProps({
          ...props,
          ...extraProps
        })
      : incomingProps),
    ...props
  }));

  return inProduction
    ? setDisplayName(wrapDisplayName(BaseComponent, "withProps"))(
        hoc(BaseComponent)
      )
    : hoc(BaseComponent);
};
