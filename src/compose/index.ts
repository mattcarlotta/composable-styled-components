import constructWithOptions from "./constructWithOptions";
import domElements from "../domElements";
import { ComponentType } from "../types";

const elements = [...domElements] as const;

type Keys = typeof elements[number];
type Elements = { [key in Keys]: () => any };
type Tag = string | ComponentType<any>;

type ComposedFn = (tag: Tag) => any;
type ComposeFn = ComposedFn & Elements;

const composed: ComposedFn = (tag: Tag) => constructWithOptions(tag);

const JSXElements = elements.reduce((acc, tag) => {
  acc[tag] = composed(tag);
  return acc;
}, {} as Elements);

export const compose: ComposeFn = Object.assign(
  (tag: Tag) => composed(tag),
  JSXElements
);
