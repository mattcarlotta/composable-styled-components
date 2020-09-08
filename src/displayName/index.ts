import { setStatic } from "../setStatic";
import { ComponentType } from "../types";

const getDisplayName = (Component: ComponentType<any>) =>
  Component?.displayName;

const setDisplayName = (displayName: string) =>
  setStatic("displayName", displayName);

const wrapDisplayName = (BaseComponent: ComponentType<any>, hocName: string) =>
  `${hocName}(${getDisplayName(BaseComponent)})`;

export { getDisplayName, setDisplayName, wrapDisplayName };
