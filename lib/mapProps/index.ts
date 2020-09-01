import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { FC } from "../types";

export const mapProps = (propsMapper: (props: any) => void) => (
  BaseComponent: FC
) => {
  const MapProps = (props: any) =>
    createFactory(BaseComponent)(propsMapper(props));

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : /* istanbul ignore next */ MapProps;
};
