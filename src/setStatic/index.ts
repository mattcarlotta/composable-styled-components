// import { FC } from "../types";

type K = string;
type V = string | Object;

export const setStatic = (key: K, value: V) => BaseComponent => {
  BaseComponent[key] = value;
  return BaseComponent;
};
