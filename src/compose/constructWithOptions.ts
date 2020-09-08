import styled, { css } from "styled-components";
import { isValidElementType } from "react-is";
import { extend } from "../extend";
import { Styles, Tag } from "../types";

/*

first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]

*/

const constructWithOptions = (t: Tag) => {
  try {
    if (!isValidElementType(t))
      throw new Error(`${String(t)} is not an HTML tag`);

    const templateFunction = (...f: any[]) => (...s: Styles[]) =>
      extend(...f)(styled(t)`
        ${() => (css as any)(...s)};
      `);

    return templateFunction;
  } catch (err) {
    console.error(err);
  }
};

export default constructWithOptions;
