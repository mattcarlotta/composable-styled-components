import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";
import inProduction from "../inProduction";

export const mapProps = propsMapper => BaseComponent => {
  const MapProps = props => createFactory(BaseComponent)(propsMapper(props));

  return inProduction
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : MapProps;
};
