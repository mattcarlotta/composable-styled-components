import { ComponentType } from "../types";

type SetStaticFn = (
  key: string,
  value: string | Object
) => (BaseComponent: ComponentType) => ComponentType<any>;

export const setStatic: SetStaticFn = (key, value) => BaseComponent =>
  Object.assign(BaseComponent, { [key]: value });
