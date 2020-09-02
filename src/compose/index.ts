import styled, { css } from "styled-components";
import { extend } from "../extend";
import domElements from "../domElements";
import { ComponentType } from "../types";

type Tag = string | ComponentType<any>;

type Functions = any[];

type Interpolation =
  | ((executionContext: Object) => Interpolation)
  | string
  | ComponentType<any>
  | Interpolation[];

type Styles = string[] | Object | ((props: Object) => Interpolation);

const compose = (t: Tag) => (...f: Functions) => (...s: Styles[]) =>
  extend(...f)(styled(t)`
    ${() => css(...s)};
  `);

domElements.forEach(element => {
  compose[element] = compose(element);
});

export { compose };
