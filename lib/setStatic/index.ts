// import { FC } from "../types";

type K = string;
type V = string | Object;

export const setStatic = (key: K, value: V) => BaseComponent => {
  console.log("BaseComponent", BaseComponent);
  BaseComponent[key] = value;
  return BaseComponent;
};
