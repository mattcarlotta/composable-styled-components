import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const withDefaultProps = props => BaseComponent => {
  const factory = createFactory(BaseComponent);
  const DefaultProps = ownerProps => factory(ownerProps);
  DefaultProps.defaultProps = props;
  if (process.env.NODE_ENV !== "production") {
    return setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
      DefaultProps
    );
  }
  return DefaultProps;
};
