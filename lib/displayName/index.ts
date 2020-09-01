import { setStatic } from "../setStatic";
import { FC } from "../types";

const getDisplayName = (Component: FC) => Component.displayName;

const setDisplayName = (displayName: string) =>
  setStatic("displayName", displayName);

const wrapDisplayName = (BaseComponent: FC, hocName: string) =>
  `${hocName}(${getDisplayName(BaseComponent)})`;

export { getDisplayName, setDisplayName, wrapDisplayName };
