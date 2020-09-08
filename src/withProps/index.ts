import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { FC, IncomingProps } from "../types";

type WithPropsFn = (
  incomingStyles: IncomingProps
) => (BaseComponent: any) => any;

export const withProps: WithPropsFn = incomingProps => BaseComponent => {
  const extraProps =
    typeof BaseComponent === "function" ? BaseComponent().props : {};

  const hoc = mapProps((props: any) => ({
    ...(typeof incomingProps === "function"
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
