import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { FC } from "types";

export const withDefaultProps = (props: any) => (BaseComponent: FC) => {
  const factory = createFactory(BaseComponent);

  const DefaultProps = (ownerProps: any) => factory(ownerProps);

  DefaultProps.defaultProps = props;

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "withDefaultProps"))(
        DefaultProps
      )
    : /* istanbul ignore next */ DefaultProps;
};
