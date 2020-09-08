import { StyledComponent } from "styled-components";
import constructWithOptions from "./constructWithOptions";
import domElements from "../domElements";
import { ComponentType, Styles } from "../types";

const elements = [...domElements] as const;

type Keys = typeof elements[number];
type Elements = {
  [key in Keys]: (...f: any[]) => (...s: Styles[]) => any; // StyledComponent<key, object, {}, any>
};
type Tag = string | ComponentType<any>;

type ComposedFn = (tag: Tag) => StyledComponent<tag, object, {}, any>;
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
