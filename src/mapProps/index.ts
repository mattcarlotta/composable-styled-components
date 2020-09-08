import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inDev from "../inDev";
import { ComponentType } from "../types";

type MapPropsFn = (
  props: any
) => (BaseComponent: ComponentType) => ComponentType<any>;

export const mapProps: MapPropsFn = propsMapper => BaseComponent => {
  const MapProps = (props: any) =>
    createFactory(BaseComponent)(propsMapper(props));

  return inDev
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : /* istanbul ignore next */ MapProps;
};
