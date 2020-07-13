import { createFactory } from "../createFactory";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const mapProps = propsMapper => BaseComponent => {
  const MapProps = props => createFactory(BaseComponent)(propsMapper(props));

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : MapProps;
};
