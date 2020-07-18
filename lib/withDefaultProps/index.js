import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inProduction from "../inProduction";

export const withDefaultProps = props => BaseComponent => {
  const factory = createFactory(BaseComponent);

  const DefaultProps = ownerProps => factory(ownerProps);

  DefaultProps.defaultProps = props;

  return inProduction
    ? setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
        DefaultProps
      )
    : DefaultProps;
};
