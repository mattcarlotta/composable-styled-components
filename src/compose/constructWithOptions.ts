import styled, { css } from "styled-components";
import { isValidElementType } from "react-is";
import { ComponentType } from "../types";
import { extend } from "extend";

type Tag = string | ComponentType<any>;

type Interpolation =
  | ((props: Object) => Interpolation)
  | string
  | ComponentType<any>
  | Interpolation[];

type Styles = string[] | Object | ((props: Object) => Interpolation);

const constructWithOptions = (tag: Tag) => {
  try {
    if (!isValidElementType(tag)) throw new Error("Invalid tag");

    const templateFunction = (...f: any[]) => (...s: Styles[]) =>
      extend(...f)(styled(tag)`
        ${() => css(...s)};
      `);

    return templateFunction;
  } catch (err) {
    console.error(err);
  }
};

export default constructWithOptions;
