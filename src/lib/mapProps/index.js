import { createFactory, setDisplayName, wrapDisplayName } from "~lib";

export const mapProps = propsMapper => BaseComponent => {
  const MapProps = props => createFactory(BaseComponent)(propsMapper(props));

  return process.env.NODE_ENV !== "production"
    ? setDisplayName(wrapDisplayName(BaseComponent, "mapProps"))(MapProps)
    : MapProps;
};
