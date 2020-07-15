import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const withDefaultProps = props => BaseComponent => {
  const factory = createFactory(BaseComponent);

  const DefaultProps = ownerProps => factory(ownerProps);

  DefaultProps.defaultProps = props;

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
        DefaultProps
      )
    : DefaultProps;
};
