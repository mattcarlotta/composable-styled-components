import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { ComponentType } from "types";

export const withDefaultProps = (props: {}) => (
  BaseComponent: ComponentType<any>
) => {
  const factory = createFactory(BaseComponent);

  const DefaultProps = (ownerProps: {}) => factory(ownerProps);

  DefaultProps.defaultProps = props;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
        DefaultProps
      )
    : /* istanbul ignore next */ DefaultProps;
};
