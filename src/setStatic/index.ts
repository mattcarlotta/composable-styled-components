import { ComponentType } from "../types";

export const setStatic = (key: string, value: string | Object) => (
  BaseComponent: ComponentType<any>
) => Object.assign(BaseComponent, { [key]: value });
