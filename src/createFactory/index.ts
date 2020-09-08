import { createElement } from "react";
import { ComponentType } from "../types";

export const createFactory = (Type: ComponentType<any>) =>
  createElement.bind(null, Type);
