import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";
import isFunc from "../isFunc";

export const withProps = incomingProps => BaseComponent => {
  const hoc = mapProps(props => ({
    ...(isFunc(incomingProps)
      ? incomingProps({
          ...props,
          ...(isFunc(BaseComponent) ? BaseComponent().props : {})
        })
      : incomingProps),
    ...props
  }));

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withProps"))(
        hoc(BaseComponent)
      )
    : hoc;
};
