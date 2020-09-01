import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";
import inDev from "../inDev";

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

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withProps"))(
        hoc(BaseComponent)
      )
    : /* istanbul ignore next */ hoc(BaseComponent);
};
